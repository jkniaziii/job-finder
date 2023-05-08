import React, { useEffect, useState } from 'react'
import style from './style.module.scss';
import { registerWithEmailAndPassword, signInWithGoogle } from '../../Firebase';
import { Button, Form, Input } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsersData } from '../../Store/actions/user';
import { createUser } from '../../Api/user';



const Signup = () => {
  // const formRef = React.useRef<FormInstance>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    registerWithEmailAndPassword(values.name, values.email, values.password).then((res: any) => {
      if (res.user) {
        navigate('/info')
        dispatch(getUsersData(res));
      }
    });
  };

  const signUpWithGoogle = ()=>{
    signInWithGoogle().then(async (res: any)=>{
      if (res.user) {
        dispatch(getUsersData(res));
        const payload = {
        name: res.user.displayName,
        email: res.user.email,
        userId: res.user.uid,
        isVarified: res.user.emailVerified,
        isSubscriber: false,
       }
       await createUser(payload);
       return navigate('/info');
      }
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  
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
          <Button onClick={signUpWithGoogle} className={style.google_button} type="default">
            <img src='./images/google_logo.png'  />
            <div>Signup with Google</div>
          </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
