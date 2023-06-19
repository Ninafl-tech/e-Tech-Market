import React from "react";
import { useContext } from "react";
import { NavContext } from "../../../context/NavContext";

export function NavContent() {
  const { activeCategory } = useContext(NavContext);
  return (
    <div className="w-9/12 h-full border-solid border-1 border-stone-500 absolute border-r-4">
      {contents[activeCategory].map((category: any) => {
        return (
          <div>
            <h1>{category.title}</h1>
            <ul>
              {category?.categories.map((category: any) => {
                return (
                  <li>
                    <a href={category.href}>{category.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
