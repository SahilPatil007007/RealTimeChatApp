import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) =>
			c.fullName.toLowerCase().includes(search.toLowerCase())
		);

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center gap-3 w-full max-w-md mx-auto bg-gray-800 p-2 rounded-full shadow-md">
			<input
				type="text"
				placeholder="Search…"
				className="w-full px-4 py-2 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-sky-500 p-2 rounded-full text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200"
			>
				<IoSearchSharp className="w-6 h-6" />
			</button>
		</form>
	);
};

export default SearchInput;
