import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { registerWithEmailAndPassword } from '../../Firebase';
import { Button, Form, Input } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { Link, Navigate } from 'react-router-dom';



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
        <img src='./images/sign_logo.jpeg'  />
        </div>
        <div className={style.right}>
          <div className={style.credential_contaner}>
          <h1 className={style.title}>JOB FINDER</h1>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={style.form}
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
            <Form.Item>
              <Button className={style.signup_button} type="default" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
          </Form>
          <div className={style.notes}><span><Link to='/signin'>Sign in</Link></span> if you are already registered.</div>
          <Button className={style.google_button} type="default">
            <img src='./images/google_logo.png'  />
            <div>Signup with Google</div>
          </Button>
          {/* <Button className={style.facebook_button} type="default">
            <img src='./images/facebook_logo.png'  />
            <div>Signup with Facebook</div>
          </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
