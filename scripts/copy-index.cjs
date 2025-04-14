console.log("🔧Running copy-index script...");

const fs = require("fs");
const path = require("path");

// Correct source path - looking for index.tsx at package root
const source = path.join(__dirname, "..", "index.tsx");
const targetDir = path.join(process.cwd(), "components", "ui", "button");
const targetFile = path.join(targetDir, "index.tsx"); // Fix the target path

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
