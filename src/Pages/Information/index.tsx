import React, { Fragment, useMemo, useState } from 'react';
import style from './style.module.scss';
import { Button, Form, Input, Select, Upload, UploadFile, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const Information = () => {
  const [step, setStep] = useState(1);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const activeClass = (stp: any) => step === stp ? style.step_active : style.step;
  const onFinish = (values: any) => {
    console.log({ values });
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };

  return (
    <div className={style.container}>
      <div className={style.container_inner}>
        <div className={style.step_container}>
          <div className={activeClass(1)}>1</div>
          <div className={style.line}></div>
          <div className={activeClass(2)}>2</div>
          <div className={style.line}></div>
          <div className={activeClass(3)}>3</div>
        </div>
        <div className={style.credential_contaner}>
          <Form
            onFinish={onFinish}
            autoComplete="off"
          >
            {step === 1 &&
              <Fragment>
                <div className={style.input_container}>
                  <div className={style.title}>Personal Information</div>
                  <div className={style.description}>In order to access our services,
                    we need some basic personal information from you
                    to provide you with the best possible experience.</div>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                  >
                    <Input placeholder='Full Name' />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input placeholder='Phone Number' />
                  </Form.Item>
                  <Form.Item
                    name="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder='Country' />
                  </Form.Item>
                  <Form.Item
                    name="dob"
                  >
                    <Input placeholder='Date of birth (optional)' />
                  </Form.Item>
                  <Form.Item
                    name="gender"
                  >
                    <Input placeholder='Gender (optional)' />
                  </Form.Item>
                  <Button className={style.btn_container} onClick={() => setStep(2)}>Next</Button>
                </div>
              </Fragment>
            }
            {step === 2 &&
              <Fragment>
                <div className={style.input_container}>
                  <div className={style.title}>Professional Information</div>
                  <div className={style.description}>In order to access our services,
                    we need some basic personal information from you
                    to provide you with the best possible experience.</div>
                  <Form.Item
                    name="position"
                    rules={[{ required: true, message: 'Please input your position!' }]}
                  >
                    <Input placeholder='Job Title or Position' />
                  </Form.Item>
                  <Form.Item
                    name="industry"
                    rules={[{ required: true, message: 'Please input your Industry!' }]}
                  >
                    <Input placeholder='Industry' />
                  </Form.Item>
                  <Form.Item
                    name="location"
                    rules={[{ required: true, message: 'Please input your location!' }]}
                  >
                    <Input placeholder={`Location You're Interested in Working in`} />
                  </Form.Item>
                  <div className={style.type_btn_container}>
                  <Form.Item
                    name="experience"
                  >
                    <Input placeholder='Experience in Years' />
                  </Form.Item>
                  <Select
                      defaultValue="Remote"
                      onChange={handleChange}
                      options={[
                        { value: 'remote', label: 'Remote' },
                        { value: 'on_site', label: 'On-Site' },
                        { value: 'hybrid', label: 'Hybrid' },
                      ]}
                    />
                  </div>
                  <div className={style.upload_btn_container}>
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    </div>
                  <Button className={style.btn_container} onClick={() => setStep(3)}>Next</Button>
                </div>
              </Fragment>
            }
            {step === 3 &&
              <div>
                <div className={style.title_container}>
                  <div>Preview</div>
                  <Button onClick={() => setStep(1)}>Next</Button>
                </div>
              </div>
            }
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Information;