import React from "react";

const LanguageDropdown = ({ language, setLanguage, languages }) => {
  return (
    <div>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Languages</option>
        {languages.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
