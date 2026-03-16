import PredictionInput from "./sections/PredictionInput";
import PredictionResult from "./sections/PredictionResult";
import ModelMetrics from "./sections/ModelMetrics";
import PipelineWorkflow from "./sections/PipelineWorkflow";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-6 bg-gray-100 p-6 min-h-screen lg:grid-cols-3 lg:p-14 lg:h-screen">
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
        <PredictionInput title="Prediction Search" />
      </section>
      <div className="grid grid-rows-2 gap-4">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
          <PredictionResult title="Prediction Result" />
        </section>
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg: col-span-1">
          <ModelMetrics title="Model Metrics" />
        </section>
      </div>
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
        <PipelineWorkflow title="Pipeline Workflow" />
      </section>
    </div>
  );
};

export default App;
