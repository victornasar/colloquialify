# cold-email

Bundled skill inside the **colloquialify** package (`skills/cold-email/`).

Short problem-discovery cold emails: trade opens with `Hi {First},`, problem-first
vertical + wrong-thing spine, one easy intrigue question, no call asks or soft
pitch.

## Package shape

```
skills/cold-email/
├── SKILL.md              # thin router
├── references/           # disclosed detail
│   ├── intention.md
│   ├── rules-and-shape.md
│   ├── cta-and-batch.md
│   └── sample.md
├── install-skill.js      # installs as top-level agent skill `cold-email`
└── uninstall-skill.js
```

Source of truth is this folder inside colloquialify. Agent hosts still need a
top-level `~/.cursor/skills/cold-email` (etc.) for discovery — `install-skill.js`
copies there. Prefer `npm run install-skill` from the colloquialify root so
both skills install together.

## Install (from colloquialify root)

```bash
npm run install-skill
```

Or from this folder:

```bash
node install-skill.js
```
