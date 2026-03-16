import Input from "../components/Input ";
import Button from "../components/Button";

const PredictionInput = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-gray-600 font-bold">Prediction Search</h1>
      <Input label="Bedrooms" />
      <Input label="Bathrooms" />
      <Input label="Square Feet" />
      <Input label="Year Built" />
      <Input label="Zip Code" />
      <Button name="Search" />
    </div>
  );
};

export default PredictionInput;
