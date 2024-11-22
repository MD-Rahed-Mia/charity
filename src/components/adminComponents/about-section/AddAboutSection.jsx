import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const formInitialValue = {
  text: "",
  image: null,
};

export default function AddAboutSection() {
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
      if (!formData.image) {
        console.log("Image is required.");
        toast.error("Image is required.");
        return;
      }

      if (!formData.text || formData.text.length < 30) {
        toast.error("Minimum required is 30 characters or more.");
        return;
      }

      const form = new FormData();
      form.append("text", formData.text);
      form.append("image", formData.image);

      console.log("FormData:", form);

      const response = await AxiosInstance.post("/add-about-section", form, {
        headers: {
          "Content-Type": "multipart/form-data", // Axios will handle this, so this is optional
        },
      });

      console.log("Response:", response);

      const data = await response.data;

      if (data.success) {
        toast.success(data.message);
        setFormData(formInitialValue);
      }
    } catch (error) {
      console.log("Error:", error.message);
      console.log(error);
    }
  }

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.files) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  useEffect(() => {
    console.log("Form Data: ", formData);
  }, [formData]);

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add about section
      </Button>
      <Modal
        title="Add New about section"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form encType="multipart/form-data">
          <div className="mt-3">
            <Input
              type="text"
              placeholder="text minimum required 30 and more character"
              value={formData.text}
              name="text"
              onChange={handleOnChange}
            />
          </div>

          <div className="mt-3">
            <Input
              type="file"
              accept="image/*"
              placeholder="Image"
              name="image"
              onChange={handleOnChange}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
