import { IOptionsList } from "@/interfaces/options-list-interface";
import { OptionCard } from "@/components";

interface IOptionsGridViewProps {
  options: IOptionsList.IOptions;
  selectedItem: number;
  handleSelect: (item: number) => void;
}

const OptionsGridView: React.FC<IOptionsGridViewProps> = ({
  options,
  selectedItem,
  handleSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {options.map((item) => (
        <OptionCard
          key={item.id}
          option={item}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default OptionsGridView;
