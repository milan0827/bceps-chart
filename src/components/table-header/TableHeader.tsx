import React from "react";

const TableHeader = () => {
  return (
    <tr
      className="[&>*]:p-2 [&>*]:max-w-[7.5rem] [&>*]:truncate [&>*]:text-start [&>*]:border [&>*]:border-gray-400
    [&>*]:text-gray-200 font-semibold bg-blue-900"
    >
      <th>Code</th>
      <th>Name</th>
      <th>Language</th>
      <th>Continents</th>
      <th>Currency</th>
      <th>Action</th>
    </tr>
  );
};

export default TableHeader;
