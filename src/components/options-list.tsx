"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { useState, useMemo } from "react";
import { optionsData } from "@/data/options-data";

import {
  OptionFilters,
  OptionsGridView,
  OptionsPagination,
  OptionsTableView,
  SelectedOptionAlert,
} from "@/components";

const OptionsList = () => {
  const [price, setPrice] = useQueryState(
    "price",
    parseAsInteger.withDefault(0)
  );
  const [size, setSize] = useQueryState("size", parseAsInteger.withDefault(0));
  const [dateCreated, setDateCreated] = useQueryState(
    "dateCreated",
    parseAsInteger.withDefault(2020)
  );
  const [view, setView] = useQueryState("view", parseAsInteger.withDefault(0));

  const [selectedItem, setSelectedItem] = useQueryState<number | null>(
    "selectedItem",
    {
      parse: (value) => (value ? parseInt(value, 10) : null),
      serialize: (value) => (value ? value.toString() : ""),
      defaultValue: null,
    }
  );

  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const handleSelect = (id: number) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  const filteredOptions = useMemo(() => {
    return optionsData.filter((item) => {
      const matchesPrice = price === 0 || item.price_before_vat <= price;
      const matchesSize = size === 0 || item.size <= size;
      const matchesDate =
        dateCreated === 0 ||
        new Date(item.created_at).getFullYear() === dateCreated;
      return matchesPrice && matchesSize && matchesDate;
    });
  }, [price, size, dateCreated]);

  const paginatedOptions = filteredOptions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="py-4 px-4 md:px-20 lg:px-40 space-y-4 relative">
      {/* Filters */}
      <OptionFilters
        price={price}
        setPrice={setPrice}
        size={size}
        setSize={setSize}
        dateCreated={dateCreated}
        setDateCreated={setDateCreated}
        view={view}
        setView={setView}
      />

      {view === 0 ? (
        <OptionsTableView
          options={paginatedOptions}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
        />
      ) : (
        <OptionsGridView
          options={paginatedOptions}
          selectedItem={selectedItem}
          handleSelect={handleSelect}
        />
      )}

      <SelectedOptionAlert
        options={filteredOptions}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />

      {filteredOptions.length > 0 && (
        <OptionsPagination
          page={page}
          setPage={setPage}
          itemsPerPage={itemsPerPage}
          options={filteredOptions}
        />
      )}
    </div>
  );
};

export default OptionsList;
