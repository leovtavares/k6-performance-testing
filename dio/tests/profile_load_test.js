import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://web.dio.me/users/realleotavares');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
