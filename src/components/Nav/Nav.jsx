import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){

return (
<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <Link
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            to='/'
          >
           Planet Token
          </Link>
          <Link
          className='item'
          to='/browse'
          >
          Browse
          </Link>
        </nav>
)
};