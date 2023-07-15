import React from "react";
import { StAdminView } from "./StAdminView.styled";
import { AddProduct } from "./AddProduct/AddProduct";

export default function AdminView() {
  return (
    <div className=" w-full ">
      <AddProduct />
    </div>
  );
}
