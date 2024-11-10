// moveBuild.js
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'frontend', 'build');
const destination = path.join(__dirname, 'backend', 'src', 'public');

fs.rmSync(destination, { recursive: true, force: true });
fs.rename(source, destination, (err) => {
    if (err) throw err;
    console.log('Build folder moved successfully!');
});
