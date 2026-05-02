const { Router } = require("express");
const { sendNotification } = require("../services/notificationService");

const router = Router();

router.post("/", async (req: any, res: any) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "message is required" });
  }

  const result = await sendNotification(message);
  res.json(result);
});

module.exports.default = router;