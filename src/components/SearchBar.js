import React from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({ keyword, onChange}) {
  return (
    <input className='h-[36px] px-2 bg-black-search rounded-lg text-white'
        type="text"
        placeholder='Cari catatan...'
        value={keyword}
        onChange={onChange}
    />
  )
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordOnChange: PropTypes.func.isRequired,
};