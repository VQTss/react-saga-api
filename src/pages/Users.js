import { Table } from 'antd'
import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import * as actionTypes from '../redux/actions';
import AddUsers from '../components/addUsers';
import { Button, Modal } from 'antd';
import UpdateUsers from '../components/updateUsers';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Form, Input, Select, Space } from 'antd';
const UsersPage = (props) => {
    const form = Form.useForm()
    
    const { users, addedUsers, updatedUsers, deletedUsers, actions } = props;
    const [state, setSate] = useState({
        usernames: '',
        password: '',
        email: ''
    });


    

    useEffect(() => {
        actions.getUsers();
    }, []);

    useEffect(() => {
        if (addedUsers || updatedUsers || deletedUsers) {
            actions.getUsers();
        }
    }, [addedUsers, updatedUsers, deletedUsers])


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Update',
            key: 'key',
            render: (text, record) => (

                <>
                    {/* <Button type="primary" onClick={() => showModal(record)}>
                        Update
                    </Button> */}
                    <UpdateUsers 
                        record={record}
                        updatedUsers={updatedUsers}
                    />

                </>
            )
        },
        {
            title: 'Delete',
            key: 'key',
            render: (text, record) => (
                <Button
                    onClick={() => handleDeleteUser(record)}
                >{"Delete"}</Button>
            )
        }
    ];

    const handleAddUsers = () => {
        const users = {
            username: state.usernames,
            email: state.email,
            password: state.password,
        }
        actions.addUsers(users);
        cleanState()
    };
    const cleanState = () => {
        setSate({
            usernames: '',
            password: '',
            email: ''
        })
    };

    const handleDeleteUser = (data) => {
        const user = {
            username: data.username,
            email: data.email,
            password: data.password,
        }
        actions.deleteUsers(user);
        cleanState()
    };

    return (

        <div>
            <AddUsers 
                tyle={{ margin: 100 }}
                state={state}
                handleStateChange={setSate}
                handleAddUsers={handleAddUsers}
            />
            <Table style={{ margin: 100 }} dataSource={users} columns={columns} />

        </div>
    )
}




const mapStateToProps = (state) => {
    console.log(state);
    return ({
        users: state.getUsers.users,
        addedUsers: state.addUsers.users,
        deletedUsers: state.deleteUsers.users,
        updatedUsers: state.updateUsers.users,
    })
};


const mapDispatchToProps = (dispatch) => ({
    actions: {
        getUsers: () => {
            dispatch(actionTypes.getUsers());
        },
        addUsers: (payload) => {
            dispatch(actionTypes.addUsers(payload));
        },
        deleteUsers: (payload) => {
            dispatch(actionTypes.deleteUsers(payload));
        },
        updateUsers: (payload) => {
            dispatch(actionTypes.updateUsers(payload));
        },
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);



