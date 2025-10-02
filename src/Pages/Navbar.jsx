import React from 'react'

function Navbar() {
  return (
    // main
    <div className="bg-white">
      {/* Container */}
      <div className="w-[90%] max-w-[1200px] flex justify-between m-auto items-center  py-3">
        {/* logo */}
        <div className="">
          <h3 className="font-logo1 text-3xl tracking-wide">
            <span className="text-red-600 ">M</span>otrix
          </h3>
        </div>

        {/* links */}
        <div className="hidden lg:block text-lg">
          <ul className="flex gap-6">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#shop">Our Story</a>
            </li>
            <li>
              <a href="#shop">Collection</a>
            </li>
            <li>
              <a href="#shop">Blogs</a>
            </li>
            <li>
              <a href="#shop">Reviews</a>
            </li>
            <li>
              <a href="#shop">Contact</a>
            </li>
          </ul>
        </div>

        {/* sidebar and cart */}
        <div className="flex gap-3">
          {/* signup */}
          <div className="">
            <i class="ri-user-line text-2xl"></i>
          </div>
          <div class="h-8 border-r-2 border-gray-300"></div>

          {/* searchbar */}
          <div className=" hidden lg:flex items-center gap-3">
            <i class="ri-search-eye-line text-xl"></i>
            <input
              type="text"
              placeholder="Explore Motrix"
              className="border-none outline-none placeholder-black w-32 font-logo1"
            />
            <div class="h-8 border-r-2 border-gray-300"></div>
          </div>

          {/* Cart */}
          <div className="">
            <i class="ri-shopping-cart-line text-2xl"></i>
          </div>
          {/* sidebar-icon */}

          <div className="lg:hidden">
            <i class="fa-solid fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar