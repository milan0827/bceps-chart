import Loading from "@/components/Loading/Loading";
import React from "react";

const loading = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
};

export default loading;
