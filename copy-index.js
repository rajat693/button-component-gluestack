const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "index.tsx");
const targetDir = path.join(process.cwd(), "components", "ui", "button");
const targetFile = path.join(targetDir, "index.tsx");

// Create directory path recursively if it doesn't exist
fs.mkdirSync(targetDir, { recursive: true });

fs.copyFile(source, targetFile, (err) => {
  if (err) {
    console.error("❌ Failed to copy index.tsx:", err);
  } else {
    console.log("✅ Successfully copied index.tsx to components/ui/button/");
  }
});
