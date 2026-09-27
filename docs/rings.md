# Rings

Every section carries a ring, fixed, guided or free, that tells the next model how much it may change and who decides.

Every section heading names its ring after a middle dot: `## Behaviour · fixed`. The ring tells the next model how much freedom it has. Fixed rules keep your product recognisable; the free ring is where every model generation gets better.

| Ring | What it means for the next edition | Typical sections |
|---|---|---|
| **fixed** | Rebuilt exactly. Changes only through a recorded decision. | Behaviour, Contracts, Face, texts |
| **guided** | The model may propose a better way, with a measurable gain. Accepting it becomes a decision. | Build: stack, architecture, libraries |
| **free** | Every edition may improve it without asking. Only the checks decide. | Implementation, internal names, algorithms, layout details |

## The same request, three rings

A single request meets the three rings differently. Here someone asks for speed and for stacked vouchers.

| Ring | The agent's answer | Result |
|---|---|---|
| free | Speed: prices computed in one pass, photos load lazily. | done |
| guided | Build: compute prices at the edge. Faster, but needs a decision. | proposal |
| fixed | C2 stays: one voucher per order. Reason: `decision/one-voucher`, stacked discounts were abused. | declined |

## Choosing a ring

- **Fix what users and other systems notice**: amounts, flows, texts, URLs, APIs, stored data, the look of key screens.
- **Guide what is expensive to change back**: the database, the framework, where code runs.
- **Free everything else.** Writing the Free section down is what lets a better model improve it.
- **Start with fewer fixed rules.** A fixed rule without a check is only a wish; tighten as your checks grow.
