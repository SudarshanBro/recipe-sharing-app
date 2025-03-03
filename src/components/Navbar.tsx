import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-pink-600" />
            <span className="text-xl font-bold text-pink-600">Web Kitchen</span>
          </Link>
          
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/favorites" className="text-gray-600 hover:text-pink-600">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-pink-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;