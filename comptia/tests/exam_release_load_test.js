import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Load Test (Tráfego sustentado durante liberação de novos exames)
export const options = {
  stages: [
    { duration: '30s', target: 50 }, // Ramp-up: 50 usuários virtuais em 30s
    { duration: '1m', target: 50 },  // Plateau: mantém 50 VUs por 1 minuto buscando exames
    { duration: '30s', target: 0 },  // Ramp-down: reduz para 0
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'], // 95% das requisições abaixo de 800ms
    http_req_failed: ['rate<0.01'],   // Máximo de 1% de falhas toleradas
  },
};

const BASE_URL = 'https://www.comptia.org';

export default function () {
  // Simula usuário buscando por Security+
  const res = http.get(`${BASE_URL}/certifications/security`);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'page contains Security+': (r) => r.body.includes('Security+'),
  });

  sleep(1); // Tempo de leitura
}

// Relatório HTML
export function handleSummary(data) {
  return {
    "k6-report-comptia.html": htmlReport(data),
  };
}
