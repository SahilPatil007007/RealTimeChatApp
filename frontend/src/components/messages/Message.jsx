import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) =>{

    const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const formattedTime = extractTime(message.createdAt);
    const bubbleBgColor = fromMe? "bg-blue-500": "";

    const shakeClass = message.shouldShake ? "shake" : "";
    return(
        <>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
                    {message.imageUrl ? (
                        <img
                            src={message.imageUrl}
                            alt="chat-img"
                            className="max-w-xs max-h-60 rounded-lg object-cover"
                        />
                    ) : (
                        message.message
                    )}
                </div>
                <div className="chat-footer opacity-50">{formattedTime}</div>
            </div>
        </>
    );
};

export default Message;