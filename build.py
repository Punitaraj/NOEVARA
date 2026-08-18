# -*- coding: utf-8 -*-
"""
NOEVARA CONSULTING — SITE BUILDER
====================================================================
This script is the single source of truth for all content on the
multi-page site. Edit the DATA section below, then run:

    python3 build.py

...and every page (homepage, capability pages, industry pages, tool
pages, landing pages, and the JS data files used for navigation) is
regenerated automatically. Do not hand-edit the generated .html files
directly — edits will be overwritten next time this script runs.
"""
import os, json, re

ROOT = os.path.dirname(os.path.abspath(__file__))

# ====================================================================
# DATA
# ====================================================================

CAPABILITIES = [
    dict(slug="ai-consulting", tag="Core Practice", title="AI Consulting & AI Transformation",
         lede="We find where AI can realistically create value in your organization — starting with an honest readiness assessment, not a tools demonstration.",
         tool="AI Readiness & Maturity Diagnostic", codename="AI Maturity Lens",
         dims=["Strategy","Data","Governance","Talent","Value"],
         forText="Teams told they \u201cshould be doing something with AI,\u201d stalled pilots, boards needing a credible AI strategy.",
         overview="Most organizations don't have an AI problem — they have a prioritization problem. Everyone agrees AI matters; almost no one can point to where it should create value first, or whether the organization is actually ready to capture it. We start every AI engagement with a structured readiness assessment across five dimensions, not a vendor demo.",
         before="The AI pilot from eighteen months ago is still open in a browser tab nobody closes. No one can say what it actually proved.",
         after="A five-dimension readiness profile on the wall. Everyone in the room agrees on the two use cases worth funding first."),
    dict(slug="digital-transformation", tag="Core Practice", title="Digital Transformation Consulting",
         lede="We treat digital transformation as an organizational question first, technology second — assessing whether tech, process, culture and customer experience actually work together.",
         tool="Digital Maturity Assessment", codename="Company Growth Diagnostic",
         dims=["IT Infrastructure","Customer Experience","Strategy","Processes","Culture"],
         forText="Transformations planned but not yet committed to budget, or already underway and stalled.",
         overview="Digital transformation programs rarely fail because of the technology chosen. They fail because the process, culture, and customer experience implications were never assessed alongside it. Our diagnostic scores all five dimensions independently, so a genuine weak point can't hide behind a strong one.",
         before="Three systems, none of them talking to each other. Staff keep a spreadsheet on the side because they don't trust the new tool.",
         after="One maturity profile across five dimensions. A sequenced roadmap with an owner's name next to every milestone."),
    dict(slug="applied-engineering", tag="Core Practice", title="Applied Engineering & Technical Consulting",
         lede="Rigorous, independent engineering analysis for specific technical questions — feasibility studies, process optimization, industrial problem-solving.",
         tool="Technical Feasibility & Root-Cause Framework", codename="",
         dims=["Problem Definition","Root Cause","Feasibility","Cost & Risk","Alternatives"],
         forText="A technical proposal that needs an independent second opinion before budget is committed.",
         overview="When a technical proposal is written by the same team that will deliver it, leadership is being asked to trust the mark on its own homework. We provide an independent, evidence-based second opinion — a documented root cause, a feasibility matrix, and a recommendation your board can interrogate.",
         before="The same bottleneck, worked around for the third quarter running, by the same team that built it.",
         after="A documented root cause, a feasibility matrix, and a recommendation the board can independently verify."),
    dict(slug="technology-innovation", tag="Core Practice", title="Technology & Innovation Consulting",
         lede="We scout, evaluate and sequence emerging technologies against your actual priorities — replacing internal debate with a documented, criteria-based evaluation.",
         tool="Technology Scouting & Evaluation Matrix", codename="SENSORIUM",
         dims=["Relevance","Feasibility","Cost","Risk","Time-to-Value"],
         forText="Competing internal technology proposals with no shared, objective way to choose between them.",
         overview="Every technology pitch sounds convincing in the room it's presented in. What's usually missing is a shared, objective basis for comparing it against the alternatives. We build one scoring matrix across relevance, feasibility, cost, risk and time-to-value, so the choice is documented and defensible.",
         before="Three vendor decks on the table. Three different champions in the room. No shared scoring criteria.",
         after="One comparison matrix, one technology radar chart, one sequencing decision everyone can defend."),
    dict(slug="organizational-diagnostics", tag="Core Practice", title="Organizational & Transformation Diagnostics",
         lede="We assess what's actually happening inside your organization — knowledge, intellectual capital and change readiness — before you commit to a major initiative.",
         tool="Knowledge & Organizational Readiness Diagnostic", codename="Organizational Intelligence Platform",
         dims=["Socialization","Externalization","Combination","Internalization","Change Capacity"],
         forText="Critical knowledge concentrated in one or two long-tenured people; upcoming leadership transitions.",
         overview="Built on Nonaka's SECI model of organizational knowledge creation, this diagnostic maps exactly where institutional knowledge lives, how it moves (or doesn't) between people, and how ready the organization actually is to absorb change — before that becomes a crisis rather than a plan.",
         before="One engineer knows how the whole production line really runs. It's not written down anywhere.",
         after="A knowledge-risk map showing exactly where it's concentrated — and a plan to get it out of one person's head."),
    dict(slug="research-advisory", tag="Core Practice", title="Research & Expert Advisory",
         lede="Academic-grade research methodology applied to specific technical or market questions — where the value is evidence and rigor, not speed.",
         tool="Research Synthesis Framework", codename="",
         dims=["Question Definition","Sourcing","Synthesis","Verification"],
         forText="Board papers, grant applications, and investment cases that need a rigorously sourced foundation.",
         overview="Some questions deserve more rigor than a quick internal memo can provide. We apply structured research methodology — clear question definition, systematic sourcing, careful synthesis, and verification — to produce a concise report that will hold up when someone in the room pushes back.",
         before="A market-sizing slide built from three blog posts and a hunch, due on the board's desk Monday.",
         after="A concise, fully sourced report the board can question line by line — and it holds up."),
    dict(slug="cybersecurity-resilience", tag="In Demand Now", title="Cybersecurity & Digital Resilience Consulting",
         lede="We turn boardroom anxiety about cyber exposure into a ranked, evidenced risk picture — and a realistic plan to close the gaps, including NIS2 and GDPR obligations.",
         tool="Cyber Resilience & Risk Exposure Diagnostic", codename="EU Regulatory Radar",
         dims=["Threat Exposure","Data Protection","Incident Readiness","Third-Party Risk","Compliance"],
         forText="Organizations that suspect they're exposed but have no ranked, evidenced view of where.",
         overview="Cybersecurity has become a board-level question at almost every organization we work with — but anxiety isn't the same as an evidenced risk picture. We assess exposure, data protection, incident readiness, third-party risk and regulatory compliance (NIS2, GDPR) as five independently scored dimensions.",
         before="An incident-response plan that exists as a PDF nobody has opened since the audit two years ago.",
         after="A ranked exposure map, a tested response plan, and a NIS2 compliance timeline with real owners."),
    dict(slug="data-strategy-analytics", tag="In Demand Now", title="Data Strategy & Analytics Consulting",
         lede="Dashboards everywhere, trust nowhere. We assess your full data value chain — from quality to culture — so decisions can finally be made on numbers people believe.",
         tool="Data Value Chain Diagnostic", codename="",
         dims=["Data Quality","Architecture","Analytics Capability","Data Culture","Monetization Readiness"],
         forText="Organizations with plenty of data and still-instinctive decisions.",
         overview="More dashboards rarely means more trust. We diagnose the full data value chain — quality, architecture, analytical capability, data culture, and monetization readiness — to find out why decisions still get made on instinct despite the data that's already being collected.",
         before="Four dashboards, four different numbers for \u201crevenue this month.\u201d Everyone quietly uses their own.",
         after="One trusted data pipeline, one definition of the metric, decisions made from it in the same meeting."),
    dict(slug="esg-sustainability", tag="In Demand Now", title="ESG & Sustainability Strategy Consulting",
         lede="We build the reporting system CSRD actually requires — not a scramble the quarter before it's due — and a genuine sustainability strategy behind it.",
         tool="Sustainability Readiness & Reporting Diagnostic", codename="EUTIS",
         dims=["Environmental Footprint","Governance","Social Impact","CSRD Readiness","Supply Chain"],
         forText="Organizations facing CSRD reporting obligations with no system built to collect the data.",
         overview="CSRD reporting is not optional for a growing number of European organizations, and the data it requires was rarely designed to be collected in the first place. We assess environmental footprint, governance, social impact, CSRD readiness and supply-chain sustainability, then help build the system — not just the filing.",
         before="A sustainability report due in nine weeks, and no system that has ever collected the numbers it needs.",
         after="A CSRD-ready reporting system running quietly in the background, feeding a genuine strategy, not just a filing."),
    dict(slug="cloud-infrastructure", tag="In Demand Now", title="Cloud & Infrastructure Modernization Consulting",
         lede="Infrastructure that grew organically for years, and costs that keep climbing. We map what should move, shrink, consolidate, or be switched off.",
         tool="Cloud Readiness & Modernization Matrix", codename="",
         dims=["Workload Fit","Cost Efficiency","Security Posture","Scalability","Migration Risk"],
         forText="Rising cloud spend with no clear, current picture of what's driving it.",
         overview="Infrastructure that grew organically over several years rarely gets a clean, current picture of what's actually driving cost. We score every workload against fit, cost efficiency, security posture, scalability, and migration risk to produce a concrete modernization matrix.",
         before="An invoice that's crept up every month for two years, and no one who can explain exactly why.",
         after="A workload-by-workload modernization matrix — what moves, what's switched off, and what it saves."),
    dict(slug="eu-funding-grants", tag="In Demand Now", title="EU Funding & Grants Advisory",
         lede="We assess your real eligibility and readiness for Horizon Europe, regional and national funding before you spend months on an application.",
         tool="Funding Fit & Grant-Readiness Diagnostic", codename="GrantIQ",
         dims=["Eligibility","Project Maturity","Consortium Strength","Budget Realism","Compliance Track Record"],
         forText="Organizations weighing whether a specific EU or national funding call is genuinely worth pursuing.",
         overview="Grant applications consume months of internal effort before anyone finds out whether the project genuinely fits the call. We assess eligibility, project maturity, consortium strength, budget realism, and compliance track record up front, so the decision to pursue — or not — is made early, not after the write-up.",
         before="A 40-page call document, a looming deadline, and no honest read on whether the project actually fits.",
         after="A clear go / no-go, a strengthened consortium, and a budget that survives the reviewer's first pass."),
    dict(slug="supply-chain-resilience", tag="In Demand Now", title="Supply Chain Resilience Consulting",
         lede="We map where your supply chain actually breaks under pressure — supplier concentration, geopolitical exposure, single points of failure — before it breaks for real.",
         tool="Supply Chain Resilience Diagnostic", codename="SENTRIQ",
         dims=["Supplier Concentration","Visibility","Geopolitical Exposure","Inventory Strategy","Contingency Planning"],
         forText="Organizations that discovered a single-supplier risk the hard way, or want to before they do.",
         overview="A resilient supply chain isn't the same as a lean one. We map supplier concentration, upstream visibility, geopolitical exposure, inventory strategy and contingency planning as independent dimensions, so a single point of failure gets found on a diagnostic, not during an actual disruption.",
         before="One supplier, one region, and a production line that stops completely if either has a bad month.",
         after="A resilience map showing every concentration risk, with a contingency plan attached to each one."),
    dict(slug="workforce-transformation", tag="In Demand Now", title="Workforce Transformation & Future-of-Work Consulting",
         lede="We assess whether your people, roles and structures are actually ready for AI-augmented ways of working — not just whether you bought the software.",
         tool="Workforce Readiness & Skills Diagnostic", codename="PERPETUA",
         dims=["Skills Inventory","Reskilling Capacity","Org Design","AI-Augmentation Readiness","Change Culture"],
         forText="Organizations rolling out new tools or ways of working faster than their teams can absorb them.",
         overview="New tools get rolled out faster than most teams can genuinely absorb them. We assess skills inventory, reskilling capacity, organizational design, AI-augmentation readiness and change culture together, so adoption is planned rather than hoped for.",
         before="New software rolled out firm-wide. Adoption stuck below 20%, and nobody planned the reskilling.",
         after="A skills map, a reskilling plan tied to real roles, and adoption that's actually holding six months later."),
]

INDUSTRIES = [
    dict(slug="smes", title="Small & Medium Enterprises",
         lede="Your first structured diagnostic, sized to an SME's actual budget and bandwidth — before you commit to a larger transformation.",
         overview="Most SMEs we meet have real transformation questions and no internal capacity to answer them rigorously. We scope engagements to fit — often starting with a single diagnostic rather than a multi-month program — so the evidence exists before the bigger investment does.",
         relevant=["ai-consulting","digital-transformation","eu-funding-grants"]),
    dict(slug="mid-sized-companies", title="Mid-Sized Companies (ETIs)",
         lede="European mid-market firms balancing real growth ambitions against limited internal transformation capacity.",
         overview="Mid-sized companies (ETIs) often have the ambition of a larger enterprise and the internal resourcing of a much smaller one. Our diagnostics are built to give a leadership team of five the same evidence quality a much bigger internal strategy function would produce.",
         relevant=["digital-transformation","data-strategy-analytics","workforce-transformation"]),
    dict(slug="industrial-organizations", title="Industrial Organizations",
         lede="Manufacturing, production and engineering-heavy organizations where operational and technical diagnostics matter most.",
         overview="For industrial organizations, the highest-value diagnostics are usually operational and technical, not strategic slideware. We lead with root-cause analysis, feasibility studies, and supply-chain resilience mapping — grounded in how the actual production environment works.",
         relevant=["applied-engineering","supply-chain-resilience","cloud-infrastructure"]),
    dict(slug="regulated-industries", title="Regulated Industries",
         lede="Healthcare, finance, and defense — where our privacy-first, offline-capable diagnostic platform is often the deciding factor.",
         overview="In healthcare, finance, defense and other regulated environments, confidential data cannot casually leave the premises. TIPE, our diagnostic platform, is built offline-capable by design — assessments run on-site, with nothing required to leave your infrastructure.",
         relevant=["cybersecurity-resilience","esg-sustainability","organizational-diagnostics"]),
    dict(slug="public-organizations", title="Public Organizations",
         lede="Public-sector bodies navigating digital transformation and compliance mandates under real budget and procurement constraints.",
         overview="Public organizations are frequently mandated to modernize under tight budget and procurement conditions, with compliance requirements that private-sector consultancies often underweight. We scope engagements around what's fundable and auditable, not just what's ideal.",
         relevant=["digital-transformation","cybersecurity-resilience","eu-funding-grants"]),
    dict(slug="innovation-driven-companies", title="Innovation-Driven Companies",
         lede="R&D-heavy organizations pursuing Horizon Europe and national funding, where a rigorous funding-fit diagnostic changes the odds.",
         overview="Innovation-driven companies frequently have strong technical ideas and a weaker read on which funding calls, consortium structures, and budgets will actually succeed. We diagnose funding fit before the write-up starts, not after months of internal effort.",
         relevant=["eu-funding-grants","technology-innovation","research-advisory"]),
]

TOOLS = [
    dict(slug="company-growth-diagnostic", icon="growth", name="Company Growth Diagnostic",
         focus=["Growth Barriers","Strategic Positioning","Market Opportunity","Internal Capability"],
         summary="Understands organizational growth potential, strategic positioning and internal capability — identifying growth barriers, operational weaknesses and real competitive advantages.",
         overview="The Company Growth Diagnostic is where most engagements start when the underlying question is simply \u201cwhere should we focus to grow?\u201d It assesses strategic positioning, market opportunity and internal capability side by side, so growth barriers and real competitive advantages both surface in the same evidence base."),
    dict(slug="ai-maturity-lens", icon="ai", name="AI Maturity Lens",
         focus=["AI Readiness","Automation Fit","GDPR & Governance","Workforce Capability"],
         summary="Evaluates organizational readiness for AI adoption — processes suitable for automation, workforce capability, GDPR compliance and governance — into a practical AI transformation roadmap.",
         overview="AI Maturity Lens is the diagnostic behind our AI consulting practice. It scores automation-suitable processes, workforce capability, GDPR compliance and governance readiness independently, so a strong score in one dimension can't mask a genuine blocker in another."),
    dict(slug="organizational-intelligence-platform", icon="org", name="Organizational Intelligence Platform",
         focus=["Decision-Making","Collaboration","Leadership Alignment","Operational Friction"],
         summary="Reveals the hidden organizational barriers that hold transformation back — decision-making effectiveness, collaboration, leadership alignment and organizational complexity.",
         overview="Most stalled transformations aren't technology problems. The Organizational Intelligence Platform maps decision-making effectiveness, collaboration patterns, leadership alignment and organizational complexity, surfacing the friction that a purely technical diagnostic would miss entirely."),
    dict(slug="eu-regulatory-radar", icon="radar", name="EU Regulatory Radar",
         focus=["Compliance Prep","Regulatory Impact","Operational Adaptation"],
         summary="Tracks and translates regulatory change into operational reality — compliance preparation, regulatory impact analysis and practical adaptation, not just a legal summary.",
         overview="EU Regulatory Radar exists because most organizations receive regulatory updates as legal summaries, not operational plans. It translates changes like NIS2, the AI Act, and GDPR updates into concrete compliance preparation and impact analysis specific to your actual operations."),
    dict(slug="grantiq", icon="funding", name="GrantIQ",
         focus=["R&D Strategy","EU Funding Readiness","Innovation Prioritization"],
         summary="Strategic Innovation & Funding Diagnostic. Identifies real innovation and funding potential — R&D strategy, European funding readiness, and which opportunities are actually worth pursuing.",
         overview="GrantIQ — our Strategic Innovation & Funding Diagnostic — exists to answer one question honestly before months of application work begin: does this specific funding opportunity actually fit this organization, right now."),
    dict(slug="eutis", icon="ethics", name="EUTIS",
         focus=["AI Governance","Ethical Frameworks","Compliance Maturity"],
         summary="Ethics and Compliance Intelligence System. Supports responsible transformation through AI governance, ethical decision frameworks and compliance maturity assessment.",
         overview="EUTIS, our Ethics and Compliance Intelligence System, supports organizations that need transformation to be responsible as well as fast — assessing AI governance, ethical decision frameworks, and compliance maturity as a single coherent picture."),
    dict(slug="perpetua", icon="health", name="PERPETUA",
         focus=["Employee Capability","Organizational Health","Internal Stability"],
         summary="Organizational Health Diagnostic. Measures organizational sustainability and resilience — employee capability, organizational health and internal stability under pressure.",
         overview="PERPETUA, our Organizational Health Diagnostic, measures whether an organization can actually sustain the pace of change being asked of it — employee capability, organizational health, and internal stability under real pressure, not just on paper."),
    dict(slug="sentriq", icon="recovery", name="SENTRIQ",
         focus=["Recovery Planning","Strategic Repositioning","Operational Improvement"],
         summary="Strategic Diagnostics & Recovery Intelligence. Supports organizations facing disruption or performance challenges with recovery planning and strategic repositioning.",
         overview="SENTRIQ — Strategic Diagnostics & Recovery Intelligence — is built for organizations already facing disruption or a performance shortfall, where the priority is a fast, evidenced recovery plan rather than a long strategic review."),
    dict(slug="sensorium", icon="sensor", name="SENSORIUM",
         focus=["Market Evolution","Technology Shifts","Emerging Risk"],
         summary="Strategic Environment Intelligence. Continuous, structured understanding of external change — market evolution, technology shifts, competitive environment and emerging risk.",
         overview="SENSORIUM — Strategic Environment Intelligence — gives leadership a continuous, structured read on what's changing outside the organization: market evolution, technology shifts, competitive movement, and emerging risk, rather than an annual environment scan that's stale within a quarter."),
]

INSIGHTS = [
    dict(type="Whitepaper", title="The AI Readiness Gap: What 40 SME Assessments Actually Found", date="July 2026",
         excerpt="Where readiness really breaks down across strategy, data, governance, talent and value — and why it's rarely the technology."),
    dict(type="Newsletter", title="Field Note: Why We Stopped Giving Clients a Single Score", date="June 2026",
         excerpt="A short note on why a blended maturity score almost cost one client the one finding that actually mattered."),
    dict(type="Whitepaper", title="CSRD Without the Scramble: Building the Reporting System Early", date="May 2026",
         excerpt="A practical readiness checklist for organizations facing their first CSRD reporting cycle."),
]

PROBLEMS = [
    ("01","\u201cWe keep hearing we should be doing something with AI.\u201d","No one disagrees AI matters. No one can point to where it should actually create value first."),
    ("02","A digital initiative that stalled halfway.","The tools were bought. The process didn't change. Nobody can say whether it's a culture problem or a systems problem."),
    ("03","A technical proposal nobody can independently verify.","The team that wrote it would also deliver it. Leadership is being asked to trust the mark on their own homework."),
    ("04","Three vendors, three opinions, zero criteria.","Every technology pitch sounds convincing in the room. There's no shared, objective basis for choosing between them."),
    ("05","Critical knowledge lives in two people's heads.","Everyone knows it. Nobody has done anything about it. One resignation away from a real problem."),
    ("06","\u201cAre we actually exposed, or just anxious?\u201d","Security has become a board-level question, but nobody has turned that anxiety into a ranked, evidenced risk picture."),
]

# Photography — verified, live Unsplash URLs (Unsplash License, free for
# commercial use). See assets note in README for credits.
PHOTOS = dict(
    hero="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
    quote="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1800&q=80",
    capabilities="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    industries="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=1600&q=80",
    tools="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    contact="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
)

print("Data loaded:", len(CAPABILITIES), "capabilities,", len(INDUSTRIES), "industries,", len(TOOLS), "tools")

# ====================================================================
# SHARED MARKUP HELPERS
# ====================================================================

LOGO_SVG = '''<svg class="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
  <path d="M34 6.7 A20 20 0 1 1 6.7 14" class="logo__ring"/>
  <circle cx="6.7" cy="14" r="2.6" class="logo__blip"/>
  <path d="M16 32 L24 24 L16 16" class="logo__arm"/>
  <path d="M24 24 L34 24" class="logo__spoke"/>
  <circle cx="34" cy="24" r="3" class="logo__node"/>
</svg>'''

def cap_by_slug(slug):
    for c in CAPABILITIES:
        if c["slug"] == slug: return c
    return None

def ind_by_slug(slug):
    for i in INDUSTRIES:
        if i["slug"] == slug: return i
    return None

def capabilities_megamenu():
    core = [c for c in CAPABILITIES if c["tag"] == "Core Practice"]
    demand = [c for c in CAPABILITIES if c["tag"] == "In Demand Now"]
    def links(items):
        return "".join(
            f'<a class="megamenu__link" href="/capabilities/{c["slug"]}.html">{c["title"]}<span>{c["tool"]}</span></a>'
            for c in items
        )
    return f'''<div class="megamenu">
      <div class="megamenu__head"><span class="megamenu__title">Capabilities</span><a class="megamenu__all" href="/capabilities/index.html">View all 13 capabilities \u2192</a></div>
      <div class="megamenu__grid">
        <span class="megamenu__group-label">Core Practice</span>
        {links(core)}
        <span class="megamenu__group-label">In Demand Now</span>
        {links(demand)}
      </div>
    </div>'''

def industries_megamenu():
    links = "".join(
        f'<a class="megamenu__link" href="/industries/{i["slug"]}.html">{i["title"]}<span>{i["lede"][:56]}\u2026</span></a>'
        for i in INDUSTRIES
    )
    return f'''<div class="megamenu">
      <div class="megamenu__head"><span class="megamenu__title">Industries</span><a class="megamenu__all" href="/industries/index.html">View all industries \u2192</a></div>
      <div class="megamenu__grid">
        <span class="megamenu__group-label">Who We Serve</span>
        {links}
      </div>
    </div>'''

def tools_megamenu():
    links = "".join(
        f'<a class="megamenu__link" href="/tools/{t["slug"]}.html">{t["name"]}<span>{", ".join(t["focus"][:2])}</span></a>'
        for t in TOOLS
    )
    return f'''<div class="megamenu">
      <div class="megamenu__head"><span class="megamenu__title">The Diagnostic Intelligence Portfolio</span><a class="megamenu__all" href="/tools/index.html">View all 9 tools \u2192</a></div>
      <div class="megamenu__grid">
        <span class="megamenu__group-label">Proprietary Tools, Powered by TIPE</span>
        {links}
      </div>
    </div>'''

def header_html(active=""):
    def item(key, label, href, menu=""):
        cls = "mainnav__item"
        return f'''<li class="{cls}" data-menu-item>
          <a class="mainnav__link" href="{href}" data-menu-trigger="{key}">{label}{' <span class="mainnav__caret"></span>' if menu else ''}</a>
          {menu}
        </li>'''
    return f'''<div class="topbar"><div class="wrap"><a href="/insights/index.html">Insights</a><a href="/contact/index.html">Client login</a></div></div>
<header class="site-header">
  <div class="wrap header-inner">
    <a href="/index.html" class="logo">{LOGO_SVG}<span class="logo__word">NOEVARA</span></a>
    <nav class="mainnav" aria-label="Primary">
      <ul class="mainnav__list">
        {item("capabilities","Capabilities","/capabilities/index.html", capabilities_megamenu())}
        {item("industries","Industries","/industries/index.html", industries_megamenu())}
        {item("tools","Tools","/tools/index.html", tools_megamenu())}
        {item("insights","Insights","/insights/index.html")}
        {item("about","About","/about/index.html")}
      </ul>
    </nav>
    <div class="header-actions">
      <button class="header-search" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
      <a href="/contact/index.html" class="btn btn--primary">Get in touch</a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>'''

def footer_html():
    cap_links = "".join(f'<li><a href="/capabilities/{c["slug"]}.html">{c["title"]}</a></li>' for c in CAPABILITIES[:6])
    ind_links = "".join(f'<li><a href="/industries/{i["slug"]}.html">{i["title"]}</a></li>' for i in INDUSTRIES)
    tool_links = "".join(f'<li><a href="/tools/{t["slug"]}.html">{t["name"]}</a></li>' for t in TOOLS[:6])
    return f'''<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">{LOGO_SVG}<span class="logo__word">NOEVARA</span></div>
      <p>Transformation Intelligence &amp; Strategic Consulting. Strasbourg, France.</p>
    </div>
    <div class="footer-col"><h4>Capabilities</h4><ul>{cap_links}<li><a href="/capabilities/index.html">View all \u2192</a></li></ul></div>
    <div class="footer-col"><h4>Industries</h4><ul>{ind_links}</ul></div>
    <div class="footer-col"><h4>Tools</h4><ul>{tool_links}<li><a href="/tools/index.html">View all \u2192</a></li></ul></div>
    <div class="footer-col"><h4>Company</h4><ul>
      <li><a href="/about/index.html">About Noevara</a></li>
      <li><a href="/insights/index.html">Insights</a></li>
      <li><a href="/contact/index.html">Contact</a></li>
    </ul></div>
  </div>
  <div class="wrap footer-legal">
    <span>\u00a9 <span id="year"></span> Noevara Consulting SAS \u2014 Strasbourg, France. All rights reserved.</span>
    <span>	
contact@noevaraconsulting.com</span>
  </div>
</footer>'''

def page(title, description, active, body, extra_head=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | Noevara Consulting</title>
<meta name="description" content="{description}">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Crect width='48' height='48' rx='10' fill='%230B1B32'/%3E%3Cpath d='M16 32 L24 24 L16 16' stroke='%23EEF1F6' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M24 24 L34 24' stroke='%23B8923F' stroke-width='3' stroke-linecap='round'/%3E%3Ccircle cx='34' cy='24' r='3.2' fill='%23B8923F'/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/styles.css">
{extra_head}
</head>
<body>
{header_html(active)}
<main>
{body}
</main>
{footer_html()}
<script src="/js/common.js" defer></script>
</body>
</html>'''

def write(path, html):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(html)

print("Helpers loaded.")

# ====================================================================
# PAGE BUILDERS
# ====================================================================

def breadcrumb(*crumbs):
    items = "".join(
        f'<li><a href="{href}">{label}</a></li>' if href else f'<li>{label}</li>'
        for label, href in crumbs
    )
    return f'<nav class="breadcrumb"><div class="wrap"><ol>{items}</ol></div></nav>'

def related_tiles(items, kind):
    # items: list of dicts already resolved to the right shape (title, slug, desc, tag)
    tiles = ""
    for it in items:
        tag_html = f'<span class="tile__tag {"tile__tag--core" if it.get("tag")=="Core Practice" else "tile__tag--demand"}">{it["tag"]}</span>' if it.get("tag") else ""
        tiles += f'''<a class="tile" href="/{kind}/{it["slug"]}.html">
          {tag_html}
          <span class="tile__title">{it["title"]}</span>
          <span class="tile__desc">{it["desc"]}</span>
          <span class="tile__link">Read more <span class="tile__link-arrow">\u2192</span></span>
        </a>'''
    return tiles

def cta_band(title, primary_label="Book a Diagnostic Call", primary_href="/contact/index.html"):
    return f'''<section class="cta-band">
  <div class="wrap">
    <h2 class="cta-band__title">{title}</h2>
    <div class="cta-band__actions">
      <a class="btn btn--primary" href="{primary_href}">{primary_label}</a>
      <a class="btn btn--on-dark" href="/capabilities/index.html">Browse all capabilities</a>
    </div>
  </div>
</section>'''

# ---- Capability detail page ----
def build_capability_page(c):
    others = [x for x in CAPABILITIES if x["slug"] != c["slug"]][:3]
    related = related_tiles(
        [dict(title=o["title"], slug=o["slug"], desc=o["lede"], tag=o["tag"]) for o in others],
        "capabilities"
    )
    dims_html = "".join(f'<span class="side-chip">{d}</span>' for d in c["dims"])
    codename_html = ""
    if c["codename"]:
        codename_html = f'''<div class="side-card">
          <div class="side-card__label">Powered By</div>
          <h4>{c["codename"]}</h4>
          <p>Part of the TIPE Diagnostic Intelligence Portfolio.</p>
          <a class="tile__link" style="margin-top:10px" href="/tools/index.html">See all tools \u2192</a>
        </div>'''
    body = breadcrumb(("Home","/index.html"), ("Capabilities","/capabilities/index.html"), (c["title"], None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["capabilities"]}');">
  <div class="wrap">
    <p class="page-hero__tag">Capability \u2014 {c["tag"]}</p>
    <h1 class="page-hero__title">{c["title"]}</h1>
    <p class="page-hero__sub">{c["lede"]}</p>
  </div>
</section>
<section class="section">
  <div class="wrap detail-grid">
    <div class="detail-body">
      <h3>Overview</h3>
      <p>{c["overview"]}</p>
      <h3>What This Diagnostic Scores</h3>
      <ul class="detail-list">{"".join(f"<li><strong>{d}</strong></li>" for d in c["dims"])}</ul>
      <h3>Before &amp; After</h3>
      <div class="outcome-split">
        <div class="before"><span>Before Noevara</span><p>{c["before"]}</p></div>
        <div class="after"><span>After The Diagnostic</span><p>{c["after"]}</p></div>
      </div>
    </div>
    <aside class="detail-side">
      <div class="side-card">
        <div class="side-card__label">Diagnostic Tool</div>
        <h4>{c["tool"]}</h4>
        <div class="side-chip-row">{dims_html}</div>
      </div>
      <div class="side-card">
        <div class="side-card__label">Who This Is For</div>
        <p>{c["forText"]}</p>
      </div>
      {codename_html}
    </aside>
  </div>
</section>
<section class="section related">
  <div class="wrap">
    <div class="section-head"><h2 class="section-title">Related Capabilities</h2></div>
    <div class="tile-grid">{related}</div>
  </div>
</section>'''
    body += cta_band(f"Ready to talk about {c['title']}?")
    write(f"capabilities/{c['slug']}.html", page(c["title"], c["lede"], "capabilities", body))

# ---- Industry detail page ----
def build_industry_page(ind):
    rel_caps = [cap_by_slug(s) for s in ind["relevant"]]
    related = related_tiles(
        [dict(title=c["title"], slug=c["slug"], desc=c["lede"], tag=c["tag"]) for c in rel_caps if c],
        "capabilities"
    )
    body = breadcrumb(("Home","/index.html"), ("Industries","/industries/index.html"), (ind["title"], None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["industries"]}');">
  <div class="wrap">
    <p class="page-hero__tag">Industry</p>
    <h1 class="page-hero__title">{ind["title"]}</h1>
    <p class="page-hero__sub">{ind["lede"]}</p>
  </div>
</section>
<section class="section">
  <div class="wrap detail-grid">
    <div class="detail-body">
      <h3>How We Work With {ind["title"]}</h3>
      <p>{ind["overview"]}</p>
    </div>
    <aside class="detail-side">
      <div class="side-card">
        <div class="side-card__label">Most Relevant Capabilities</div>
        <p>Start here \u2014 these are the diagnostics we most often run first for organizations like this.</p>
      </div>
    </aside>
  </div>
</section>
<section class="section related">
  <div class="wrap">
    <div class="section-head"><h2 class="section-title">Recommended Capabilities</h2></div>
    <div class="tile-grid">{related}</div>
  </div>
</section>'''
    body += cta_band(f"Ready to talk about {ind['title'].lower()}?")
    write(f"industries/{ind['slug']}.html", page(ind["title"], ind["lede"], "industries", body))

# ---- Tool detail page ----
def build_tool_page(t):
    others = [x for x in TOOLS if x["slug"] != t["slug"]][:3]
    related = related_tiles(
        [dict(title=o["name"], slug=o["slug"], desc=o["summary"]) for o in others],
        "tools"
    )
    used_by = [c for c in CAPABILITIES if c["codename"] == t["name"]]
    used_by_html = "".join(f'<a class="tile__link" style="display:block;margin-top:8px" href="/capabilities/{c["slug"]}.html">{c["title"]} \u2192</a>' for c in used_by) or "<p>Available across engagements as part of the TIPE platform.</p>"
    focus_html = "".join(f'<span class="side-chip">{f}</span>' for f in t["focus"])
    body = breadcrumb(("Home","/index.html"), ("Tools","/tools/index.html"), (t["name"], None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["tools"]}');">
  <div class="wrap">
    <p class="page-hero__tag">TIPE Diagnostic Tool</p>
    <h1 class="page-hero__title">{t["name"]}</h1>
    <p class="page-hero__sub">{t["summary"]}</p>
  </div>
</section>
<section class="section">
  <div class="wrap detail-grid">
    <div class="detail-body">
      <h3>Overview</h3>
      <p>{t["overview"]}</p>
      <h3>Focus Areas</h3>
      <ul class="detail-list">{"".join(f"<li><strong>{f}</strong></li>" for f in t["focus"])}</ul>
    </div>
    <aside class="detail-side">
      <div class="side-card">
        <div class="side-card__label">Focus Areas</div>
        <div class="side-chip-row">{focus_html}</div>
      </div>
      <div class="side-card">
        <div class="side-card__label">Used In</div>
        {used_by_html}
      </div>
    </aside>
  </div>
</section>
<section class="section related">
  <div class="wrap">
    <div class="section-head"><h2 class="section-title">Related Tools</h2></div>
    <div class="tile-grid">{related}</div>
  </div>
</section>'''
    body += cta_band(f"See {t['name']} in action")
    write(f"tools/{t['slug']}.html", page(t["name"], t["summary"], "tools", body))

print("Detail page builders loaded.")

# ---- Landing pages ----
def build_capabilities_index():
    tiles = related_tiles(
        [dict(title=c["title"], slug=c["slug"], desc=c["lede"], tag=c["tag"]) for c in CAPABILITIES],
        "capabilities"
    )
    body = breadcrumb(("Home","/index.html"), ("Capabilities", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["capabilities"]}');">
  <div class="wrap">
    <p class="page-hero__tag">Capabilities</p>
    <h1 class="page-hero__title">Thirteen diagnostics. One evidence-first standard.</h1>
    <p class="page-hero__sub">The first six are the diagnostics we built our practice on. The rest answer the questions leadership teams across Europe are asking us most right now.</p>
  </div>
</section>
<section class="section"><div class="wrap"><div class="tile-grid">{tiles}</div></div></section>'''
    body += cta_band("Not sure which capability fits your situation?", "Book a Diagnostic Call")
    write("capabilities/index.html", page("Capabilities", "All thirteen Noevara Consulting diagnostic capabilities.", "capabilities", body))

def build_industries_index():
    tiles = related_tiles(
        [dict(title=i["title"], slug=i["slug"], desc=i["lede"]) for i in INDUSTRIES],
        "industries"
    )
    body = breadcrumb(("Home","/index.html"), ("Industries", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["industries"]}');">
  <div class="wrap">
    <p class="page-hero__tag">Industries</p>
    <h1 class="page-hero__title">Built for European organizations, at every scale.</h1>
    <p class="page-hero__sub">From first-time SME diagnostics to regulated-sector engagements that never let confidential data leave the premises.</p>
  </div>
</section>
<section class="section"><div class="wrap"><div class="tile-grid">{tiles}</div></div></section>'''
    body += cta_band("Tell us about your organization")
    write("industries/index.html", page("Industries", "The European organizations Noevara Consulting works with.", "industries", body))

def build_tools_index():
    tiles = related_tiles(
        [dict(title=t["name"], slug=t["slug"], desc=t["summary"]) for t in TOOLS],
        "tools"
    )
    body = breadcrumb(("Home","/index.html"), ("Tools", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["tools"]}');">
  <div class="wrap">
    <p class="page-hero__tag">TIPE \u2014 Transformation Intelligence Platform &amp; Ecosystem</p>
    <h1 class="page-hero__title">The Diagnostic Intelligence Portfolio.</h1>
    <p class="page-hero__sub">Nine named, proprietary tools, all built on the same evidence-and-scoring foundation \u2014 offline-capable and privacy-first by design.</p>
  </div>
</section>
<section class="section"><div class="wrap"><div class="tile-grid">{tiles}</div></div></section>'''
    body += cta_band("See which tool fits your diagnostic")
    write("tools/index.html", page("Tools", "The nine proprietary TIPE diagnostic tools.", "tools", body))

def build_insights_index():
    tiles = "".join(f'''<div class="insight-tile">
      <span class="insight-tile__type">{i["type"]}</span>
      <h3>{i["title"]}</h3>
      <p>{i["excerpt"]}</p>
      <span class="insight-tile__meta">{i["date"]} \u2014 Download PDF \u2192</span>
    </div>''' for i in INSIGHTS)
    body = breadcrumb(("Home","/index.html"), ("Insights", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["quote"]}');">
  <div class="wrap">
    <p class="page-hero__tag">From Noevara</p>
    <h1 class="page-hero__title">Newsletter &amp; whitepapers.</h1>
    <p class="page-hero__sub">Short, evidence-first reading \u2014 a field note from an engagement, or a full whitepaper behind one of the diagnostics.</p>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><h2 class="section-title">Latest</h2></div>
      <form class="" id="subscribeForm" style="min-width:280px">
        <label style="display:block;font-family:var(--font-mono);font-size:.76rem;text-transform:uppercase;letter-spacing:.06em;color:var(--text-mute);margin-bottom:10px">Subscribe to the newsletter</label>
        <div style="display:flex;gap:10px">
          <input type="email" id="subEmail" placeholder="you@company.com" required style="flex:1;padding:12px 14px;border:1.5px solid var(--paper-3);border-radius:4px">
          <button type="submit" class="btn btn--primary">Subscribe</button>
        </div>
        <p class="form-status" id="subscribeStatus"></p>
      </form>
    </div>
    <div class="insight-strip">{tiles}</div>
  </div>
</section>'''
    write("insights/index.html", page("Insights", "Newsletter issues and whitepapers from Noevara Consulting.", "insights", body))

def build_about():
    market_chips = "".join(f'<span class="side-chip">{x}</span>' for x in ["SMEs","Mid-sized companies (ETIs)","Industrial organizations","Regulated industries","Public organizations","Innovation-driven companies"])
    body = breadcrumb(("Home","/index.html"), ("About", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["capabilities"]}');">
  <div class="wrap">
    <p class="page-hero__tag">About Noevara</p>
    <h1 class="page-hero__title">A consultancy built the way it asks you to think.</h1>
    <p class="page-hero__sub">Evidence before opinion \u2014 based in Strasbourg, at the crossing point of French and European regulatory practice.</p>
  </div>
</section>
<section class="section">
  <div class="wrap detail-grid">
    <div class="detail-body">
      <h3>Our Philosophy</h3>
      <p>Noevara Consulting is based in Strasbourg, which is exactly where the AI Act, CSRD and NIS2 stop being abstractions and start being operational questions. Our diagnostics draw on established research \u2014 AI maturity literature, SME digital-maturity research, Nonaka's SECI model, structured root-cause methodology \u2014 and are reviewed on an ongoing basis against current research and market practice.</p>
      <p>We work as one firm running the relevant diagnostics together, in a single engagement and a single evolving client profile \u2014 rather than sending you to a different specialist for every question.</p>
      <h3>Vision</h3>
      <p>To become a trusted transformation intelligence partner for organizations navigating technological, organizational, regulatory and economic disruption.</p>
      <h3>Mission</h3>
      <p>To enable organizations to understand their current reality, identify opportunities, design effective strategies, and successfully execute measurable improvements.</p>
    </div>
    <aside class="detail-side">
      <div class="side-card">
        <div class="side-card__label">We Primarily Work With</div>
        <div class="side-chip-row">{market_chips}</div>
      </div>
      <div class="side-card">
        <div class="side-card__label">Office</div>
        <h4>Strasbourg, France</h4>
        <p>	
contact@noevaraconsulting.com</p>
      </div>
    </aside>
  </div>
</section>'''
    body += cta_band("Start the conversation")
    write("about/index.html", page("About", "About Noevara Consulting \u2014 Strasbourg, France.", "about", body))

def build_contact():
    options = "".join(f'<option>{c["title"]}</option>' for c in CAPABILITIES) + "<option>Not sure yet</option>"
    body = breadcrumb(("Home","/index.html"), ("Contact", None))
    body += f'''<section class="page-hero" style="background-image:url('{PHOTOS["contact"]}');">
  <div class="wrap">
    <p class="page-hero__tag">Start The Conversation</p>
    <h1 class="page-hero__title">Tell us which problem is loudest right now.</h1>
    <p class="page-hero__sub">Thirty minutes, no slide deck. We'll tell you honestly which diagnostic \u2014 if any \u2014 fits your situation.</p>
  </div>
</section>
<section class="section">
  <div class="wrap detail-grid">
    <div class="detail-body">
      <h3>Get In Touch</h3>
      <p><strong>Office:</strong> Strasbourg, France<br><strong>Email:</strong> 	
contact@noevaraconsulting.com<br><strong>Response time:</strong> Within one business day</p>
    </div>
    <aside>
      <form id="contactForm">
        <div class="form-row"><label for="name">Name</label><input type="text" id="name" required></div>
        <div class="form-row"><label for="email">Work email</label><input type="email" id="email" required></div>
        <div class="form-row"><label for="company">Company</label><input type="text" id="company"></div>
        <div class="form-row"><label for="service">Which capability is loudest?</label><select id="service">{options}</select></div>
        <div class="form-row"><label for="message">A sentence or two on the situation</label><textarea id="message" rows="4"></textarea></div>
        <button type="submit" class="btn btn--primary" style="width:100%">Send &amp; book a call</button>
        <p class="form-status" id="formStatus"></p>
      </form>
    </aside>
  </div>
</section>'''
    write("contact/index.html", page("Contact", "Get in touch with Noevara Consulting.", "contact", body))

# ---- Homepage ----
def build_homepage():
    cap_preview = related_tiles(
        [dict(title=c["title"], slug=c["slug"], desc=c["lede"], tag=c["tag"]) for c in CAPABILITIES[:6]],
        "capabilities"
    )
    ind_preview = related_tiles(
        [dict(title=i["title"], slug=i["slug"], desc=i["lede"]) for i in INDUSTRIES],
        "industries"
    )
    problem_html = "".join(f'''<div class="tile">
      <span class="side-card__label">{n}</span>
      <span class="tile__title">{t}</span>
      <span class="tile__desc">{d}</span>
    </div>''' for n,t,d in PROBLEMS)
    insight_tiles = "".join(f'''<div class="insight-tile">
      <span class="insight-tile__type">{i["type"]}</span>
      <h3>{i["title"]}</h3>
      <p>{i["excerpt"]}</p>
      <span class="insight-tile__meta">{i["date"]}</span>
    </div>''' for i in INSIGHTS)

    body = f'''<section class="masthead" style="background-image:url('{PHOTOS["hero"]}');">
  <div class="wrap">
    <p class="eyebrow masthead__eyebrow">Strasbourg, France \u2014 Transformation Intelligence &amp; Strategic Consulting</p>
    <h1 class="masthead__title">Every transformation starts with an honest diagnosis.</h1>
    <p class="masthead__sub">Noevara Consulting replaces guesswork with evidence. Thirteen capabilities, nine proprietary diagnostic tools, one integrated platform \u2014 built for AI, digital, data, cyber and organizational readiness across Europe.</p>
    <div class="masthead__actions">
      <a href="/contact/index.html" class="btn btn--primary">Book a Diagnostic Call</a>
      <a href="/capabilities/index.html" class="btn btn--on-dark">Explore Capabilities</a>
    </div>
  </div>
</section>

<section class="stat-band">
  <div class="wrap">
    <div class="stat"><span class="stat__num">13</span><span class="stat__label">Consulting capabilities</span></div>
    <div class="stat"><span class="stat__num">9</span><span class="stat__label">Proprietary diagnostic tools</span></div>
    <div class="stat"><span class="stat__num">6</span><span class="stat__label">Industries served</span></div>
    <div class="stat"><span class="stat__num">1</span><span class="stat__label">Integrated engagement</span></div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><p class="eyebrow">The Reality</p><h2 class="section-title">Six conversations we keep having with leadership teams.</h2></div>
    </div>
    <div class="tile-grid">{problem_html}</div>
  </div>
</section>

<section class="section" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section-head">
      <div><p class="eyebrow">Capabilities</p><h2 class="section-title">How we help clients.</h2></div>
      <a class="section-head__link" href="/capabilities/index.html">View all 13 capabilities \u2192</a>
    </div>
    <div class="tile-grid tile-grid--compact">{cap_preview}</div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><p class="eyebrow">Industries</p><h2 class="section-title">Who we work with.</h2></div>
      <a class="section-head__link" href="/industries/index.html">View all industries \u2192</a>
    </div>
    <div class="tile-grid tile-grid--compact">{ind_preview}</div>
  </div>
</section>

<section class="quote-band" style="background-image:url('{PHOTOS["quote"]}');">
  <blockquote>Transformation should begin with understanding, not assumptions.</blockquote>
  <cite>\u2014 The Noevara core philosophy</cite>
</section>

<section class="section" style="background:var(--ink);color:var(--text-light)">
  <div class="wrap">
    <div class="section-head">
      <div><p class="eyebrow eyebrow--light">TIPE</p><h2 class="section-title" style="color:var(--text-light)">The platform behind every engagement.</h2></div>
      <a class="section-head__link" href="/tools/index.html" style="color:var(--brass-soft)">Explore the diagnostic portfolio \u2192</a>
    </div>
    <p style="max-width:70ch;color:var(--text-light-mute);font-size:1.02rem">TIPE \u2014 the Transformation Intelligence Platform &amp; Ecosystem \u2014 is Noevara's proprietary diagnostic infrastructure. Nine named tools, offline-capable and privacy-first, all built on one shared evidence-and-scoring foundation.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <div><p class="eyebrow">From Noevara</p><h2 class="section-title">Newsletter &amp; whitepapers.</h2></div>
      <a class="section-head__link" href="/insights/index.html">View all insights \u2192</a>
    </div>
    <div class="insight-strip">{insight_tiles}</div>
  </div>
</section>'''
    body += cta_band("Tell us which problem is loudest right now.")
    write("index.html", page("Home", "Noevara Consulting \u2014 Transformation Intelligence & Strategic Consulting. Strasbourg, France.", "home", body))

print("Landing/home/about/contact builders loaded.")

# ====================================================================
# POST-PROCESS: rewrite root-relative links ("/capabilities/...") into
# real relative paths, so the site works correctly both by
# double-clicking a file (file://) and once actually deployed. Run
# after every page has been written.
# ====================================================================
def fix_relative_paths():
    fixed = 0
    for dirpath, _, filenames in os.walk(ROOT):
        for fn in filenames:
            if not fn.endswith(".html"):
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, ROOT)
            depth = rel.count(os.sep)  # 0 = root, 1 = one subfolder deep
            prefix = "../" * depth
            html = open(full, encoding="utf-8").read()

            def repl(m):
                attr, path = m.group(1), m.group(2)
                return f'{attr}="{prefix}{path.lstrip("/")}"'

            new_html = re.sub(r'(href|src)="(/[^"]+)"', repl, html)
            if new_html != html:
                with open(full, "w", encoding="utf-8") as f:
                    f.write(new_html)
                fixed += 1
    print(f"Relative paths fixed in {fixed} files.")

# ====================================================================
# RUN
# ====================================================================
if __name__ == "__main__":
    build_homepage()
    build_capabilities_index()
    for c in CAPABILITIES: build_capability_page(c)
    build_industries_index()
    for i in INDUSTRIES: build_industry_page(i)
    build_tools_index()
    for t in TOOLS: build_tool_page(t)
    build_insights_index()
    build_about()
    build_contact()
    fix_relative_paths()
    n_pages = 1 + 1 + len(CAPABILITIES) + 1 + len(INDUSTRIES) + 1 + len(TOOLS) + 1 + 1 + 1
    print(f"\nBuild complete: {n_pages} pages generated.")
