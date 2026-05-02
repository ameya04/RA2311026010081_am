const { ACCESS_TOKEN } = require("../utils/auth");

module.exports.sendNotification = async (message: string) => {
  const response = await fetch(
    "http://20.207.122.201/evaluation-service/logs",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack: "backend",
        level: "info",
        package: "notification",
        message,
      }),
    }
  );

  return response.json();
};