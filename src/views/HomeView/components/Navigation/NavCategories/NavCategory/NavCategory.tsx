import { useFetchData } from "../../../../../../hooks/useFetchData";
import { NavContent } from "./NavContent/NavContent";

export function NavCategory({ category }: { category: string }) {
  const { productsData, getProducts, isLoading } = useFetchData();
  //

  const handleClick = () => {
    getProducts("", "", category);
  };
  console.log(productsData);

  return (
    <div className="flex">
      <div
        className=" w-full p-2 cursor-pointer text-center border-b-2"
        onClick={handleClick}
      >
        {category}
      </div>
      <div className="content">
        {productsData.map((product, index) => (
          <NavContent key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
