import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { IOptionsList } from "@/interfaces/options-list-interface";

interface ISelectedOptionAlertProps {
  options: IOptionsList.IOptions;
  selectedItem: number;
  setSelectedItem: (item: number | null) => void;
}

const SelectedOptionAlert: React.FC<ISelectedOptionAlertProps> = ({
  options,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <AnimatePresence>
      {selectedItem !== null && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-0 inset-x-0 md:px-20 lg:px-40 left-0 w-full bg-gray-800 bg-opacity-50 h-auto py-5 flex justify-between items-center"
        >
          <div className="flex items-center justify-center space-x-5">
            <span>
              {options.find((item) => item.id === selectedItem)?.size}
            </span>

            <span>
              <b className="text-2xl font-bold text-blue-700">£</b>
              {
                options.find((item) => item.id === selectedItem)
                  ?.hire_period_days
              }{" "}
              day hire
            </span>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-gray-500 hover:bg-gray-700 py-2 px-4 rounded-md cursor-pointer"
              onClick={() => setSelectedItem(null)}
            >
              back
            </button>
            <button className="cursor-pointer px-4 py-2 flex items-center justify-center space-x-2 bg-blue-700 text-white rounded transition duration-300 hover:bg-blue-900 active:scale-95 w-full">
              <span>Continue</span>
              <ArrowRight />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelectedOptionAlert;
