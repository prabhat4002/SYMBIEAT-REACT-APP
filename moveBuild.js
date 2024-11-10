const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'frontend', 'build');
const destination = path.join(__dirname, 'backend', 'src', 'public');

// Ensure the target directory exists
if (!fs.existsSync(path.dirname(destination))) {
  fs.mkdirSync(path.dirname(destination), { recursive: true });
}

// Remove the old destination directory if it exists
fs.rmSync(destination, { recursive: true, force: true });

// Move the build folder to the backend
fs.renameSync(source, destination);

console.log('Build folder moved successfully!');
