# Output format and full example

## Output Format

When rewriting:
1. Rewrite the full content with changes applied
2. After the rewrite, add a **Changes** section with a short, scannable summary. Format it as a table:

```
### Changes

| Pass | What changed | Examples |
|-|-|-|
| Structure | Collapsed parallel lists into prose | Sections 1, 4, 6 |
| Inflation | Cut significance/promotional puffery | "pivotal moment" -> deleted |
| Vocabulary | Cut "navigating" (x3), "journey" (x2) | -> "deal with," "transition" |
| Grammar | Fixed copula avoidance, -ing phrases | "serves as" -> "is" |
| Rhythm/Style | Added short punchy lines, varied length | "Full stop." "That changes the math." |
| Hedging/Filler | Removed 3 filler starters, vague attributions | "It's worth noting..." deleted |
| Transitions | Replaced 2 generic connectors | "Moreover" -> dropped |
| Soul | Added lived-in details, first person | "stare at the ceiling" |
| Voice | Matched profile: fewer hedges, shorter grafs | "It could be argued" -> "I think" |
```

Rules for the table:
- Only include passes where you actually made changes (skip passes with nothing to report)
- "What changed" column: one short phrase, no full sentences
- "Examples" column: show a specific before->after or quote a short addition
- Include a **Voice** row when Pass 9 ran
- Keep it tight. If it needs more than 9 rows, you changed too much or you're over-explaining.

When reviewing without rewriting (if asked):
1. Flag specific passages that read as AI-generated
2. Explain which pattern each one triggers
3. Suggest concrete alternatives
4. Consolidate overlapping flags -- if multiple patterns hit the same phrase, report it once as a stacking pattern rather than padding the count with separate entries
5. Verify quantitative claims before making them (e.g., actually count em dashes, actually count scare-quoted terms)
6. Check whether flagged patterns have a non-AI explanation (e.g., a table has three rows because there are three real items, not because AI forced a triad)

---

## Full Example

**Before (AI-sounding):**
> Great question! Here is an essay on this topic. I hope this helps!
>
> AI-assisted coding serves as an enduring testament to the transformative potential of large language models, marking a pivotal moment in the evolution of software development. In today's rapidly evolving technological landscape, these groundbreaking tools -- nestled at the intersection of research and practice -- are reshaping how engineers ideate, iterate, and deliver, underscoring their vital role in modern workflows.
>
> At its core, the value proposition is clear: streamlining processes, enhancing collaboration, and fostering alignment. It's not just about autocomplete; it's about unlocking creativity at scale, ensuring that organizations can remain agile while delivering seamless, intuitive, and powerful experiences to users. The tool serves as a catalyst. The assistant functions as a partner. The system stands as a foundation for innovation.
>
> Industry observers have noted that adoption has accelerated from hobbyist experiments to enterprise-wide rollouts, from solo developers to cross-functional teams. The technology has been featured in The New York Times, Wired, and The Verge. Additionally, the ability to generate documentation, tests, and refactors showcases how AI can contribute to better outcomes, highlighting the intricate interplay between automation and human judgment.
>
> - **Speed:** Code generation is significantly faster, reducing friction and empowering developers.
> - **Quality:** Output quality has been enhanced through improved training, contributing to higher standards.
> - **Adoption:** Usage continues to grow, reflecting broader industry trends.
>
> While specific details are limited based on available information, it could potentially be argued that these tools might have some positive effect. Despite challenges typical of emerging technologies -- including hallucinations, bias, and accountability -- the ecosystem continues to thrive. In order to fully realize this potential, teams must align with best practices.
>
> In conclusion, the future looks bright. Exciting times lie ahead as we continue this journey toward excellence. Let me know if you'd like me to expand on any section!

**After (humanized):**
> AI coding assistants speed up some tasks. In a 2024 study by Google, developers using Codex completed simple functions 55% faster than a control group, but showed no improvement on debugging or architectural decisions.
>
> The tools are good at boilerplate: config files, test scaffolding, repetitive refactors. They are bad at knowing when they are wrong. I have mass-accepted suggestions that compiled, passed lint, and still did the wrong thing because I stopped paying attention.
>
> Mira, an engineer at a fintech startup I interviewed, said she uses Copilot "like autocomplete for boring code" but reviews every line before committing. Jake, a senior dev at a larger company, disabled it after it kept suggesting patterns from a deprecated internal library.
>
> The productivity claims are hard to verify. GitHub says Copilot users "accept 30% of suggestions," but acceptance is not correctness, and correctness is not value. The 2024 Uplevel study found no statistically significant difference in pull-request throughput between teams with and without AI assistants.
>
> None of this means the tools are useless. It means they are tools. They do not replace judgment, and they do not eliminate the need for tests. If you do not have tests, you cannot tell whether the suggestion is right.

**Changes made:**
- Removed chatbot artifacts ("Great question!", "I hope this helps!", "Let me know if...")
- Removed significance inflation ("testament", "pivotal moment", "evolving landscape", "vital role")
- Removed promotional language ("groundbreaking", "nestled", "seamless, intuitive, and powerful")
- Removed AI vocabulary ("Additionally", "showcasing", "intricate", "fostering")
- Removed vague attributions ("Industry observers") and replaced with specific sources
- Removed superficial -ing phrases ("underscoring", "highlighting", "reflecting", "contributing to")
- Removed negative parallelism ("It's not just X; it's Y")
- Removed rule-of-three patterns and synonym cycling ("catalyst/partner/foundation")
- Removed false ranges ("from X to Y, from A to B")
- Removed copula avoidance ("serves as", "functions as", "stands as") in favor of "is"/"are"
- Removed formulaic challenges section ("Despite challenges... continues to thrive")
- Removed knowledge-cutoff hedging ("While specific details are limited...")
- Removed excessive hedging ("could potentially be argued that... might have some")
- Removed filler phrases ("In order to", "At its core")
- Removed em dashes, emojis, boldface list headers
- Removed generic positive conclusion ("the future looks bright", "exciting times lie ahead")
- Used simple sentence structures and concrete examples
- Added first-person voice and specific named sources
