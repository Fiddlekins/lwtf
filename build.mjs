import {exec} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

async function copyFiles(source, dest, ignoreRegex) {
  const files = await fs.readdir(source, {withFileTypes: true});
  await Promise.all(files.map(async (file) => {
    if (file.isDirectory()) {
      await fs.mkdir(path.join(dest, file.name));
      await copyFiles(path.join(source, file.name), path.join(dest, file.name), ignoreRegex);
    } else {
      if (!ignoreRegex || !ignoreRegex.test(file.name)) {
        await fs.copyFile(path.join(source, file.name), path.join(dest, file.name));
      }
    }
  }));
}

async function copyDirectory(source, dest, ignoreRegex) {
  const srcDirName = path.basename(source);
  const newDirPath = path.join(dest, srcDirName);
  await fs.mkdir(newDirPath);
  await copyFiles(source, newDirPath, ignoreRegex);
}

function runTsc(config) {
  return new Promise((resolve, reject) => {
    exec(`tsc -p ${config}`, (err, stdout, stderr) => {
      if (err) {
        reject(stdout);
      } else {
        resolve(stdout);
      }
    });
  })
}

async function rewriteImportExtensions(source) {
  const files = await fs.readdir(source, {withFileTypes: true});
  await Promise.all(files.map(async (file) => {
    if (file.isDirectory()) {
      await rewriteImportExtensions(path.join(source, file.name));
    } else {
      if (/\.(js|jsx|ts|tsx)$/.test(file.name)) {
        const filePath = path.join(source, file.name);
        let text = await fs.readFile(filePath, 'utf8');
        text = text
          .split(/\n/)
          .map((line) => {
            const match = line.match(/^(.+)\.ts(x?)(['"];\r?)$/);
            if (match) {
              const [, start, jsx, end] = match;
              // return `${start}${end}`;
              return `${start}.js${jsx}${end}`;
            } else {
              return line;
            }
          })
          .join('\n');
        await fs.writeFile(filePath, text, 'utf8');
      }
    }
  }));
}

async function main() {
  // Clear dist
  await fs.rm('./dist', {recursive: true, force: true});
  await fs.mkdir('./dist');

  // Clear staging area
  await fs.rm('./stage', {recursive: true, force: true});

  // Create staging area
  await fs.mkdir('./stage');
  await fs.mkdir('./stage/src');
  await copyFiles('./src/', './stage');

  // Fix imports
  await rewriteImportExtensions('./stage');

  // Running typescript compiler
  try {
    await runTsc('tsconfig-dist.json');
  }catch (err){
    console.error(err)
    process.exit(1);
  }

  // Clear staging area
  await fs.rm('./stage', {recursive: true, force: true});
}

main().catch(console.error);
