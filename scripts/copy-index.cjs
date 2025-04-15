console.log("🔧Running copy-index script...");

const fs = require("fs");
const path = require("path");

// Get the package root directory
const packageRoot = path.resolve(__dirname, "..");
// const packageRoot = path.resolve(process.cwd());

// Get the Expo app root directory (one level up from node_modules)
const expoAppRoot = path.resolve(packageRoot, "..", "..");

const source = path.join(packageRoot, "index.tsx");
const targetDir = path.join(expoAppRoot, "components", "ui", "button");
const targetFile = path.join(targetDir, "index.tsx");

// Create directory path recursively if it doesn't exist
fs.mkdirSync(targetDir, { recursive: true });

fs.copyFile(source, targetFile, (err) => {
  if (err) {
    console.error("❌ Failed to copy index.tsx:", err);
    console.error("Source path:", source);
    console.error("Target path:", targetFile);
  } else {
    console.log("✅ Successfully copied index.tsx to components/ui/button/");
  }
});
