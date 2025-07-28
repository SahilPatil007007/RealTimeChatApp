import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () =>{
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() =>{
        //CleanUp Function Means After Logout It will not start from where the conversaton is selected
        return () => setSelectedConversation(null);
    },[setSelectedConversation]);
    if(selectedConversation){
    }
    return(
        <div className="flex flex-col">

            {!selectedConversation ? (
                <NoChatSelected />
            ):(
                <>
                    <Messages />
                    <MessageInput />
                </>
            )}
            
        </div>
    );
};


const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
};
export default MessageContainer;