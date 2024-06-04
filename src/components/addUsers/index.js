import React, { useState } from 'react';


import { Button, Modal } from 'antd';
import { Checkbox, Form, Input } from 'antd';
var nameLocal = localStorage.getItem('name')

const AddUsers = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(0);
    const { state, handleAddUsers, handleStateChange } = props;

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
            <Button type="primary" onClick={showModal} disabled={nameLocal === 'admin' ? false : true}>
                Add Users
            </Button>
            <Modal title="Add users" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
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
                        <Input
                            value={state.usernames || ''}
                            onChange={(e) => handleStateChange({
                                ...state,
                                usernames: e.target.value
                            })}
                        />
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
                        <Input.Password

                            value={state.password || ''}
                            onChange={(e) => handleStateChange({
                                ...state,
                                password: e.target.value
                            })}
                        />
                    </Form.Item>


                    <Form.Item
                        label="Email"
                        name="email"
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
                            value={state.email || ''}
                            onChange={(e) => handleStateChange({
                                ...state,
                                email: e.target.value
                            })}
                        />


                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit"
                            onClick={handleAddUsers}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddUsers;