import React from 'react'
import Navbar from '../components/Navbar'
import AddButton from '../components/AddButton'
import DeleteButton from '../components/DeleteButton'
import NoteList from '../components/NoteList'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [keyword, setKeyword] = useState("")

    const keywordOnChangeHandler = (keyword) => {
        const key = keyword.target.value
        setKeyword(key)
        setSearchParams({ keyword: key })
    } 
  return (
    <>
        <Navbar
            keyword={keyword}
            keywordOnChange={(keyString) => keywordOnChangeHandler(keyString)}
        />
        <main>
            <NoteList 
                title='List of Note'
            />
        </main>
        <AddButton />
        <DeleteButton />
    </>
  )
}

export default HomePage