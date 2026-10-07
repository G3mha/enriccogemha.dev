---
title: Molnsäkerhet på PinPag
summary: "Mitt examensarbete i ingenjörsutbildningen: säkerhetsövervakning för ett brasilianskt betalningsföretag som arbetar under PCI-DSS och ISO 27001."
period: juli – dec. 2024
role: En av fyra studenter. Jag arbetade med säkerhetsverktygen och datavägen i AWS bakom dem.
links:
  - Slutrapport på portugisiska, i Inspers arkiv
  - Engelsk översättning, maskerad (PDF)
---

Ett examensarbete, försvarat i november 2024, utfört mot en betalningsplattform i drift, i en PCI-DSS- och ISO 27001-miljö. Inget driftsattes utan att granskas.

## Två moln

PinPag körs på både AWS och Azure. Det här var andra fasen av ett projekt som ett tidigare Insper-lag påbörjade 2023, och [deras offentliga rapport](https://repositorio.insper.edu.br/handle/11224/6789) beskriver kostnadsövervakningen de byggde på båda molnen. När vi började hade delar av den slutat fungera på varje sida, så det första jobbet var att få igång den igen. På AWS innebar det att bygga om pipelinen från kostnads- och användningsrapporten genom Glue och Athena till Grafana. På Azure innebar det att återställa den dagliga kostnadsexporten och stegen i Data Factory och Data Explorer bakom Azures kostnadspanel. Sedan lade vi till en veckovis kostnadssiffra som visar båda molnen sida vid sida, och larm som täcker båda.

## Kartlägga vad som kan nå vad

Den del jag skulle visa först är ett Python-verktyg som går igenom ett AWS-konto i drift via boto3, läser EC2-instanser, säkerhetsgrupper, subnät och RDS-instanser och bygger en graf över vad som kan nå vad.

Det ritar varje resurs som en nod och varje tillåten väg som en kant, och markerar sedan kanterna som inte borde finnas. En säkerhetsgrupp som släpper in `0.0.0.0/0` på något annat än port 80 eller 443 kommer tillbaka tjock och röd. Resultatet landar i S3 som Parquet, indexeras av en crawler till en katalog och renderas som en nodgraf.

Poängen var inte bilden. Den var att ingen tidigare kunde svara på ”vad är öppet mot internet just nu” utan att läsa reglerna en i taget.

## Resten

Semgrep kopplat till GitLab CI så att varje bygge skannas, med fynden katalogiserade per CWE och förda vidare till paneler och larm. En panel byggd på loggarna från AWS WAF. En ModSecurity-WAF med OWASP:s regeluppsättning, validerad på en testserver. Ett Wazuh-SIEM reparerat och åter i tjänst. Larm över flera kanaler.

Skalsiffrorna för PinPags plattform är deras snarare än mina, så de återges inte här.

Jag översatte rapporten till engelska. Den engelska versionen utelämnar skärmdumparna och de avsnitt som visade detaljer om PinPags produktionssystem, och markerar varje ställe där något tagits bort.
