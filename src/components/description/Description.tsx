import React from "react";

const ShortDescription = ({
  title,
  ShortDescription,
}: {
  title: string;
  ShortDescription: string;
}) => {
  return (
    <li>
      <h2 className="text-xl text-gray-300 font-semibold">{title}</h2>
      <p className="text-gray-400"> {ShortDescription}</p>
    </li>
  );
};

const LongDescription = <T,>({
  title,
  list,
  render,
}: {
  title: string;
  list: T[];
  render: (v: T, i?: number) => React.ReactNode;
}) => {
  return (
    <div>
      <h2 className="text-xl text-gray-400 font-semibold">{title}</h2>
      <div className="w-full flex flex-wrap gap-x-8 gap-y-2">
        {list?.map(render)}
      </div>
    </div>
  );
};

export { ShortDescription, LongDescription };
