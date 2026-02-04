const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

// Recursively get all TypeScript files
function getAllTsFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsFiles(fullPath, files);
    } else if (item.endsWith('.ts') && !item.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

// Fix path aliases in compiled files
function fixAliases(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      fixAliases(fullPath);
    } else if (item.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      // Calculate relative path from current file to src (dist root)
      const relativeToRoot = path.relative(path.dirname(fullPath), path.resolve(__dirname, 'dist'));
      const relativePath = relativeToRoot || '.';
      
      // Replace @/ with relative path in require()
      let newContent = content.replace(
        /require\(["']@\//g, 
        `require("${relativePath}/`
      );
      
      // Replace @/ with relative path in dynamic import() and add .js extension
      newContent = newContent.replace(
        /import\(["']@\/([^"']+)["']\)/g, 
        (match, p1) => {
          // Add .js if not already present
          const withExt = p1.endsWith('.js') ? p1 : p1 + '.js';
          return `import("${relativePath}/${withExt}")`;
        }
      );
      
      // Also fix relative dynamic imports without .js extension
      newContent = newContent.replace(
        /import\(["'](\.[^"']+)["']\)/g,
        (match, p1) => {
          if (p1.endsWith('.js') || p1.endsWith('.json')) return match;
          return `import("${p1}.js")`;
        }
      );
      
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
      }
    }
  }
}

const entryPoints = getAllTsFiles('./src');
console.log(`Building ${entryPoints.length} files...`);

esbuild.build({
  entryPoints,
  bundle: false,
  outdir: 'dist',
  platform: 'node',
  target: 'node20',
  format: 'cjs',
  sourcemap: true,
  keepNames: true,
}).then(() => {
  console.log('Fixing path aliases...');
  fixAliases('./dist');
  console.log('Build completed successfully!');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
