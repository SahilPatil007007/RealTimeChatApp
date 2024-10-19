import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {

  const{loading, conversations} = useGetConversations();

  return (
    <div className="py-2 flex flex-col space-y-4 overflow-auto pt-7"> {/* Set a fixed width */}
      {conversations.map((conversation,idx)=>(
        <Conversation 
          key= {conversation._id}
          conversation = {conversation}
        />
      ))}
    </div>
  );
};
  
export default Conversations;
