type PredictionResultProps = {
  title: string;
  result: number | null;
};

const inputValue = [
  { id: 1, value: 3, default: "bedrooms" },
  { id: 2, value: 2, default: "bathrooms" },
  { id: 3, value: 1800, default: "sqft" },
  { id: 4, value: 1988 },
  { id: 5, value: 15009 },
];

const PredictionResult = ({ title, result }: PredictionResultProps) => {
  return (
    <div className="flex flex-col gap-8 h-full">
      {/* prediction result section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-600 font-bold">{title}</h1>
        {/* estimated price for section */}
        {result !== null ? (
          <div className="flex flex-col gap-1">
            <h1 className="text-gray-700 text-sm font-bold">Estimated price for :</h1>
            <div className="flex gap-7">
              {inputValue.map((input) => (
                <div key={input.id}>
                  <p>
                    <span className="inline-block bg-gray-300 rounded-full mr-1.5 w-2 h-2"></span>
                    <span className="mr-1">{input.value}</span>
                    <span>{input.default}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400 italic">Enter inputs to generate a price prediction.</p>
        )}
      </div>
    </div>
  );
};

export default PredictionResult;
