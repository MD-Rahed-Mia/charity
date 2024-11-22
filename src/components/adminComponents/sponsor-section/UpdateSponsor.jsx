import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function UpdateSponsor({ item }) {
  const formInitialValue = {
    company: item.company,
    isActive: item.isActive,
    image: null,
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
      form.append("company", formData.company);
      form.append("image", formData.image);
      form.append("isActive", formData.isActive);

      console.log("FormData:", form);

      const response = await AxiosInstance.put(
        `/update-sponsor?id=${item._id}`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Axios will handle this, so this is optional
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
      <Button type="primary" onClick={showModal}>
        update sponsor
      </Button>
      <Modal
        title="Add New Hero Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form encType="multipart/form-data">
          <div className="mt-3">
            <Input
              type="text"
              placeholder="company"
              value={formData.company}
              name="company"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <select
              name="isActive"
              id="isActive"
              className="w-full py-2 px-3"
              onChange={handleOnChange}
            >
              <option value="" disabled selected>
                Select status
              </option>
              <option value={true}>active</option>
              <option value={false}>disabled</option>
            </select>
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
