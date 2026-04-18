import joblib
import json
import numpy as np

# load model
def model_fn(model_dir):
    return joblib.load(f"{model_dir}/model.pkl")

# convert json to numpy array
def input_fn(request_body, content_type):
    data = json.loads(request_body)

    features = [[
        data["bedrooms"],
        data["bathrooms"],
        data["sqft_living"],
        data["yr_built"],
        data["zipcode"],
    ]]

    return np.array(features)

# prediction
def predict_fn(input_data, model):
    return model.predict(input_data)

# convert prediction result to json
def output_fn(prediction, accept):
    return json.dumps({
        "prediction": float(prediction[0])
    }), "application/json"