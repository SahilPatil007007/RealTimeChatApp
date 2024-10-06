import { CgSearch } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";


const Navbar = () =>{

    return(
        <div className="col-span-2 row-span-1 bg-nav-grey h-16 flex justify-between p-2">
            <div className="flex flex-row items-center space-x-2">
                <img src="/Chit-Chat Logo.png" alt="Chit-Chat Logo" className="h-20 w-20 pt-2" />
                <h1 className="text-2xl">Chit-Chat</h1>
            </div>
                
            <div className="flex flex-row pr-28">
                <CgSearch className="h-9 w-9 pt-3"/>
                <input type="text" placeholder="Search..." className="input input-ghost w-full max-w-xs" />
                <IoMdSettings className="h-9 w-9 pt-3 pl-2"/>
            </div>
        </div>
    );
};

export default Navbar;