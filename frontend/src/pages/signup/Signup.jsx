const Signup = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 min-h-screen flex items-center justify-center px-4">
      <div className="hero-content flex-col lg:flex-row space-x-10 max-w-7xl w-full">
        
        {/* Left Section */}
        <div className="text-white text-center lg:text-left mb-10 lg:mb-0 lg:flex-1">
          <h1 className="text-6xl font-extrabold mb-6 font-serif">Enhanced Teamwork</h1>
          <h2 className="text-xl leading-relaxed">
            Collaborate effortlessly with features designed for group communication.
          </h2>

          {/* Features List */}
          <div className="flex flex-row mt-10 justify-between lg:justify-start lg:space-x-8">
            <div className="flex flex-col space-y-8">
              
              {/* Feature 1 */}
              <div className="flex flex-row space-x-4 items-center">
                <svg className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <div className="text-left">
                  <h1 className="text-2xl font-semibold">Custom Themes</h1>
                  <p className="text-base text-gray-100">Switch between light and dark modes for your comfort.</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-row space-x-4 items-center">
                <svg className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <div className="text-left">
                  <h1 className="text-2xl font-semibold">Media Sharing</h1>
                  <p className="text-base text-gray-100">Easily share photos, videos, and files in your chats.</p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-row space-x-4 items-center">
                <svg className="h-10 w-10 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <div className="text-left">
                  <h1 className="text-2xl font-semibold">Stay Updated</h1>
                  <p className="text-base text-gray-100">Receive the latest updates and features directly.</p>
                </div>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="hidden lg:block">
              <img className="h-96 w-64 rounded-lg shadow-lg" src="/mobile.png" alt="Mobile image" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="card bg-white w-full max-w-sm rounded-lg shadow-xl p-8 lg:flex-1">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign-Up now!</h1>
          <form className="space-y-6">
            
            {/* User Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Username</span>
              </label>
              <input type="text" placeholder="Enter username" className="input input-bordered rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full p-3" required />
            </div>

            {/* First Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
              </label>
              <input type="text" placeholder="Enter your Full name" className="input input-bordered rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full p-3" required />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full p-3" required />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input type="password" placeholder="Enter your password" className="input input-bordered rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 w-full p-3" required />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition duration-300 ease-in-out">
                Sign Up
              </button>
            </div>

            {/* Already have an account */}
            <div className="text-center mt-4">
              <a href="/login" className="label-text-alt link link-hover text-indigo-500 hover:underline">
                Already have an account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
