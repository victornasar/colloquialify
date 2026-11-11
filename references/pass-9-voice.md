# Pass 9: Voice consistency

### Pass 9: Voice Consistency (Colloquialify)

**Run only when a `voice.md` profile is loaded.** This is the core Colloquialify layer. The baseline passes remove AI smell; this pass makes the draft sound like *this* writer.

**Pipeline reminder:**
1. AI text in
2. Passes 1–8 (baseline humanize-writing; Pass 8 constrained by profile)
3. Compare result against the voice profile
4. Rewrite portions that do not fit the writer's natural style
5. Final voice-consistency sweep

**How to compare:**

Read the post-Pass-8 draft against each major section of `voice.md`. For every mismatch that would make a reader say "this person wouldn't write it that way," rewrite that span. Prefer local edits over whole-draft rewrites.

Check at least:
- Sentence length / rhythm vs profile ranges
- Formality and contraction rate
- Punctuation habits (no em dashes; semicolons, questions)
- Paragraph length and argument shape
- Hedge / qualifier density vs the writer's directness
- First-person frequency and emotional intensity
- Preferred transitions and example habits
- Signature phrases / constructions (use sparingly, only where natural)
- Avoidances (never introduce patterns the writer consistently avoids)

**Hard constraints:**
- Do **not** push the draft toward "generic casual human."
- Do **not** add slang, jokes, typos, or fake imperfections unless the profile shows them.
- If the profile is formal, keep formal diction after humanization.
- If the profile is concise, cut explanatory padding the baseline may have left.
- If the profile is explanatory, do not over-trim into telegram style.
- Preserve factual content and claims; change manner, not meaning.
- Keep the ask in words the profile shows this writer would say. Leave the recipient's trade vocabulary out unless the profile shows those words. A routing question asks who to talk to, in ordinary language. Do not recast it as who has or owns the role. If a polish softens the writer's verb into corporate interest-language, or adds an em dash, keep the writer's line.

**Before the final gate:** Scan once for the structure tells: repeated first-person openers and aphorism closers (Pass 5); repeated beat template, too-neat summary bullets, essay chopped into sub-headings, TL;DR bullets, throat-clearing opener, same point twice, and criteria with no worked example (Pass 1); "X is not Y" density (Pass 4); a close that walks back the thesis (Pass 6). Fix any that fire. These matter most on long-form posts, where they stack.

**Final gate:** Re-read the finished draft once and answer only this: *Would this person actually write this this way?* If no, fix the offending spans. If yes, stop. Do not keep polishing into over-humanization.

---

## The "Read It Out Loud" Test

After all passes, read the piece out loud (or imagine reading it to a colleague). Flag anything that:
- Sounds like a press release
- No human would actually say in conversation
- Makes you cringe slightly
- Feels like it's trying too hard to sound smart
- Could have been written about literally any topic by swapping a few nouns
- Borrows the recipient's job words, or asks who has or owns a role, instead of who to talk to

**With a voice profile:** also flag anything the profiled writer would not say — even if it sounds generically natural.

---

## What to Preserve

Not everything needs to change. Keep:
- Technical accuracy and specific data points
- Proper nouns, product names, and attributions
- The core argument and structure (rearrange within sections, not between them)
- Formatting choices (headers, lists, bold) unless they're part of the AI pattern
- The writer's natural register from `voice.md` (formal stays formal; concise stays concise)
