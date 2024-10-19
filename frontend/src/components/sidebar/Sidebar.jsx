import Conversations from "./Conversations";
import LogoutButton from "./Logout";
import Searchinput from "./SearchInput";

const Sidebar = () => {
    return (
      <div className="p-2 flex flex-col border-r border-slate-500"> {/* Set a fixed width */}
        
        <Searchinput />
  
        {/* Conversations from contacts */}
        <Conversations />

        <LogoutButton />
      </div>
    );
  };
  
export default Sidebar;
