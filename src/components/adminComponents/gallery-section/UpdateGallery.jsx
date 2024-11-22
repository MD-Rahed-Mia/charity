import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function UpdateGallery({ item }) {
  const formInitialValue = {
    type: item.type,
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
      form.append("type", formData.type);
      form.append("isActive", formData.isActive);
      form.append("image", formData.image);

      console.log("FormData:", form);

      const response = await AxiosInstance.put(`/update-gallery?id=${item._id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data", // Axios will handle this, so this is optional
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
            <select
              className="w-full py-3 px-4"
              name="isActive"
              id="isActive"
              onChange={handleOnChange}
            >
              <option value="" disabled selected>
                select status
              </option>
              <option value={true}>active</option>
              <option value={false}>disabled</option>
            </select>
          </div>
          <div className="mt-3">
            <select
              className="w-full py-3 px-4"
              name="type"
              id="type"
              onChange={handleOnChange}
            >
              <option value="" disabled selected>
                select image type
              </option>
              <option value="orphanage">orphanage</option>
              <option value="widows">widows</option>
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