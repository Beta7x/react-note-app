import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailNotePage() {
    const { id } = useParams()
  return (
    <div className='text-white'>DetailNotePage {id}</div>
  )
}
