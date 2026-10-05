---
title: Cloud security at PinPag
summary: "My engineering capstone: security monitoring for a Brazilian payments company operating under PCI-DSS and ISO 27001."
status: archived
period: Jul – Dec 2024
role: One of four students. I worked on the security tooling and the AWS data path behind it.
featured: false
logos: [pinpag]
logoOnly: true
order: 7
stack:
  - Python
  - boto3
  - AWS
  - Azure
  - Semgrep
  - Wazuh
  - ModSecurity
  - Grafana
links:
  - label: Final report in Portuguese, in Insper’s repository
    href: https://repositorio.insper.edu.br/handle/11224/7570
  - label: English translation, redacted (PDF)
    href: /reports/pinpag-capstone-en-redacted.pdf
---

A capstone, defended in November 2024, carried out against a live payments platform, inside a PCI-DSS and ISO 27001 environment. Nothing was deployed without being audited.

## Two clouds

PinPag runs on both AWS and Azure. This was the second phase of a project that an earlier Insper team started in 2023, and [their public report](https://repositorio.insper.edu.br/handle/11224/6789) describes the cost monitoring they built on both clouds. By the time we started, parts of it had stopped working on each side, so the first job was bringing it back. On AWS that meant rebuilding the pipeline from the cost and usage report through Glue and Athena to Grafana. On Azure it meant restoring the daily cost export and the Data Factory and Data Explorer steps behind the Azure cost dashboard. We then added a weekly cost figure that shows both clouds side by side, and alerts that cover both.

## Mapping what could reach what

The piece I'd show first is a Python tool that walks a live AWS account through boto3, reads EC2 instances, security groups, subnets and RDS instances, and builds a graph of what can reach what.

It draws each resource as a node and each permitted path as an edge, then marks the edges that shouldn't exist. A security group admitting `0.0.0.0/0` on anything other than 80 or 443 comes back thick and red. The output lands in S3 as Parquet, gets crawled into a catalogue, and renders as a node graph.

The point wasn't the picture. It was that nobody could previously answer "what's open to the internet right now" without reading rules one at a time.

## The rest

Semgrep wired into GitLab CI so every build is scanned, with findings catalogued by CWE and carried through to dashboards and alerts. A dashboard built on the AWS WAF logs. A ModSecurity WAF on the OWASP rule set, validated on a test server. A Wazuh SIEM repaired and put back into service. Alerting across several channels.

The scale figures for PinPag's platform are theirs rather than mine, so they aren't reproduced here.

I translated the report into English. The English version leaves out the screenshots and passages that showed details of PinPag's production systems, and marks each place where something was removed.
