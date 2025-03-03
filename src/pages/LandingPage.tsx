import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-pink-600" />
              <span className="text-xl font-bold text-pink-600">Web Kitchen</span>
            </div>
            <div className="space-x-4">
              <Link to="/signin" className="text-pink-600 hover:text-pink-700">Sign In</Link>
              <Link to="/register" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                Register
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center justify-between py-20">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Discover the Art of 
              <span className="text-pink-600"> Cooking</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our community of food lovers and explore thousands of delicious recipes from around the world.
            </p>
            <Link
              to="/register"
              className="bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Cooking"
              className="w-[600px] h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;