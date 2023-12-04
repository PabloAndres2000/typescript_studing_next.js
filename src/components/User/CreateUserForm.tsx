// src/components/User/CreateUserForm.tsx
import React, { useState } from 'react';
import useUser from '@/hooks/useUser';
import { User } from '@/models/User'; // Asegúrate de que la ruta sea correcta

const getInitialFormData = (): User => ({
  name: '',
  email: '',
  password: '',
});

const CreateUserForm: React.FC = () => {
  const { createUser, loading, error } = useUser();
  const [formData, setFormData] = useState(getInitialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Lógica de validación adicional del formulario, si es necesario

      await createUser(formData);

      // Restablecer el formulario después de enviar los datos
      setFormData(getInitialFormData);

      console.log('User created successfully!');
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating User...' : 'Create User'}
      </button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default CreateUserForm;
