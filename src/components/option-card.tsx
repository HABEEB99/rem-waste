import { IOptionsList } from "@/interfaces/options-list-interface";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface IOptionCardProps {
  option: IOptionsList.IOption;
  selectedItem: number;
  handleSelect: (item: number) => void;
}

const OptionCard: React.FC<IOptionCardProps> = ({
  option,
  selectedItem,
  handleSelect,
}) => {
  return (
    <motion.div
      key={option.id}
      className={cn(
        "border p-4 rounded-lg shadow relative",
        selectedItem === option.id && "border-blue-700 animate-pulse"
      )}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src="/waste-pic.jpg"
        alt="Waste Picture"
        width={250}
        height={200}
        className="w-full h-[200px] object-cover rounded"
      />
      <span className="absolute top-6 right-8 bg-blue-700 w-fit p-2 text-center rounded-full">
        {option.size} Yards
      </span>

      <div className="flex flex-col space-y-4">
        <div>
          <h3 className="text-xl font-bold mt-2">{option.size} Yard Skip</h3>

          <span className="text-gray-400">
            {option.hire_period_days} day hire period
          </span>
        </div>

        <div>
          <p className="text-gray-400">
            <b className="text-blue-700 text-2xl">£{option.price_before_vat}</b>{" "}
            per week
          </p>

          {selectedItem === option.id ? (
            <button
              className="cursor-pointer mt-2 px-4 py-2 flex items-center justify-center space-x-2 bg-blue-700 text-white rounded transition duration-300 hover:bg-blue-700 active:scale-95 w-full"
              onClick={() => handleSelect(option.id)}
            >
              Selected
            </button>
          ) : (
            <button
              className="cursor-pointer mt-2 px-4 py-2 flex items-center justify-center space-x-2 bg-gray-500 text-white rounded transition duration-300 hover:bg-blue-700 active:scale-95 w-full"
              onClick={() => handleSelect(option.id)}
            >
              <span>Select this skip </span>
              <ArrowRight />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OptionCard;
