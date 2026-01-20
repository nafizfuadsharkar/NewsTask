import React from "react";

const DateRangePicker = ({ from, setFrom, to, setTo }) => {
  return (
    <div className="flex gap-2">
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="p-2 border rounded"
      />
    </div>
  );
};

export default DateRangePicker;
