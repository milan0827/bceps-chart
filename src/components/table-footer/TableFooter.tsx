import React from "react";
import Button from "../button/Button";
import { CountriesQuery } from "@/graphql/generated/graphql";

interface TableFooterProps {
  endNo: number;
  startNo: number;
  onPrevious: () => void;
  onNext: () => void;
  data: CountriesQuery["countries"] | undefined;
}

const TableFooter = ({
  endNo,
  startNo,
  onPrevious,
  onNext,
  data,
}: TableFooterProps) => {
  console.log("endNo", endNo, data?.countries.length);
  return (
    <div className="flex w-full justify-end gap-2 mt-2">
      {startNo < 10 ? null : (
        <Button label="Previous" onClick={onPrevious} variant="secondary" />
      )}
      {endNo === data?.countries.length ? null : (
        <Button label="Next ->" onClick={onNext} variant="secondary" />
      )}
    </div>
  );
};

export default TableFooter;
