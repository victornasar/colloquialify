const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "colloquialify";
const SKILL_DIRS = [
  path.join(os.homedir(), ".claude", "skills", SKILL_NAME),
  path.join(os.homedir(), ".cursor", "skills", SKILL_NAME),
  path.join(os.homedir(), ".windsurf", "skills", SKILL_NAME),
  path.join(os.homedir(), ".agents", "skills", SKILL_NAME),
];

const srcDir = __dirname;
const filesToCopy = [
  "SKILL.md",
  path.join("references", "ai-tells.md"),
  path.join("references", "voice-profile.md"),
  path.join("references", "baseline-passes.md"),
  path.join("references", "pass-9-voice.md"),
  path.join("references", "output-and-example.md"),
  path.join("references", "open-hiring-dm.md"),
  path.join("templates", "voice.md"),
  path.join("eval", "SCORING.md"),
  path.join("skills", "cold-email", "SKILL.md"),
  path.join("skills", "cold-email", "README.md"),
  path.join("skills", "cold-email", "references", "intention.md"),
  path.join("skills", "cold-email", "references", "rules-and-shape.md"),
  path.join("skills", "cold-email", "references", "cta-and-batch.md"),
  path.join("skills", "cold-email", "references", "sample.md"),
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

// Also publish as top-level `cold-email` so hosts can discover it
const bundled = path.join(srcDir, "skills", "cold-email", "install-skill.js");
if (fs.existsSync(bundled)) {
  require(bundled);
}
