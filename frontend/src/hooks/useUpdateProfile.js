import { useState } from "react";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const updateProfile = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      toast.success("Profile updated successfully!");
      return data;
    } catch (error) {
      toast.error(error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { updateProfile, loading };
};

export default useUpdateProfile;