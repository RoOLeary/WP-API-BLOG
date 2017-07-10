import React from 'react'
import createReactClass from 'create-react-class'
import PropTypes from 'prop-types';
import Menu from './Menu'
import Categories from './Categories'

var Home = createReactClass({
  render () {
    return (
      <div className="home mdl-cell mdl-cell--8-col">
          <Categories/>
      </div>
    )
  }
})

export default Home
