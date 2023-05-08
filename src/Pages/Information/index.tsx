import React, { Fragment, useMemo, useState } from 'react';
import style from './style.module.scss';
import { Button, Form, Input, Select} from 'antd';
import { useSelector } from 'react-redux';
import { updateUser } from '../../Api/user';
import { useNavigate } from 'react-router-dom';


const Information = () => {
  const [step, setStep] = useState(1);
  const [cv, setCV] = useState('');
  const [userDetail, setUserDetails] = useState<any>({
    nameProfessional:"",
    number:"",
    emailProfessional:"",
    age:"",
    gender:"",
    position:"",
    industry:"",
    location:"",
    experience:"",
    job_type:"",
    cv:"",
  });
  
  const currentUser = useSelector((state: any) => state.users.user);
  const navigate = useNavigate();
  
  const activeClass = (stp: any) => step === stp ? style.step_active : style.step;


  const onFinishPersonal = (values: any) => {
    setStep(2)
    setUserDetails({...userDetail, ...values});
    const payload = {professionalInfo: {...userDetail, ...values}};
    updateUser(currentUser.user.uid, payload)
  };

  const onFinishProfessional = (values: any) => {
    setStep(3)
    setUserDetails({...userDetail, ...values});
    const payload = {professionalInfo: {...userDetail, ...values, cv}};
    updateUser(currentUser.user.uid, payload)
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  function convertToBase64() {
    //@ts-ignore
    var selectedFile = document.getElementById("inputFile").files;
    if (selectedFile.length > 0) {
        var fileToLoad = selectedFile[0];
        var fileReader = new FileReader();
        var base64;
        fileReader.onload = function(fileLoadedEvent: any) {
            base64 = fileLoadedEvent.target.result;
            setCV(base64);
        };
        fileReader.readAsDataURL(fileToLoad);
    }
}

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
          {step === 1 &&
            <Form
              onFinish={onFinishPersonal}
              autoComplete="off"
            >
              <Fragment>
                <div className={style.input_container}>
                  <div className={style.title}>Personal Information</div>
                  <div className={style.description}>In order to access our services,
                    we need some basic personal information from you
                    to provide you with the best possible experience.</div>
                  <Form.Item
                    name="nameProfessional"
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                  >
                    <Input placeholder='Full Name' />
                  </Form.Item>
                  <Form.Item
                    name="number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input placeholder='Phone Number' />
                  </Form.Item>
                  <Form.Item
                    name="country"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder='Country' />
                  </Form.Item>
                  <Form.Item
                    name="age"
                  >
                    <Input placeholder='Age (optional)'/>
                  </Form.Item>
                  <Form.Item
                    name="gender"
                  >
                    <Input placeholder='Gender (optional)' />
                  </Form.Item>
                  <Button htmlType="submit" className={style.btn_container}>Next</Button>
                </div>
              </Fragment>
            </Form>
          }
          {step === 2 &&
            <Form
              onFinish={onFinishProfessional}
              autoComplete="off"
            >
              <Fragment>
                <div className={style.input_container}>
                  <div className={style.title}>Professional Information</div>
                  <div className={style.description}>In order to provide relevent
                    job we need some professional information from you.</div>
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
                    <Form.Item name="job_type">
                      <Select
                        defaultValue="Select job type"
                        options={[{ value: 'remote', label: 'Remote' }, { value: 'on_site', label: 'On-Site' }, { value: 'hybrid', label: 'Hybrid' },]}
                      />
                    </Form.Item>
                  </div>
                  <div className={style.upload_btn_container}>
                    <Input placeholder='UPload your CV' id="inputFile"  type='file' onChange={convertToBase64}/>
                  </div>
                  <Button htmlType="submit" className={style.btn_container}>Next</Button>
                </div>
              </Fragment>
            </Form>
          }
          {step === 3 &&
            <Fragment>
              <div className={style.input_container}>
                <div className={style.title}>Preview</div>
                <div className={style.description}>Please review your details and  make sure these are accurate
                and uptodate.</div>
                <div className={style.preview}>
                <div><span>Full Name:</span> <span>{userDetail.name}</span></div>
                <div><span>Phone Number:</span> <span>{userDetail.number}</span></div>
                <div><span>Email:</span> <span>{userDetail.email}</span></div>
                <div><span>Age:</span> <span>{`${userDetail.age} Years`}</span></div>
                <div><span>Gender:</span> <span>{userDetail.gender}</span></div>
                <div><span>Position:</span> <span>{userDetail.position}</span></div>
                <div><span>Industry:</span> <span>{userDetail.industry}</span></div>
                <div><span>Job Location:</span> <span>{userDetail.location}</span></div>
                <div><span>Experience:</span><span>{`${userDetail.experience} Years`}</span></div>
                <div><span>Job Type:</span> <span>{userDetail.job_type}</span></div>
                </div>
                <Button className={style.btn_container} onClick={() => navigate('/dashboard')}>Next</Button>
              </div>
            </Fragment>
          }

        </div>

      </div>
    </div>
  )
}

export default Information;