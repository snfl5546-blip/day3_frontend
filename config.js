// 백엔드(FastAPI) 주소.
// 기본은 내 컴퓨터 서버(127.0.0.1:8000). Railway 배포 후 RAILWAY_API 를 실제 주소로 바꾸고,
// 주소 뒤에 ?api=railway 를 붙이면 Railway 서버를 사용한다.
const LOCAL_API = "http://127.0.0.1:8000";
const RAILWAY_API = "https://day3backend-production-11c38819.up.railway.app";
const useRailway = new URLSearchParams(location.search).get("api") === "railway"
  || (location.hostname !== "127.0.0.1" && location.hostname !== "localhost");
window.API_URL = useRailway ? RAILWAY_API : LOCAL_API;
