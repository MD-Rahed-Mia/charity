import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);

    localStorage.setItem("token", "this is a test local token");
    navigate("/admin");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="sign-in-page">
        <h1 className="text-4xl font-extrabold">Sign in</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input className="mt-4" placeholder="admin@admin.com" />

          <Input.Password className="mt-4" placeholder="******" />

          <Form.Item label={null} className="mt-4 ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default SignIn;
