import React from 'react'

function Navbar() {
  return (
    // main
    <div className="bg-white">
      {/* Container */}
      <div className="w-[90%] max-w-[1200px]">
        {/* logo */}
        <div className="">
          <h3 className="font-logo2">
            <span>M</span>otrix
          </h3>
        </div>

        {/* links */}
        <div className="">
          <ul>
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
        <div className="">
          {/* signup */}
          <div className=""></div>

          {/* Cart */}
          <div className="">
            <i class="ri-shopping-cart-line"></i>
          </div>
          {/* sidebar-icon */}

          <div className="">
            <i class="ri-user-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar