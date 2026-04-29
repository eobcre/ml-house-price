import { Router } from "express";
import { predictService } from "../../services/predictService.js";

const router = Router();

router.post("/predict", async (req, res) => {
  try {
    const result = await predictService(req.body);
    res.json(result);
  } catch (error) {
    console.error("Prediction route error:", error);

    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
});

export default router;
