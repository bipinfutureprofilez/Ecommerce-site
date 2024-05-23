import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function useGetRegister() {

    const [loading, setLoading] = useState(false);
    const signUpHook = async ({ name, email, password, confirmPassword }) => {
        // fieldsValidate(name, email, password, confirmPassword);
        if (!name || !email || !password || !confirmPassword) {
            toast.error('Please fill the all fields!');
            return false;
        }

        try {
            const response = await axios.post('/api/signup', { name, email, password, confirmPassword });
            console.log('response: ', response);
            toast.success('SignUp successfully!');
        } catch (error) {
            if (!error.response) {
                toast.error(error.message);                
            }else{
                toast.error(error.response.data.msg);
            }
            console.log(error);
        }
        
    }

    return { signUpHook, loading };
}


// const fieldsValidate = (name, email, password, confirmPassword) => {
    
// }