type PipelineProps = {
  title: string;
};

const list = [
  { id: 1, number: 1, task: "Data", details: "house_data.csv from S3" },
  { id: 2, number: 2, task: "Preprocessing", details: "house_data.csv from S3" },
  { id: 3, number: 3, task: "Training", details: "house_data.csv from S3" },
  { id: 4, number: 4, task: "Evaluation", details: "house_data.csv from S3" },
  { id: 5, number: 5, task: "Register Model", details: "house_data.csv from S3" },
  { id: 6, number: 6, task: "Deploy", details: "house_data.csv from S3" },
];

const PipelineWorkflow = ({ title }: PipelineProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-gray-600 font-bold">{title}</h1>
      {list.map((work) => (
        <div key={work.id} className="flex items-center gap-3 border border-gray-200 bg-gray-50 rounded-2xl p-4">
          <span className="flex justify-center items-center bg-blue-500 text-white text-sm rounded-full w-7 h-7">{work.number}</span>
          <div className="flex flex-col">
            <p className="text-gray-600 font-semibold">{work.task}</p>
            <p className="text-gray-600 text-sm">{work.details}</p>
          </div>
          <div className="ml-auto">
            <svg className="h-5 w-5 shrink-0 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PipelineWorkflow;
