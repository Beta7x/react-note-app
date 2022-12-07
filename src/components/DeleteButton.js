import React from 'react'
import {HiOutlineXCircle} from 'react-icons/hi2';
import PropTypes from 'prop-types';

export default function DeleteButton({id, onDelete}) {
  return (
    <button 
        title='Hapus'
        className='
            fixed
            bottom-6
            right-[98px]
            bg-[#232c3ae3]
            rounded-[50%] 
            p-1.5 items-center
            shadow-3xl
            transition-all 0.1
            hover:bg-danger
        '>
        <HiOutlineXCircle className='text-danger h-12 w-12 hover:text-white-hover' />
    </button>
  )
}

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};
