---
name: cold-email
description: >-
  Draft short cold emails for problem-discovery outreach or hire outreach to
  recruiters and hiring managers. Discovery: solo builder, real friction, one
  easy intrigue question, no call asks. Hire: who you are, why this person, what
  you want, resume + portfolio links, one unique insight. Supports skeptic vs
  trade modes and a hard anti-sameness batch gate. Use for cold email, outreach,
  intro email, job intro, or cold DM that should read like email.
---

# Cold Email

Optimize for a **door-open reply**, not a booked call and not a demo.

**North star: the simpler, the better.** Cut first. Only keep a detail if the
email is unintelligible without it.

## Purposes

Pick from context (user can override).

### Discovery (default)

Solo builder learning real friction in a vertical you don’t fully understand.
Not booking demos.

**Middle path (trade):** `Hi {First},` + problem-first vertical + before you
build the wrong thing + one sharp easy question. Prefer problem-first over
“I build software…”. No call asks. No em dashes.

Aim under **240 characters**. Full say/don’t-say:
[references/intention.md](references/intention.md).

### Hire

Cold note to a recruiter or hiring manager about a role.

**Framework:** who you are → why you’re emailing **this** person → what you’re
looking for → resume link → portfolio link → one unique insight. No call asks.
No em dashes. Links are allowed; length can pass 240.

Full shape: [references/hire-outreach.md](references/hire-outreach.md).

If they already posted that hiring or DMs are open, prefer colloquialify’s
**open-hiring-dm** shape instead of this full framework.

## When to load more

| Need | Open |
|------|------|
| Rules, skeptic/trade modes, cut list, scope | [references/rules-and-shape.md](references/rules-and-shape.md) |
| Discovery CTA + batch anti-sameness | [references/cta-and-batch.md](references/cta-and-batch.md) |
| Hire / recruiter framework | [references/hire-outreach.md](references/hire-outreach.md) |
| Discovery shape-only sample (do not parrot) | [references/sample.md](references/sample.md) |
| Discovery positioning | [references/intention.md](references/intention.md) |

Always read **rules-and-shape**. For discovery, also read **cta-and-batch**
(and **intention** when positioning is unclear). For hire, also read
**hire-outreach**.

## Workflow

1. Pick **purpose**: discovery or hire.
2. Pick **skeptic** or **trade** (see rules-and-shape).
3. Draft **subject** and **body** for that purpose.
4. If batch (N>1): run the **batch gate** in cta-and-batch; rewrite failures.
5. Proofread once for typos, jargon, and leftover em dashes.
6. Note send window if their timezone is known; else ask or skip.

## Output

Discovery:

```
purpose: discovery
mode: skeptic | trade

subject: …

body:
…

chars: N/240
send: their business hours (timezone if known)
```

Hire:

```
purpose: hire
mode: skeptic | trade

subject: …

body:
…

chars: N
send: their business hours (timezone if known)
```

If you reframed a meeting ask, one short line above the draft saying so.
No other preamble unless the user asks for options or critique.
