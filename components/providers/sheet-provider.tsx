"use client";
import { FC, useEffect, useState } from "react";
import WorkSheet from "../work-sheet";

interface SheetProviderProps {}

const SheetProvider: FC<SheetProviderProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <WorkSheet />
    </>
  );
};

export default SheetProvider;
