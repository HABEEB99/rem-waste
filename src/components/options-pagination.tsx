import { IOptionsList } from "@/interfaces/options-list-interface";

interface IOptionsPaginationProps {
  page: number;
  setPage: (page: number) => void;
  itemsPerPage: number;
  options: IOptionsList.IOptions;
}

const OptionsPagination: React.FC<IOptionsPaginationProps> = ({
  page,
  setPage,
  itemsPerPage,
  options,
}) => {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 transition duration-300 hover:bg-blue-700 active:scale-95"
      >
        Previous
      </button>
      <span>Page {page}</span>
      <button
        disabled={page * itemsPerPage >= options.length}
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400 transition duration-300 hover:bg-blue-700 active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default OptionsPagination;
