import React,{useState} from 'react'

function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const sidebaropen = () => {
     setIsOpen(!isOpen);
   };
  return (
    // main
    <div className="bg-white">
      {/* Container */}
      <div className="w-[90%] max-w-[1200px] flex justify-between m-auto items-center  py-3 font-manrope">
        {/* logo */}
        <div className="">
          <h3 className="font-logo1 text-3xl tracking-wide">
            <span className="text-red-600 ">M</span>otrix
          </h3>
        </div>

        {/* links */}
        <div className="hidden lg:block">
          <ul className="flex gap-6">
            <li className="hover:font-semibold">
              <a href="#shop">Shop</a>
            </li>
            <li className="hover:font-semibold">
              <a href="#shop">Our Story</a>
            </li>
            <li className="hover:font-semibold">
              <a href="#shop">Collection</a>
            </li>
            <li className="hover:font-semibold">
              <a href="#shop">Blogs</a>
            </li>
            <li className="hover:font-semibold">
              <a href="#shop">Reviews</a>
            </li>
            <li className="hover:font-semibold">
              <a href="#shop">Contact</a>
            </li>
          </ul>
        </div>

        {/* sidebar and cart */}
        <div className="flex gap-3">
          {/* signup */}
          <div className="">
            <i class="ri-user-line text-2xl cursor-pointer"></i>
          </div>
          <div class="h-8 border-r-2 border-gray-300"></div>

          {/* searchbar */}
          <div className=" hidden lg:flex items-center gap-3">
            <label htmlFor="explore">
              <i class="ri-search-eye-line text-xl cursor-pointer"></i>
            </label>
            <input
              id="explore"
              type="text"
              placeholder="Explore Motrix"
              className="border-none outline-none placeholder-black w-32 font-logo1"
            />
            <div class="h-8 border-r-2 border-gray-300"></div>
          </div>

          {/* Cart */}
          <div className="">
            <i class="ri-shopping-cart-line text-2xl cursor-pointer"></i>
          </div>
          {/* sidebar-icon */}

          <div className="lg:hidden">
            <i class="fa-solid fa-bars text-2xl" onClick={sidebaropen}></i>
          </div>

          {/* sidebar */}
          <div
            className={`fixed  bg-white top-0 right-0 w-full h-full flex justify-center pt-14 text-center ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }  lg:hidden duration-300 z-50`}
          >
            <i
              class="ri-close-large-line absolute top-10 right-10 text-xl"
              onClick={sidebaropen}
            ></i>
            <ul className="flex flex-col gap-14 text-xl font-medium font-saira mt-10">
              <li>
                <a href="#shop" onClick={() => setIsOpen(false)}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#our-story" onClick={() => setIsOpen(false)}>
                  Our story
                </a>
              </li>
              <li>
                <a href="#collection" onClick={() => setIsOpen(false)}>
                  Collection
                </a>
              </li>
              <li>
                <a href="#blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={() => setIsOpen(false)}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar