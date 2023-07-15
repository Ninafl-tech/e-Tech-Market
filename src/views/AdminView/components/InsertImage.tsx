import { SetStateAction, Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Upload, Image, message } from "antd";
import { UploadOutlined, DeleteFilled } from "@ant-design/icons";
import { TImage } from "../types/TImage";

type TImageUploaderProps = {
  fileList: TImage[];
  setFileList: Dispatch<SetStateAction<TImage[]>>;
};

export const InsertImage = ({ fileList, setFileList }: TImageUploaderProps) => {
  const handleFileChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const fileUrl = e.target?.result as string;

      setFileList((prevFileList) => [
        ...prevFileList,
        { id: uuidv4(), url: fileUrl },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileDelete = (id: string) => {
    const updatedList = fileList.filter((file) => file.id !== id);
    setFileList(updatedList);
  };

  const beforeUpload = (file: File) => {
    if (file.type.startsWith("image/")) {
      handleFileChange(file);
    } else {
      message.warning("Only image files are allowed.");
    }
    return false; // Prevent default upload behavior
  };

  return (
    <div className="max-w-[500px]">
      <div className="flex flex-wrap justify-center max-h-[300px] overflow-auto gap-1 mb-3">
        {fileList.map((item) => (
          <div key={item.id} className="relative">
            <Image
              className="rounded-lg border border-gray-300"
              src={item.url}
              width={80}
              height={80}
            />
            <DeleteFilled
              onClick={() => handleFileDelete(item.id)}
              className="absolute w-5 h-5 cursor-pointer top-1 left-0 text-red-500 hover:text-red-300"
            />
          </div>
        ))}
      </div>
      <Upload beforeUpload={beforeUpload} showUploadList={false}>
        <Button icon={<UploadOutlined />} className="flex items-center mb-2">
          Select Image
        </Button>
      </Upload>
    </div>
  );
};
