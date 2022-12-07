import React from 'react'
import {HiOutlinePlusCircle} from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function AddButton() {
  return (
    <button 
        title='Tambah'
        className='fixed 
            bottom-6 
            right-6 
            bg-[#232c3ae3]
            rounded-[50%] 
            p-1.5 items-center
            shadow-3xl
            transition-all 0.1
            hover:bg-green-htb
        '>
        <Link to="/notes/new">
          <HiOutlinePlusCircle className="text-green-htb h-12 w-12 hover:text-white-hover" />
        </Link>
    </button>
  )
}
