const filter = (state = 'All', { type, filter }) => {
  switch (type) {
    case 'CREATE_FILTER':
      return filter
    default:
      return state
  }
}

export default filter
