import React from 'react'
import categories from '../config'

const Filter = () => (
  <select id="filter">
    {['All', ...categories].map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
)

export default Filter
