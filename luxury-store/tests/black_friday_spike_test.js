import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Spike Test (Pico Abrupto - Simulação de Black Friday / Flash Sale)
export const options = {
  stages: [
    { duration: '10s', target: 200 }, // Sobe de 0 para 200 usuários em apenas 10 segundos
    { duration: '1m', target: 200 },  // Mantém 200 VUs estressando o sistema
    { duration: '10s', target: 0 },   // Cai rapidamente
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // Sob estresse, toleramos 2 segundos
    http_req_failed: ['rate<0.05'],    // Sob estresse extremo, toleramos 5% de quebra (circuit breaker, 429)
  },
};

const BASE_URL = 'https://luxurystore.example.com';

export default function () {
  // Simula acesso instantâneo massivo à home e adição ao carrinho
  const res = http.get(BASE_URL);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  // Em um Spike Test, o think time costuma ser muito baixo, simulando frenesi de cliques
  sleep(0.5); 
}

// Relatório HTML
export function handleSummary(data) {
  return {
    "k6-report-luxurystore.html": htmlReport(data),
  };
}
