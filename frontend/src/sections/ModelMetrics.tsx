type ModelMetrics = {
  title: string;
  result: number | null;
};

const items = [
  { id: 1, title: "RMSE", value: 382872 },
  { id: 2, title: "MAE", value: 374637 },
  { id: 3, title: "R² Score", value: 727272 },
  { id: 4, title: "Model Type", value: 373252 },
];

const ModelMetrics = ({ title, result }: ModelMetrics) => {
  return (
    <div className="flex flex-col">
      {/* title */}
      <h1 className="text-gray-600 font-bold">{title}</h1>
      {/* metrics */}
      <div className="grid grid-cols-2 gap-4 items-stretch py-4 lg:overflow-y-auto">
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
              <p>...</p>
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
