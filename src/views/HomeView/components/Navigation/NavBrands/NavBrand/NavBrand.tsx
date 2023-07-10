import React from "react";
import { useNavigate } from "react-router-dom";

export function NavBrand({ brand }: { brand: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/searchResults/${brand}`);
  };

  return (
    <div className="flex w-full rounded-sm p-5 cursor-pointer text-center ">
      <div onClick={handleClick}>{brand}</div>
    </div>
  );
}
