/* ==========================================================================
   NOEVARA - Service & Diagnostic Tool Data
   Each entry powers services.html (tile grid) and service-detail.html
   ========================================================================== */

const SERVICE_CATEGORIES = [
  { id: "platform", num: "00", name: "TIPE Platform", short: "TIPE Platform",
    desc: "The layer that never stops measuring - tracking your transformation against a moving market and real competitors, quarter after quarter." },
  { id: "operations", num: "01", name: "Operations", short: "Operations",
    desc: "Capacity, productivity, bottlenecks, OEE, quality, cost - produce more with the factory you already have." },
  { id: "digital-ai", num: "02", name: "Digital & AI", short: "Digital & AI",
    desc: "AI ROI, implementation, data readiness, automation, integration, governance - from pilots to measurable value." },
  { id: "knowledge", num: "03", name: "Knowledge", short: "Knowledge",
    desc: "Find it, retain it, reuse it - stop paying people to solve problems you have already solved, and make your AI actually know your company." },
  { id: "transformation", num: "04", name: "Transformation", short: "Transformation",
    desc: "Change, adoption, execution, benefits realisation, operating model - deliver the transformation late projects never do." }
];

const SERVICES = [

  /* ============================= CONTINUOUS TRANSFORMATION INTELLIGENCE ============================= */
  {
    id: "tipe",
    category: "platform",
    icon: "monitorPulse",
    name: "TIPE",
    tagline: "Continuous Transformation Intelligence Platform",
    summary: "The instrument that never stops measuring - tracking how your transformation holds up against a moving market and real competitors, quarter after quarter.",
    problem: "Every diagnostic - including our own point-in-time tools - captures a single snapshot. But markets shift, competitors adapt, and the transformation you funded six months ago can quietly go stale before anyone notices, until performance slips and nobody can say exactly when it started.",
    delivers: [
      "Continuous tracking of transformation adoption and impact across every domain measured by our diagnostic instruments - not a one-time score.",
      "Live benchmarking against current market conditions and named competitor movements, refreshed on an ongoing basis rather than frozen at kickoff.",
      "Automated drift alerts when a domain that scored well at diagnosis starts regressing, so leadership hears about it in weeks, not at next year's review.",
      "Quarterly Transformation Health Reports that show trajectory and momentum, not just a static number.",
      "A single, continuously-updated view that feeds directly into the 7D Model's Drive and Develop phases, keeping the roadmap honest long after the original engagement ends."
    ],
    impact: "Turns transformation from a project with a start date and an end date into a monitored, continuously-adjusted capability - so your roadmap adapts as fast as your market does, instead of waiting for next year's review to discover it fell behind.",
    duration: "Continuous - always on",
    format: "Live monitoring dashboard + quarterly benchmark report",
    faqs: [
      {q:"We already ran OrgScan / AI Maturity Lens. Isn't that diagnosis enough?", a:"Those instruments give you a precise, evidence-based picture at a single point in time - essential for knowing where to start. TIPE is different: it keeps watching after that, so you know whether the plan built on that diagnosis is still the right one six months later, not just on day one."},
      {q:"How is this different from just re-running OrgScan every quarter?", a:"Re-running a single diagnostic quarterly tells you your own trend line, in isolation. TIPE goes further - it layers your trajectory against what's actually happening in your specific market and named competitors, so a flat internal score can mean very different things depending on whether your whole sector moved forward and you didn't, or the market stalled too."},
      {q:"Is this a dashboard we have to remember to check, or does it tell us when something's wrong?", a:"Both. A live dashboard is always available, but the drift alerts are built specifically so you don't have to remember to look. If a domain that scored well during diagnosis starts regressing, TIPE flags it before it shows up as a missed target in a board report."},
      {q:"Do we need to have used one of your other diagnostic tools first?", a:"It helps considerably - TIPE is most powerful layered on top of a completed OrgScan, AI Maturity Lens, or Company Growth Diagnostic, since it can then track the exact domains that matter most to your organisation specifically, rather than a generic set. That said, it can also be scoped as a standalone continuous-monitoring engagement."},
      {q:"Is TIPE just another name for your overall methodology?", a:"TIPE is both: it's the name of our diagnostic philosophy (Diagnose, Design, Transform, Measure, Elevate) and the name of the specific platform that operationalises the Measure and Elevate stages continuously. Every other instrument in our portfolio answers one question well, once. TIPE is the one that keeps asking it."}
    ],
    related: ["orgscan","perpetua","company-growth"]
  },

  /* ============================= DIAGNOSTICS ============================= */
  {
    id: "orgscan",
    category: "transformation",
    icon: "compass",
    name: "OrgScan",
    tagline: "Organisational Diagnostic Intelligence Platform",
    summary: "A 12-domain organisational scan that names the problem in under 30 minutes.",
    problem: "Leadership knows something is wrong - slow decisions, silo behaviour, high turnover, late projects - but cannot precisely name it, locate it, or prioritise it.",
    delivers: [
      "Scores the organisation across up to 12 domains: leadership, strategy, communication, HR & talent, operations, culture, knowledge management, digital transformation, governance, innovation, AI readiness, and market adaptability.",
      "Classifies the organisation into an archetype - Reactive, Bureaucratic, Fragmented, Burned Out, or High-Performing.",
      "Produces a Risk Priority Matrix and a Causal Chain Analysis that trace symptoms back to root cause.",
      "Generates a 90-Day Transformation Roadmap and a board-ready PDF report.",
      "French clients auto-populate company data via SIRET/SIREN lookup."
    ],
    impact: "A typical 200-person company with weak engagement and poor process discipline loses €800K–€2.5M per year in productivity, turnover, and wasted effort. OrgScan makes that invisible cost visible - and prioritised - in one meeting.",
    duration: "Under 30 minutes",
    format: "Self-service diagnostic + board-ready report",
    faqs: [
      {q:"We already ran an engagement survey last year - why do we need another diagnostic?", a:"Engagement surveys measure sentiment. OrgScan measures structure - the 12 operating domains that actually cause the sentiment you're seeing. It tells you why morale is low, not just that it is."},
      {q:"How is this different from a management consultant interviewing our team for two weeks?", a:"Interviews capture opinions, which are filtered through politics and recency bias. OrgScan applies a structured, evidence-based scoring model that produces the same rigor in under 30 minutes, and it's repeatable - so you can track whether an intervention actually worked."},
      {q:"Will this create anxiety among staff who think they're being evaluated?", a:"OrgScan assesses the organisation's systems and structures, not individual performance. We frame and roll it out as a diagnostic of the operating model, and results are typically shared as aggregate findings with leadership first."},
      {q:"What happens after we get the report?", a:"The Risk Priority Matrix tells you what to fix first. Most clients move directly into a Core Transformation Project using the 7D Model, but the report stands alone as a decision-making tool even without further engagement."}
    ],
    related: ["perpetua","company-growth","transformation-execution"]
  },
  {
    id: "ai-maturity-lens",
    category: "digital-ai",
    icon: "cpu",
    diagnostic: "AI Maturity Lens",
    name: "AI Maturity Lens",
    tagline: "Self-Service AI Diagnostic, Consultancy-Grade",
    summary: "Know where you stand on AI. Know where to go. Act immediately - with a euro-denominated business case.",
    problem: "78% of companies now use AI somewhere in the business - yet 74% report no measurable return, because AI adoption and AI maturity are not the same thing, and nobody has honestly assessed which one they actually have.",
    delivers: [
      "Scores the organisation across 11 maturity dimensions: process digitisation, AI adoption, cloud maturity, automation, data intelligence, people & culture, leadership readiness, AI governance, cybersecurity, workflow efficiency, and digital customer experience.",
      "Benchmarks results against 10 sectors.",
      "Delivers an 8-page report with a quantified ROI opportunity expressed in euros.",
      "Includes an EU AI Act governance assessment specific to your systems.",
      "Provides 12 matched AI tool recommendations with vendor comparison, a 4-phase roadmap, a 90-day quick-win plan, and 12-month KPIs."
    ],
    impact: "Turns an abstract debate - \"should we invest in AI?\" - into a euro-denominated business case leadership can actually approve, the same day.",
    duration: "Under 15 minutes",
    format: "Self-service diagnostic + 8-page report",
    faqs: [
      {q:"We've already piloted three AI tools. Why do we need a maturity assessment now?", a:"Pilots test a tool. Maturity Lens tests the eleven organisational conditions - from data quality to leadership readiness - that determine whether any tool actually scales past a pilot. Most failed AI programs fail on the conditions, not the technology."},
      {q:"How do you calculate ROI before we've deployed anything?", a:"The diagnostic benchmarks your current maturity score against your sector's performance curve, then quantifies the value of closing each specific gap - in productivity hours, cost avoidance, or revenue - using the same evidence base that feeds our 4-phase roadmap."},
      {q:"Are you going to recommend your own AI tools or vendor-neutral ones?", a:"The 12 recommendations are matched to your specific maturity profile and come with a vendor comparison - we are not a reseller, so the recommendation is based on fit, not commission."},
      {q:"Does this cover the EU AI Act obligations we keep hearing about?", a:"Yes. The report includes a governance assessment mapped to the EU AI Act's risk categories for every AI system you describe, so compliance exposure is quantified alongside the opportunity."}
    ],
    related: ["eutis","fractional-caio","ai-transformation"]
  },
  {
    id: "eu-regulatory-radar",
    category: "transformation",
    icon: "radar",
    name: "EU Regulatory Radar",
    tagline: "Private, Offline Regulatory Intelligence & Proposal Engine",
    summary: "Know exactly what applies to you, what's at risk, and what to do first - before the deadline, not after the fine.",
    problem: "The EU regulatory landscape shifts weekly - AI Act, DORA, NIS2, CSRD, GDPR, Data Act, Cyber Resilience Act - and no one has time to track what changed, who it affects, and what it's worth as a consulting engagement.",
    delivers: [
      "Tracks the seven major EU regulatory frameworks live.",
      "Builds a client profile - industry, country, tech stack, existing controls.",
      "Automatically computes regulatory exposure and scores it by impact, risk, and urgency.",
      "Estimates remediation effort in consulting days and converts it to a revenue figure.",
      "A one-click Proposal Builder produces a complete scoped proposal - phases, deliverables, timeline, pricing - in under 60 seconds."
    ],
    impact: "Regulatory change stops being a compliance cost and becomes a predictable, quantified action plan - with a scoped response generated before the deadline creates a crisis.",
    duration: "Live, continuously updated",
    format: "Offline intelligence dashboard + proposal builder",
    faqs: [
      {q:"We already have external legal counsel monitoring regulation for us. What does this add?", a:"Legal counsel tells you the law changed. Regulatory Radar tells you what that change means specifically for your industry, country, and current technology stack - and quantifies the exposure in days and euros, not just legal language."},
      {q:"Which regulations does it actually track?", a:"The seven major EU frameworks currently reshaping compliance obligations: the AI Act, DORA, NIS2, CSRD, GDPR, the Data Act, and the Cyber Resilience Act - tracked live and cross-referenced against your specific profile."},
      {q:"Is our data safe if this tracks our tech stack and controls?", a:"The tool runs offline with no external data transmission, consistent with our privacy-first architecture - critical for regulated and industrial clients who cannot put sensitive operational data in a cloud platform."},
      {q:"How fast can we get a scoped response to a new regulatory requirement?", a:"The Proposal Builder generates a complete, priced proposal - phases, deliverables, timeline - in under 60 seconds once your exposure is scored, so you can move on urgent obligations immediately."}
    ],
    related: ["eutis","regulatory-transformation","esg-csrd"]
  },
  {
    id: "eutis",
    category: "transformation",
    icon: "scale",
    name: "EUTIS",
    tagline: "EU Tech Ethics & Compliance Intelligence System",
    summary: "Free, instant, browser-based compliance intelligence - no data leaves the device.",
    problem: "Organisations deploy AI hiring tools, monitoring software, and data platforms that work fine elsewhere but breach GDPR or the EU AI Act - not from bad intent, but from not knowing where the line is. Fines reach €35M or 7% of global turnover.",
    delivers: [
      "Analyses any described software, AI system, or digital practice against the EU AI Act, GDPR, the ePrivacy Directive, the EU Charter of Fundamental Rights, and CNIL guidance.",
      "Returns a 0–100 risk score and a plain classification: Safe, Moderate, High Risk, or Critical.",
      "Identifies the specific legal articles engaged by the practice in question.",
      "Provides concrete mitigation steps, not just a warning.",
      "SIRET/SIREN lookup tailors the analysis automatically to a French organisation's sector."
    ],
    impact: "Gives HR, procurement, legal, and compliance teams an instant first line of defense before a tool is deployed - not a lawyer's bill after it already is.",
    duration: "Instant",
    format: "Free, browser-based, offline analysis",
    faqs: [
      {q:"Our procurement team is not legally trained - can they actually use this?", a:"Yes. EUTIS is built for non-lawyers: describe the software or practice in plain language and receive a 0-100 risk score, a clear classification, and concrete next steps - not legal jargon."},
      {q:"Is this a substitute for a data protection lawyer?", a:"It's a first line of defense that catches the majority of avoidable risk before deployment - flagging what needs specialist legal review rather than replacing it entirely, so legal time is spent only where it's genuinely needed."},
      {q:"Does using this tool expose our data to a third party?", a:"No. It runs in the browser with no external data transmission - nothing about the system you're evaluating leaves your device."},
      {q:"We're a French SME - does it know our specific regulatory obligations?", a:"Yes. SIRET/SIREN lookup automatically tailors the analysis to your sector, so the risk assessment reflects the rules that actually apply to a company your size and type."}
    ],
    related: ["eu-regulatory-radar","ai-data-governance","ai-maturity-lens"]
  },
  {
    id: "company-growth",
    category: "transformation",
    icon: "chartUp",
    name: "Company Growth Diagnostic",
    tagline: "5-Domain Growth Scan",
    summary: "Pinpoints the real growth bottleneck - often not where leadership first assumed - in under ten minutes.",
    problem: "Revenue has stalled or margins are shrinking, and leadership assumes it's price, or the market, or the economy - often spending money in exactly the wrong place.",
    delivers: [
      "Scores financial health, commercial performance, team capability, market position, and operational delivery out of 100 each.",
      "Produces a radar chart and a domain-by-domain breakdown.",
      "The commercial module specifically diagnoses why proposals are lost - price, response time, weak pitch, missing references, or capacity.",
      "Delivers a root-cause explanation and a concrete next step for every weak domain."
    ],
    impact: "Surfaces the real bottleneck - often not where leadership first assumed it was - so budget goes to the fix that actually moves revenue.",
    duration: "Approx. 10 minutes",
    format: "Self-service diagnostic + radar chart report",
    faqs: [
      {q:"We think our pricing is the problem - why do we need a 5-domain diagnostic?", a:"Pricing is often the symptom leadership sees first, but the commercial module specifically separates whether it's price, response time, a weak pitch, missing references, or simple capacity constraints - the fix is completely different for each."},
      {q:"Is this only for companies in decline, or can healthy companies use it too?", a:"Most clients run it while performance looks fine on the surface but growth has quietly plateaued - that's exactly when an outside, evidence-based read is most valuable, before the plateau becomes a decline."},
      {q:"How is a 10-minute diagnostic more reliable than our own management reporting?", a:"Internal reporting tends to measure what's easy to measure. The diagnostic scores five interconnected domains against a consistent evidence-based model, which is how it catches blind spots that don't show up in a P&L."},
      {q:"What do we get at the end - just scores, or an action plan?", a:"A radar chart, a domain-by-domain breakdown, and for every underperforming area a root-cause explanation with a concrete next step - not just a number."}
    ],
    related: ["sentriq","orgscan","digital-transformation-sme"]
  },
  {
    id: "perpetua",
    category: "transformation",
    icon: "pulse",
    name: "PERPETUA",
    tagline: "Organisational Health Diagnostic",
    summary: "Converts \"something feels broken\" into \"here's what it is, why, and the sequence to fix it.\"",
    problem: "Targets are missed, people are leaving, decisions feel slow - leaders can sense the organisation is unwell but cannot measure it, so they can't fix it.",
    delivers: [
      "Diagnoses 13 universal dimensions: strategy, leadership, culture, people, communication, operations, collaboration, innovation, change readiness, stakeholder focus, technology, risk, and wellbeing.",
      "A root-cause engine detects specific patterns - e.g. \"Leadership Communication Breakdown\" or \"Psychological Safety Risk\" - with confidence scores.",
      "Maps each pattern to short, medium, and long-term actions with named owners.",
      "Designed to be re-run quarterly to plot organisational health over time as a trend line."
    ],
    impact: "Converts a vague feeling into a precise diagnosis in under an hour, with a trend line to prove that interventions are actually working.",
    duration: "Under an hour",
    format: "13-dimension diagnostic + root-cause engine + longitudinal tracking",
    faqs: [
      {q:"How is this different from OrgScan?", a:"OrgScan is broader and structural, covering 12 operational domains including digital and AI readiness. PERPETUA goes deeper on organisational health specifically - 13 dimensions with a root-cause engine that names behavioural and cultural patterns, and is designed to be re-run quarterly to track whether things are actually improving."},
      {q:"Can this really detect something like a leadership communication problem?", a:"Yes - the root-cause engine is built to detect named patterns like Leadership Communication Breakdown or Psychological Safety Risk from the evidence collected, each with a confidence score, rather than leaving you to infer the cause from a set of raw scores."},
      {q:"We tried a culture survey before and nothing changed afterward. Why would this be different?", a:"A survey tells you sentiment. PERPETUA maps each finding to specific short, medium, and long-term actions with named owners - so there's an accountable next step attached to every result, not just a score to file away."},
      {q:"How often should we re-run it?", a:"Quarterly is typical - it's designed for longitudinal tracking, so leadership can see health trending up or down over time and prove that a specific intervention worked."}
    ],
    related: ["orgscan","company-growth","transformation-execution"]
  },
  {
    id: "sentriq",
    category: "transformation",
    icon: "lifeBuoy",
    name: "SENTRIQ",
    tagline: "Strategic Diagnostics & Recovery Intelligence",
    summary: "Shortens the diagnostic phase of a turnaround from months to days.",
    problem: "A business is underperforming, disrupted, or facing a turnaround decision, and leadership needs a fast, credible read on how to reposition before the situation compounds.",
    delivers: [
      "Focuses specifically on recovery planning for organisations facing disruption or performance decline.",
      "Diagnoses strategic repositioning options against current market and operational reality.",
      "Identifies operational improvement levers that can be pulled fastest, given the pressure the business is under."
    ],
    impact: "Shortens the diagnostic phase of a turnaround from months to days - when speed is the client's scarcest resource.",
    duration: "Rapid - days, not months",
    format: "Recovery & repositioning diagnostic",
    faqs: [
      {q:"We're already talking to a restructuring firm - why do we need a diagnostic too?", a:"Restructuring firms typically focus on the financial and legal mechanics. SENTRIQ gives you the strategic and operational read - where the real repositioning options are - fast enough to inform those conversations rather than follow them."},
      {q:"How fast is 'fast' in a genuine crisis?", a:"Days, not months. When a business is compounding losses, the diagnostic phase itself is a cost - SENTRIQ is built to compress it without losing the rigor of an evidence-based read."},
      {q:"Is this only for companies already in crisis?", a:"It's most valuable applied early, at the first sign of disruption or decline, when repositioning options are still wide open - waiting until the crisis is undeniable narrows what's still possible."},
      {q:"What decisions does this actually inform?", a:"Whether to reposition, restructure, divest, or double down - SENTRIQ gives leadership a credible, evidence-based read on the option set before capital or credibility runs out."}
    ],
    related: ["company-growth","transformation-execution","ma-readiness"]
  },
  {
    id: "grantiq",
    category: "transformation",
    icon: "coinEuro",
    name: "GrantIQ",
    tagline: "Strategic Innovation & Funding Diagnostic",
    summary: "Turns unclaimed grant potential into a scoped, fundable pipeline.",
    problem: "Innovative companies are leaving European funding on the table because they don't know which programs they qualify for or how to prioritise R&D investment against them.",
    delivers: [
      "Assesses R&D strategy and innovation prioritisation against realistic funding routes.",
      "Evaluates European funding readiness across Horizon Europe, Eurostars, EIC, and regional programs.",
      "Identifies which routes are realistically within reach given the organisation's current maturity and evidence base."
    ],
    impact: "Turns unclaimed grant potential into a scoped, fundable pipeline - feeding directly into our Research & Grant Writing practice.",
    duration: "Structured diagnostic",
    format: "Funding & innovation-readiness diagnostic",
    faqs: [
      {q:"We've applied for grants before and been rejected. Will this just tell us to try again?", a:"No - it first diagnoses whether your R&D strategy and readiness actually fit the programs you're targeting. A rejection is often a signal you applied to the wrong route, not that the project wasn't fundable."},
      {q:"How do you know which of the dozens of EU funding programs actually apply to us?", a:"GrantIQ scores your innovation profile against the realistic requirements of Horizon Europe, Eurostars, EIC, and regional programs, so you prioritise the routes you can genuinely win rather than the ones that sound prestigious."},
      {q:"Does this include help writing the actual proposal?", a:"The diagnostic itself scopes the opportunity; it feeds directly into our Research, SOTA & EU Grant Writing practice for proposal development, work package design, and partner search once a route is confirmed."},
      {q:"Is this only for tech startups, or does it work for established manufacturers too?", a:"Any organisation running genuine R&D or innovation activity - including established industrial and manufacturing companies - can have unclaimed funding potential; the diagnostic isn't sector-limited."}
    ],
    related: ["research-grant-writing","tax-funding-advisory","ma-readiness"]
  },
  {
    id: "sensorium",
    category: "digital-ai",
    icon: "satellite",
    name: "Sensorium",
    tagline: "Perceptual Sciences Strategic Intelligence Desk",
    summary: "A purpose-built command centre replacing spreadsheets in a market moving too fast for them.",
    problem: "Investors, innovation managers, and corporate R&D teams tracking computer vision, XR, eye-tracking, and autonomous perception are still doing it in spreadsheets, in a market moving too fast for that.",
    delivers: [
      "Maintains deep company profiles - funding, patents, products, investors, positioning - across the perceptual sciences sector.",
      "Auto-scores Innovation, Growth, and Market Influence for tracked companies.",
      "Benchmarks 2–5 companies side by side on demand.",
      "Maps the competitive ecosystem as a live network graph.",
      "Ranks technology domains by momentum before it becomes obvious in the broader market."
    ],
    impact: "Replaces three or four generic tools with one purpose-built command centre - private, local, and sector-specific.",
    duration: "Live, continuously updated",
    format: "Sector-specific competitive intelligence & scoring engine",
    faqs: [
      {q:"We already subscribe to a general market intelligence platform. Why a sector-specific tool?", a:"Generic platforms cover perceptual sciences - computer vision, XR, eye-tracking, autonomous perception - as a footnote. Sensorium is purpose-built for this sector specifically, so the scoring and benchmarking is far more precise than a generalist tool can offer."},
      {q:"Can it tell us who our real competitors are, not just the obvious names?", a:"Yes - the live network graph maps the ecosystem's actual relationships and positioning, which frequently surfaces adjacent players that don't show up in a standard competitor list."},
      {q:"Is this useful for investors as well as corporate R&D teams?", a:"Both. Investors use it to benchmark targets and spot momentum shifts early; corporate R&D and innovation teams use the same data to track where technology domains are heading before it's obvious."},
      {q:"How current is the data?", a:"Sensorium maintains live company profiles - funding, patents, products, and positioning - so scoring and rankings reflect current market movement, not a quarterly snapshot."}
    ],
    related: ["grantiq","ai-transformation","ma-readiness"]
  },

  /* ============================= CORE CONSULTING ============================= */
  {
    id: "ai-transformation",
    category: "digital-ai",
    icon: "cogGear",
    diagnostic: "AI Opportunity & ROI Scan",
    name: "AI-Powered Business Transformation",
    tagline: "From experimentation to measurable business value",
    summary: "Moving organisations from AI experimentation to measurable business value.",
    problem: "\u201CEveryone wants AI. Where's the ROI?\u201D Leadership has approved AI pilots, maybe even several, but nobody can point to a euro of measurable return - and AI initiatives risk quietly dying before they ever reach the real business.",
    delivers: [
      "AI opportunity assessment mapped to your specific operating model and data reality.",
      "Productivity improvement and workflow automation programmes.",
      "AI agent implementation, from scoping through deployment.",
      "AI adoption strategy and a phased roadmap tied to measurable KPIs."
    ],
    impact: "Every engagement starts with the AI Maturity Lens diagnostic, so the roadmap is built on your actual maturity profile - not a generic framework borrowed from a bigger company in a different sector.",
    duration: "Engagement length varies by scope",
    format: "Diagnostic-anchored consulting programme",
    faqs: [
      {q:"We've run AI pilots before that went nowhere. What's different this time?", a:"Most pilots fail because the organisational conditions weren't assessed first - data quality, governance, capability, leadership readiness. This starts with AI Maturity Lens, so the roadmap addresses your actual gaps, not a generic playbook."},
      {q:"Do you build the AI tools yourselves or just advise?", a:"Both, depending on the engagement - from opportunity assessment and strategy through hands-on AI agent implementation and workflow automation, delivered through the 7D model rather than stopping at a slide deck."},
      {q:"How do you measure whether an AI initiative is actually working?", a:"The roadmap is tied to defined 12-month KPIs from the outset, and because the diagnostic can be re-run, you have a quantified before-and-after to prove impact rather than relying on anecdote."},
      {q:"We're a traditional industrial company, not a tech firm - is this relevant to us?", a:"Yes - the practice is explicitly built for SMEs and ETIs across all sectors, including industrial and manufacturing organisations, who need enterprise-grade AI strategy without enterprise-scale cost or bureaucracy."}
    ],
    also: [
      { problem: "\u201CWhy do our AI pilots never reach the real business?\u201D", diagnostic: "AI Deployment Readiness Assessment" }
    ],
    related: ["ai-maturity-lens","fractional-caio","digital-transformation-sme"]
  },
  {
    id: "digital-transformation-sme",
    category: "digital-ai",
    icon: "factory",
    diagnostic: "Process Digitisation Diagnostic",
    name: "Digital Transformation for SMEs and ETIs",
    tagline: "Modernising operations without enterprise-scale cost",
    summary: "Modernising operations for organisations that can't access enterprise-scale consulting.",
    problem: "\u201CWhy are we automating processes that shouldn't exist?\u201D Operations still run on manual processes, disconnected spreadsheets, and legacy systems - and every automation proposal risks paving over a broken process that should have been redesigned first.",
    delivers: [
      "Process optimisation and digital workflow redesign.",
      "CRM and ERP improvement and integration.",
      "Operational efficiency programmes focused on removing friction, not adding software for its own sake."
    ],
    impact: "Enterprise-class thinking, delivered through easily-engaged models and easy-to-implement support - sized for organisations that traditional consulting prices out.",
    duration: "Engagement length varies by scope",
    format: "Diagnostic-anchored consulting programme",
    faqs: [
      {q:"We're too small for a McKinsey-style engagement - is this actually built for us?", a:"Yes - this practice exists specifically because SMEs and ETIs face enterprise-class transformation pressure without enterprise-class budgets. The engagement models are built to be accessible, not scaled-down versions of big-firm pricing."},
      {q:"Will you just recommend expensive new software?", a:"No - the starting point is process optimisation and removing operational friction. Where CRM or ERP improvement genuinely solves the problem, we scope it; where the fix is process discipline, that's the recommendation instead."},
      {q:"How do you diagnose what's actually broken in our operations?", a:"Typically through OrgScan or the Company Growth Diagnostic, which identify where operational delivery is actually losing time and money before any workflow redesign begins."},
      {q:"We tried a digital transformation project before and it stalled. What's different here?", a:"Every engagement runs through the 7D Model, which includes Deploy, Drive, and Develop phases specifically to prevent the common failure mode of a project ending at recommendation with no implementation support."}
    ],
    related: ["orgscan","transformation-execution","company-growth"]
  },
  {
    id: "transformation-execution",
    category: "transformation",
    icon: "briefcaseChart",
    diagnostic: "Transformation Health Check",
    name: "Transformation Execution Office",
    tagline: "Ongoing transformation leadership",
    summary: "Ongoing transformation leadership for organisations that need more than a report.",
    problem: "\u201CWhy is our digital transformation late, expensive and under-delivering?\u201D The strategy sits in a folder, nobody owns turning it into action, and initiatives stall as soon as the consultants who wrote the deck walk out the door.",
    delivers: [
      "A fractional transformation office embedded inside your organisation.",
      "PMO support and KPI governance so initiatives have a visible owner and cadence.",
      "Leadership alignment work and execution acceleration when a programme has stalled."
    ],
    impact: "Success is measured in adoption, efficiency, cost reduction, and capability built - not in the number of slides delivered.",
    duration: "Retained, ongoing engagement",
    format: "Embedded execution leadership",
    faqs: [
      {q:"We have a strategy already. Why do we need execution support, not another strategy project?", a:"Most transformation initiatives don't fail from a lack of ambition - they fail because nobody owns execution, governance, and accountability once the strategy is written. This practice exists specifically to fill that gap."},
      {q:"Is this the same as hiring an interim executive?", a:"It's more structured - a fractional transformation office with PMO support and defined KPI governance, embedded on a recurring cadence, rather than a single individual absorbed into your org chart."},
      {q:"How do you prevent this from becoming another stalled initiative?", a:"The 7D Model's Drive and Develop phases build in KPI monitoring, governance reviews, and internal capability transfer specifically so momentum and ownership survive after the engagement ends."},
      {q:"What size of organisation is this for?", a:"Primarily SMEs, ETIs, and mid-market organisations that need senior transformation leadership but can't justify - or find - a full-time executive for it."}
    ],
    also: [
      { problem: "\u201CWhy aren't employees using the technology we paid for?\u201D", diagnostic: "Digital Adoption Assessment" }
    ],
    related: ["orgscan","fractional-caio","perpetua"]
  },
  {
    id: "regulatory-transformation",
    category: "transformation",
    icon: "gavel",
    name: "Regulatory and Responsible Transformation",
    tagline: "Navigating the EU regulatory stack without slowing down",
    summary: "Navigating the EU regulatory stack without slowing the business down.",
    problem: "The compliance team is stretched thin across the AI Act, GDPR, DORA, NIS2, and CSRD simultaneously, and the instinct is to either freeze new initiatives until everything is certain, or ignore the risk until an audit forces the issue.",
    delivers: [
      "Guidance on AI regulation and compliance requirements: the EU AI Act, GDPR, DORA, NIS2, and CSRD.",
      "Ethical transformation and governance framework design that satisfies regulators without paralysing the business."
    ],
    impact: "Regulatory clarity becomes a competitive advantage rather than a brake - the organisation moves faster because it knows exactly where the boundaries are.",
    duration: "Engagement length varies by scope",
    format: "Diagnostic-anchored advisory programme",
    faqs: [
      {q:"Should we pause our AI and digital projects until we fully understand the AI Act?", a:"No - that instinct usually costs more than it protects. EU Regulatory Radar and EUTIS quantify exactly what applies to you and what the actual exposure is, so projects can proceed with known, managed risk instead of an indefinite freeze."},
      {q:"We're being pulled between five different regulations at once. Where do we even start?", a:"EU Regulatory Radar scores exposure across all seven frameworks by impact, risk, and urgency specific to your profile - so the sequencing decision is evidence-based, not a guess."},
      {q:"Is this legal advice?", a:"No - this is strategic and governance advisory built on our regulatory intelligence tools; for matters requiring formal legal opinion, we work alongside your legal counsel rather than replacing it."},
      {q:"Does 'responsible transformation' mean slowing down AI adoption for governance reasons?", a:"The opposite - the goal is a governance framework robust enough that the business can move faster with confidence, because the boundaries and required controls are already documented."}
    ],
    related: ["eu-regulatory-radar","eutis","ai-data-governance"]
  },

  /* ============================= NEW PRACTICE AREAS ============================= */
  {
    id: "esg-csrd",
    category: "transformation",
    icon: "leaf",
    name: "ESG & CSRD Sustainability Reporting Advisory",
    tagline: "Audit-ready reporting before the deadline",
    summary: "Double-materiality assessments and CSRD gap diagnostics for first-time mandatory disclosure.",
    problem: "The Corporate Sustainability Reporting Directive is pulling thousands of mid-sized EU companies into mandatory disclosure for the first time, and most have no internal capability to produce an audit-ready report.",
    delivers: [
      "Double-materiality assessments aligned to CSRD requirements.",
      "CSRD gap diagnostics that score data availability, governance maturity, and disclosure gaps.",
      "ESG data architecture design so reporting is sustainable year over year, not a one-time scramble.",
      "Sustainability reporting delivery aligned to the European Sustainability Reporting Standards (ESRS)."
    ],
    impact: "A structured CSRD Readiness Diagnostic, built on the same TIPE evidence-based methodology as our other tools, delivers a phased roadmap to first-report readiness - before the deadline, not after the fine.",
    duration: "Engagement length varies by scope",
    format: "CSRD Readiness Diagnostic + phased roadmap",
    faqs: [
      {q:"We've never done sustainability reporting before. Where do we even start?", a:"With the CSRD Readiness Diagnostic - it scores your current data availability, governance maturity, and disclosure gaps against ESRS requirements, so the starting point is evidence, not a blank page."},
      {q:"What exactly is a double-materiality assessment, and do we really need one?", a:"It's the CSRD-mandated process of assessing both how sustainability issues affect your business and how your business affects people and the environment - it's a core, non-optional requirement for compliant disclosure, and we run it as a structured assessment rather than a workshop."},
      {q:"Our finance team is already stretched. Can you actually build the data architecture, not just tell us what's missing?", a:"Yes - ESG data architecture design is part of the offer, specifically so reporting becomes a repeatable process your team can run in future years, not a one-off consulting-dependent scramble."},
      {q:"How do we know if CSRD even applies to us yet?", a:"That's the first question the Readiness Diagnostic answers, based on your size, sector, and current reporting obligations - we scope applicability before recommending any further work."}
    ],
    related: ["eu-regulatory-radar","ai-data-governance","ma-readiness"]
  },
  {
    id: "ai-data-governance",
    category: "digital-ai",
    icon: "lockShield",
    diagnostic: "AI Governance & Risk Assessment",
    name: "AI & Data Governance Certification Readiness",
    tagline: "Provable governance, not verbal assurance",
    summary: "AI Act conformity gap assessments and audit-ready evidence packs for high-risk systems.",
    problem: "\u201CHow do we scale AI without scaling our risk?\u201D The EU AI Act's obligations for high-risk systems are now in force, and boards are asking for provable governance, not verbal assurance.",
    delivers: [
      "AI Act conformity gap assessments for every system in scope.",
      "AI governance framework design tailored to your risk profile.",
      "Model risk documentation built to withstand scrutiny.",
      "Audit-ready evidence packs mapped directly to legal articles."
    ],
    impact: "EUTIS-powered risk scoring for every AI system in use, converted into a governance file mapped directly to the specific legal articles engaged - so the client walks into an audit with documentation already built, not assembled overnight.",
    duration: "Engagement length varies by scope",
    format: "Gap assessment + governance framework + evidence pack",
    faqs: [
      {q:"How do we know if any of our AI systems count as 'high-risk' under the AI Act?", a:"EUTIS scores every system you describe against the AI Act's risk categories and returns the specific legal articles engaged, which is the starting point for the conformity gap assessment."},
      {q:"What does 'audit-ready' actually mean in practice?", a:"A governance file - model risk documentation, control evidence, mapped legal obligations - assembled before an audit happens, so you're not scrambling to produce documentation in the days after a regulator's request lands."},
      {q:"We use third-party AI tools, not ones we built ourselves. Are we still exposed?", a:"Yes - deployer obligations under the AI Act apply regardless of whether you built the system, and the gap assessment covers procured and third-party tools as part of the review."},
      {q:"Can this framework scale as we add more AI systems over time?", a:"Yes - the governance framework is designed as a repeatable structure, so new systems get scored and documented through the same process rather than triggering a fresh project each time."}
    ],
    related: ["eutis","ai-maturity-lens","fractional-caio"]
  },
  {
    id: "cyber-resilience",
    category: "transformation",
    icon: "serverShield",
    name: "Cybersecurity & Operational Resilience Diagnostic",
    tagline: "Board-level, personally-liable obligations, quantified",
    summary: "Rapid resilience scanning cross-referenced against live EU regulation for DORA, NIS2, and the Cyber Resilience Act.",
    problem: "DORA, NIS2, and the Cyber Resilience Act have made resilience a board-level, personally-liable obligation for a much wider set of companies than before - most of whom have never run a structured resilience assessment.",
    delivers: [
      "Cybersecurity maturity diagnostics benchmarked against sector expectations.",
      "NIS2/DORA exposure mapping specific to your entity classification.",
      "Incident response and business continuity planning.",
      "Vendor and third-party risk review."
    ],
    impact: "A rapid resilience scan cross-referenced against EU Regulatory Radar's live regulation database, so exposure, required controls, and remediation cost are quantified in the same sitting - not in a separate engagement three months later.",
    duration: "Rapid diagnostic",
    format: "Resilience scan + exposure mapping + remediation plan",
    faqs: [
      {q:"We're not a bank or a critical infrastructure provider - does NIS2 even apply to us?", a:"NIS2 significantly widened the set of companies in scope, including many mid-sized organisations across manufacturing, digital services, and other sectors that weren't previously covered - the exposure mapping determines your specific classification."},
      {q:"Our board is now personally liable for this - what does that actually require of us?", a:"DORA and NIS2 both introduce management-body accountability, meaning the board needs to demonstrate active oversight of cyber risk, not just delegate it - the diagnostic produces the evidence base that oversight requires."},
      {q:"We've never run a formal resilience assessment. Where do we start?", a:"With the rapid resilience scan - it's cross-referenced against the live regulatory database, so exposure and required controls are quantified in a single sitting rather than a lengthy separate audit."},
      {q:"Does this cover our vendors and suppliers, or just internal systems?", a:"Both - vendor and third-party risk review is included, since NIS2 and DORA both extend accountability into the supply chain."}
    ],
    related: ["eu-regulatory-radar","ai-data-governance","ma-readiness"]
  },
  {
    id: "ma-readiness",
    category: "transformation",
    icon: "handshake",
    name: "M&A and Investment Readiness Diagnostic",
    tagline: "Diagnose your own gaps before capital moves",
    summary: "Pre-deal organisational and AI-maturity due diligence for buy-side and sell-side clients.",
    problem: "Buyers and investors increasingly want organisational and AI-maturity due diligence, not just financial due diligence - and sellers who diagnose their own gaps first negotiate from a stronger position.",
    delivers: [
      "Pre-deal organisational health and AI-maturity diagnostics for both buy-side and sell-side clients.",
      "Integration-readiness assessments ahead of a transaction closing.",
      "Post-merger 90-day transformation planning."
    ],
    impact: "Run OrgScan and AI Maturity Lens as a pre-deal diagnostic pack, producing a board-ready report that either strengthens a sale narrative or de-risks an acquisition before capital moves.",
    duration: "Structured pre-deal engagement",
    format: "OrgScan + AI Maturity Lens diagnostic pack",
    faqs: [
      {q:"We're selling the business - won't a diagnostic just surface problems that hurt our valuation?", a:"Surfacing gaps before a buyer's due diligence team finds them lets you address or contextualise them on your own terms - sellers who diagnose first typically negotiate from a stronger position, not a weaker one."},
      {q:"We're the buyer. Isn't financial due diligence enough?", a:"Financial due diligence tells you what the business is worth today; organisational and AI-maturity due diligence tells you whether it can execute the plan you're paying for - a growing number of buyers now require both."},
      {q:"What happens in the first 90 days after a merger closes?", a:"That's covered by post-merger 90-day transformation planning - turning integration intent into a structured, owned plan from day one, rather than letting integration drift in the chaos after signing."},
      {q:"Can this run fast enough to fit inside a deal timeline?", a:"Yes - it's built as a pre-deal diagnostic pack (OrgScan plus AI Maturity Lens) specifically designed to produce a board-ready report within a typical transaction timeline."}
    ],
    related: ["orgscan","ai-maturity-lens","sentriq"]
  },
  {
    id: "fractional-caio",
    category: "digital-ai",
    icon: "userStar",
    diagnostic: "AI Adoption Diagnostic",
    name: "Fractional Chief AI Officer (vCAIO)",
    tagline: "Senior AI leadership without a full-time hire",
    summary: "A part-time, embedded AI leadership function with recurring board reporting.",
    problem: "\u201CWe bought AI tools. Why aren't people using them?\u201D Most SMEs and ETIs need senior AI leadership to drive adoption and governance, but cannot justify - or find - a full-time hire for it.",
    delivers: [
      "Portfolio prioritisation across competing AI initiatives.",
      "Vendor selection support grounded in your actual maturity profile.",
      "Governance oversight for AI systems in use or under evaluation.",
      "Board reporting on a recurring cadence."
    ],
    impact: "AI Maturity Lens as the recurring instrument - re-run quarterly - with the vCAIO translating each new score into an updated action plan, so AI leadership is continuous rather than a one-off engagement.",
    duration: "Retained, recurring engagement",
    format: "Embedded fractional leadership",
    faqs: [
      {q:"We can't afford a full-time Chief AI Officer. Is a fractional role actually effective?", a:"Yes - it's built specifically for organisations in that position: senior AI leadership and governance oversight on a part-time, recurring cadence, without the cost or hiring risk of a full-time executive search."},
      {q:"How does the vCAIO stay current on where we actually stand?", a:"AI Maturity Lens is re-run quarterly as the recurring instrument, and the vCAIO translates each updated score directly into a revised action plan - so leadership isn't working from a stale assessment."},
      {q:"Will the vCAIO actually make vendor decisions, or just advise?", a:"Vendor selection support is grounded in your maturity profile and delivered as a recommendation with comparison - final decisions remain with your leadership, with the vCAIO providing the evidence base."},
      {q:"What does board reporting look like in practice?", a:"A recurring cadence of structured updates translating AI portfolio status, governance posture, and maturity trend into terms a board can act on - not a raw dashboard."}
    ],
    related: ["ai-maturity-lens","ai-transformation","ai-data-governance"]
  },
  /* ============================= RESEARCH, FUNDING & KNOWLEDGE ============================= */
  {
    id: "research-grant-writing",
    category: "transformation",
    icon: "bookOpen",
    name: "Research, SOTA & EU Grant Writing",
    tagline: "From literature review to funded proposal",
    summary: "State-of-the-art literature review, Horizon Europe proposal writing, and consortium building.",
    problem: "Your R&D team has genuinely fundable innovation, but nobody internally has the specialist skill to translate it into a competitive proposal against EU funding criteria - and the deadline is in six weeks.",
    delivers: [
      "State-of-the-art (SOTA) and literature review writing.",
      "Horizon Europe proposal writing and work package design.",
      "Interreg Rhin Supérieur cross-border proposals.",
      "ANR proposal support, Erasmus+ proposals, Digital Europe Programme and LIFE Programme support.",
      "Eurostars / EIC support for innovative SMEs.",
      "Consortium and partner search, independent proposal review and quality check, and post-award grant compliance & reporting."
    ],
    impact: "Feeds directly from GrantIQ's funding-readiness diagnostic - so proposal effort is only spent on routes you're realistically positioned to win.",
    duration: "Engagement length varies by proposal cycle",
    format: "End-to-end proposal development",
    faqs: [
      {q:"We've never written a Horizon Europe proposal before. Is that a problem?", a:"No - this is a full-service practice covering work package design, consortium and partner search, and quality review, built for teams doing this for the first time as much as experienced applicants."},
      {q:"Can you review a proposal we've already drafted rather than write it from scratch?", a:"Yes - independent proposal review and quality check is offered as a standalone service for proposals already in progress."},
      {q:"Do you help find consortium partners, or do we need to source those ourselves?", a:"Consortium and partner search is part of the offer - critical for programmes like Horizon Europe and Interreg that require multi-partner consortia."},
      {q:"What happens after we win the grant?", a:"Post-award grant compliance and reporting support is included, so the administrative burden of managing an awarded grant doesn't fall entirely on your team."}
    ],
    related: ["grantiq","tax-funding-advisory"]
  },
  {
    id: "tax-funding-advisory",
    category: "transformation",
    icon: "calculator",
    name: "Tax & Innovation Funding Advisory",
    tagline: "CIR, CII, rescrit fiscal & JEI status",
    summary: "Crédit d'Impôt Recherche and Crédit d'Impôt Innovation eligibility, dossier preparation, and audit defense.",
    problem: "You suspect your R&D activity qualifies for the Crédit d'Impôt Recherche or Crédit d'Impôt Innovation, but the eligibility rules are technical, the dossier requirements are exacting, and a tax audit two years from now needs to withstand scrutiny.",
    delivers: [
      "Crédit d'Impôt Recherche (CIR) eligibility assessment and dossier preparation.",
      "Crédit d'Impôt Innovation (CII) eligibility assessment and dossier preparation.",
      "Rescrit fiscal CIR/CII filing for an advance opposable ruling.",
      "JEI (Jeune Entreprise Innovante) status advisory.",
      "CIR/CII technical dossier defense during a tax audit."
    ],
    impact: "Part of the Innovation Funding Shield bundle - a recurring annual relationship that protects funding claims year after year, not a single filing.",
    duration: "Annual cycle + audit-response support",
    format: "Eligibility assessment + dossier + audit defense",
    faqs: [
      {q:"How do we know if our R&D activity actually qualifies for CIR or CII?", a:"That's the first step - a structured eligibility assessment against the technical criteria for each credit, since CIR and CII have different thresholds and neither is automatic just because R&D spending occurred."},
      {q:"We claimed CIR last year without help and now face an audit. Can you still assist?", a:"Yes - CIR/CII technical dossier defense during a tax audit is offered specifically for this situation, building the technical justification the audit requires."},
      {q:"What is a rescrit fiscal and why would we want one?", a:"It's an advance ruling from the tax administration confirming your CIR/CII eligibility before you file - it gives legal certainty and protection against later challenge, which the filing service supports directly."},
      {q:"Is this a one-time service or does it need repeating?", a:"CIR/CII eligibility should be reassessed annually as R&D activity evolves - this is why it's typically delivered as part of the Innovation Funding Shield, a recurring annual client relationship."}
    ],
    related: ["research-grant-writing","grantiq"]
  },
  {
    id: "knowledge-management",
    category: "knowledge",
    icon: "archiveBook",
    name: "Knowledge Management",
    tagline: "Capture what leaves when people do",
    summary: "Knowledge capture & transfer systems, documentation & SOP systems design.",
    problem: "Critical operational knowledge exists only in the heads of two or three long-tenured employees, and every retirement or resignation risks taking irreplaceable know-how with it.",
    delivers: [
      "Knowledge capture and transfer systems tailored to how your teams actually work.",
      "Documentation and SOP (Standard Operating Procedure) systems design.",
      "Cross-border knowledge transfer advisory for multi-site or multinational organisations."
    ],
    impact: "Converts tacit, at-risk knowledge into a documented, transferable organisational asset - before it walks out the door.",
    duration: "Engagement length varies by scope",
    format: "Systems design + implementation support",
    faqs: [
      {q:"We have some documentation already, just scattered and outdated. Is that still worth fixing?", a:"Yes - most organisations have partial documentation; the work is usually consolidating it into a coherent, maintainable SOP system rather than starting from zero."},
      {q:"Our expertise is very specialised and hard to write down. Can this really capture it?", a:"Knowledge capture systems are designed around how your specific teams actually work and think, not a generic template - the goal is capturing tacit expertise in a usable form, which takes structured elicitation, not just a documentation template."},
      {q:"We operate across several countries. Does that complicate this?", a:"Cross-border knowledge transfer advisory is a specific part of the offer, addressing the added complexity of multi-site and multinational knowledge transfer directly."},
      {q:"Who maintains the documentation after your engagement ends?", a:"Systems are designed for your team to own and update going forward - the goal is a sustainable internal capability, not a one-time document dump that goes stale."}
    ],
    related: ["orgscan","digital-transformation-sme"]
  },

  /* ============================= INDUSTRIAL ENGINEERING & OPERATIONS EXCELLENCE =============================
     Problem -> Diagnosis -> Solution ordering. Each entry answers:
     1. The Problem (client quote + what it costs), 2. Diagnosis (how we find the root cause),
     3. The Solution (what we implement). Rendered on service-detail.html in that order. */

  {
    id: "capacity-throughput",
    category: "operations",
    icon: "factory",
    diagnostic: "Capacity & Bottleneck Diagnostic",
    name: "Capacity & Throughput Optimisation",
    tagline: "01 — Increase Production Capacity",
    summary: "Identify bottlenecks. Unlock hidden capacity. Produce more with existing resources.",
    problem: "\u201CWhy can\u2019t we produce more with the factory we already have?\u201D Orders are growing but output is flat. Overtime rises, WIP piles up between stations, and leadership debates buying new equipment - while the real constraint is a single bottleneck nobody has quantified.",
    diagnosis: [
      "Bottleneck analysis: map every workstation's actual vs. theoretical throughput to name the true constraint, not the loudest symptom.",
      "Line balancing assessment: measure takt time, cycle times, and operator workload balance across the line.",
      "Capacity modelling: quantify demonstrated vs. hidden capacity under current shifts, staffing, and mix.",
      "Throughput baseline: establish current throughput, WIP levels, and lead time before any change."
    ],
    delivers: [
      "Bottleneck analysis with a ranked constraint list and quantified capacity gain per fix.",
      "Line balancing: rebalance workloads, re-sequence tasks, and remove idle/wait time at the constraint.",
      "Capacity modelling: shift, staffing, and mix scenarios showing what the existing factory can actually produce.",
      "Throughput improvement plan: 90-day actions to lift output without new capex, with KPIs to sustain it."
    ],
    impact: "Produce more with the factory you already own. Hidden capacity - typically 10–30% in unbalanced lines - is converted into saleable output before any investment in new equipment is considered.",
    duration: "4–8 weeks diagnostic + implementation",
    format: "On-site diagnostic + capacity model + implementation support",
    faqs: [
      {q:"Do we need to buy new machines to produce more?", a:"Usually not first. Most plants we assess carry 10–30% hidden capacity trapped behind one or two bottlenecks. We quantify that before any capex discussion, so equipment is only bought when the model proves it is the constraint."},
      {q:"How do you find the real bottleneck?", a:"By measuring actual throughput station by station against takt time - not by asking where people feel the pressure. The loudest station is rarely the true constraint."},
      {q:"Will this disrupt current production?", a:"Diagnosis runs alongside production with time studies and data collection. Rebalancing is phased so output is protected during the change."},
      {q:"How do we know the gain will hold?", a:"We leave a capacity model and throughput KPIs with your team, tracked through the 7D Drive phase, so regression is visible immediately."}
    ],
    related: ["oee-reliability","lean-cost","production-flow"]
  },
  {
    id: "oee-reliability",
    category: "operations",
    icon: "cogGear",
    diagnostic: "OEE & Loss Analysis",
    name: "OEE & Reliability Improvement",
    tagline: "02 — Eliminate Production Losses",
    summary: "Reduce downtime. Improve equipment effectiveness. Increase reliability.",
    problem: "\u201CWhere are we losing valuable production time?\u201D Availability, performance, and quality losses hide inside unplanned stops, micro-stoppages, and slow cycles. Without OEE measured correctly, maintenance stays reactive and the same failures repeat every month.",
    diagnosis: [
      "OEE analysis: measure Availability, Performance, and Quality losses by machine and line to build a true baseline.",
      "Downtime root-cause mapping: separate planned vs. unplanned stops and rank the top loss categories in hours and euros.",
      "Maintenance maturity review: assess preventive vs. reactive ratio, spare-parts readiness, and standard compliance.",
      "Equipment performance benchmarking across shifts and products to expose variation."
    ],
    delivers: [
      "OEE analysis with a loss-tree showing exactly where production time goes.",
      "Downtime root-cause elimination for the top 3–5 recurring failure modes.",
      "Preventive maintenance plan: schedules, checklists, and ownership calibrated to criticality.",
      "Equipment performance improvement: speed-loss recovery, changeover reduction, and operator care routines."
    ],
    impact: "Every OEE point recovered is capacity you already paid for. Reducing unplanned downtime and repeat failures directly lifts throughput, stabilises planning, and defers capital spending.",
    duration: "4–6 weeks diagnostic + rollout",
    format: "On-site OEE diagnostic + maintenance system + coaching",
    faqs: [
      {q:"We already track downtime on paper. Why is OEE different?", a:"Paper logs capture that a stop happened. OEE separates availability, speed, and quality losses, quantifies each in hours and euros, and ranks them - so maintenance targets the losses that actually move output."},
      {q:"Our maintenance team is already overloaded. Will this add work?", a:"It replaces reactive firefighting with a prioritised preventive plan focused on the few failure modes that cause most of the loss - total workload typically falls once repeats stop."},
      {q:"Does this require new sensors or software?", a:"No. We start with structured manual measurement and existing PLC/data where available. Instrumentation is only recommended when the loss analysis proves it pays back."},
      {q:"How fast will we see results?", a:"Top downtime causes are usually addressable within the first 90 days. OEE trend is then tracked to prove the gain holds across shifts."}
    ],
    related: ["capacity-throughput","production-flow","process-quality"]
  },
  {
    id: "lean-cost",
    category: "operations",
    icon: "chartUp",
    diagnostic: "Cost & Productivity Diagnostic",
    name: "Lean Operations & Cost Reduction",
    tagline: "03 — Reduce Manufacturing Costs",
    summary: "Eliminate waste. Streamline processes. Improve labour and material productivity.",
    problem: "\u201CWhy does it cost more than it should to manufacture our products?\u201D Labour, material, and overhead creep upward while value-added time stays flat. Overproduction, waiting, transport, rework, and excess motion consume margin - but no value-stream map exists to show where.",
    diagnosis: [
      "Value-stream mapping: map material and information flow from order to delivery to expose non-value-added time.",
      "Waste audit: quantify the classic wastes (overproduction, waiting, transport, inventory, motion, over-processing, defects) in cost terms.",
      "Labour and material productivity analysis: standard vs. actual hours, scrap, and consumable variance by product.",
      "Cycle-time study to separate value-added from non-value-added time per operation."
    ],
    delivers: [
      "Value-stream mapping with current-state and future-state maps and a prioritised kaizen pipeline.",
      "Waste elimination: targeted actions on the highest-cost wastes first, with euro savings attached.",
      "Standard work: documented best-method work instructions, workstation layout, and 5S where it pays.",
      "Cycle-time reduction: flow improvements that cut lead time and free working capital tied in WIP."
    ],
    impact: "Cost comes out without cutting capability. Labour and material productivity rise because waste - not headcount - is removed, protecting quality and delivery while margin recovers.",
    duration: "6–10 weeks diagnostic + kaizen waves",
    format: "Value-stream diagnostic + kaizen implementation + standard work",
    faqs: [
      {q:"Is lean just headcount reduction by another name?", a:"No. We target waste - waiting, transport, over-processing, excess inventory - and quantify savings in euros before any staffing discussion. Headcount reduction without waste removal just overloads the remaining team."},
      {q:"Will standard work slow down our experienced operators?", a:"Standard work captures the best current method, including theirs. It reduces variation between shifts, which is usually where the cost hides."},
      {q:"How do savings get verified?", a:"Each kaizen action carries a before/after measure in hours, scrap, or euros, reviewed in the Drive phase - not claimed as an estimate."},
      {q:"Does lean work in high-mix, low-volume environments?", a:"Yes - the tools differ (smaller batches, SMED, flexible standards) but the principle is identical: expose waste specific to your mix rather than copying an automotive template."}
    ],
    related: ["capacity-throughput","process-quality","production-flow"]
  },
  {
    id: "process-quality",
    category: "operations",
    icon: "target",
    diagnostic: "Quality & Yield Diagnostic",
    name: "Process Quality Optimisation",
    tagline: "04 — Improve Quality at the Source",
    summary: "Prevent defects. Reduce scrap and rework. Stabilise processes.",
    problem: "\u201CHow much are defects and rework costing our business?\u201D Scrap, rework, sorting, warranty claims, and customer complaints consume margin and credibility. Inspection catches defects late - after the cost is already spent - because the process itself is not capable or controlled.",
    diagnosis: [
      "Defect and scrap Pareto: quantify cost of poor quality (scrap, rework, sorting, claims) by defect type and station.",
      "Root-cause analysis: 5-Why, fishbone, and process mapping to trace each top defect to its true source.",
      "Process capability study: measure Cp/Cpk on critical characteristics to prove whether the process can hold tolerance.",
      "Control-point review: assess where inspection happens vs. where the defect is created."
    ],
    delivers: [
      "Root-cause analysis with verified corrective actions for the top defect families.",
      "Scrap and rework reduction plan with containment, correction, and prevention steps sequenced by payback.",
      "Statistical process control (SPC): control plans, sampling, and reaction rules at the source - not at final inspection.",
      "Process capability improvement: parameter optimisation and mistake-proofing (poka-yoke) to hold gains."
    ],
    impact: "Quality shifts from detection to prevention. Scrap and rework costs fall, first-pass yield rises, and customer complaints drop - freeing capacity that rework was silently consuming.",
    duration: "6–8 weeks diagnostic + SPC deployment",
    format: "Quality diagnostic + SPC/control plan + shop-floor coaching",
    faqs: [
      {q:"Can't we just add more inspection?", a:"Inspection sorts good from bad after the cost is spent. We move control to the operation that creates the defect, so fewer defects are made in the first place - that is where the money is."},
      {q:"Our defects seem random. Will SPC still help?", a:"'Random' defects usually mean uncontrolled variation. A capability study proves whether the process can hold tolerance; SPC then makes drift visible before it becomes scrap."},
      {q:"How do you handle supplier-caused defects?", a:"Incoming variation is measured as part of the study, with specifications and containment rules tightened where the data proves the source is upstream."},
      {q:"Will operators actually follow control plans?", a:"Plans are built with operators at the gemba, with simple reaction rules - not binder documents. Compliance is audited in the first 90 days until it becomes routine."}
    ],
    related: ["lean-cost","oee-reliability","capacity-throughput"]
  },
  {
    id: "production-flow",
    category: "operations",
    icon: "refresh",
    diagnostic: "Flow & Scheduling Diagnostic",
    name: "Production Flow & Scheduling Optimisation",
    tagline: "05 — Deliver On Time",
    summary: "Improve scheduling. Reduce work in progress. Shorten production lead times.",
    problem: "\u201CWhy are we missing delivery dates despite running at full capacity?\u201D The shop floor looks busy but orders ship late. Schedules are rebuilt daily, expediting is routine, WIP hides everywhere, and the plan ignores the real bottleneck - so promises made to customers were never achievable.",
    diagnosis: [
      "Planning audit: assess how schedules are built, what data feeds them, and where expediting overrides the plan.",
      "WIP and lead-time mapping: quantify WIP by stage and correlate it with actual vs. promised lead times.",
      "Bottleneck-aware capacity check: test whether the schedule respects the constraint's true throughput.",
      "On-time-delivery root-cause split: late material, capacity, quality holds, or planning logic - ranked by impact."
    ],
    delivers: [
      "Production scheduling redesign: bottleneck-aware sequencing rules and frozen-zone discipline.",
      "Work-in-progress reduction: WIP caps, pull signals, and visual management to expose flow breaks.",
      "Bottleneck-aware planning: finite-capacity logic so promised dates match what the constraint can deliver.",
      "Lead-time optimisation: smaller transfer batches, layout and handoff fixes that shorten order-to-ship time."
    ],
    impact: "Busy stops being confused with productive. WIP falls, lead times shorten, and on-time delivery rises - because the schedule finally reflects reality instead of wishful capacity.",
    duration: "5–8 weeks diagnostic + scheduling redesign",
    format: "Flow diagnostic + planning redesign + shop-floor implementation",
    faqs: [
      {q:"Do we need new planning software?", a:"Rarely at first. Most late-delivery problems are planning logic and discipline - ignoring the bottleneck, no frozen zone, unlimited WIP - which better rules fix before any software purchase."},
      {q:"Will reducing WIP risk starving the line?", a:"WIP caps are set from measured throughput and variability, with buffers kept where they protect the bottleneck. Flow becomes more stable, not more fragile."},
      {q:"Our mix changes constantly. Can any schedule hold?", a:"High mix is exactly why bottleneck-aware sequencing and frozen zones matter most. The system is designed for your mix, not a fixed-product assumption."},
      {q:"How is on-time delivery measured after the project?", a:"OTD, lead time, and WIP turns are tracked as the three headline KPIs in the Drive phase, with weekly review until the trend is stable."}
    ],
    related: ["capacity-throughput","oee-reliability","lean-cost"]
  },

  /* ============================= OPERATIONS (cont.) ============================= */
  {
    id: "labour-productivity",
    category: "operations",
    icon: "users",
    diagnostic: "Labour Productivity Diagnostic",
    name: "Workforce Productivity Optimisation",
    tagline: "Produce the same output with the team you have",
    summary: "Work measurement, workforce optimisation, and standard work - staffing by engineered fact, not gut feel.",
    problem: "\u201CWhy do we need more people for the same output?\u201D Headcount grows but output per person stays flat. Overtime, agency staff, and firefighting mask the real issue: work that was never measured, standards that don't exist, and staffing set by history instead of evidence.",
    diagnosis: [
      "Work measurement: time studies and activity sampling to establish what each operation should actually take.",
      "Staffing and workload analysis: required vs. actual headcount by station, shift, and product mix.",
      "Standard-work gap review: which tasks have a defined best method - and which run on habit.",
      "Productivity variance analysis across shifts, teams, and products to expose where output leaks."
    ],
    delivers: [
      "Work measurement with engineered time standards for key operations.",
      "Workforce optimisation: right-sized staffing models flexed to demand and mix.",
      "Standard work: documented best methods that lift the average shift to the best shift's level.",
      "Productivity redesign: layout, allocation, and routine changes that remove idle and waiting time."
    ],
    impact: "Output per person rises without speed-ups or hiring rounds - because overstaffing, imbalance, and non-standard methods are replaced with measured standards the team helped build.",
    duration: "4–6 weeks diagnostic + implementation",
    format: "On-site work-study diagnostic + staffing model + coaching",
    faqs: [
      {q:"Is this just a headcount-cutting exercise?", a:"No. We measure first and staff to the work - in many plants the finding is misallocation between stations, not overall overstaffing. Any reduction comes from removing idle time, not from arbitrary targets."},
      {q:"Will time studies create conflict with operators and unions?", a:"Studies are done transparently, with operators involved in defining the best method. Standard work protects people from arbitrary pace-setting because the standard is evidence both sides can see."},
      {q:"Our mix changes constantly - do standards still hold?", a:"Yes. Standards are built per operation with mix-flex rules, so staffing flexes with demand instead of being reset by argument every month."},
      {q:"How is the gain sustained?", a:"Staffing models and productivity KPIs stay with your supervisors, reviewed in the 7D Drive phase until the new routines hold."}
    ],
    related: ["capacity-throughput","lean-cost","production-flow"]
  },
  {
    id: "automation-roi",
    category: "operations",
    icon: "rocket",
    diagnostic: "Automation ROI Assessment",
    name: "Automation ROI & Industry 4.0 Roadmapping",
    tagline: "Automate what pays, fix what doesn't",
    summary: "Automation roadmap, ROI modelling, and staged Industry 4.0 - payback before purchase orders.",
    problem: "\u201CWhy aren't our automation investments paying off?\u201D Robots, conveyors, or software were bought to save labour, but payback never arrives - because the process was automated before it was stabilised, or the business case was built on assumptions nobody tested.",
    diagnosis: [
      "Automation readiness review: is the process stable, standardised, and measured enough to automate?",
      "ROI modelling of existing and planned automation against measured labour, quality, and throughput data.",
      "Bottleneck check: will automating this station actually lift plant output - or just move the queue?",
      "Industry 4.0 opportunity scan: sensors, connectivity, and data use ranked by payback, not novelty."
    ],
    delivers: [
      "Automation roadmap sequenced by payback - what to automate, in what order, and what to fix first.",
      "ROI modelling with honest assumptions your finance team can audit.",
      "Targeted process automation scoped to proven constraints, not showroom demos.",
      "Staged Industry 4.0 plan: connectivity and data capture that earns its keep at each step."
    ],
    impact: "Automation stops being a gamble. Every euro of capex is tied to a measured constraint and a modelled payback - and premature automation of unstable processes is stopped before it burns budget.",
    duration: "3–5 weeks assessment + roadmap",
    format: "On-site readiness assessment + ROI model + roadmap",
    faqs: [
      {q:"We already bought automation that underperforms. Can you still help?", a:"Yes - we diagnose why (wrong station, unstable process, overstated assumptions) and build the recovery plan: re-scope, re-sequence, or repurpose before any new spending."},
      {q:"Do you sell automation equipment?", a:"No. We are vendor-neutral, so the roadmap recommends what fits your constraint and payback - not a preferred supplier's catalogue."},
      {q:"Should we automate before or after lean improvements?", a:"After stabilising, before scaling: automate the proven, standardised process. The assessment tells you exactly where each candidate process sits on that path."},
      {q:"Is Industry 4.0 relevant for a mid-sized plant?", a:"In staged form, yes - a few well-placed sensors on the constraint often beat a plant-wide platform. We rank each step by payback."}
    ],
    related: ["capacity-throughput","data-readiness","digital-integration"]
  },

  /* ============================= DIGITAL & AI (cont.) ============================= */
  {
    id: "data-readiness",
    category: "digital-ai",
    icon: "scanLine",
    diagnostic: "Data Readiness Diagnostic",
    name: "Data Readiness & Governance",
    tagline: "Data you can run the business - and AI - on",
    summary: "Data quality, governance, and architecture - trusted definitions, owned data, and AI-ready foundations.",
    problem: "\u201CWe have more data than ever. Why can't we trust it?\u201D Duplicates, conflicting definitions, and spreadsheets-behind-the-system mean every report is debated instead of acted on - and every AI project inherits the same untrusted foundation.",
    diagnosis: [
      "Data quality sampling: accuracy, completeness, and duplication measured on the datasets decisions actually use.",
      "Governance and ownership audit: who defines each metric, who owns each source, and where nobody does.",
      "Architecture and master-data review: how product, customer, and asset data flows - or doesn't - between systems.",
      "AI fitness check: can priority AI use cases be fed with data worth trusting?"
    ],
    delivers: [
      "Data quality remediation plan sequenced by decision impact, not dataset size.",
      "Data governance: ownership, definitions, and stewardship routines that stick.",
      "Data architecture and master-data design that ends re-typing and reconciliation.",
      "Trusted, governed datasets ready to feed reporting - and AI - without disclaimers."
    ],
    impact: "Debates about numbers end. Decisions accelerate, AI projects start on solid ground, and the hidden full-time jobs of reconciling spreadsheets disappear.",
    duration: "4–6 weeks diagnostic + remediation plan",
    format: "Data diagnostic + governance design + implementation support",
    faqs: [
      {q:"Do we need a data warehouse or lake first?", a:"Not necessarily. We fix definitions, ownership, and quality on the data you already have first - platform decisions follow the diagnosis, not the other way round."},
      {q:"Our problem is really the ERP data. Is that in scope?", a:"Yes - ERP, MES, and CRM sources are usually the core of the assessment, since they feed both management reporting and any future AI."},
      {q:"Who owns data governance after you leave?", a:"Named stewards in your organisation, with lightweight routines - governance designed to survive without consultants."},
      {q:"Can AI projects start before data is perfect?", a:"Yes - the AI fitness check sequences use cases by data readiness, so high-readiness pilots start while deeper remediation runs in parallel."}
    ],
    related: ["digital-integration","ai-transformation","ai-knowledge-readiness"]
  },
  {
    id: "digital-integration",
    category: "digital-ai",
    icon: "handshake",
    diagnostic: "Digital Architecture Audit",
    name: "Systems Integration & Digital Architecture",
    tagline: "Twenty systems, one architecture",
    summary: "System integration, legacy modernisation, and digital architecture - end re-typing, connect the flows.",
    problem: "\u201CWe have 20 systems - why don't they talk to each other?\u201D ERP, MES, CRM, and shop-floor tools were bought one by one. Now data is re-typed, interfaces break, and nobody owns the architecture - so every new tool adds to the sprawl.",
    diagnosis: [
      "Systems and interface inventory: what you run, what connects to what, and what runs on spreadsheets in between.",
      "Integration pain mapping: where re-typing, delays, and breakages actually cost time and errors.",
      "Legacy modernisation triage: keep, wrap, or replace - decided per system by cost and constraint, not fashion.",
      "API and data-flow assessment: what can already be connected cheaply vs. what needs structural work."
    ],
    delivers: [
      "System integration roadmap that kills re-typing at the highest-cost handoffs first.",
      "Legacy modernisation plan with honest keep/wrap/replace decisions.",
      "Digital architecture blueprint your IT team - or vendors - can actually build to.",
      "API and data-flow implementation support through the 7D Deploy phase."
    ],
    impact: "Systems start serving the process instead of fragmenting it. Lead times shorten, errors fall, and future purchases plug into an architecture instead of adding another island.",
    duration: "4–6 weeks audit + blueprint",
    format: "Architecture audit + blueprint + implementation support",
    faqs: [
      {q:"Will you just recommend replacing our ERP?", a:"Only if the evidence says so. Most integration value comes from connecting what you have and modernising selectively - replacement is the last resort, not the opening proposal."},
      {q:"Our shop floor runs on legacy machines. Can they be integrated?", a:"Often yes with pragmatic gateways and staged connectivity - the triage separates what integrates cheaply from what genuinely needs replacement."},
      {q:"Who builds it - you or our IT?", a:"We design the blueprint and stay through delivery governance; your IT or chosen vendors build, so knowledge stays in-house."},
      {q:"How do we stop sprawl from returning?", a:"The blueprint includes ownership and purchase-governance rules, so the next tool request is judged against the architecture."}
    ],
    related: ["data-readiness","digital-transformation-sme","ai-transformation"]
  },

  /* ============================= KNOWLEDGE ============================= */
  {
    id: "knowledge-discovery",
    category: "knowledge",
    icon: "magnifier",
    diagnostic: "Knowledge Discovery Audit",
    name: "Knowledge Discovery & Findability",
    tagline: "Find it in seconds, trust what you find",
    summary: "Enterprise search, knowledge architecture, and taxonomy - plus the governance that makes results trustworthy.",
    problem: "\u201CWe have the knowledge. Why can't anyone find it?\u201D Documents live in personal drives and SharePoint sprawl. Engineers redo work that already exists because search returns noise - and nobody knows which version to trust.",
    diagnosis: [
      "Discovery audit: timed findability tests on the documents teams actually need each week.",
      "Knowledge architecture review: where content lives, how it is structured, and where it goes to die.",
      "Taxonomy and retrieval assessment: metadata, naming, and search behaviour measured against real queries.",
      "Trust review: version control, ownership, and freshness - which results deserve confidence."
    ],
    delivers: [
      "Enterprise search improvement tuned to your real queries, not generic relevance.",
      "Knowledge architecture redesign that ends drive-and-hope storage.",
      "Taxonomy and information-retrieval standards your authors can actually follow.",
      "Content governance: ownership, version control, and quality routines so results stay trustworthy."
    ],
    impact: "Search stops being archaeology. Engineers find proven answers in seconds, repeat work collapses, and every document carries visible ownership and currency.",
    duration: "3–5 weeks audit + redesign",
    format: "Discovery audit + architecture + search tuning + governance",
    faqs: [
      {q:"Will this force everyone into a new tool?", a:"No. We fix structure, metadata, and governance first - usually inside tools you already own. New tooling is only proposed when the audit proves the current stack cannot do the job."},
      {q:"Our documents are a mess spanning a decade. Where do we start?", a:"With the 20% of content used 80% of the time. The audit identifies it, governance protects it, and the rest is archived or retired by rule."},
      {q:"How do we keep it trustworthy after the project?", a:"Ownership and freshness routines with named owners - stale content expires or gets reviewed instead of silently misleading people."},
      {q:"Does this connect to AI assistants?", a:"Directly - a findable, governed corpus is the precondition for retrieval-based AI. See AI Knowledge Readiness."}
    ],
    related: ["knowledge-reuse","ai-knowledge-readiness","knowledge-management"],
    also: [
      { problem: "\u201CWhich documents can our employees actually trust?\u201D", diagnostic: "Knowledge Governance Audit" }
    ]
  },
  {
    id: "knowledge-retention",
    category: "knowledge",
    icon: "archiveBook",
    diagnostic: "Knowledge Retention Diagnostic",
    name: "Knowledge Retention & Expertise Capture",
    tagline: "Keep the expertise when experts leave",
    summary: "Tacit knowledge capture, expert interviews, SOPs, and repositories - before retirements walk it out.",
    problem: "\u201CWhat critical knowledge will disappear when our experts leave?\u201D Critical operational know-how exists only in the heads of two or three long-tenured people. Every retirement or resignation risks taking irreplaceable expertise with it.",
    diagnosis: [
      "At-risk knowledge mapping: which expertise exists only in which heads - and what its loss would cost.",
      "Expert interview pilots: structured elicitation that captures judgment, not just procedure steps.",
      "SOP and playbook gap analysis: what is documented, what is folklore, and what is missing entirely.",
      "Scalability review: can one expert's knowledge serve ten people - and if not, what blocks it."
    ],
    delivers: [
      "Tacit knowledge capture programme prioritised by loss risk and business impact.",
      "Expert interviews converted into SOPs, decision frameworks, and playbooks.",
      "Knowledge repositories organised for retrieval, not archiving.",
      "Communities of practice so expertise keeps transferring after capture."
    ],
    impact: "Expertise becomes an organisational asset instead of a resignation risk. New staff ramp on documented judgment - and your best experts' knowledge finally scales beyond their calendar.",
    duration: "5–8 weeks diagnostic + capture waves",
    format: "Retention diagnostic + elicitation + repository build",
    faqs: [
      {q:"Our experts are too busy to be interviewed for weeks. How does this work?", a:"In short, focused sessions built around real decisions and edge cases - not autobiography. We capture judgment efficiently because we prepare from process data first."},
      {q:"Won't documentation go stale like last time?", a:"Last time usually failed on ownership. Every artefact gets a named owner and a review rhythm inside the governance routine."},
      {q:"Some knowledge is genuinely hard to write down. Can you capture it?", a:"Judgment-heavy work is captured as decision frameworks, worked examples, and apprentice pathways - not just procedure text."},
      {q:"Does this replace our existing knowledge-management work?", a:"It focuses and accelerates it - risk-ranked capture feeding the same repositories, compatible with your Knowledge Management systems."}
    ],
    related: ["knowledge-management","knowledge-reuse","knowledge-discovery"],
    also: [
      { problem: "\u201CWhy can't our best experts' knowledge scale?\u201D", diagnostic: "Expertise Scalability Assessment" }
    ]
  },
  {
    id: "knowledge-reuse",
    category: "knowledge",
    icon: "bookOpen",
    diagnostic: "Knowledge Reuse Assessment",
    name: "Knowledge Reuse & Transfer",
    tagline: "Solve it once, reuse it everywhere",
    summary: "Lessons learned, best-practice systems, and transfer pathways - from closed folders into daily work.",
    problem: "\u201CHow much are we paying people to solve problems we've already solved?\u201D Lessons learned sit in closed project folders. New teams repeat old mistakes - and new employees take months to figure out what veterans know - because reuse was never designed into the workflow.",
    diagnosis: [
      "Reuse audit: repeat problems and their cost - the price tag of not reusing.",
      "Lessons-learned process review: where capture breaks between project end and next-project start.",
      "Best-practice library gap: what exists, what is findable at the moment of need, and what is missing.",
      "Transfer-path review: how new employees actually learn vs. how onboarding assumes they learn."
    ],
    delivers: [
      "Lessons-learned system wired into project routines - not an afterthought form.",
      "Knowledge reuse workflows and best-practice libraries surfaced at the moment of need.",
      "Problem-solving libraries: solved problems searchable by symptom, not just by title.",
      "Onboarding systems, knowledge pathways, and digital work instructions that cut ramp time."
    ],
    impact: "Solved stays solved. Repeat problems fall, onboarding shortens from months to weeks, and every project starts from the best known method instead of a blank page.",
    duration: "5–8 weeks diagnostic + system build",
    format: "Reuse diagnostic + library build + onboarding redesign",
    faqs: [
      {q:"We tried lessons-learned databases before. Nobody used them. Why now?", a:"Because databases fail on retrieval and routine. We design reuse into the workflow - surfaced where the work happens - and measure reuse, not uploads."},
      {q:"How do you measure reuse?", a:"Repeat-problem rate, time-to-find, and onboarding ramp time - tracked before and after, in the Drive phase."},
      {q:"Does this cover shop-floor work instructions?", a:"Yes - digital work instructions at the station are a core transfer vehicle, linked to the same governed source as engineering documentation."},
      {q:"Who keeps libraries current?", a:"Named practice owners per domain with review rhythms - currency is someone's job, not everyone's hope."}
    ],
    related: ["knowledge-discovery","knowledge-retention","knowledge-management"],
    also: [
      { problem: "\u201CWhy does it take new employees months to figure things out?\u201D", diagnostic: "Knowledge Transfer Diagnostic" }
    ]
  },
  {
    id: "ai-knowledge-readiness",
    category: "knowledge",
    icon: "cpu",
    diagnostic: "AI Knowledge Readiness Audit",
    name: "AI Knowledge Readiness",
    tagline: "Give your AI your company's brain",
    summary: "Enterprise knowledge architecture for AI - RAG-ready content, governed bases, internal assistants.",
    problem: "\u201CWhy doesn't our AI actually know our company?\u201D Generic AI answers confidently and wrongly because it cannot reach your procedures, drawings, and decisions. Without governed, retrieval-ready knowledge, every internal AI assistant is a liability instead of leverage.",
    diagnosis: [
      "RAG-readiness assessment: can your content be retrieved in trustworthy chunks - or is it one big unsearchable blob?",
      "Knowledge architecture review for AI consumption: structure, permissions, and freshness from an AI's point of view.",
      "Content quality and governance check: what the AI would cite - and whether it should.",
      "Internal-assistant use-case prioritisation by knowledge readiness and business value."
    ],
    delivers: [
      "Enterprise knowledge architecture designed for both humans and AI retrieval.",
      "RAG-ready knowledge preparation: chunking, metadata, and access rules done properly.",
      "Governed AI knowledge bases with ownership and update rhythms.",
      "Internal AI assistants scoped, built, and measured on your content - not the public internet."
    ],
    impact: "AI stops hallucinating your business. Assistants answer from your governed knowledge, cite sources, and improve as the corpus improves - compounding every other knowledge investment.",
    duration: "4–6 weeks audit + pilot assistant",
    format: "Readiness audit + knowledge prep + assistant pilot",
    faqs: [
      {q:"Can't we just connect an AI tool to SharePoint and be done?", a:"That is exactly how confident wrong answers happen. Permissions, duplicates, and stale versions must be governed first - the audit shows what breaks and in what order to fix it."},
      {q:"Do we need our knowledge perfectly organised first?", a:"No - the audit sequences assistant use cases by readiness, so high-readiness domains pilot while deeper remediation runs in parallel."},
      {q:"How do we control what the AI can see?", a:"Retrieval respects your permission model, and sensitive content is classified before it is ever indexed - governance before go-live, not after an incident."},
      {q:"How do we know the assistant is accurate?", a:"Grounded answers with citations, evaluated against a test set of real questions - accuracy tracked as a KPI, not assumed."}
    ],
    related: ["knowledge-discovery","data-readiness","ai-transformation"]
  }
];

function getServiceById(id){
  return SERVICES.find(s => s.id === id);
}
function getServicesByCategory(catId){
  return SERVICES.filter(s => s.category === catId);
}
function getCategoryById(id){
  return SERVICE_CATEGORIES.find(c => c.id === id);
}
