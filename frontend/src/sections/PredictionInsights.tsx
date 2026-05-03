// result props
type ResultData = {
  prediction: number;
  metrics: {
    rmse: number;
    mae: number;
    r2: number;
  };
};

type InsightProps = {
  title: string;
  result: ResultData | null;
  formatCurrency: (value: number) => string;
};

const PredictionInsights = ({ title, result, formatCurrency }: InsightProps) => {
  //console.log("result:", result);

  if (!result) {
    return (
      <div>
        <h1 className="text-gray-600 font-bold mb-3">{title}</h1>
        <p className="col-span-2 text-gray-400 italic mt-2">Enter inputs to see the insights.</p>
      </div>
    );
  }

  // estimated range
  const low = Math.max(0, result.prediction - result.metrics.mae);
  const high = result.prediction + result.metrics.mae;

  const estimatedRangeText = `${formatCurrency(low)} - ${formatCurrency(high)}`;

  // data
  const items = [
    { id: 1, title: "Estimated range", desc: estimatedRangeText },
    { id: 2, title: "Mid-size home", desc: `Lorem Lorem Lorem` },
    { id: 3, title: "Established home", desc: `Lorem Lorem Lorem` },
  ];

  return (
    <div>
      <h1 className="text-gray-600 font-bold mb-3">{title}</h1>
      {items.map((item) => (
        <div key={item.id} className="col-span-2 mt-4 text-sm text-gray-600">
          <h2 className="font-semibold mb-2">{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default PredictionInsights;
