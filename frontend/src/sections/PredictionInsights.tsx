// result state props
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
};

const PredictionInsights = ({ title, result }: InsightProps) => {
  return (
    <div>
      <h1 className="text-gray-600 font-bold">{title}</h1>
      {result !== null ? <div></div> : <p className="col-span-2 text-gray-400 italic mt-2">Enter inputs to see the prediction insights.</p>}
    </div>
  );
};

export default PredictionInsights;
