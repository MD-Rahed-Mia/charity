import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const formInitialValue = {
  phone: "",
  email: "",
  address: "",
};

export default function AddNewContact() {
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
      if (!formData.email || formData.email.length < 8) {
        toast.error("minimum mission required 8 digits and more..");
        return;
      }

      if (!formData.address || formData.address.length < 30) {
        toast.error("minimum vision required 30 digits and more..");
        return;
      }
      if (!formData.phone || formData.phone.length < 11) {
        toast.error("minimum phone required 11 digits and more..");
        return;
      }

      const form = new FormData();
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("address", formData.address);

      console.log("FormData:", form); // You can inspect the form data here

      const response = await AxiosInstance.post("/add-contact", form, {
        headers: {
          "Content-Type": "application/json", // Axios will handle this, so this is optional
        },
      });

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
        add new contact
      </Button>
      <Modal
        title="add new contact"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form encType="multipart/form-data">
          <div className="mt-3">
            <Input
              type="email"
              placeholder="email"
              value={formData.email}
              name="email"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="phone"
              value={formData.phone}
              name="phone"
              onChange={handleOnChange}
            />
          </div>

          <div className="mt-3">
            <Input
              type="text"
              placeholder="address"
              name="address"
              value={formData.address}
              onChange={handleOnChange}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}
