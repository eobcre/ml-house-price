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
  <img src="./docs/workflow_image.png" alt="Image" width="600" />
<br />
  <sub>Architecture diagram created with Lucidchart</sub>
</p>

## 🛠️ Backend Architecture

Backend is designed to separate development and production environments while sharing the same service logic.

- `lambda/`
  - Entry point for AWS Lambda. (`index.js`)
  - Handles API Gateway requests.

- `local/`
  - Express.js server for local development. (`server.js`)
  - Includes routes and controllers.

- `services/`
  - Contains shared logic used by both Lambda and local server.

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

- AWS Lambda
- Amazon API Gateway
- Amazon SageMaker (Serverless Inference Endpoint)
- Amazon SageMaker Studio
- AWS SAM
- Amazon CloudFront
- Amazon S3

> Note: AWS Lambda is managed via AWS SAM.

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

## 📈 API Configuration

API dynamically switches API endpoints based on the environment.

- In development:  
  The app connects to a local Node.js server at `http://localhost:5173/api`.

- In production:  
  The app uses a base path `/api`, which is routed through CloudFront to API Gateway and Lambda.

## 📦 Installation

Clone the repository and install dependencies.

```bash
git clone https://github.com/eobcre/ml-house-price.git
cd ml-house-price
npm install
```

**Environment Variables**

```
VITE_API_URL=your_api_gateway_invoke_url
```

**Run Locally**

```bash
npm run dev
```

Note: This application requires a deployed AWS backend (API Gateway, Lambda and SageMaker).

## 📚 References

- [Boto3 API Documentation (invoke_endpoint)](https://docs.aws.amazon.com/boto3/latest/reference/services/sagemaker-runtime/client/invoke_endpoint.html?utm_source=chatgpt.com)

- [AWS SageMaker Inference Blog](https://aws.amazon.com/blogs/machine-learning/create-a-sagemaker-inference-endpoint-with-custom-model-extended-container/?utm_source=chatgpt.com)
