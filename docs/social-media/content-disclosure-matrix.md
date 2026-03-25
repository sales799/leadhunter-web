# Content Disclosure Matrix — LeadHunterIQ

**Purpose**: Classifies what information can and cannot be shared on social media.
Every educational carousel, thread, and blog post must pass through this matrix before publishing.

**Governing Order**: CTO Constitution Standing Order #3 — Never expose proprietary methods.

---

## GREEN — Share Freely

These topics can be discussed openly on LinkedIn, Twitter/X, blog posts, and newsletters.

| Category | Examples |
|----------|---------|
| Problem statements | "4+ hours wasted daily on manual prospecting" |
| Market data & trends | India GCC growth stats, staffing market size, hiring trends |
| Outcome metrics | "90 days early", "100-point AI score", signal detection timelines |
| Customer success stories | Anonymized results, time savings, ROI improvements |
| India staffing industry insights | Regulatory changes, compliance deadlines, market shifts |
| General AI/ML concepts | What signal intelligence is, why timing beats data |
| Competitor comparisons (public info) | Feature comparisons vs Apollo/ZoomInfo using their public pricing/features |
| Product capabilities (what, not how) | "We monitor 50+ sources", "We score on 100 points" |
| Pricing and plan details | All tier details, setup fees, trial information |

## AMBER — Share Carefully

These topics can be referenced at a high level but must NOT reveal implementation details.

| Category | OK to Say | NOT OK to Say |
|----------|-----------|---------------|
| Signal categories | "GCC expansion signals" | Specific source names or methods |
| Scoring overview | "100-point AI scoring" | Scoring weights, algorithm details |
| Data coverage | "50+ intelligence sources" | Names of specific data providers |
| Verification process | "Multi-layer verification" | SAV framework step-by-step details |
| Enrichment capabilities | "Verified Indian mobile numbers" | Enrichment waterfall sequence |
| AI usage | "AI-powered analysis" | Model names, prompt strategies |
| Signal types | "Funding signals, hiring signals" | Detection rules or trigger logic |

## RED — Never Share

These topics must NEVER appear in any public content. Violation is a Standing Order #3 breach.

| Category | Specifics |
|----------|-----------|
| Data source names | Names of specific APIs, databases, or providers used |
| TALPRO-IQ scoring weights | How the 100-point score is calculated, feature weights |
| SAV verification logic | Specific verification steps, thresholds, pass/fail criteria |
| Enrichment waterfall | Sequence of enrichment providers, fallback logic |
| N8N workflow design | Workflow IDs, node configurations, automation architecture |
| AI model/provider names | Which LLM, which API, which agent framework |
| Agent names or architecture | ATHENA, HERMES, MERCURY, CODEX or any internal agent names |
| Proprietary methodology | Any "how we do it" that a competitor could replicate |
| Internal tools/infrastructure | VPS details, database schema, API keys, webhook URLs |
| Customer-specific data | Company names without permission, deal sizes, contact details |

---

## Review Process

1. Before publishing any educational content (carousels, threads, blog posts):
   - Author checks content against this matrix
   - Any AMBER content must be reviewed for accidental RED exposure
   - When in doubt, classify as RED

2. Content templates should include a "Disclosure Check" field:
   - [ ] No RED items included
   - [ ] AMBER items are high-level only
   - [ ] Competitor references use only public information

3. Quarterly review: Update this matrix as new proprietary methods are developed.

---

*Last updated: 25 March 2026*
*Owner: CTO Office (SENTINEL)*
