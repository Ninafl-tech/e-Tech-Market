import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowheadRightOutline } from "@styled-icons/evaicons-outline/ArrowheadRightOutline";

export function NavBrand({ brand }: { brand: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/searchResults/${brand}`);
  };

  return (
    <div className="flex w-full rounded-sm p-3 cursor-pointer text-center ">
      <ArrowheadRightOutline size={24} className="mr-3 text-blue-500" />
      <div onClick={handleClick}>{brand}</div>
    </div>
  );
}
