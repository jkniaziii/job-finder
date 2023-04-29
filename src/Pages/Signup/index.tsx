import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { auth, registerWithEmailAndPassword } from '../../Firebase';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { Navigate } from 'react-router-dom';



const Signup = () => {
  
  const[user, setUser]: any = useState('');
  
  const formRef = React.useRef<FormInstance>(null);
  const onFinish = (values: any) => {
    registerWithEmailAndPassword(values.name, values.email, values.password).then((res: any)=>{
         if(res.user){
          return <Navigate to="/info" />;
         }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      console.log({user})
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div className={style.container}>
      <h1>SIGNUP</h1>
      <div className={style.container_inner}>
        <div className={style.image_contaner}>
        </div>
        <div className={style.credential_contaner}>
          <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input placeholder='Name'/>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
            <Input placeholder='Email'/>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder='Password'/>
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
