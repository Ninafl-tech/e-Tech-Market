import { TProduct } from "../../../../../../../types/Tproduct";

export function NavContent({ product }: { product: TProduct }) {
  return (
    <div className="w-9/12 h-full border-solid border-1 border-stone-500 absolute border-r-4">
      {product.title}
    </div>
  );
}
