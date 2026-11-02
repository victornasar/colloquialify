const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "cold-email";
const SKILL_DIRS = [
  path.join(os.homedir(), ".claude", "skills", SKILL_NAME),
  path.join(os.homedir(), ".cursor", "skills", SKILL_NAME),
  path.join(os.homedir(), ".windsurf", "skills", SKILL_NAME),
  path.join(os.homedir(), ".agents", "skills", SKILL_NAME),
];

const srcDir = __dirname;
const filesToCopy = [
  "SKILL.md",
  path.join("references", "intention.md"),
  path.join("references", "rules-and-shape.md"),
  path.join("references", "cta-and-batch.md"),
  path.join("references", "sample.md"),
];

for (const destDir of SKILL_DIRS) {
  try {
    for (const file of filesToCopy) {
      const src = path.join(srcDir, file);
      const dest = path.join(destDir, file);

      if (!fs.existsSync(src)) continue;

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
    }
    console.log(`Installed ${SKILL_NAME} skill to ${destDir}`);
  } catch (err) {
    console.warn(`Skipped ${destDir}: ${err.message}`);
  }
}
