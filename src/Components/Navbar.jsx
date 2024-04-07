import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex justify-between py-6 px-20">
        <div className="navbar-left">
            <p className="title text-3xl">Academix</p>
        </div>
        <div className="navbar-right">
            <button className='btn text-base font-semibold border-2 rounded-md border-black py-2 px-6'>Log in</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar
