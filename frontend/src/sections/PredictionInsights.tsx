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

const PredictionInsights = ({ title }: InsightProps) => {
  const items = [
    { id: 1, title: "Mid-size home", desc: `Lorem Lorem Lorem` },
    { id: 2, title: "Established home", desc: `Lorem Lorem Lorem` },
    { id: 3, title: "Estimated range", desc: `Lorem Lorem Lorem` },
  ];

  return (
    <div className="">
      <h1 className="text-gray-600 font-bold mb-3">{title}</h1>
      {/* {result !== null ? ( */}
      <>
        {items.map((item) => (
          <div className="col-span-2 mt-4 text-sm text-gray-600">
            <h2 className="font-semibold mb-2">{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </>
      {/* ) : (
        <p className="col-span-2 text-gray-400 italic mt-2">Enter inputs to see the prediction insights.</p>
      )} */}
    </div>
  );
};

export default PredictionInsights;
