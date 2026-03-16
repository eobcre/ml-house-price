type PredictionResultProps = {
  title: string;
};

const PredictionResult = ({ title }: PredictionResultProps) => {
  return (
    <div className="flex flex-col lg:h-80">
      <h1 className="text-gray-600 font-bold mb-2">{title}</h1>
      <div className="lg:overflow-y-auto py-2">
        <p className="lg:overflow-scroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit eligendi beatae possimus amet laudantium officia ex, esse quasi iure aliquam sequi veniam iusto veritatis voluptas
          voluptate explicabo, voluptatum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit eligendi beatae possimus amet laudantium officia ex, esse quasi iure
          aliquam sequi veniam iusto veritatis voluptas voluptate explicabo, voluptatum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit eligendi beatae possimus
          amet laudantium officia ex, esse quasi iure aliquam sequi veniam iusto veritatis voluptas voluptate explicabo, voluptatum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Itaque suscipit eligendi beatae possimus amet laudantium officia ex, esse quasi iure aliquam sequi veniam iusto veritatis voluptas voluptate explicabo, voluptatum accusantium. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit eligendi beatae possimus amet laudantium officia ex, esse quasi iure aliquam sequi veniam iusto veritatis voluptas
          voluptate explicabo, voluptatum accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit eligendi beatae possimus amet laudantium officia ex, esse quasi iure
          aliquam sequi veniam iusto veritatis voluptas voluptate explicabo, voluptatum accusantium.
        </p>
      </div>
    </div>
  );
};

export default PredictionResult;
