import { Link } from 'react-router-dom'
import formatDate from '../utils/format-date'
import PropTypes from 'prop-types'

const NoteItem = ({ id, title, createdAt, body }) => {
    return (
        <article id={id}>
            <h3>
                <Link to={`/notes/${id}`}>{title}</Link>
            </h3>
            <p>{body}</p>
            <p>{formatDate(createdAt)}</p>
        </article>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem