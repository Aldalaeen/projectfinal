import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const EditHome = () => {
  // set the initial state and the return value
  const [items, setItems] = useState([])


  function getItems () {
    fetch('http://localhost:8000/items')
      .then(res => {
        return res.json()
      }).then(items => {
        console.log(items)
        setItems(items.data)
      }).catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getItems()
  }, [])



  return (
     <React.Fragment>
      <header>
        <h1>Your <br />Cars</h1>
      </header>
      <section>

        <div className='itemsContainer'>
          {items.map(item => {
            return (
              <div className='item' key={item._id}>
                <Link to={'updateDelete/' + item._id}>
                  <div className='cover' style={{ backgroundImage: 'url(' + item.image + ')' }} />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

    </React.Fragment>
  )
}

export default EditHome
