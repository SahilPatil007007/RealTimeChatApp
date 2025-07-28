import { useRef, useState, useCallback } from "react";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../utils/cropImage";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);
  const inputRef = useRef();
  const { updateProfile, loading } = useUpdateProfile();

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImg = await getCroppedImg(image, croppedAreaPixels);
      setCroppedImage(croppedImg);
    } catch (e) {
      console.error(e);
    }
  }, [image, croppedAreaPixels]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("username", username);
    if (croppedImage) {
      formData.append("profilePic", croppedImage, "profile.jpg");
    }
    await updateProfile(formData);
  };

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto mt-10 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Full Name</label>
          <input value={fullName} onChange={e => setFullName(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Username</label>
          <input value={username} onChange={e => setUsername(e.target.value)} required
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-gray-700">Profile Image</label>
          <input type="file" accept="image/*" ref={inputRef} onChange={onSelectFile}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50" />
        </div>
        {image && (
          <div className="relative w-72 h-72 rounded-xl overflow-hidden shadow-md bg-gray-100 mx-auto">
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <button type="button" onClick={showCroppedImage} className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 absolute left-1/2 -translate-x-1/2 bottom-2">
              Crop Image
            </button>
          </div>
        )}
        {croppedImage && (
          <div className="flex flex-col items-center mt-2">
            <img src={URL.createObjectURL(croppedImage)} alt="Cropped" className="w-24 h-24 rounded-full shadow border-2 border-blue-400" />
          </div>
        )}
        <button type="submit" disabled={loading}
          className="bg-blue-600 text-white rounded-lg py-2 font-semibold mt-4 hover:bg-blue-700 transition disabled:opacity-60">
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
    </>
  );
};

export default Profile; 