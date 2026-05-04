// import { predictService } from "./services/predictService.js"; // prod
import { predictService } from "../services/predictService.js"; // dev

export const handler = async (e) => {
  try {
    const body = e?.body ? JSON.parse(e.body) : {};
    const { bedrooms, bathrooms, sqft_living, yr_built, zipcode } = body;

    const res = await predictService({ bedrooms, bathrooms, sqft_living, yr_built, zipcode });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    };
  } catch (err) {
    console.error("Lambda error:", err);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: false,
        error: err.message,
      }),
    };
  }
};
