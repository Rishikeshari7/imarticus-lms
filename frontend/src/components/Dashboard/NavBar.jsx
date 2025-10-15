import React from 'react'

const NavBar = ({NavData, activeNav, setActiveNav}) => {
  return (
    <nav className="w-full bg-[#035642] text-white ">
          <div className="max-w-7xl flex justify-center mx-auto px-4 py-3">
            <ul className="flex gap-6 text-sm font-medium md:text-base overflow-x-auto whitespace-nowrap hide-scrollbar">
              {NavData.map((nav, index) => (
                <li
                  key={index}
                  onClick={() => setActiveNav(nav)}
                  className={`cursor-pointer pb-1 ${activeNav === nav ? 'border-b-3 border-orange-400' : 'border-b-2 border-transparent'}`}
                >
                  {nav}
                </li>
              ))}
            </ul>
          </div>
        </nav>
  )
}

export default NavBar
