[English](#english) | [Português](#português)

<a id="english"></a>
# K6 Performance Testing Portfolio

This repository focuses on **Performance and Load Testing** using Grafana k6. It demonstrates my ability to analyze system bottlenecks, measure throughput, and ensure that backend services can handle concurrent user traffic.

## Multi-Client Architecture
Following enterprise standards, the load testing scripts are organized by client/project folders.

```text
k6-performance-testing/
├── .github/workflows/        # CI Pipeline (GitHub Actions)
├── tavardt/                  # [Client 1]
│   └── tests/
│       └── load_test.js      # K6 Load Test Script
├── client2/                  # [Client 2]
│   └── tests/
```

## Tech Stack
- **JavaScript (ES6)** (Scripting Language)
- **k6** (Performance Testing Tool)

## Running the Tests
To run these tests locally, ensure you have k6 installed.
```bash
k6 run tavardt/tests/load_test.js
```

<br><br>

<a id="português"></a>
# Portfólio de Testes de Performance com K6

Este repositório é focado em **Testes de Carga e Performance** utilizando Grafana k6. Ele demonstra minha capacidade de analisar gargalos de sistema, medir a taxa de transferência (throughput) e garantir que os serviços de backend suportem tráfego simultâneo de usuários.

## Arquitetura Multi-Cliente
Seguindo os padrões corporativos, os scripts de teste de carga são organizados por pastas de clientes/projetos.

```text
k6-performance-testing/
├── .github/workflows/        # Pipeline de CI (GitHub Actions)
├── tavardt/                  # [Cliente 1]
│   └── tests/
│       └── load_test.js      # Script de Teste de Carga K6
├── client2/                  # [Cliente 2]
│   └── tests/
```

## Stack Técnica
- **JavaScript (ES6)** (Linguagem de Script)
- **k6** (Ferramenta de Teste de Performance)

## Executando os Testes
Para rodar estes testes localmente, certifique-se de ter o k6 instalado.
```bash
k6 run tavardt/tests/load_test.js
```
