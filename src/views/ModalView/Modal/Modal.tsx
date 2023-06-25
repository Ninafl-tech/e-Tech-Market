import React from "react";

type ModalProps = {
  visible: boolean;
  onChangeVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

export default function Modal({ visible, onChangeVisible, children }: ModalProps) {

  if(!visible) return <></>;

  return (<div className="w-full h-screen relative flex justify-center items-center bg-red-300" >
    <div className="bg-white  p-12">
      {children}
      </div>
    </div>);
}

