const fs = require('fs');
const mime = require('mime');

const buildPath = 'build';

function setMimeTypeForJSFiles() {
  const jsFiles = fs.readdirSync(buildPath)
    .filter(file => file.endsWith('.js'));

  jsFiles.forEach(file => {
    const filePath = `${buildPath}/${file}`;
    const mimeType = mime.getType(filePath);
    fs.writeFileSync(filePath, fs.readFileSync(filePath), { encoding: 'utf-8' });
    fs.writeFileSync(filePath, `/*! ${mimeType} */\n` + fs.readFileSync(filePath));
  });

  console.log('MIME types set for JS files.');
}

setMimeTypeForJSFiles();
