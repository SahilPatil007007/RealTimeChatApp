import MessageContainer from "../../components/messages/MessageContainer";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";


const Home = () => {
    return (
      <div className="grid grid-rows-[10%_90%] grid-cols-[25%_75%] w-screen h-screen bg-black">
        {/* Navbar */}
        <Navbar/>

        {/* Sidebar */}
        <Sidebar />

        {/* Message */}
        <MessageContainer />

      </div>  
    );
}

export default Home;
