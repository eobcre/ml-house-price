type PipelineProps = {
  title: string;
};

const PipelineWorkflow = ({ title }: PipelineProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-600 font-bold">{title}</h1>
    </div>
  );
};

export default PipelineWorkflow;
