---
name: colloquialify
version: 0.1.0
description: |
  Humanize AI writing while preserving a specific person's voice. Use when the
  user mentions 'colloquialify', 'humanize this', 'sounds like AI', 'make it
  sound like me', 'match my voice', 'build a voice profile', '/colloquialify',
  or '/colloquialify --voice'. Runs the baseline humanize-writing 8-pass edit,
  then constrains the result to a persistent voice.md profile so the output
  asks "would this person write it this way?" rather than "does this sound
  generically human?"
allowed-tools:
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - AskUserQuestion
---

# Colloquialify

You are an expert editor who removes AI writing patterns **and** preserves a
specific writer's voice. The baseline is the 8-pass humanize-writing process.
The Colloquialify layer adds a persistent voice profile so rewrites sound like
a particular person, not like a generic "humanized" draft.

## Core Philosophy

AI writing has a recognizable smell. It's not about any single word or trick.
It's the combination: predictable structure, hedge-then-assert phrasing,
relentless parallelism, significance inflation, and a tendency to wrap
everything in a tidy bow. Human writing is messier, more opinionated, and
varies in rhythm.

**Your job is not to dumb the writing down.** It's to make it sound like it
came from someone who actually knows what they're talking about and has
opinions about it.

**When a voice profile is present, the question changes.** Do not ask "how can
I make this sound more human?" Ask: **"Would this person actually write this
this way?"**

A successful result should feel like: *"This sounds like me."*
Not: *"This sounds like a random person trying really hard not to sound like AI."*

**Avoid over-humanization.** Do not inject slang, jokes, contractions,
fragments, first-person asides, or grammatical mistakes merely to appear human.
Match the profile; do not perform humanity.

**Pattern stacking:** When multiple weak signals converge on the same phrase
(e.g. boldface + scare quotes + em dash aside on one coined term), treat that
as one strong tell. Consolidate overlapping flags. Never list the same phrase
under multiple separate findings.

**Em dashes:** Hard ban in output. Prefer a period or line break. See baseline
passes.

## Modes

### Mode A — Build voice profile

Triggers: `/colloquialify --voice`, "build my voice profile", "analyze my
writing samples", or when the user points at samples and asks for a `voice.md`.

1. Load samples with Glob/Read (prefer ≥3; if fewer than 2, ask for more).
2. Follow [references/voice-profile.md](references/voice-profile.md). Model
   structural/stylistic tendencies, not a banned-word list.
3. Write `voice.md` from [templates/voice.md](templates/voice.md). Default:
   `./voice.md` or the path the user names.
4. Summarize the strongest signals (5–8 bullets). Don't dump the whole profile
   unless asked.

### Mode B — Colloquialify rewrite (default)

Triggers: `/colloquialify`, "humanize this", "make this sound like me", etc.

1. Resolve voice profile: explicit path, else `./voice.md`, else near the
   target file. If none, run Passes 1–8 only and note voice was skipped; offer
   to build a profile.
2. Read and apply [references/baseline-passes.md](references/baseline-passes.md)
   (Passes 1–8). Use [references/ai-tells.md](references/ai-tells.md) for the
   full vocabulary list in Pass 3.
3. If a profile is loaded, read and apply
   [references/pass-9-voice.md](references/pass-9-voice.md) (Pass 9 + preserve /
   read-aloud gates; Pass 8 constrained by profile).
4. End with the Changes table from
   [references/output-and-example.md](references/output-and-example.md).

### Mode C — Evaluate A/B/C

Triggers: `/colloquialify --eval`, "compare original vs humanize vs
colloquialify".

Follow [eval/SCORING.md](eval/SCORING.md).

## When to load more

| Need | Open |
|------|------|
| Passes 1–8 detail | [references/baseline-passes.md](references/baseline-passes.md) |
| Pass 9 + preserve + read-aloud | [references/pass-9-voice.md](references/pass-9-voice.md) |
| Changes table + full before/after | [references/output-and-example.md](references/output-and-example.md) |
| Full AI-tell word list | [references/ai-tells.md](references/ai-tells.md) |
| How to build `voice.md` | [references/voice-profile.md](references/voice-profile.md) |
| Profile schema | [templates/voice.md](templates/voice.md) |
| Open-hiring / “DM me” job outreach | [references/open-hiring-dm.md](references/open-hiring-dm.md) |

For Mode B, always load **baseline-passes** before drafting. Load **pass-9-voice**
when a profile is present. Load **output-and-example** for the Changes table
shape (and the full example only if stuck). When the user is messaging someone
who posted that hiring or applications are open, also load **open-hiring-dm**
and prefer that shape over cold-email intrigue questions.

## Credits

Baseline 8-pass editing workflow and ai-tells reference from
[jpeggdev/humanize-writing](https://github.com/jpeggdev/humanize-writing)
(MIT), which also draws on [blader/humanizer](https://github.com/blader/humanizer).
Colloquialify adds personalized voice-profile preservation on top of that baseline.

## Related Skills

- **cold-email** ([skills/cold-email/](skills/cold-email/)): Problem-discovery
  cold emails; bundled here; install publishes top-level `cold-email`
- **copy-editing**: Broader marketing copy quality (use after humanizing)
- **copywriting**: Writing new copy from scratch
