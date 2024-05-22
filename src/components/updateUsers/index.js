import React, { useState } from 'react';


import { Button, Modal } from 'antd';
import { Checkbox, Form, Input } from 'antd';


const UpdateUsers = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(0);
    const { state, updatedUsers, handleStateChange, record } = props;
    

    const [isDataUpdated, setIsDataUpdated] = useState({
        users: {}
    });

    console.log("record updtae new", record)

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div >
            <Button type="primary" onClick={showModal}>
                    Update
                </Button>
                <Modal title="Update users" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                            usernameUpdate: record.username,
                            passwordUpdate: record.password,
                            emailUpdate: record.email,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                    >
                        <Form.Item
                            label="Username"
                            name="usernameUpdate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input 
                                disabled={true}
                            
                            />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="passwordUpdate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password 
                            
                            value={record.password}
                            
                            />
                        </Form.Item>

                       
                        <Form.Item
                            label="Email"
                            name="emailUpdate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                }
                            ]}
                        >
                            <Input 
                              value={record.email}
                              
                            />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit"
                                onClick={updatedUsers}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
        </div>
    )
}

export default UpdateUsers;