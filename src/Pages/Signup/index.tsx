import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { registerWithEmailAndPassword } from '../../Firebase';
import { Button, Form, Input } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { Navigate } from 'react-router-dom';



const Signup = () => {
  const [registered, setRegistered] = useState(false);
  const formRef = React.useRef<FormInstance>(null);
  const onFinish = (values: any) => {
    registerWithEmailAndPassword(values.name, values.email, values.password).then((res: any) => {
      if (res.user) {
        setRegistered(res.user);
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  if (registered) {
    return <Navigate to="/info" />
  }
  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.image_contaner}>
        </div>
        <div className={style.credential_contaner}>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='Name' />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder='Email' />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='Password' />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="default" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
          </Form>
          <Button type="default">
            Signup with Google
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Signup;
