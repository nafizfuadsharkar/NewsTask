import React from "react";

const FilterBar = ({ filters, selected, setSelected }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="country"
        value={selected.country}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Countries</option>
        {filters.countries.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        name="category"
        value={selected.category}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        {filters.categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <select
        name="language"
        value={selected.language}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Languages</option>
        {filters.languages.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <select
        name="source"
        value={selected.source}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All Sources</option>
        {filters.sources.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="from"
        value={selected.from}
        onChange={handleChange}
        className="p-2 border rounded"
      />
      <input
        type="date"
        name="to"
        value={selected.to}
        onChange={handleChange}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default FilterBar;
