# Voice Profile

- **Writer:** Riley Chen (synthetic eval author)
- **Created:** 2026-09-14
- **Samples analyzed:** 4 files / ~520 words
- **Dominant register:** professional-conversational technical prose
- **One-line summary:** Direct, short-paragraph eng writing with contractions, concrete incidents, and almost no promotional fluff.

---

## Sentence length and rhythm

- Typical sentence length: 8–18 words; comfortable mixing 5-word punches with ~25-word explanations
- Short-sentence habit: common ("They aren't." "That's on me." "Fair.")
- Long-sentence habit: occasional, usually to carry a concrete detail
- Fragments: rare; prefers full sentences
- Opening patterns: often a blunt claim or scene-set in first person plural/singular
- Evidence: "I keep seeing teams treat coding assistants like junior engineers. They aren't."

## Vocabulary preferences

- Preferred ordinary words: keep, miss, own, trade, bar, call, dump, ugly fixture
- Domain jargon comfort: high for eng terms (PR, diff, RFC, fixture) without explaining them
- Metaphor / figurative language: rare; almost never decorative
- Words or shapes they reach for: "the bar is…", "that's on me", "I don't think X helps"
- Evidence: samples 01–04

## Formality

- Baseline formality (1=very casual … 5=very formal): 3
- When they shift register: slightly more casual in incident writeups; still professional
- Evidence: contractions + blunt opinions without slang

## Contractions

- Rate: common
- Contexts: almost all prose ("aren't", "don't", "that's", "I'll")
- Evidence: every sample

## Punctuation habits

- Em dashes: avoided
- Semicolons: avoided
- Colons: occasional before a crisp definition or list-like reveal
- Ellipses / exclamations: none in samples
- Evidence: no em dashes across samples; "What helps is a house style that's picky about claims."

## Paragraph length

- Typical paragraph: 2–4 sentences
- One-line paragraphs: used for emphasis / turn
- Evidence: sample 01 ending; sample 04 short closing graf

## Questions

- Frequency: low
- Rhetorical vs genuine: occasional framing question then answer ("People ask… I don't think…")
- Evidence: sample 03

## Rhetorical devices

- Devices used: understatement, contrast, concrete counterexample
- Devices avoided: hype triads, inspirational closers, elaborate analogy
- Evidence: "The truth is in the review standards" style arguments

## Directness vs hedging

- Default stance: direct; picks a side early
- Where hedges appear: rare; softens with "I don't think" / "Fair." rather than institutional hedges
- Evidence: "I don't think a ban helps." / "Then label it as a question dump, not a design."

## Qualifiers

- Density: low
- Favorite qualifiers (if any): "usually", "probably" sparingly
- Evidence: "If I need a metaphor, I usually don't."

## Repetition patterns

- Comfort repeating a clear word: high (docs, bar, review)
- Synonym cycling: avoided
- Evidence: sample 03 repeats "docs" / "bar"

## Preferred transitions

- Explicit connectors used: "If", "When", "What helps", "Next time"
- Often skips transitions: yes — paragraph break does the work
- Evidence: no Moreover/Furthermore/Additionally

## How arguments develop

- Usual shape: claim → concrete case → implication / rule of thumb
- Evidence: assistants claim → squad anecdote → ownership rule (sample 01)

## Use of examples

- Frequency: high
- Type: personal / named situational (squads, support ping, pagination bug)
- Evidence: samples 01–02

## First-person usage

- Frequency: common when recounting experience; otherwise restrained "we"
- I vs we: both; "I" for ownership, "we" for team actions
- Evidence: "That's on me." / "We shipped…"

## Humor and personality

- Present? what kind? dry understatement; not jokey
- Intensity: low-key
- Evidence: "If the argument needs a novel, the system is probably too clever."

## Emotional intensity

- Baseline: measured
- What raises it: accountability / missed review mistakes
- Evidence: incident sample owns the miss without drama

## Concise vs explanatory

- Default: concise
- When they elaborate: only to make a concrete failure mode clear
- Evidence: sample 04 explicitly prefers shorter drafts

## Signature phrases / constructions

- Recurring shapes: "The bar isn't X. The bar is Y."; "I don't think X helps."; short rebuttal sentence after a claim
- Evidence: samples 01, 03, 04

## Consistent avoidances

- Patterns this writer reliably does **not** use: em dashes; promotional adjectives (seamless, transformative, robust); "Moreover/Furthermore/Additionally"; tidy inspirational endings; boldface header lists; chatbot openers
- Evidence: all samples

---

## Rewrite priorities (Pass 9 checklist)

When Colloquialifying new text, check these first:

1. Kill promotional / significance-inflated diction; prefer ordinary verbs.
2. Keep paragraphs short; allow one-line turns.
3. Prefer concrete examples over abstract pillars/lists.
4. Use contractions; keep formality ~3/5.
5. State a position early; avoid institutional hedges.
6. No em dashes, no Moreover/Furthermore, no hype closers.
7. First person only for lived experience / ownership — not decorative soul.

## Anti-goals (do not invent)

- Do not add: slang, jokes, fake typos, exclamation energy
- Do not push the register toward: generic casual blog voice or academic formality
