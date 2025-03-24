interface IOptionFiltersProps {
  price: number;
  setPrice: (price: number) => void;
  size: number;
  setSize: (size: number) => void;
  dateCreated: number;
  setDateCreated: (dateCreated: number) => void;
  view: number;
  setView: (view: number) => void;
}

const OptionFilters: React.FC<IOptionFiltersProps> = ({
  price,
  setPrice,
  size,
  setSize,
  dateCreated,
  setDateCreated,
  view,
  setView,
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full">
        <label className="text-sm font-medium">Price: {price}</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <label className="text-sm font-medium">Size: {size}</label>
        <input
          type="range"
          min="0"
          max="40"
          step="2"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="w-full accent-blue-400"
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <label className="text-sm font-medium">Date Created:</label>
        <select
          value={dateCreated}
          onChange={(e) => setDateCreated(Number(e.target.value))}
          className="w-full p-2 mt-1 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <>
            <option value={2021}>Select Date</option>
            {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </>
        </select>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <label className="text-sm font-medium">View:</label>
        <select
          value={view}
          onChange={(e) => setView(Number(e.target.value))}
          className="w-full p-2 mt-1 border rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value={0}>Select View</option>
          <option value={0}>Table</option>
          <option value={1}>Grid</option>
        </select>
      </div>
    </div>
  );
};

export default OptionFilters;
