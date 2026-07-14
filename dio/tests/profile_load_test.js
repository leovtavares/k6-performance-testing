import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// Configuração do Teste de Carga e Estresse (DIO Profile)
export const options = {
  stages: [
    { duration: '30s', target: 50 }, // Ramp-up: sobe para 50 VUs (Usuários Virtuais) simulando recrutadores acessando perfis simultaneamente
    { duration: '1m', target: 50 },  // Plateau: mantém 50 VUs avaliando os perfis por 1 minuto
    { duration: '30s', target: 0 },  // Ramp-down: encerra os acessos gradualmente
  ],
  thresholds: {
    // SLAs rigorosos para SPA:
    // O Documento Principal (HTML) deve responder rápido para a hidratação React iniciar
    http_req_duration: ['p(95)<800'], // 95% das requisições abaixo de 800ms
    http_req_failed: ['rate<0.01'],   // Máximo de 1% de falha tolerada
  },
};

const BASE_URL = 'https://web.dio.me';

// Simulação do Comportamento do Usuário (Recrutador/Visitante)
export default function () {
  // 1. Acessa o Perfil Público via Roteamento Profundo (Deep Link)
  const res = http.get(`${BASE_URL}/users/realleotavares`);
  
  // 2. Validações de Resiliência e Integridade do Documento
  check(res, {
    'status is 200': (r) => r.status === 200,
    // Garante que a div root do React foi entregue pelo backend
    'page contains react root': (r) => r.body.includes('id="root"'),
    // Garante ausência de caminhos relativos falhos hardcoded (Bug-001)
    'no relative utils.js': (r) => !r.body.includes('src="assets/utils.js"'),
  });

  // Pausa (think time) simulando o tempo de leitura do currículo/conquistas
  sleep(1);
}

// Gera o Relatório Visual HTML nativo no padrão corporativo
export function handleSummary(data) {
  return {
    "k6-report.html": htmlReport(data, { title: "DIO Profile - Load Test Report" }),
  };
}
