
// src/hooks/useUser.ts
import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { User } from '@/models/User';
import { createUserAPI } from '../api/users/usersApi';

const useUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createUser = async (user: User): Promise<void> => {
        try {
            setLoading(true);

            const response: AxiosResponse<void> = await createUserAPI(user);

            if (response.status === 201) {
                console.log('User created successfully!');
            } else {
                setError(`Failed to create user. Status: ${response.status}, Message: ${response.statusText}`);
            }
        } catch (error) {
            setError('Failed to create user. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { createUser, loading, error };
};

export default useUser;
