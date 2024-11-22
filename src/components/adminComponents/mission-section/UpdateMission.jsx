import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function UpdateMission({ item }) {
  const formInitialValue = {
    mission: item?.mission,
    vision: item?.vision,
    isActive: item?.isActive,
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
      if (!formData.mission || formData.mission.length < 30) {
        toast.error("minimum mission required 30 digits and more..");
        return;
      }

      if (!formData.vision || formData.vision.length < 30) {
        toast.error("minimum vision required 30 digits and more..");
        return;
      }

      const form = new FormData();
      form.append("mission", formData.mission);
      form.append("vision", formData.vision);

      form.append("isActive", formData.isActive);

      form.append("image", formData.image); // Ensure the file is included

      console.log("FormData:", form); // You can inspect the form data here

      const response = await AxiosInstance.put(
        `/update-mission?id=${item._id}`,
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
        update
      </Button>
      <Modal
        title="update mission mission"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form encType="multipart/form-data">
          <div className="mt-3">
            <Input
              type="text"
              placeholder="mission"
              value={formData.mission}
              name="mission"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="vision"
              value={formData.vision}
              name="vision"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <select
              name="isActive"
              id="isActive"
              className="w-full px-4 py-2 mt-3"
              onChange={handleOnChange}
            >
              <option value="" selected disabled>
                {" "}
                select status
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