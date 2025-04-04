import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // clear state
    setEmail('');
    setPassword('');
    // navigate to LandingScreen
    navigate('/profile');
    console.log(email, password);
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#f5f5f5] p-5">
      <div className="bg-white rounded-lg shadow-md p-10 max-w-[400px] w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3 leading-tight">
          Signin to your<br />PopX account
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <form onSubmit={handleSubmit}>
    
          <div className="relative mb-5">
            <input
              type="email"
              id="email"
              placeholder=" Enter email address "  
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800  focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-2 text-sm text-[#6a5bc1] bg-white px-1"
            >
              Email Address
            </label>
          </div>

          <div className="relative mb-5">
            <input
              type="password"
              id="password"
              placeholder=" Enter password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full py-3 px-4 border border-gray-300 rounded-md text-sm text-gray-800  focus:outline-none focus:border-[#6a5bc1]"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-2 text-sm text-[#6a5bc1] bg-white px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 bg-gray-400 text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-gray-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
