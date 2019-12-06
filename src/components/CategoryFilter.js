import React from 'react'
import PropTypes from 'prop-types'
import categories from '../config'

const Filter = ({ handleFilterChange }) => (
  <select
    id="filter"
    onChange={event => handleFilterChange(event.target.value)}
  >
    {['All', ...categories].map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
)

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
}

export default Filter
