export const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Lambda OK!!!"),
  };
  return response;
};