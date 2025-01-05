"use client"; // Error boundaries must be Client Components

import Button from "@/components/button/Button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-red-500 text-2xl">
      <p>Oops!!! Error occurred</p>
      <Button label="Retry" onClick={() => reset()}/>
    </div>
  );
}
