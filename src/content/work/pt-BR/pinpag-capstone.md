---
title: Segurança em nuvem na PinPag
summary: "Meu projeto final de engenharia: monitoramento de segurança para uma empresa brasileira de pagamentos que opera sob PCI-DSS e ISO 27001."
period: jul. – dez. 2024
role: Um de quatro alunos. Trabalhei nas ferramentas de segurança e no caminho de dados na AWS por trás delas.
links:
  - Relatório final em português, no repositório do Insper
  - Tradução para o inglês, com trechos removidos (PDF)
---

Um projeto final, defendido em novembro de 2024, realizado sobre uma plataforma de pagamentos em produção, dentro de um ambiente PCI-DSS e ISO 27001. Nada foi implantado sem passar por auditoria.

## Duas nuvens

A PinPag roda na AWS e no Azure. Esta foi a segunda fase de um projeto que uma equipe anterior do Insper começou em 2023, e [o relatório público deles](https://repositorio.insper.edu.br/handle/11224/6789) descreve o monitoramento de custos que construíram nas duas nuvens. Quando começamos, partes dele tinham parado de funcionar de cada lado, então o primeiro trabalho foi colocá-lo de pé de novo. Na AWS, isso significou reconstruir o pipeline do relatório de custo e uso, passando por Glue e Athena, até o Grafana. No Azure, significou restaurar a exportação diária de custos e as etapas no Data Factory e no Data Explorer por trás do painel de custos do Azure. Depois adicionamos um número semanal de custo que mostra as duas nuvens lado a lado, e alertas que cobrem as duas.

## Mapeando o que pode alcançar o quê

A peça que eu mostraria primeiro é uma ferramenta em Python que percorre uma conta AWS em produção pelo boto3, lê instâncias EC2, security groups, sub-redes e instâncias RDS, e monta um grafo do que pode alcançar o quê.

Ela desenha cada recurso como um nó e cada caminho permitido como uma aresta, e então marca as arestas que não deveriam existir. Um security group que admite `0.0.0.0/0` em qualquer porta além de 80 ou 443 volta grosso e vermelho. A saída vai para o S3 como Parquet, é catalogada por um crawler e renderizada como um grafo de nós.

A questão não era o desenho. Era que, antes, ninguém conseguia responder “o que está aberto para a internet agora” sem ler as regras uma por uma.

## O resto

Semgrep ligado à CI do GitLab, para que todo build seja escaneado, com os achados catalogados por CWE e levados a painéis e alertas. Um painel construído sobre os logs do AWS WAF. Um WAF ModSecurity com o conjunto de regras da OWASP, validado em um servidor de testes. Um SIEM Wazuh consertado e colocado de volta em operação. Alertas por vários canais.

Os números de escala da plataforma da PinPag são deles, não meus, então não estão reproduzidos aqui.

Traduzi o relatório para o inglês. A versão em inglês deixa de fora as capturas de tela e os trechos que mostravam detalhes dos sistemas de produção da PinPag, e marca cada ponto em que algo foi removido.
