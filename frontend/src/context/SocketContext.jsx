import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
        if (authUser) {
            const API_URL = import.meta.env.VITE_API_URL;
            const socket = io(API_URL, {
                query: {
                    userId: authUser._id,
                },
            });
            setSocket(socket);
    
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
    
            return () => {
                socket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);


	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};