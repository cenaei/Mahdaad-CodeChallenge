// src/plugins/axios.js
import axios from "axios";

let failureCount = 0;
let lastFailureTime = null;
const FAILURE_THRESHOLD = 3;
const COOLDOWN_PERIOD = 60_000; // 60 seconds

const axiosInstance = axios.create({
  baseURL: "https://finnhub.io/api/v1",
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (res) => {
    failureCount = 0;
    return res;
  },
  (error) => {
    failureCount++;
    console.log("failureCount", failureCount);
    lastFailureTime = Date.now();
    console.log("lastFailureTime", lastFailureTime);

    console.warn(`[AxiosBreaker] Failure #${failureCount}`, error.message);

    return Promise.reject(error);
  }
);

export async function guardedRequest(request) {
  if (
    failureCount >= FAILURE_THRESHOLD &&
    Date.now() - lastFailureTime < COOLDOWN_PERIOD
  ) {
    console.error("[AxiosBreaker] Circuit open — blocking requests");
    throw new Error("Circuit breaker: temporarily unavailable");
  }
  try {
    // Await the request function properly
    return await request();
  } catch (err) {
    // Ensure rejection propagates to caller
    throw err;
  }
}

export default axiosInstance;
