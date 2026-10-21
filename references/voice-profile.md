# Voice Profile Guide

How Colloquialify builds and uses a persistent `voice.md` profile.

The profile is a **model of structural and stylistic tendencies**, not a banned-word
list and not a personality costume. Quote evidence from the samples. Prefer ranges
and frequencies over absolute rules.

---

## Building a profile (Mode A)

### Inputs

- Ideal: 3–8 samples of the same writer's natural prose (emails, posts, essays, docs).
- Accept `.md`, `.txt`, or pasted blocks.
- Prefer samples written *by* the person, not heavily edited PR copy.
- Mixed registers are fine — note which register dominates and when they shift.

### Method

1. Read all samples before writing anything.
2. Measure observable patterns (counts, ranges, habits). Do not invent a persona.
3. Fill every section of [templates/voice.md](../templates/voice.md).
4. For each claim, keep a short evidence quote (or note "weak / inferred").
5. Write an **Avoidances** section from absences that are consistent across samples —
   not from one missing feature in a short note.
6. End with **Rewrite priorities**: the 5–7 checks Pass 9 should apply first.

### What to capture

| Dimension | What to observe |
|-|-|
| Sentence length & rhythm | Typical range, short/long extremes, fragment use, opening patterns |
| Vocabulary | Preferred ordinary words, jargon comfort, metaphor frequency |
| Formality | Casual / conversational / professional / formal — and when it shifts |
| Contractions | Rate and contexts (never / rare / common / almost always) |
| Punctuation | Em dashes, semicolons, colons, ellipses, exclamation marks |
| Paragraph length | Typical graf size; one-liner grafs vs dense blocks |
| Questions | Rhetorical vs genuine; frequency |
| Rhetorical devices | Analogy, irony, understatement, repetition, lists |
| Directness vs hedging | Assertiveness; where hedges appear and why |
| Qualifiers | "maybe", "sort of", "a bit", "probably" density |
| Repetition | Comfort repeating a clear word vs elegant variation |
| Transitions | Explicit connectors vs hard cuts / paragraph breaks |
| Argument development | Claim→evidence, narrative buildup, problem→fix, aside-driven |
| Examples | Frequency and type (personal anecdote, named case, abstract) |
| First person | Rare / situational / common; singular vs plural |
| Humor / personality | Dry, warm, blunt, none — never invent if absent |
| Emotional intensity | Flat, measured, vivid; what triggers intensity |
| Concise vs explanatory | Telegram vs tutorial instinct |
| Signature constructions | Recurring phrases or sentence shapes (use sparingly later) |
| Avoidances | Patterns the writer consistently does *not* use |

### What not to do

- Do not reduce the profile to "ban delve/leverage/moreover."
- Do not force a casual voice onto a formal writer.
- Do not treat one quirky sentence as a mandatory trademark.
- Do not prescribe fake typos or "imperfections."
- Do not overwrite topic-specific vocabulary the writer would know.

---

## Applying a profile (Mode B, Pass 9)

After baseline Passes 1–8:

1. Load `voice.md`.
2. Diff the draft against the profile dimensions above.
3. Rewrite only the spans that break the writer's tendencies.
4. Prefer manner changes over meaning changes.
5. Final gate: **Would this person actually write this this way?**

If baseline Pass 8 would add generic "soul" (jokes, first-person, casual asides)
that the profile does not support, **do not add them**.

---

## Updating a profile

When the user adds samples later:

1. Re-read old profile + new samples.
2. Update dimensions that clearly shift; keep stable ones.
3. Note the update date and sample count at the top of `voice.md`.
