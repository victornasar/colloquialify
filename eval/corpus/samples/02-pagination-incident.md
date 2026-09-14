We shipped the pagination rewrite on Thursday. Friday morning support pinged me about missing items on page two.

Root cause was simple: the cursor advanced before the filter ran. I wrote the original note in the PR and still missed it in review. That's on me.

Fix took twenty minutes. The useful part was the postmortem habit — write down what you trusted too early. I trusted the unit tests because they covered the happy path and looked green. They didn't cover an empty filtered page.

Next time I'll add one ugly fixture before I call it done.
