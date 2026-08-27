/* ==========================================================================
   NOEVARA - Insights Data (Articles, Whitepapers, Newsletter Notes)
   ========================================================================== */

const INSIGHTS = [
  {
    id: "ai-adoption-maturity-gap",
    type: "Article",
    icon: "cpu",
    date: "2026-06-12",
    readTime: "6 min read",
    title: "78% Adoption, 74% No Return: The AI Maturity Gap Nobody Is Measuring",
    excerpt: "Most companies aren't behind on AI adoption. They're behind on the eleven organisational conditions that decide whether adoption ever turns into value.",
    tags: ["AI Strategy","Diagnostics"],
    body: [
      "Across Europe, the AI adoption numbers look encouraging on the surface. The vast majority of mid-sized organisations now use some form of AI somewhere in the business - a chatbot here, an automation script there, perhaps a pilot with a vendor promising transformation. And yet, when leadership is asked a direct question - what has this actually returned in euros - the room tends to go quiet.",
      "This is not a technology problem. The tools mostly work as advertised. The gap sits somewhere else entirely: in the difference between AI adoption and AI maturity, two things that get treated as synonyms and are not.",
      "Adoption is binary. Either a tool is in use somewhere, or it isn't. Maturity is structural. It is the sum of eleven interconnected conditions - process digitisation, data intelligence, cloud maturity, leadership readiness, governance, workflow efficiency, and more - that determine whether an adopted tool compounds into value or quietly stalls at the pilot stage.",
      "We see this pattern constantly. A company deploys an AI-powered customer service assistant. Adoption looks great in month one. By month four, usage has flatlined, because nobody addressed the underlying data quality issues, or because the team using it was never given the authority to change the workflows the tool was meant to improve. The tool didn't fail. The maturity conditions around it did.",
      "The fix is not more pilots. It's an honest, evidence-based read of where the organisation actually stands across all eleven dimensions, benchmarked against comparable companies in the same sector - followed by a roadmap that closes the highest-impact gaps first, with the euro value of each attached, so leadership isn't debating in the abstract.",
      "Before the next AI initiative gets funded, it's worth asking a harder question than 'which tool should we buy.' The better question is: do we actually have the maturity to make this tool work? Most organisations have never measured that. It takes under fifteen minutes to find out."
    ],
    cta: { label: "Explore AI Maturity Lens", link: "service-detail.html?id=ai-maturity-lens" }
  },
  {
    id: "csrd-readiness-2026",
    type: "Whitepaper",
    icon: "leaf",
    date: "2026-05-20",
    readTime: "9 min read",
    title: "CSRD Is Coming for Mid-Sized Companies. Most Aren't Ready - Here's the Gap Map",
    excerpt: "Thousands of EU companies are entering mandatory sustainability disclosure for the first time. A structured gap diagnostic beats a scramble every time.",
    tags: ["ESG","Regulation","CSRD"],
    body: [
      "The Corporate Sustainability Reporting Directive was designed to bring transparency to sustainability claims across the European economy. For large listed companies, this has meant a multi-year runway to build capability. For thousands of mid-sized companies now being pulled into scope, the runway is dramatically shorter - and most have never produced a disclosure of this kind before.",
      "The instinct in many finance and sustainability teams is to treat CSRD as a documentation exercise: gather what data exists, write it up, and hope it satisfies the auditor. This approach tends to fail for a structural reason. CSRD compliance under the European Sustainability Reporting Standards (ESRS) begins with a double-materiality assessment - a formal process of determining both which sustainability issues affect the business financially, and which ways the business affects people and the environment. Skip or rush this step, and everything built on top of it is vulnerable to audit challenge.",
      "The second common failure point is data architecture. Sustainability data - emissions, supply chain information, workforce metrics - is frequently scattered across systems that were never designed to talk to each other, let alone produce an auditable, repeatable annual disclosure. A one-time data pull might satisfy year one. It will not satisfy year three, when the same numbers need to be reproducible and defensible.",
      "A structured CSRD Readiness Diagnostic addresses both problems at once: it scores current data availability, governance maturity, and disclosure gaps against ESRS requirements, and produces a phased roadmap that treats first-report readiness as a capability to build, not a document to write once and forget.",
      "The companies that will handle this transition well are the ones treating it as an operational and data question now, months before the deadline - not a compliance emergency handled in the final weeks before the first report is due."
    ],
    cta: { label: "See the ESG & CSRD practice", link: "service-detail.html?id=esg-csrd" }
  },
  {
    id: "why-transformation-projects-fail",
    type: "Article",
    icon: "compass",
    date: "2026-04-08",
    readTime: "5 min read",
    title: "Strategy Isn't the Problem. Diagnosis Is.",
    excerpt: "Transformation programmes rarely fail from a lack of ambition. They fail because organisations act before they understand what's actually broken.",
    tags: ["Transformation","Strategy"],
    body: [
      "Across Europe, companies collectively spend enormous sums each year on AI pilots, digital transformation initiatives, compliance programmes, and reorganisations. A striking share of these programmes fail to deliver anything close to the returns projected in the original business case. The natural explanation offered afterward is usually that the strategy was flawed.",
      "In our experience, the strategy is rarely the actual problem. What's flawed is the process that produced it: a couple of rushed weeks of stakeholder interviews, a generic maturity framework borrowed from a much larger company in a different sector, and a set of assumptions dressed up as findings because nobody had time - or the right instrument - to actually measure what was happening inside the organisation.",
      "Traditional consulting is structured to sell recommendations. The workshop happens, the deck gets built, the recommendation gets delivered, and the engagement ends roughly where the hard part - execution - begins. This isn't a criticism of any individual firm's competence. It's a structural feature of an industry built around the deliverable rather than the outcome.",
      "The alternative starts with treating diagnosis as a discipline in its own right, not two weeks of warm-up before the 'real' consulting begins. A structured, evidence-based diagnostic - one that scores the organisation across every dimension that actually determines whether transformation succeeds: strategy, leadership, culture, process, technology, data, capability - produces something a workshop cannot: a precise, quantified, prioritised picture of what needs to change and why, expressed in terms a board can act on immediately.",
      "Organisations rarely fail because they lack a strategy. They fail because the strategy wasn't built on evidence, wasn't clearly prioritised, and had no mechanism to survive contact with execution. Fixing that starts with measuring reality before spending a euro trying to change it."
    ],
    cta: { label: "See how the 7D Model works", link: "about.html#seven-d" }
  },
  {
    id: "eu-ai-act-governance-checklist",
    type: "Whitepaper",
    icon: "lockShield",
    date: "2026-03-15",
    readTime: "8 min read",
    title: "The EU AI Act Is Now in Force. What 'Provable Governance' Actually Means",
    excerpt: "Boards are being asked to demonstrate AI governance, not just describe it. Here's what an audit-ready evidence file actually contains.",
    tags: ["AI Act","Governance","Compliance"],
    body: [
      "The EU AI Act's obligations for high-risk AI systems are now active, and the shift this creates for boards is significant. Where regulators once accepted a verbal assurance that 'we take AI risk seriously,' the expectation now is documented, provable governance - a file that demonstrates control, not a statement that asserts it.",
      "The first challenge most organisations face is simply knowing which of their AI systems fall into a high-risk category. This isn't always obvious. A hiring screening tool, a credit-scoring model, or certain categories of monitoring software can all trigger high-risk obligations even when the system was procured from a third-party vendor rather than built in-house - deployer obligations apply regardless of who wrote the code.",
      "Once a system is correctly classified, the governance file needs to map specific legal articles to specific evidence: risk management documentation, data governance records, human oversight protocols, and technical documentation sufficient to withstand scrutiny. Assembling this after a regulator's request has landed is far more expensive, and far riskier, than building it proactively.",
      "A practical starting point is a risk-scoring pass across every AI system in current use - internally built and externally procured - converted directly into a governance structure organised by the legal obligations each system actually triggers. This produces something genuinely audit-ready: a file built once and maintained, not assembled overnight under pressure.",
      "The organisations handling this well are treating AI governance as a standing operational discipline, reviewed as new systems are added, rather than a one-time compliance project closed out and forgotten."
    ],
    cta: { label: "Explore AI & Data Governance Readiness", link: "service-detail.html?id=ai-data-governance" }
  },
  {
    id: "silent-cost-of-organisational-dysfunction",
    type: "Article",
    icon: "coinEuro",
    date: "2026-02-22",
    readTime: "5 min read",
    title: "The €800K Problem Nobody Put on the Balance Sheet",
    excerpt: "Slow decisions, silo behaviour, and high turnover rarely appear as a line item - but the cost is real, large, and measurable.",
    tags: ["Organisational Health","Diagnostics"],
    body: [
      "Ask a leadership team whether their organisation has a productivity problem, and most will say no - at least not one they can point to on a financial statement. Ask the same team whether decisions take too long, whether departments protect their own turf instead of collaborating, or whether good people keep leaving for reasons nobody can quite articulate, and the answer changes considerably.",
      "The disconnect exists because these costs are real but structurally invisible. They don't show up as a discrete line item in the P&L. They show up distributed across dozens of categories - recruitment costs from elevated turnover, the productivity drag of duplicated or delayed work, the opportunity cost of decisions made three weeks later than they should have been. Individually, each of these looks manageable. Aggregated across a 200-person organisation with genuine dysfunction in its operating model, the number is frequently in the range of €800,000 to €2.5 million per year.",
      "The reason this cost persists is simple: nobody has measured it, so nobody has prioritised fixing it. Leadership intuits that something is wrong but lacks the instrument to locate exactly where, or to make the business case for addressing it over the dozen other priorities competing for budget.",
      "A structured organisational diagnostic changes this by scoring the operating model across the domains that actually drive these costs - leadership, communication, process discipline, culture, governance - and tracing weak scores back to root cause rather than surface symptom. The output isn't a vague sense that things could be better. It's a prioritised, quantified list of what to fix first, in a format a board can act on in a single meeting.",
      "The invisible cost of organisational dysfunction doesn't go away by being ignored. It compounds. Measuring it precisely is usually the fastest way to start reducing it."
    ],
    cta: { label: "Explore OrgScan", link: "service-detail.html?id=orgscan" }
  },
  {
    id: "future-of-work-attrition",
    type: "Article",
    icon: "peopleHeart",
    date: "2026-01-18",
    readTime: "6 min read",
    title: "Your Best People Are Leaving Because of Ambiguity, Not AI",
    excerpt: "AI-driven role redesign is often blamed for attrition. The real driver is usually the anxiety created by not explaining it.",
    tags: ["Talent","Future of Work"],
    body: [
      "As AI tools reshape individual roles across departments, a common assumption has taken hold: that employees are leaving because they fear being replaced. The reality, in most of the organisations we work with, is subtly but importantly different. Employees are not primarily leaving because of what AI does. They're leaving because of what nobody told them about what AI means for their role.",
      "Ambiguity is corrosive in a specific way. When a company deploys an AI tool that touches a team's workflow without a clear policy on how the role itself is expected to change, employees fill that vacuum with assumptions - usually worse-case ones. A support agent whose ticket volume AI has reduced doesn't know if that means their role is safer, redundant, or about to be redefined into something unrecognisable. In the absence of an answer, many will start looking elsewhere before waiting to find out.",
      "This is compounded by hybrid-work friction, which has quietly become one of the leading drivers of attrition in its own right. Combined with AI-driven uncertainty, the two create a workforce that is management-reactive rather than management-anticipated: HR functions responding to resignations one at a time instead of seeing the pattern before it fully forms.",
      "The fix has two parts. First, a clear, explicit AI-and-work policy that tells employees plainly how AI tools are expected to change their role - reducing tedious tasks, changing required skills, or in some cases genuinely reducing headcount needs - rather than leaving it unspoken. Second, a workforce sentiment and retention risk diagnostic that flags flight-risk patterns at the team level before they surface as resignation letters, so retention conversations happen proactively rather than as an exit interview post-mortem.",
      "Attrition tied to AI and hybrid-work friction is rarely inevitable. It's usually a communication failure wearing a technology costume."
    ],
    cta: { label: "Explore Talent Retention Advisory", link: "service-detail.html?id=talent-retention" }
  }
];

function getInsightById(id){
  return INSIGHTS.find(i => i.id === id);
}
