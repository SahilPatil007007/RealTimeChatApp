import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
    const[loading, setLoading] = useState(false);
    const[conversations, setConversation] = useState([]);
    
    useEffect(() => { // Run Only Once

        const getConversations = async() => {
            setLoading(true);

            try{
                const API_URL = import.meta.env.VITE_API_URL;
                const res = await fetch(`${API_URL}/api/users`, {
                    credentials: "include"
                });
                const data = await res.json();
                
                if(data.error){
                    throw new Error(data.error);
                }
                
                setConversation(data);

            }catch(error){
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
        };
        getConversations();
    },[]);

    return {loading, conversations};
    
}

export default useGetConversations;

