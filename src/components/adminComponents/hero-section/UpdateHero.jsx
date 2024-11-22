import { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

export default function UpdateHero({ item }) {
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
     

      const form = new FormData();
      form.append("title", formData.title);
      form.append("subTitle", formData.subTitle);
      form.append("button", formData.button);
      form.append("btnLink", formData.btnLink);
      form.append("isActive", formData.isActive);
      form.append("image", formData.image); // Ensure the file is included

      console.log("FormData:", form); // You can inspect the form data here

      const response = await AxiosInstance.put(`/update-hero?id=${item._id}`, form, {
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
        Update Hero
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
              placeholder="Title"
              value={formData.title}
              name="title"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="Sub Title"
              value={formData.subTitle}
              name="subTitle"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="Button Text"
              value={formData.button}
              name="button"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="Button Link"
              value={formData.btnLink}
              name="btnLink"
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
        </form>
      </Modal>
    </>
  );
}
