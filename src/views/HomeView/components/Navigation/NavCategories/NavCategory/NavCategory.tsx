import { useFetchData } from "../../../../../../hooks/useFetchData";
import { NavContext } from "../../context/NavContext";
// import { NavContent } from "./NavContent/NavContent";
import React, { useContext } from "react";
import { StNavContent } from "./StNavContent.styled";

export function NavCategory({ category }: { category: string }) {
  const { productsData, getProducts, isLoading } = useFetchData();
  const { activeCategory, setActiveCategory } = useContext(NavContext);

  const handleHover = () => {
    getProducts("", "", category);
    setActiveCategory(category);
  };

  console.log(productsData);
  console.log(activeCategory);

  return (
    <div
      className="flex w-full p-12 cursor-pointer text-center border-b-2"
      onMouseEnter={handleHover}
    >
      <div>{category}</div>
      {activeCategory === category && (
        <StNavContent>
          {productsData.map((product, index) => (
            <div key={index}>
              <div>{product.title}</div>
            </div>
          ))}
        </StNavContent>
      )}
    </div>
  );
}
