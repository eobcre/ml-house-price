import { useState } from "react";

import PredictionInput from "./sections/PredictionInput";
import PredictionResult from "./sections/PredictionResult";
import ModelMetrics from "./sections/ModelMetrics";

type FormState = {
  bedrooms: string;
  bathrooms: string;
  sqft_living: string;
  yr_built: string;
  zipcode: string;
};

type PredictionResponse = {
  ok: boolean;
  raw: string;
};

const App = () => {
  const [result, setResult] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({
    bedrooms: "",
    bathrooms: "",
    sqft_living: "",
    yr_built: "",
    zipcode: "",
  });
  const [submittedForm, setSubmittedForm] = useState<FormState | null>(null);
  const [formError, setFormError] = useState("");

  // search
  const handleSearch = async () => {
    if (
      !form.bedrooms ||
      !form.bathrooms ||
      !form.sqft_living ||
      !form.yr_built ||
      !form.zipcode ||
      isNaN(Number(form.bedrooms)) ||
      isNaN(Number(form.bathrooms)) ||
      isNaN(Number(form.sqft_living)) ||
      isNaN(Number(form.yr_built)) ||
      isNaN(Number(form.zipcode))
    ) {
      setFormError("All fields must be filled with numbers");
      return;
    }

    const payload = {
      bedrooms: Number(form.bedrooms),
      bathrooms: Number(form.bathrooms),
      sqft_living: Number(form.sqft_living),
      yr_built: Number(form.yr_built),
      zipcode: Number(form.zipcode),
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/predict`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Network Error...");
      }

      const data: PredictionResponse = await res.json();
      const parsed = JSON.parse(data.raw);
      setResult(parsed.prediction);
      setSubmittedForm(form);

      setForm({
        bedrooms: "",
        bathrooms: "",
        sqft_living: "",
        yr_built: "",
        zipcode: "",
      });

      console.log("SUCCESS!!!", data);
    } catch (err: any) {
      console.error("ERROR...", err.message);
    }
  };

  // format number to usd
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="grid grid-cols-1 gap-6 bg-gray-100 p-6 min-h-screen lg:grid-cols-3 lg:p-14 lg:h-screen">
      <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 h-full lg:col-span-1">
        <PredictionInput title="Prediction Search" handleSearch={handleSearch} form={form} setForm={setForm} formError={formError} setFormError={setFormError} />
      </section>
      <div className="flex flex-col gap-4 lg:col-span-2 h-full">
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 shrink-0">
          <PredictionResult title="Prediction Result" result={result} submittedForm={submittedForm} formatCurrency={formatCurrency} />
        </section>
        <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex-1 overflow-auto">
          <ModelMetrics title="Model Metrics" result={result} />
        </section>
      </div>
    </div>
  );
};

export default App;
