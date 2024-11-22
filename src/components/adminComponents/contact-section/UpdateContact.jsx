import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function UpdateContact({ item }) {
  const formInitialValue = {
    phone: item.phone,
    address: item.address,
    email: item.email,
    isActive: item.isActive,
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
      const form = new FormData();
      form.append("phone", formData.phone);
      form.append("address", formData.address);
      form.append("email", formData.email);
      form.append("isActive", formData.isActive);

      console.log("FormData:", form);

      const response = await AxiosInstance.put(
        `/update-contact?id=${item._id}`,
        form,
        {
          headers: {
            "Content-Type": "application/json", // Axios will handle this, so this is optional
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
      <Button type="primary" className="mt-3" onClick={showModal}>
        update
      </Button>
      <Modal
        title="Update gallery image"
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

          <div>
            <select
              name="isActive"
              id="isActive"
              className="w-full py-3 px-8 mt-3"
              onChange={handleOnChange}
            >
              <option value="" disabled selected>
                select status
              </option>
              <option value={true}>active</option>
              <option value={false}>disabled</option>
            </select>
          </div>
        </form>
      </Modal>
    </>
  );
}
