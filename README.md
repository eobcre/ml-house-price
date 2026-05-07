# House Price Prediction App (AWS + Machine Learning)

A house price web application that provides real-time house price predictions based on user inputs, using a ML model deployed on AWS serverless infrastructure.

## 🧠 How It Works

1. User enters property details. (bedrooms, bathrooms, sqft, year built, zipcode)
2. Frontend sends request to API Gateway.
3. AWS Lambda invokes SageMaker Serverless Endpoint.
4. Model returns prediction.
5. Result is formatted and displayed in UI.

## 📄 Data

The dataset which includes features such as price, bedrooms, bathrooms, square footage and location.  
It is used for regression problem and was used to train and evaluate the prediction model.

[House Sales in King County, USA](https://www.kaggle.com/datasets/harlfoxem/housesalesprediction?resource=download)

## 🏗 Architecture

<p>
  <img src="./docs/architecture.png" alt="Image" width="600" />
<br />
  <sub>Architecture diagram created with Lucidchart</sub>
</p>

## 🚀 Features

- Real-time house price prediction based on user inputs.
- Form for property features. (e.g. bedrooms, bathrooms...)
- Serverless model inference using Amazon SageMaker Serverless Inference Endpoint.
- Displays prediction results, insights and model performance metrics.
- Model evaluation metrics including MAE, RMSE, and R² score.
- End-to-end ML workflow from training to deployment on AWS.

## 🛠 Tech Stack

#### ▫️ Frontend

- React
- TypeScript
- Tailwind CSS

#### ▫️ Backend / AWS

- Amazon SageMaker (Serverless Inference Endpoint)
- Amazon SageMaker Studio
- AWS SAM
- AWS Lambda
- Amazon API Gateway
- Amazon CloudFront
- Amazon S3
- GitHub Actions

> Note: AWS Lambda + Amazon API Gateway are managed and deployed via AWS SAM and GitHub Actions.

#### ▫️ Machine Learning

- Python
- Random Forest Regressor

## ✏️ Notebooks

**▫️ eda.ipynb**  
 Explores the dataset, analyzes distributions, identifies outliers and determines preprocessing strategies.

**▫️ model_training.ipynb**  
 Applies preprocessing steps identified during EDA, trains the model, evaluates performance and saves the trained model for deployment.

## 📊 Model Metrics

The model shows moderate predictive performance:

- MAE (Mean Absolute Error): **$98,541** - Indicates average prediction error.

- RMSE (Root Mean Squared Error): **$183,909** - Indicates sensitivity to larger errors.

- R² Score: **0.73** - Explains 73% of the variance in house prices.

For reference, the average house price in the dataset is approximately $540,088.

## 📦 Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/eobcre/ml-house-price.git
cd ml-house-price
npm install
```

> Note: This application requires a deployed AWS backend (API Gateway, Lambda and SageMaker).

## 📚 References

- [Boto3 API Documentation (invoke_endpoint)](https://docs.aws.amazon.com/boto3/latest/reference/services/sagemaker-runtime/client/invoke_endpoint.html)

- [AWS SageMaker Inference Blog](https://aws.amazon.com/blogs/machine-learning/create-a-sagemaker-inference-endpoint-with-custom-model-extended-container/)

- [AWS SAM Template Anatomy](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-template-anatomy.html)

- [AWS SAM resources and properties](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-specification-resources-and-properties.html)

- [Tutorial: Deploy a Hello World application with AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html)

- [AWS::Serverless::HttpApi](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-httpapi.html)

- [Enforce CloudFront-Only Access for AWS API Gateway](https://pubudu.dev/posts/access-api-gw-rest-api-only-from-cloudfront/)

- [Protecting APIs with custom headers in CloudFront](https://arpadt.com/articles/protecting-apis-with-cloudfront)
