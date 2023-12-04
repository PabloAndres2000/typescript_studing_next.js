// pages/User/index.tsx
import React from 'react';
import CreateUserForm from '../../components/User/CreateUserForm';
const CreateUserPage: React.FC = () => {
    return (
        <div>
            <h1>Create User</h1>
            <CreateUserForm />
        </div>
    );
};

export default CreateUserPage;
