# ML House Price Prediction App

A full-stack web application that provides real-time house price predictions based on user inputs, using a ML model deployed on AWS serverless infrastructure.

### 🚀 Features 🚀
- Real-time house price prediction
- Model evaluation metrics (RMSE, MAE, R²)

### 🧠 How It Works 🧠

1. User enters property details (bedrooms, bathrooms, sqft, year built, zipcode)
2. Frontend sends request to API Gateway
3. AWS Lambda invokes SageMaker Serverless Endpoint
4. Model returns prediction
5. Result is formatted and displayed in UI

### 🏗 Architecture 🏗
#### Diagram created with Lucidchart
<img src="./workflow_image.png" alt="image" width="600" />

### 🛠 Tech Stack 🛠
#### Frontend
- React
- TypeScript
- Tailwind CSS

#### Backend / AWS
- AWS Lambda
- API Gateway
- SageMaker (Serverless Inference)
- SageMaker Studio
- CloudFront
- S3

#### Machine Learning
- Python
- Random Forest Regressor

### 📊 Model Metrics 📊 
- RMSE: $183,909 
- MAE: $98,541
- R² Score: 0.73 

