import { IOptionsList } from "@/interfaces/options-list-interface";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface IOptionsTableViewProps {
  options: IOptionsList.IOptions;
  selectedItem: number;
  handleSelect: (item: number) => void;
}

const OptionsTableView: React.FC<IOptionsTableViewProps> = ({
  options,
  selectedItem,
  handleSelect,
}) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-700">
          <th className="border p-2">Image</th>
          <th className="border p-2">Size</th>
          <th className="border p-2">Price</th>
          <th className="border p-2">Date Created</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {options.map((item) => (
          <motion.tr
            key={item.id}
            className="border"
            whileHover={{ scale: 1.05 }}
          >
            <td className="border p-2 flex justify-center">
              <Image
                src="/waste-pic.jpg"
                alt="Waste Picture"
                width={60}
                height={60}
                className="object-cover rounded"
              />
            </td>
            <td className="border p-2 text-center">{item.size}</td>
            <td className="border p-2 text-center">£{item.price_before_vat}</td>
            <td className="border p-2 text-center">
              {item.created_at.split("T")[0]}
            </td>
            <td className="border p-2 self-center">
              {selectedItem === item.id ? (
                <button
                  className="cursor-pointer w-full self-center mt-2 px-4 py-2 flex items-center justify-center space-x-2 bg-blue-700 text-white rounded transition duration-300 hover:bg-blue-700 active:scale-95"
                  onClick={() => handleSelect(item.id)}
                >
                  Selected
                </button>
              ) : (
                <button
                  className="cursor-pointer w-full mt-2 px-4 py-2 flex items-center justify-center space-x-2 bg-gray-500 text-white rounded transition duration-300 hover:bg-blue-700 active:scale-95"
                  onClick={() => handleSelect(item.id)}
                >
                  <span>Select this skip </span>
                  <ArrowRight />
                </button>
              )}
            </td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
};

export default OptionsTableView;
