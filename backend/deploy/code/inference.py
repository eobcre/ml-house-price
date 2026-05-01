import joblib
import json
import sklearn
import pandas as pd
import numpy as np

# define input structure and feature order
FEATURE_COLUMNS = [
    "bedrooms",
    "bathrooms",
    "sqft_living",
    "yr_built",
    "zipcode",
]

# load model
def model_fn(model_dir):
    # print("sklearn version:", sklearn.__version__)
    # print("numpy version:", np.__version__)
    return joblib.load(f"{model_dir}/model.pkl")

# parse incoming json data and convert to df
def input_fn(request_body, content_type):
    # print("content_type:", content_type)

    # parse
    data = json.loads(request_body)

    # convert user input to order list for model-ready
    features = [[
        data["bedrooms"],
        data["bathrooms"],
        data["sqft_living"],
        data["yr_built"],
        data["zipcode"],
    ]]

    # convert
    return pd.DataFrame(features, columns=FEATURE_COLUMNS)

# prediction
def predict_fn(input_data, model):
    return model.predict(input_data)

# convert prediction result to json
def output_fn(prediction, accept):
    return json.dumps({
        "prediction": float(prediction[0])
    }), "application/json"
