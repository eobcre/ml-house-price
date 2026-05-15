import { jest } from "@jest/globals";

jest.unstable_mockModule("../services/predictService.js", () => ({
  predictService: jest.fn(() =>
    Promise.resolve({
      ok: true,
      prediction: 550000,
    }),
  ),
}));

const { handler } = await import("../index.js");

describe("Lambda handler tests", () => {
  test("returns 200 when request is OK", async () => {
    const event = {
      body: JSON.stringify({
        bedrooms: 3,
        bathrooms: 2,
        sqft_living: 1800,
        yr_built: 1995,
        zipcode: "98001",
      }),
    };

    const result = await handler(event);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(200);
    expect(body.ok).toBe(true);
    expect(body.prediction).toBe(550000);
  });

  test("returns 400 when fields are missing", async () => {
    const event = {
      body: JSON.stringify({
        bedrooms: 3,
      }),
    };

    const result = await handler(event);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(400);
    expect(body.ok).toBe(false);
  });
});
