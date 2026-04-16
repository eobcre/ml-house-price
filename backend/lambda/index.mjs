import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";

const client = new SageMakerRuntimeClient({ region: process.env.AWS_REGION });

export const handler = async () => {
  try {
    // dummy payload for test
    const payload = {
      bedrooms: 3,
      bathrooms: 2,
      sqft_living: 1800,
      yr_built: 1987,
      zipcode: 98074,
    };

    // endpoint info
    const command = new InvokeEndpointCommand({
      EndpointName: process.env.ENDPOINT_NAME,
      ContentType: "application/json",
      Body: JSON.stringify(payload),
    });

    // send request to endpoint
    const res = await client.send(command);
    console.log("RES", res)
    // decode binary to string
    const decoded = new TextDecoder().decode(res.Body);

    // return success
    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        raw: decoded,
      }),
    };
  } catch (error) {
    console.error("InvokeEndpoint Error:", error);

    // return error
    return {
      statusCode: 500,
      body: JSON.stringify({
        ok: false,
        error: error.message,
      }),
    };
  }
};
