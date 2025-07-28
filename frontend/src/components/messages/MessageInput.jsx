import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { useRef } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { BsImage } from "react-icons/bs";
import useSendImage from "../../hooks/useSendImage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
	const { sendImage, loading: imageLoading } = useSendImage();
	const fileInputRef = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	const handleImageChange = async (e) => {
		const file = e.target.files[0];
		if (file) {
			await sendImage(file);
		}
		e.target.value = null; // reset input
	};

	const handleImageButtonClick = () => {
		fileInputRef.current.click();
	};

	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full flex items-center gap-2'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<input
					type='file'
					accept='image/*'
					ref={fileInputRef}
					style={{ display: "none" }}
					onChange={handleImageChange}
				/>
				<button type='button' onClick={handleImageButtonClick} className='pl-2'>
					{imageLoading ? <div className="loading loading-spinner"></div> : <BsImage size={22} />}
				</button>
				<button type='submit' className='pl-2'>
					{loading ? <div className="loading loading-spinner"></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};

export default MessageInput;
