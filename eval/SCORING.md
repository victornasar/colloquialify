# Evaluation Rubric — Colloquialify A/B/C

Use this when comparing:

- **A. Original** — raw AI (or AI-flavored) draft
- **B. Baseline** — Passes 1–8 only (humanize-writing, no voice profile)
- **C. Colloquialify** — Passes 1–8 + Pass 9 constrained by `voice.md`

Do **not** claim Colloquialify "works" without running this comparison against real samples.

---

## Setup

1. Load author samples from `eval/corpus/samples/` (or the user's samples).
2. Load or build `voice.md` from those samples only.
3. Take an input from `eval/corpus/inputs/` (or user text).
4. Produce B by running Passes 1–8 with **no** voice profile.
5. Produce C by running the full Colloquialify pipeline with the profile.
6. Score A, B, and C independently using the rubric below.

---

## Scoring (1–5)

Score each dimension for each version. **5 = strongly matches the author samples**
(or, for "AI-style patterns", 5 = free of them). Use half-points only if needed.

| Dimension | What "5" means |
|-|-|
| Naturalness | Reads like a person wrote it on the first try |
| Voice similarity | Could pass as this author to a careful reader of the samples |
| Sentence rhythm | Length variation and cadence match the samples |
| Vocabulary similarity | Word choice and diction match the samples |
| Paragraph structure | Graf length and breaks feel like the author |
| Argumentation style | Claims unfold the way the author usually argues |
| Level of directness | Hedge/qualifier density matches the author |
| Personality | Same kind/amount of personality (including "none") |
| Unnecessary AI-style patterns | Few/no residual AI tells |
| Overall resemblance | Holistic "sounds like them" judgment |

### Anti-pattern checks (mark yes/no)

- Over-casualized relative to samples?
- Injected slang/jokes/contractions the author rarely uses?
- Forced first-person the author wouldn't use here?
- Generic "humanized" voice that matches nobody in particular?

---

## Output table

```
### Eval: <input-id>

| Dimension | A Original | B Baseline | C Colloquialify | Notes |
|-|-|-|-|-|
| Naturalness |  |  |  |  |
| Voice similarity |  |  |  |  |
| Sentence rhythm |  |  |  |  |
| Vocabulary similarity |  |  |  |  |
| Paragraph structure |  |  |  |  |
| Argumentation style |  |  |  |  |
| Level of directness |  |  |  |  |
| Personality |  |  |  |  |
| Unnecessary AI-style patterns |  |  |  |  |
| Overall resemblance |  |  |  |  |
| **Mean** |  |  |  |  |

Anti-patterns (C): over-casualized? __  fake slang/jokes? __  forced first-person? __  generic human? __

Verdict: C better than B on voice? yes/no — evidence:
```

---

## Interpretation

- If **C > B** on voice similarity / overall resemblance without losing naturalness, the voice layer is helping.
- If **C ≈ B**, the profile is too weak or Pass 9 is under-applied.
- If **C < B** on naturalness because of over-fitting quirks, simplify the profile.
- Never average across authors; evaluate per voice profile.
