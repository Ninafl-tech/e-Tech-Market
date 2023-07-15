import React from "react";
import { StAdminView } from "./StAdminView.styled";

import ProductTable from "./views/ProductTable/ProductTable";
import { useNavigate } from "react-router-dom";

export default function AdminView() {
  const navigate = useNavigate();
  return (
    <div className=" w-full ">
      <div className="flex justify-end ">
        <button
          className="p-2 mb-6 rounded-md text-white hover:bg-customBlue bg-primaryBlue"
          onClick={() => navigate("/admin/add")}
        >
          <p>+ Add Product</p>
        </button>
      </div>
      <ProductTable />
    </div>
  );
}
