import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
// import Login from ".src./Login";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import the routes
import Routes from './routes'
// react-bootstrap
var tmp = ''
const App = (props) => {
  
  const [path, setPath] = useState()

  window.addEventListener('load', () => {
    console.log('window loaded')
    if (window.location.pathname === '/additem') {
      // so we can hide the additem option on the menu
      setPath(window.location.pathname)
    }
  })

  const checkPath = () => {
    // listen to the changes in the router
    const unlistenHistory = props.history.listen((location) => {
      setPath(location.pathname)
    })
  }

  useEffect(() => {
    checkPath()
  })
  /// ////////////////////////////////////
  const test = path
  let testlog
  if (test === '/Login') { testlog = <li id='additem'><Link to='/additem'>Add Item</Link></li> }
  // check if the path matches the route ---- {addItem}
  const showAddItem = path
  let addItem
  if ((showAddItem !== '/additem') && (showAddItem !== '/Login') && (showAddItem !== '/logoutin')) {
    addItem = <li id='additem'><Link to='/additem'>Add</Link></li>
  }

  const showUpdate = path
  let update
  if ((showUpdate !== '/additem') && (showUpdate !== '/Login') && (showUpdate !== '/logoutin')) {
    update = <li id='upDate'><Link to='/EditHome'>Update </Link></li>
  }

  //let tempa
 // if (path === '/Login') {
   // if (tmp !== '') { tmp = path }
  //}
  //let tempo
  //if (tmp === '/Login') { tempo = <li id='additem'><Link to='/additem'>Add Item</Link></li> }

  return (

    <div className='App'>
      <nav>
        <ul>
          <li><Link to='/Login'> Sign in </Link></li>
          <li><Link to=''>| </Link></li>
          <li><Link to='/logoutin'> Sign up </Link></li>
        

        
          <li><Link to='./.'> Home </Link></li>
          {addItem}
          {update}
        
        </ul>
      </nav>

      <Routes />

    </div>
  )
}

export default withRouter(App)
