import React from "react";

const SourceDropdown = ({ source, setSource, sources }) => {
  return (
    <div>
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Sources</option>
        {sources.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SourceDropdown;
