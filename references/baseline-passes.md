# Baseline passes (1–8)

### Pass 1: Kill the Structure Tells

AI loves formulas. The same section shape repeated ten times. Every paragraph built identically. Fix this first because it's the most visible tell.

**What to look for:**
- Every section ending with a neat "takeaway" or "bottom line"
- Repeated callout patterns ("What this means for you:", "The takeaway:", "Why it matters:")
- Identical paragraph counts per section
- Every list having exactly the same number of items
- "Setup paragraph, explanation, conclusion" repeated verbatim across sections
- "Challenges and Future Prospects" or "Future Outlook" formulaic endings
- "Despite its [strength]... faces challenges... Despite these challenges..." loops

**How to fix it:**
- Vary section lengths. Some sections get two paragraphs. Some get five.
- Let some sections end abruptly. Not everything needs a bow on it.
- Break the pattern. If three sections have lists, make the fourth a narrative paragraph.
- Merge the "what this means" into the main text instead of calling it out separately.
- Replace formulaic challenge/outlook sections with specific facts.

**Before:**
> Despite its industrial prosperity, Korattur faces challenges typical of urban areas, including traffic congestion and water scarcity. Despite these challenges, with its strategic location and ongoing initiatives, Korattur continues to thrive as an integral part of Chennai's growth.

**After:**
> Traffic congestion increased after 2015 when three new IT parks opened. The municipal corporation began a stormwater drainage project in 2022 to address recurring floods.

---

### Pass 2: Strip Significance Inflation and Promotional Language

AI puffs up importance constantly. Everything is pivotal, groundbreaking, nestled, vibrant. It reads like a press release or tourism brochure.

**Significance inflation words:** stands/serves as, is a testament/reminder, a vital/significant/crucial/pivotal/key role/moment, underscores/highlights its importance, reflects broader, symbolizing its ongoing/enduring/lasting, setting the stage for, marking/shaping the, represents/marks a shift, key turning point, evolving landscape, indelible mark, deeply rooted

**Promotional language:** boasts a, vibrant, rich (figurative), profound, enhancing its, showcasing, exemplifies, commitment to, natural beauty, nestled, in the heart of, groundbreaking (figurative), renowned, breathtaking, must-visit, stunning

**The fix isn't a synonym.** Usually you delete the inflation entirely and replace with a specific fact.

**Before:**
> The Statistical Institute of Catalonia was officially established in 1989, marking a pivotal moment in the evolution of regional statistics in Spain.

**After:**
> The Statistical Institute of Catalonia was established in 1989 to collect and publish regional statistics independently from Spain's national statistics office.

---

### Pass 3: Replace AI Vocabulary

Certain words and phrases are dead giveaways. See [references/ai-tells.md](references/ai-tells.md) for the full list.

**Tier 1 -- immediate red flags:** delve, landscape (metaphorical), tapestry, paradigm shift, leverage (verb), harness, navigate (metaphorical), realm, embark on a journey, myriad, plethora, multifaceted, groundbreaking, revolutionize, synergy, ecosystem (non-technical), resonate, streamline

**Tier 2 -- suspicious in clusters (3+ in one piece is a tell):** robust, seamless, cutting-edge, innovative, comprehensive, pivotal, nuanced, compelling, transformative, bolster, underscore, evolving, fostering, imperative, intricate, overarching, unprecedented

**The fix isn't always a synonym.** Often the sentence needs restructuring, not just a word swap.

**Before:**
> Additionally, a distinctive feature of Somali cuisine is the incorporation of camel meat. An enduring testament to Italian colonial influence is the widespread adoption of pasta in the local culinary landscape, showcasing how these dishes have integrated into the traditional diet.

**After:**
> Somali cuisine also includes camel meat, which is considered a delicacy. Pasta dishes, introduced during Italian colonization, remain common, especially in the south.

---

### Pass 4: Fix Grammar-Level Patterns

Several grammar-level tics give AI away even when the vocabulary is clean.

#### Copula avoidance

AI substitutes elaborate constructions for simple "is"/"are"/"has." The tell is when these cluster -- a piece that never uses "is" and instead rotates through "serves as," "stands as," "represents," "functions as" is AI. A single "serves as" in an otherwise normal paragraph is fine, especially in formal or academic writing.

- "serves as" / "stands as" / "represents" -> "is" (when clustering)
- "boasts" / "features" / "offers" -> "has" (when clustering)

**Before (clustering -- AI tell):**
> Gallery 825 serves as LAAA's exhibition space. The gallery features four rooms and boasts 3,000 square feet.

**After:**
> Gallery 825 is LAAA's exhibition space. The gallery has four rooms totaling 3,000 square feet.

**Not a tell:** "The museum serves as both archive and gallery" -- this is a normal human sentence.

#### Superficial -ing analyses

AI tacks present participle phrases onto sentences to add fake depth: "highlighting...", "underscoring...", "emphasizing...", "reflecting...", "symbolizing...", "showcasing...", "contributing to...", "fostering..."

**Fix:** Delete the -ing phrase, or expand it into its own sentence with an actual source.

#### Negative parallelisms

"Not only... but..." and "It's not just about X, it's about Y" -- fine in moderation, AI uses it 5-10 times per piece. The tell is density relative to piece length, not an absolute count.

**Fix:** In a short piece (under 1000 words), once is plenty. In a longer piece, twice is fine. The issue is when it becomes a structural crutch.

#### Rule of three overuse

AI forces ideas into groups of three where the third item is clearly padding: "innovation, inspiration, and insights." Tricolons are one of the oldest rhetorical devices in human writing ("life, liberty, and the pursuit of happiness"), so don't flag every group of three -- flag groups where the third item adds nothing or is a near-synonym of the first two.

**Fix:** If the third item pulls its weight, leave it. If it's padding, cut to two or restructure.

#### Synonym cycling (elegant variation)

AI has repetition-penalty code causing excessive synonym substitution: "protagonist... main character... central figure... hero" all in one paragraph.

**Fix:** Pick one term and stick with it. Repetition is fine when it's the clearest word.

#### False ranges

"From X to Y" constructions where X and Y aren't on a meaningful scale.

**Before:**
> Our journey has taken us from the singularity of the Big Bang to the grand cosmic web, from the birth of stars to the enigmatic dance of dark matter.

**After:**
> The book covers the Big Bang, star formation, and current theories about dark matter.

---

### Pass 5: Fix Sentence Rhythm and Style

AI writes in a metronomic cadence. Medium sentence. Medium sentence. Medium sentence. Humans vary wildly.

#### Rhythm

**What to look for:**
- Every sentence roughly the same length (15-25 words)
- No short punchy sentences (under 8 words)
- No longer flowing sentences that build momentum
- Every sentence starting with a noun or "The"

**How to fix it:**
- Throw in some short ones. "That's new." "It works." "Not anymore."
- Let some sentences run a bit longer when the idea needs room to breathe.
- Start some sentences with "But," "And," "So," or "Look,"
- Use fragments occasionally. They're fine in non-academic writing.

#### Em dashes (hard ban)

Em dashes (—) and double-hyphen stand-ins (--) are an AI slop tell. **Never leave them in output.** Do not "use sparingly." Do not keep a single stylish aside.

**Fix:** Prefer a period and a new sentence, or a line break. Commas or parentheses only when a period would break the sense. Strip every em dash on the final pass.

#### Boldface overuse

AI emphasizes phrases in boldface mechanically, especially in lists.

**Fix:** Remove most boldface. Save it for genuinely important terms on first mention.

#### Inline-header lists

Lists where every item starts with a bolded header followed by a colon.

**Before:**
> - **User Experience:** The user experience has been improved.
> - **Performance:** Performance has been enhanced.
> - **Security:** Security has been strengthened.

**After:**
> The update improves the interface, speeds up load times through optimized algorithms, and adds end-to-end encryption.

#### Title case in headings

AI defaults to title case for all headings. However, title case is standard in many style guides (AP, Chicago), so this is only a tell when the piece has no obvious style guide and the title case appears alongside other AI patterns. Don't flag title case in isolation -- it's a weak signal at best.

#### Emojis

AI decorates headings or bullet points with emojis. Remove them.

#### Curly quotation marks

ChatGPT uses curly quotes (\u201c \u201d). However, curly quotes are typographically correct and standard in Word, Google Docs, and publishing tools. Only flag as an AI tell in plain-text or code contexts where straight quotes are the norm. In formatted content, curly quotes are expected.

---

### Pass 6: Cut Hedging, Filler, and Vague Attributions

AI hedges constantly because it's trained to be balanced. Humans with expertise are more direct.

#### Hedging

**What to look for:**
- "It's important to note that..." / "It's worth mentioning..."
- "While there are certainly challenges..."
- "This is not without its drawbacks..."
- "To be sure..." / "To be fair..."
- Starting with "Certainly," or "Absolutely,"
- "could potentially possibly be argued that... might have some"

**Fix:** Just say the thing. Pick a side when the writing has an obvious perspective. One hedge per article is fine. Five is AI.

#### Filler phrases

- "In order to achieve this goal" -> "To achieve this"
- "Due to the fact that" -> "Because"
- "At this point in time" -> "Now"
- "The system has the ability to" -> "The system can"
- "It is important to note that the data shows" -> "The data shows"

#### Vague attributions

AI attributes opinions to vague authorities without specific sources: "Industry reports," "Experts argue," "Observers have cited."

**Fix:** Name the source, cite the date, or delete the claim.

**Before:**
> Experts believe it plays a crucial role in the regional ecosystem.

**After:**
> The river supports several endemic fish species, according to a 2019 survey by the Chinese Academy of Sciences.

#### Chatbot artifacts

Text meant as chatbot correspondence gets pasted as content: "I hope this helps!", "Let me know if you'd like me to expand on any section!", "Great question!", "Certainly!"

**Fix:** Delete entirely.

#### Knowledge-cutoff disclaimers

"While specific details are limited...," "Based on available information..."

**Fix:** Find actual sources or delete the claim.

**Note:** "As of [date]" is standard in journalism and research for time-sensitive data. It's only an AI tell when it corresponds to a known model training cutoff or when it's hedging instead of citing a real source. Don't flag it in data-driven writing where the date adds genuine context.

#### Sycophantic tone

"Great question! You're absolutely right that this is a complex topic."

**Fix:** Drop the flattery. Respond to the substance.

#### Generic positive conclusions

"The future looks bright," "Exciting times lie ahead," "Only time will tell."

**Fix:** End with a specific fact or plan, or just stop.

---

### Pass 7: Fix Connective Tissue

AI uses the same transitions over and over. Humans vary them or skip them entirely.

**AI's favorite transitions (overused):**
- "Moreover" / "Furthermore" / "Additionally"
- "In conclusion" / "To sum up"
- "That said" / "That being said"
- "With that in mind"
- "Moving forward"
- "When it comes to"

**Better approaches:**
- Often you don't need a transition at all. Just start the next thought.
- Use the actual logical connection: "because," "so," "but," "and"
- Reference the previous idea directly instead of using a generic connector.
- Let paragraph breaks do the transitional work.

---

### Pass 8: Add Human Texture and Soul

Avoiding AI patterns is only half the job. Sterile, voiceless writing is just as obvious as slop. Good writing has a human behind it.

**If a voice profile is loaded, skip the generic "add personality" moves below.** Instead apply only the texture the profile supports (see Pass 9). Do not force casualness, humor, first-person, or messiness that the profile does not exhibit.

**When no voice profile is loaded**, use the baseline guidance:

**Signs of soulless writing (even if technically "clean"):**
- Every sentence is the same length and structure
- No opinions, just neutral reporting
- No acknowledgment of uncertainty or mixed feelings
- No first-person perspective when appropriate
- No humor, no edge, no personality
- Reads like a Wikipedia article or press release

**How to add voice (baseline only — no profile):**

**Have opinions.** Don't just report facts -- react to them. "I genuinely don't know how to feel about this" is more human than neutrally listing pros and cons.

**Acknowledge complexity.** Real humans have mixed feelings. "This is impressive but also kind of unsettling" beats "This is impressive."

**Use "I" when it fits.** First person isn't unprofessional -- it's honest. "I keep coming back to..." or "Here's what gets me..." signals a real person thinking.

**Let some mess in.** Perfect structure feels algorithmic. Tangents, asides, and half-formed thoughts are human.

**Be specific about feelings.** Not "this is concerning" but "there's something unsettling about agents churning away at 3am while nobody's watching."

**Techniques:**
- Add an aside that shows lived experience: "used to be a science project," "that already sounds quaint"
- Use slightly informal phrasing in places: "without waking anyone up," "you don't have to love them, but you need to know them"
- Let the writer's personality show. A dry observation. A mild exaggeration. A colloquial verb.
- Reference shared experiences: "If you've ever tried to..." "Anyone who's debugged a..."

**What NOT to do:**
- Don't overdo it. One or two casual asides per section, max.
- Don't add slang or try to be hip. That reads as forced.
- Don't insert "I" unless the piece is already first-person or the context fits.
- Don't add humor that doesn't serve the point.

**Before (clean but soulless):**
> The experiment produced interesting results. The agents generated 3 million lines of code. Some developers were impressed while others were skeptical. The implications remain unclear.

**After (has a pulse):**
> I genuinely don't know how to feel about this one. 3 million lines of code, generated while the humans presumably slept. Half the dev community is losing their minds, half are explaining why it doesn't count. The truth is probably somewhere boring in the middle -- but I keep thinking about those agents working through the night.

---
