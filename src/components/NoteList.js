import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'

const NoteList = ({ title, notes }) => {
  return (
    <>
        <h2>{title}</h2>
        <section>
            {notes.length === 0 ? 
            (<p>Catatan Empty</p>) : (
                notes.map((note) => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        createdAt={note.createdAt}
                    />
                ))
            )}
        </section>
    </>
  )
}

NoteList.propTypes = {
    title: PropTypes.string.isRequired,
    note: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteList