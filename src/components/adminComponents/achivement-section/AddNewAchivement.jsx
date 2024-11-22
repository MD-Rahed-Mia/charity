import React, { useEffect, useState } from "react";
import { Button, Modal, Input } from "antd";
import AxiosInstance from "../../../utils/axiosInstance";
import toast from "react-hot-toast";

const formInitialValue = {
  title: "",
  counter: "",
  type: "",
};

export default function AddNewAchivement() {
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
      if (!formData.title || formData.title.length < 7) {
        toast.error("Minimum required is 7 characters or more.");
        return;
      }

      const form = new FormData();
      form.append("title", formData.title);
      form.append("counter", formData.counter);
      form.append("type", formData.type);

      console.log("FormData:", form);

      const response = await AxiosInstance.post("/add-achivement", form, {
        headers: {
          "Content-Type": "application/json",
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
        Add achivement
      </Button>
      <Modal
        title="Add new achivement"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form encType="multipart/form-data">
          <div className="mt-3">
            <Input
              type="text"
              placeholder="text minimum required 7 and more character"
              value={formData.title}
              name="title"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-3">
            <Input
              type="text"
              placeholder="number of achivement"
              value={formData.counter}
              name="counter"
              onChange={handleOnChange}
            />
          </div>

          <div>
            <select
              name="type"
              id="type"
              onChange={handleOnChange}
              className="w-full py-3 px-12 mt-3"
            >
              <option value="" selected disabled>
                select type
              </option>
              <option value="orphanage rehabilitation">
                Orphanage Rehabilitation
              </option>
              <option value="widows receiving support">
                Widows Receiving Support
              </option>
            </select>
          </div>
        </form>
      </Modal>
    </>
  );
}
