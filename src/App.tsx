import PredictionInput from "./sections/PredictionInput";

const App = () => {
  return (
    <div className="grid grid-cols-1 gap-6 bg-gray-100 min-h-screen lg:grid-cols-3 lg:h-screen">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1">
        <PredictionInput />
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1"></div>
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:col-span-1"></div>
    </div>
  );
};

export default App;
