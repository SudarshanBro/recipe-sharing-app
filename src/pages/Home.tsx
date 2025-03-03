import React from 'react';

const Home = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Homemade Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      chef: "Maria Garcia",
      time: "45 mins"
    },
    {
      id: 2,
      title: "Chocolate Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      chef: "John Smith",
      time: "1 hour"
    },
    {
      id: 3,
      title: "Fresh Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      chef: "Sarah Johnson",
      time: "15 mins"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{recipe.chef}</span>
                  <span>{recipe.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-pink-100 rounded-2xl p-8 flex items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to share your recipe?
            </h2>
            <p className="text-gray-600 mb-6">
              Join our community of food enthusiasts and share your culinary creations with the world.
            </p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Share Recipe
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Cooking"
            className="hidden lg:block w-80 h-60 object-cover rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;