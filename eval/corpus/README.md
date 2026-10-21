# Eval corpus

Small fixed corpus for comparing Original (A) vs baseline humanize-writing (B) vs Colloquialify (C).

## Author: "Riley Chen" (synthetic)

Samples in `samples/` are written in one consistent voice on purpose:

- Professional-conversational tech writing
- Short paragraphs; mix of short punchy lines and medium explanations
- Contractions common
- Low hedging; states opinions directly
- Dry understatement, almost no jokes
- First person when recounting experience; otherwise restrained
- Avoids em dashes, "Moreover/Furthermore", and promotional adjectives
- Prefers concrete examples over abstractions

`inputs/` contains AI-flavored drafts on nearby topics. They are intentionally full of
AI tells so baseline humanization has work to do — and so voice drift after humanization
is easy to spot.

## How to run

1. Build a profile from the samples:
   ```
   /colloquialify --voice ./eval/corpus/samples/
   ```
   Write `eval/corpus/voice.md` (or `./voice.md`).
2. For each file in `inputs/`, produce B (no profile) and C (with profile).
3. Score with [../SCORING.md](../SCORING.md).

This corpus does not prove the system works. It exists so you can check.
