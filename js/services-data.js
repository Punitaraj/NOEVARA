/* ==========================================================================
   NOEVARA - Service & Diagnostic Tool Data
   Each entry powers services.html (tile grid) and service-detail.html
   ========================================================================== */

const SERVICE_CATEGORIES = [
  { id: "continuous", name: "Continuous Transformation Intelligence", short: "TIPE Platform",
    desc: "The layer that never stops measuring - tracking your transformation against a moving market and real competitors, quarter after quarter." },
  { id: "diagnostics", name: "Diagnostic Intelligence Tools", short: "Diagnostics",
    desc: "Nine proprietary point-in-time instruments that replace guesswork with evidence." },
  { id: "core", name: "Core Consulting Services", short: "Core Consulting",
    desc: "Five practice areas, each anchored in a diagnostic tool and delivered through the 7D model." },
  { id: "new", name: "New Practice Areas", short: "New Services",
    desc: "Built directly in response to what clients and regulators are asking for right now." },
  { id: "funding", name: "Research, Funding & Knowledge Services", short: "Research & Funding",
    desc: "Where diagnostic intelligence meets funding expertise." }
];

const SERVICES = [

  /* ============================= CONTINUOUS TRANSFORMATION INTELLIGENCE ============================= */
  {
    id: "tipe",
    category: "continuous",
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
    category: "diagnostics",
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
    category: "diagnostics",
    icon: "cpu",
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
    category: "diagnostics",
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
    category: "diagnostics",
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
    category: "diagnostics",
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
    category: "diagnostics",
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
    related: ["orgscan","talent-retention","transformation-execution"]
  },
  {
    id: "sentriq",
    category: "diagnostics",
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
    category: "diagnostics",
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
    category: "diagnostics",
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
    category: "core",
    icon: "cogGear",
    name: "AI-Powered Business Transformation",
    tagline: "From experimentation to measurable business value",
    summary: "Moving organisations from AI experimentation to measurable business value.",
    problem: "Leadership has approved AI pilots, maybe even several, but nobody can point to a euro of measurable return - and the organisation risks becoming known internally as a place where AI initiatives quietly die.",
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
    related: ["ai-maturity-lens","fractional-caio","workforce-transformation"]
  },
  {
    id: "digital-transformation-sme",
    category: "core",
    icon: "factory",
    name: "Digital Transformation for SMEs and ETIs",
    tagline: "Modernising operations without enterprise-scale cost",
    summary: "Modernising operations for organisations that can't access enterprise-scale consulting.",
    problem: "Operations still run on manual processes, disconnected spreadsheets, and legacy systems that were adequate five years ago - but the company has outgrown them, and large-firm digital consultants are priced for a much bigger balance sheet.",
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
    category: "core",
    icon: "briefcaseChart",
    name: "Transformation Execution Office",
    tagline: "Ongoing transformation leadership",
    summary: "Ongoing transformation leadership for organisations that need more than a report.",
    problem: "The organisation has a strategy, maybe several, sitting in a folder - but nobody owns turning it into action, and initiatives stall as soon as the consultants who wrote the deck walk out the door.",
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
    related: ["orgscan","fractional-caio","perpetua"]
  },
  {
    id: "workforce-transformation",
    category: "core",
    icon: "graduationCap",
    name: "Workforce Transformation",
    tagline: "Helping people adapt to new tools and ways of working",
    summary: "Helping employees successfully adapt to new tools and ways of working.",
    problem: "New tools and processes get rolled out, adoption stalls at 20%, and six months later the organisation is paying for software nobody actually uses - because the technology change was never paired with a genuine change management effort.",
    delivers: [
      "AI training and future-skills development programmes tailored to the roles actually affected.",
      "Structured adoption programmes and change management, not a one-off training day.",
    ],
    impact: "Converts a technology rollout into an adopted capability - the difference between paying for software and actually using it.",
    duration: "Engagement length varies by scope",
    format: "Training & change management programme",
    faqs: [
      {q:"We already have an L&D function. Why bring in outside consultants for training?", a:"This isn't generic training - it's targeted at the specific roles and workflows affected by a transformation or AI rollout, built on the same diagnostic evidence base (often PERPETUA or AI Maturity Lens) as the rest of the engagement."},
      {q:"Our last software rollout had low adoption. Is that a training problem or something else?", a:"Usually both - a skills gap and a change management gap. The practice addresses adoption programmes and change management together, because training alone rarely moves adoption if the underlying resistance isn't addressed."},
      {q:"How do you measure whether training actually worked?", a:"Through re-running the relevant diagnostic - PERPETUA or AI Maturity Lens - after the programme, so adoption and capability gains are quantified, not assumed."},
      {q:"Is this relevant if we're not doing an AI rollout - just a general process change?", a:"Yes - the adoption and change management methodology applies to any significant shift in tools or ways of working, AI-related or not."}
    ],
    related: ["ai-transformation","talent-retention","perpetua"]
  },
  {
    id: "regulatory-transformation",
    category: "core",
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
    category: "new",
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
    category: "new",
    icon: "lockShield",
    name: "AI & Data Governance Certification Readiness",
    tagline: "Provable governance, not verbal assurance",
    summary: "AI Act conformity gap assessments and audit-ready evidence packs for high-risk systems.",
    problem: "The EU AI Act's obligations for high-risk systems are now in force, and boards are asking for provable governance, not verbal assurance.",
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
    category: "new",
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
    category: "new",
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
    category: "new",
    icon: "userStar",
    name: "Fractional Chief AI Officer (vCAIO)",
    tagline: "Senior AI leadership without a full-time hire",
    summary: "A part-time, embedded AI leadership function with recurring board reporting.",
    problem: "Most SMEs and ETIs need senior AI leadership and governance oversight but cannot justify - or find - a full-time hire for it.",
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
  {
    id: "talent-retention",
    category: "new",
    icon: "peopleHeart",
    name: "Talent Retention & Future-of-Work Advisory",
    tagline: "Anticipate attrition before it happens",
    summary: "Workforce sentiment and retention risk diagnostics that flag flight risk before exit interviews do.",
    problem: "AI-driven role redesign and hybrid-work friction are now leading drivers of attrition - and most HR functions are reacting to resignations instead of anticipating them.",
    delivers: [
      "Workforce sentiment and retention risk diagnostics.",
      "AI-and-work policy design that gives employees clarity instead of anxiety.",
      "Role redesign support for teams affected by automation.",
      "Manager capability programmes to build retention skill at the front line."
    ],
    impact: "PERPETUA's people and culture dimensions combined with OrgScan's causal-chain engine flag flight-risk patterns before they show up in exit interviews, paired with a concrete retention action plan by team.",
    duration: "Engagement length varies by scope",
    format: "Diagnostic-anchored advisory programme",
    faqs: [
      {q:"Our turnover looks normal on paper. Do we still need this?", a:"'Normal' turnover often masks concentrated risk in specific teams or roles - combining PERPETUA and OrgScan surfaces flight-risk patterns at the team level before they show up in aggregate HR metrics."},
      {q:"Is this about AI replacing jobs, or something else?", a:"Primarily about role redesign and the anxiety that ambiguous AI-and-work policy creates - most attrition risk here comes from unclear expectations, not actual job elimination."},
      {q:"Can you actually predict who's likely to leave?", a:"The diagnostics identify risk patterns by team, not individual predictions - the goal is a retention action plan targeted at the teams and conditions most exposed, which is both more useful and more ethical than individual flagging."},
      {q:"Our managers are the ones fielding resignation conversations. Does this help them directly?", a:"Yes - manager capability programmes are part of the offer, specifically to build retention conversation skill at the front line, where most of these conversations actually happen."}
    ],
    related: ["perpetua","workforce-transformation","orgscan"]
  },

  /* ============================= RESEARCH, FUNDING & KNOWLEDGE ============================= */
  {
    id: "research-grant-writing",
    category: "funding",
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
    category: "funding",
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
    category: "funding",
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
    related: ["talent-retention","workforce-transformation"]
  },
  {
    id: "hr-workforce",
    category: "funding",
    icon: "idBadge",
    name: "HR & Workforce (HRM)",
    tagline: "Skills mapping, planning & AI-and-work policy",
    summary: "Skills management, workforce planning, and AI-and-work policy design.",
    problem: "Leadership can't answer a basic question - what skills does the organisation actually have, what will it need in three years, and what's the gap - so workforce planning defaults to reactive hiring.",
    delivers: [
      "Skills management and workforce planning frameworks.",
      "AI-and-work policy design that clarifies how AI tools fit into roles.",
      "Training needs analysis tied to identified capability gaps."
    ],
    impact: "Turns workforce planning from a reactive hiring exercise into a forward-looking capability strategy grounded in evidence.",
    duration: "Engagement length varies by scope",
    format: "Diagnostic-anchored advisory programme",
    faqs: [
      {q:"We already have a headcount plan. Isn't that the same thing?", a:"A headcount plan tells you how many people; skills management and workforce planning tells you what capabilities you have and need - the gap between the two is usually where the real risk sits."},
      {q:"Do we need an AI-and-work policy if we're not deploying AI aggressively yet?", a:"Ambiguity is often worse than absence - employees fill the vacuum with assumptions and anxiety even at low AI adoption, so a clear policy is valuable well before large-scale deployment."},
      {q:"How is training needs analysis different from what our L&D team already does?", a:"It's tied directly to identified capability gaps from the skills and workforce planning work, so training spend targets confirmed gaps rather than generic course catalogues."},
      {q:"Can this connect to the Talent Retention practice as well?", a:"Yes - HR & Workforce and Talent Retention & Future-of-Work Advisory are closely linked, and many clients engage both together."}
    ],
    related: ["talent-retention","workforce-transformation","knowledge-management"]
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
