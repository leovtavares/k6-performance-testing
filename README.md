[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# K6 Performance Testing Portfolio

[![CI/CD Pipeline](https://github.com/realleotavares/k6-performance-testing/actions/workflows/k6.yml/badge.svg)](https://github.com/realleotavares/k6-performance-testing/actions)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![K6](https://img.shields.io/badge/k6-7D64FF?logo=k6&logoColor=white)](https://k6.io/)
[![Live Report](https://img.shields.io/badge/Live_Report-GitHub_Pages-blue?logo=github)](https://realleotavares.github.io/k6-performance-testing/)

This repository focuses on **Performance and Load Testing** using [Grafana k6](https://k6.io/). It demonstrates my ability to analyze system bottlenecks, measure throughput, and ensure that backend services can handle concurrent user traffic.

## Live Quality Dashboard

> **[View Live HTML Test Report](https://realleotavares.github.io/k6-performance-testing/)**
> 
> Our CI/CD pipeline automatically publishes the latest k6 performance summary report to GitHub Pages. It visualizes request duration, VUs (Virtual Users), throughput, and error rates.

## Repository Architecture (Performance Engineering)

Following enterprise standards, the load testing scripts are organized by specific architectural scenarios and clients.

```text
k6-performance-testing/
├── README.md                   # This document
├── .github/workflows/          # CI Pipeline (GitHub Actions & Pages)
│
├── tavardt/                    # 🌍 Tavardt Platform
│   └── tests/
│       ├── load_test.js        # Standard Load Test (Expected traffic)
│       ├── stress_test.js      # Stress Test (Breaking point discovery)
│       └── soak_test.js        # Soak Test (Memory leak detection)
```

## Quick Start (Developer Onboarding)

Want to run these performance tests locally?

**Prerequisites:** [k6 CLI](https://k6.io/docs/get-started/installation/)

```bash
# 1. Clone the repository
git clone https://github.com/realleotavares/k6-performance-testing.git
cd k6-performance-testing

# 2. Run the specific test script
k6 run tavardt/tests/load_test.js

# 3. An HTML report (k6-report.html) will be generated locally!
```

## Core Competencies Demonstrated

1. **Performance Engineering:** Measuring `p(95)` response times, throughput (requests per second), and error rates.
2. **DevOps & CI/CD:** Automating load tests in GitHub Actions and publishing HTML metrics.
3. **Thresholds & SLAs:** Defining strict Service Level Agreements in code (e.g., `http_req_duration: ['p(95)<500']`).

---
*This portfolio is governed by strict CI/CD and engineering standards.*

<br><br><br>

<a id="português"></a>
# Portfólio de Testes de Performance com K6

[![CI/CD Pipeline](https://github.com/realleotavares/k6-performance-testing/actions/workflows/k6.yml/badge.svg)](https://github.com/realleotavares/k6-performance-testing/actions)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![K6](https://img.shields.io/badge/k6-7D64FF?logo=k6&logoColor=white)](https://k6.io/)
[![Live Report](https://img.shields.io/badge/Live_Report-GitHub_Pages-blue?logo=github)](https://realleotavares.github.io/k6-performance-testing/)

Este repositório é focado em **Testes de Carga e Performance** utilizando [Grafana k6](https://k6.io/). Ele demonstra minha capacidade de analisar gargalos de sistema, medir a taxa de transferência (throughput) e garantir que os serviços de backend suportem tráfego simultâneo de usuários.

## Dashboard de Qualidade (Ao Vivo)

> **[Acessar Relatório HTML Interativo](https://realleotavares.github.io/k6-performance-testing/)**
> 
> Nossa pipeline CI/CD publica automaticamente o último relatório de execução do k6 no GitHub Pages. O painel visualiza a duração das requisições, VUs (Usuários Virtuais), *throughput* e taxas de erro.

## Arquitetura do Repositório (Engenharia de Performance)

Seguindo os padrões corporativos, os scripts de teste de carga são organizados por cenários arquiteturais e clientes.

```text
k6-performance-testing/
├── README.md                   # Este documento
├── .github/workflows/          # Pipeline de CI/CD (GitHub Actions)
│
├── tavardt/                    # 🌍 Plataforma Tavardt
│   └── tests/
│       ├── load_test.js        # Teste de Carga Padrão (Tráfego esperado)
│       ├── stress_test.js      # Teste de Stress (Descobrir o ponto de quebra)
│       └── soak_test.js        # Teste de Soak (Detecção de vazamento de memória)
```

## Quick Start (Onboarding de Desenvolvedores)

Quer rodar estes testes de performance na sua máquina?

**Pré-requisitos:** [k6 CLI](https://k6.io/docs/get-started/installation/)

```bash
# 1. Clone o repositório
git clone https://github.com/realleotavares/k6-performance-testing.git
cd k6-performance-testing

# 2. Rode o script de teste desejado
k6 run tavardt/tests/load_test.js

# 3. Um relatório HTML (k6-report.html) será gerado na sua pasta local!
```

## Competências Core Demonstradas

1. **Engenharia de Performance:** Medição de tempos de resposta `p(95)`, *throughput* (requisições por segundo) e *Error Rates*.
2. **DevOps & CI/CD:** Automação de testes de carga no GitHub Actions com publicação de métricas HTML na nuvem.
3. **Thresholds & SLAs:** Definição de Acordos de Nível de Serviço rigorosos direto no código (ex: `http_req_duration: ['p(95)<500']`).

---
*Este portfólio é governado por rigorosos padrões de CI/CD e engenharia de software.*
