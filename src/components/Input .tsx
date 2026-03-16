type InputProps = {
  label: string;
};

const Input = ({ label }: InputProps) => {
  return (
    <div>
      <label htmlFor="" className="text-gray-600 text-sm font-medium">{label}</label>
      <input type="text" placeholder="" className="border border-gray-300 bg-white rounded p-2 w-full" />
    </div>
  );
};

export default Input;
