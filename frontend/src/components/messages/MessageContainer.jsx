import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () =>{
    return(
        <div className="flex flex-col">
            <Messages />
            <MessageInput />
        </div>
    );
};

export default MessageContainer;