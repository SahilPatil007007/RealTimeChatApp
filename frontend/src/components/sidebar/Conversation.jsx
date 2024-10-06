const Conversation  = () =>{

    return(
        <>
            <div className="flex gap-3 items-center hover:bg-conver-violet rounded p-2 py-1 ">
                <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div className="hover:bg-conver-violet font-bold text-gray-300">
                    <p>Sahil Patil</p>
                </div>

            </div>
        </>
    );
};

export default Conversation;