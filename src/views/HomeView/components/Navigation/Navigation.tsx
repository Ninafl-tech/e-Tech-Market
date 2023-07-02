import { NavCategories } from "./NavCategories/NavCategories";
import { NavContent } from "./NavCategories/NavCategory/NavContent/NavContent";
import { NavContext } from "./context/NavContext";
import React, { useContext } from "react";

export function Navigation() {
  // const { productsData } = useContext(NavContext);
  // console.log(productsData);
  return (
    // <NavContext.Provider value={{ productsData }}>
    <>
      <div className="flex w-72 relative">
        <NavCategories />
      </div>
      {/* <div className="content">
        {productsData.map((product, index) => (
          <NavContent key={index} product={product} />
        ))}
      </div> */}
    </>
    // </NavContext.Provider>
  );
}
