import { CgSearch } from "react-icons/cg";
const Searchinput = () =>{
    return(
        <div className="flex flex-row items-center space-x-1">
            <CgSearch className="h-9 w-9 pt-2"/>
            <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
        </div>
    );
};

export default Searchinput;