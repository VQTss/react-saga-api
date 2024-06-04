
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import * as actionTypes from '../redux/actions';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import apiStudent from '../servers/api'
import { redirect } from 'react-router-dom';


const onFinish = async (values) => {
  console.log('====Login====');
  const login = await apiStudent.loginUser(values);

  if (login.status == 200) {
    console.log("check",login);
    localStorage.setItem('name', login.users.role);
    window.location.href = "http://localhost:3000/app";
  }else{
    alert('Login failed == account not found');
  }
  
  
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const LoginPage = ()=> {


    

    return (
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
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
    
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
    
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit"
            
          >
            
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
}




export default LoginPage;