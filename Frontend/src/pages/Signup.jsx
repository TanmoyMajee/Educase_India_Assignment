import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // check if the email is already in the local storage
    const SoredEmail = localStorage.getItem('email');
    if (email && SoredEmail === email) {
      toast.error('Email already exists');
      return;
    }
    // set the email and password in the local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // navigate to LandingScreen
    navigate('/');
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      {/* Card Container */}
      <div className="bg-white w-full max-w-sm rounded-lg shadow-md p-8">
     
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className=" relative mb-7">
            <label
              htmlFor="fullName"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Marry Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Phone Number */}
            <div className=" relative mb-7">
            <label
              htmlFor="phoneNumber"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Marry Doe"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Email Address */}
            <div className=" relative mb-7">
            <label
              htmlFor="email"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Marry Doe"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Password */}
            <div className=" relative mb-7">
            <label
              htmlFor="password"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Marry Doe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Company Name */}
          <div className=" relative mb-7">
            <label
              htmlFor="companyName"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Marry Doe"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Are you an Agency? */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              {/* Yes Option */}
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                Yes
              </label>
              {/* No Option */}
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                No
              </label>

            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
