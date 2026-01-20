import React from "react";

const CountryDropdown = ({ countries, country, setCountry }) => {
  return (
    <div>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 border rounded-lg"
      >
        {countries.map((c, index) => (
          <option key={index} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryDropdown;
