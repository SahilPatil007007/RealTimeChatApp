import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation  = ({conversation}) =>{

    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
    console.log(onlineUsers);

    return(
        <>
            <div className={`flex gap-3 items-center hover:bg-conver-violet rounded p-2 py-1 ${isSelected ? "bg-conver-violet" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online": ""}`}>
                    <div className="w-14 rounded-full">
                        <img src={conversation.profilePic} alt= 'User avatar'/>
                    </div>
                </div>

                <div className="hover:bg-conver-violet font-bold text-gray-300">
                    <p>{conversation.fullName}</p>
                </div>

            </div>
        </>
    );
};

export default Conversation;