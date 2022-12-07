const formatDate = (date) => {
    const format = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return new Date(date).toLocaleDateString('id-ID', format)
}

export default formatDate