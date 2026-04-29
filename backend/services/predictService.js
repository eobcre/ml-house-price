import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";

const client = new SageMakerRuntimeClient({
  region: process.env.AWS_REGION,
});

const metrics = {
  mae: 98540.56,
  rmse: 183908.55,
  r2: 0.7311,
};

export const predictService = async (payload) => {
  const command = new InvokeEndpointCommand({
    EndpointName: process.env.ENDPOINT_NAME,
    ContentType: "application/json",
    Body: JSON.stringify(payload),
  });

  const res = await client.send(command);
  const decoded = new TextDecoder().decode(res.Body);

  return {
    ok: true,
    raw: decoded,
    metrics,
  };
};
