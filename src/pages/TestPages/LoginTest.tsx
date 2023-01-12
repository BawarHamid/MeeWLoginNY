import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
// import {
//   IonButton,
//   IonContent,
//   useIonToast,
//   IonInput,
//   IonItem,
//   IonLabel,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonIcon,
//   IonCard,
//   IonCardContent,
//   IonCardHeader,
//   IonCardSubtitle,
//   IonCardTitle,
// } from "@ionic/react";
// import { logInOutline, lockClosedOutline, mailOutline } from "ionicons/icons";
// import "./LoginTest.css";

import { supabase } from "../../supabaseConfig";
// import { Link, useHistory } from "react-router-dom";

const LoginTest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({});

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form
      className="loginform"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input
          onChange={(e) => setEmail(e.target.value ?? "")}
          value={email}
          type={email}
          required
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value ?? "")}
          value={password}
          type={password}
          required
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          onSubmit={handleLogin}
          htmlType={"submit"}
          onClick={() => supabase.auth.signInWithPassword({ email, password })}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginTest;
