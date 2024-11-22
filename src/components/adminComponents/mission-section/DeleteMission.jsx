import { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function DeleteMission({ item }) {
  const formInitialValue = {
    title: item?.title,
    subTitle: item?.subTitle,
    button: item?.button,
    btnLink: item?.btnLink,
    image: null,
    isActive: item?.isActive,
  };

  const [formData, setFormData] = useState(formInitialValue);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleFormSubmit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function handleFormSubmit() {
    try {
      const response = await AxiosInstance.delete(
        `/delete-mission?id=${item._id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", response);

      const data = await response.data;

      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      console.log("Error:", error.message);
      console.log(error);
    }
  }

  return (
    <>
      <Button className="bg-orange-500 mt-3" type="primary" onClick={showModal}>
        Delete
      </Button>
      <Modal
        title="Delete Mission"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
}
