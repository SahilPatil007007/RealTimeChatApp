import Conversation from "./Conversation";

const Conversations = () => {
    return (
      <div className="py-2 flex flex-col space-y-4 overflow-auto"> {/* Set a fixed width */}
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    );
  };
  
export default Conversations;
