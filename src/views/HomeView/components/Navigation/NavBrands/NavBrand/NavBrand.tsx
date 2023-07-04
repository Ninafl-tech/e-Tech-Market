import React from "react";
import { useNavigate } from "react-router-dom";

export function NavBrand({ brand }: { brand: string }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/searchResults/${brand}`);
  };

  return (
    <div className="flex w-full p-5 cursor-pointer text-center border-b-2">
      <div onClick={handleClick}>{brand}</div>
    </div>
  );
}
