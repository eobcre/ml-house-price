type ModelMetrics = {
  title: string;
};

const items = [
  { id: 1, title: "Test", value: 382872 },
  { id: 1, title: "Test", value: 374637 },
  { id: 1, title: "Test", value: 727272 },
  { id: 1, title: "Test", value: 373252 },
];

const ModelMetrics = ({ title }: ModelMetrics) => {
  return (
    <div className="flex flex-col lg:h-80">
      {/* title */}
      <h1 className="text-gray-600 font-bold">{title}</h1>
      {/* metrics */}
      <div className="grid grid-cols-2 gap-4 items-stretch py-4 lg:overflow-y-auto">
        {items.map((item) => (
          <div className="flex flex-col gap-2 border border-gray-200 bg-gray-50 rounded-2xl p-4">
            <h2 className="text-gray-600 text-sm">{item.title}</h2>
            <p className="text-gray-700 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
        {/* desc */}
        <div className="col-span-2 my-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis ipsa adipisci iure numquam, minima nihil rerum, assumenda voluptatibus natus recusandae qui tempore reprehenderit
            cupiditate. Dolores voluptatibus quidem deleniti maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim perspiciatis ipsa adipisci iure numquam, minima nihil rerum,
            assumenda voluptatibus natus recusandae qui tempore reprehenderit cupiditate. Dolores voluptatibus quidem deleniti maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            perspiciatis ipsa adipisci iure numquam, minima nihil rerum, assumenda voluptatibus natus recusandae qui tempore reprehenderit cupiditate. Dolores voluptatibus quidem deleniti maiores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelMetrics;
