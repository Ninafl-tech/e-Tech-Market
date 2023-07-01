import React from "react";
import { StAdminView } from "./StAdminView.styled";
import { AddProduct } from "./components/AddProduct/AddProduct";

export default function AdminView() {
  return (
    <div className=" w-full ">
      {/* <StAdminView className="w-5/12 h-96 m-10">ჯგსდ</StAdminView> */}
      <StAdminView className="w-full h-full m-10">
        <AddProduct />
      </StAdminView>
    </div>
  );
}
