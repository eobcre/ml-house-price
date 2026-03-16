type ButtonType = {
  name: string;
};

const Button = ({ name }: ButtonType) => {
  return <button className="bg-blue-500 text-white rounded cursor-pointer hover:opacity-60 p-3">{name}</button>;
};

export default Button;
