# News Source Research

## Current findings

NDTV publishes official RSS feeds across topical sections and states that its RSS headlines are offered for personal, non-commercial use with required NDTV attribution. The platform must therefore treat its feed as a source-link and attribution pathway, not a licence to republish full articles or to remove source identity.

The Hindu RSS directory was not accessible to the browser during this review. The news ingestion design must support per-source enablement, clear error logging, and publisher-specific usage rules rather than assuming every named source is reliably available through a single feed endpoint.

The Wire Science exposes a publisher page labelled “RSS Feeds,” but it does not clearly document a general political-news XML endpoint in the reviewed page. Scroll’s public home page is accessible and displays current, timestamped stories, but this review did not establish a documented RSS endpoint. Both sources should therefore remain in the source roster as pending connectors: they need a documented, permitted feed endpoint or a licensing/API review before automatic polling is enabled.

## Product decision

Panopticon will not use a label such as “unfiltered” or categorise publishers by political loyalty. Instead, the news interface will display source attribution, publication time, topic, original link, and a transparent source roster. A diverse source mix and clear provenance are more defensible than a claim that any one outlet is neutral or independent.

## Sources

- NDTV RSS: https://www.ndtv.com/rss
- The Hindu RSS directory: https://www.thehindu.com/rssfeeds/
- The Wire Science RSS page: https://science.thewire.in/rss-feeds/
- Scroll: https://scroll.in/

## Featured profile data check

Rahul Gandhi’s Lok Sabha 2024 MyNeta page is accessible and identifies the record as affidavit information for the Wayanad constituency. Search results report the published page’s declared total assets, education category, and number of declared criminal cases; the original affidavit should remain the authority if any source conflicts.

The reviewed The Hindu affidavit-based article for Narendra Modi was not accessible in-browser, so this build does not ingest its figures into a public profile field. Any future declared assets, liabilities, education, or case data must be inserted through a documented primary/secondary source workflow and stored with the declaration year.

Narendra Modi’s accessible Lok Sabha 2024 MyNeta profile lists declared assets of ₹3,02,06,889, nil liabilities, a postgraduate education category, and no criminal cases. The site displays these only as 2024 self-declared affidavit fields with a direct record link.

Mamata Banerjee’s reviewed West Bengal 2021 MyNeta affidavit page lists declared assets of ₹16,72,352, nil liabilities, and a postgraduate education category. The declaration year and constituency context must remain visible because this is an archived election disclosure, not current asset information.

Arvind Kejriwal’s Delhi 2025 MyNeta affidavit page was accessible, but the relevant field values must be extracted through the publisher text before use; the profile remains source-queued until that verification is completed.

Arvind Kejriwal’s Delhi 2025 MyNeta affidavit record lists declared assets of ₹4,24,36,504, nil liabilities, a Graduate Professional education category, and 15 declared criminal cases. The record states no cases where convicted; the profile does not infer legal outcomes from the case count.

Mallikarjun Kharge’s Rajya Sabha 2026-2032 MyNeta affidavit record lists declared assets of ₹38,76,15,834, declared liabilities of ₹27,50,000, a Graduate Professional education category, and five declared criminal cases. The page’s case section lists no convictions. This is a source-linked candidate declaration, not an adjudication summary.
