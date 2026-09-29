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
  - Semgrep
  - Wazuh
  - ModSecurity
  - Grafana
---

A 360-hour capstone, defended in November 2024, carried out against a live payments platform rather than a sandbox. Working inside a PCI-DSS and ISO 27001 environment shaped the work more than any of the tooling did: nothing could be deployed that couldn't be explained to an auditor.

## Mapping what could reach what

The piece I'd show first is a Python tool that walks a live AWS account through boto3, reads EC2 instances, security groups, subnets and RDS instances, and builds a graph of what can reach what.

It draws each resource as a node and each permitted path as an edge, then marks the edges that shouldn't exist. A security group admitting `0.0.0.0/0` on anything other than 80 or 443 comes back thick and red. The output lands in S3 as Parquet, gets crawled into a catalogue, and renders as a node graph.

The point wasn't the picture. It was that nobody could previously answer "what's open to the internet right now" without reading rules one at a time.

## The rest

Semgrep wired into GitLab CI so every build is scanned, with findings catalogued by CWE and carried through to dashboards and alerts. A ModSecurity WAF on the OWASP rule set. A Wazuh SIEM repaired and put back into service. Alerting across several channels.

The scale figures for PinPag's platform are theirs rather than mine, so they aren't reproduced here.
