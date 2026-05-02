import axios from "axios";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

export async function Log(
  stack: "backend" | "frontend",
  level: "debug" | "info" | "warn" | "error" | "fatal",
  pkg: string,
  message: string
) {
  try {
    const res = await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhdDQyNzZAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMjYyOSwiaWF0IjoxNzc3NzAxNzI5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDM1MDE3NDYtMmU4Zi00YzU4LWFiZDQtMDBhZWM4NWJjMzNlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYW1leWEgdGhha3JhbCIsInN1YiI6IjUwNmUxMmQ3LTU3YTEtNGM5NC04NTMwLWMxYWZmMDg1ZjBkMCJ9LCJlbWFpbCI6ImF0NDI3NkBzcm1pc3QuZWR1LmluIiwibmFtZSI6ImFtZXlhIHRoYWtyYWwiLCJyb2xsTm8iOiJyYTIzMTEwMjYwMTAwODEiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiI1MDZlMTJkNy01N2ExLTRjOTQtODUzMC1jMWFmZjA4NWYwZDAiLCJjbGllbnRTZWNyZXQiOiJLS3NUelFGcFNISkRQamhwIn0.zkeYvTG7mcoVoaixjUPbgZl_3IKIVebA6uFagfYCJXo`,
        },
      }
    );

    console.log(res.data);
  } catch (err: any) {
    console.error(err.response?.data || err.message);
  }
}