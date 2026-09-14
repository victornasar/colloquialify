# Colloquialify

Humanize AI writing **while preserving a specific person's voice**.

Baseline editing passes come from [jpeggdev/humanize-writing](https://github.com/jpeggdev/humanize-writing) (MIT). Colloquialify keeps those passes intact and adds a persistent voice-profile layer so the governing question becomes:

> Would this person actually write this this way?

Not:

> How can I make this sound more human?

---

## Architecture (v0.1)

### How the current humanization workflow works

The skill is a static rulebook the host agent follows (`SKILL.md`). There is no model training and no detector API.

**Baseline (unchanged from humanize-writing) — Passes 1–8:**

1. Structure tells
2. Significance inflation / promotional language
3. AI vocabulary ([references/ai-tells.md](references/ai-tells.md))
4. Grammar-level patterns
5. Rhythm and style
6. Hedging, filler, vague attributions
7. Connective tissue
8. Human texture / soul *(constrained when a voice profile is present)*

### Where the voice-profile layer fits

```
writing samples  →  voice.md profile (Mode A)
                         │
AI draft  →  Passes 1–8  →  Pass 9 voice consistency  →  output (Mode B)
                         │
              A/B/C eval against samples (Mode C)
```

- **Phase 1:** `/colloquialify --voice ./samples/` analyzes samples and writes `voice.md`.
- **Phase 2:** rewrite runs Passes 1–8, then Pass 9 compares the draft to the profile and rewrites mismatches.
- Pass 8 does **not** inject generic casualness/humor/first-person when a profile is loaded.
- Over-humanization is treated as a failure mode.

### Files that matter

| Path | Role |
|-|-|
| [SKILL.md](SKILL.md) | Agent skill: modes + Passes 1–9 |
| [references/ai-tells.md](references/ai-tells.md) | Baseline AI-tell checklist (from humanize-writing) |
| [references/voice-profile.md](references/voice-profile.md) | How to build/apply profiles |
| [templates/voice.md](templates/voice.md) | Profile schema |
| [eval/](eval/) | A/B/C rubric + small test corpus |
| [install-skill.js](install-skill.js) | Copies skill into Claude/Cursor/Windsurf/agents dirs |

### Minimal implementation choice

Still a lightweight Claude/Cursor skill — not a web app, DB, or SaaS. The "CLI" is skill invocation (`/colloquialify`, `/colloquialify --voice`, `/colloquialify --eval`). Analysis and rewriting are done by the host LLM following the skill.

---

## Install

```bash
git clone https://github.com/victornasar/colloquialify.git
cd colloquialify
npm run install-skill
```

Or copy `SKILL.md`, `references/`, and `templates/` into your agent's skills directory as `colloquialify/`.

---

## Usage

### 1. Build a voice profile

```
/colloquialify --voice ./samples/
```

Needs several samples of the writer's own prose. Writes `voice.md` (see [templates/voice.md](templates/voice.md)).

### 2. Rewrite with voice preservation

```
/colloquialify

[paste AI text]
```

If `voice.md` is present, runs Passes 1–8 then Pass 9. If not, runs baseline only and offers to build a profile.

### 3. Evaluate A / B / C

```
/colloquialify --eval
```

Compare Original vs baseline humanize-writing vs Colloquialify using [eval/SCORING.md](eval/SCORING.md). A starter corpus lives in [eval/corpus/](eval/corpus/).

**This repo does not claim the voice layer works without that comparison.** Run the eval before trusting results.

---

## Important principle

Avoid over-humanization.

- Formal writers stay formal.
- Do not inject slang, jokes, contractions, or mistakes just to look "human."
- Success sounds like *"this sounds like me,"* not *"this sounds like a stranger performing humanity."*

---

## Credits

- Baseline 8-pass workflow and `ai-tells` reference: [jpeggdev/humanize-writing](https://github.com/jpeggdev/humanize-writing)
- Wikipedia-sourced patterns / soul philosophy via humanize-writing's use of [blader/humanizer](https://github.com/blader/humanizer)
- Primary pattern reference: [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

## License

MIT. Copyright notices for jpeggdev (baseline) and Colloquialify contributors are preserved in [LICENSE](LICENSE).
