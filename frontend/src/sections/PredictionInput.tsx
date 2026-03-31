import Input from "../components/Input";
import Button from "../components/Button";

type PredictionInputProps = {
  title: string;
};

const PredictionInput = ({ title }: PredictionInputProps) => {
  return (
    <div className="flex flex-col gap-7 pb-6">
      <h1 className="text-gray-600 font-bold">{title}</h1>
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
