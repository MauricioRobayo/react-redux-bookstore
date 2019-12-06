import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children }) => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      {children}
    </nav>
  </header>
)

Header.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Header
