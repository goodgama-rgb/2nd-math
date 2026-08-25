// 캐싱은 전혀 하지 않는 최소 서비스워커.
// 목적은 딱 하나 — 크롬이 PWA 설치 배너를 자동으로 띄우려면
// "등록된 서비스워커 + fetch 핸들러"가 있어야 하는데, 그 조건만 채워주기 위함.
// 모든 요청은 그냥 네트워크로 그대로 흘려보내서, 브라우저 기본 캐시 동작과 동일하게 유지한다.
// (여기서 caches.match() 등으로 직접 캐싱하면 update-banner 버전 감지 로직과 충돌할 수 있어 의도적으로 안 함)
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
