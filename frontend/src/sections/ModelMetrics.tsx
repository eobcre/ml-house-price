// result state props
type ResultData = {
  prediction: number;
  metrics: {
    rmse: number;
    mae: number;
    r2: number;
  };
};

type ModelMetrics = {
  title: string;
  result: ResultData | null;
};

const ModelMetrics = ({ title, result }: ModelMetrics) => {
  const items = [
    { id: 1, title: "RMSE", value: result?.metrics.rmse },
    { id: 2, title: "MAE", value: result?.metrics.mae },
    { id: 3, title: "R² Score", value: result?.metrics.r2 },
    { id: 4, title: "Model Type", value: 373252 },
  ];

  return (
    <div className="flex flex-col">
      {/* title */}
      <h1 className="text-gray-600 font-bold">{title}</h1>
      {/* metrics */}
      <div className="grid grid-cols-2 gap-4 py-4">
        {result !== null ? (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-2 border border-gray-200 bg-gray-50 rounded-2xl p-4">
                <h2 className="text-gray-600 text-sm">{item.title}</h2>
                <p className="text-gray-700 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
            {/* desc */}
            <div className="col-span-2 my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis asperiores blanditiis quidem, eos nobis obcaecati distinctio? Dolorem officiis, quas quis, temporibus a quo
                nostrum quia unde quaerat eligendi libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis asperiores blanditiis quidem, eos nobis obcaecati distinctio?
                Dolorem officiis, quas quis, temporibus a quo nostrum quia unde quaerat eligendi libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus perspiciatis asperiores
                blanditiis quidem, eos nobis obcaecati distinctio? Dolorem officiis, quas quis, temporibus a quo nostrum quia unde quaerat eligendi libero? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quod beatae totam est animi, dolorum impedit! Eius sed dolores possimus veritatis eos, nam accusantium ea voluptatibus facere maiores aliquam autem consequatur.
              </p>
            </div>
          </>
        ) : (
          <p className="col-span-2 text-gray-400 italic">Enter inputs to see the model metrics.</p>
        )}
      </div>
    </div>
  );
};

export default ModelMetrics;
