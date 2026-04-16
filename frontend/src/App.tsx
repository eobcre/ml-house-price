import PredictionInput from "./sections/PredictionInput";
import PredictionResult from "./sections/PredictionResult";
import ModelMetrics from "./sections/ModelMetrics";
import PipelineWorkflow from "./sections/PipelineWorkflow";

const App = () => {
  // test with dummy payload
  const handleSearch = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bedrooms: 4,
          bathrooms: 2,
          sqft_living: 2000,
          yr_built: 2000,
          zipcode: 98052,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error.");
      }

      console.log("SUCCESS!!!", data);
    } catch (err: any) {
      console.error("ERROR...", err.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 bg-gray-100 p-6 min-h-screen lg:grid-cols-3 lg:p-14 lg:h-screen">
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-full lg:col-span-1">
        <PredictionInput title="Prediction Search" handleSearch={handleSearch} />
      </section>
      <div className="grid grid-rows-2 gap-4 h-full">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
          <PredictionResult title="Prediction Result" />
        </section>
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
          <ModelMetrics title="Model Metrics" />
        </section>
      </div>
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-full lg:col-span-1">
        <PipelineWorkflow title="Pipeline Workflow" />
      </section>
    </div>
  );
};

export default App;
