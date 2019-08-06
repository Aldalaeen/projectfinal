import React, { useEffect, useState } from 'react'
import defaultImage from '../assets/images.png'
import { Redirect } from 'react-router'

const AddItem = () => {
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [mileage, setMileage] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [contact, setContact] = useState('')
  const [image, setImage] = useState('')
  const [routeRedirect, setRedirect] = useState('')

  const createItem = (e) => {
    e.preventDefault()
    const item = {
      name: make,
      model:model,
      year:year,
      mileage:mileage,
      description: description,
      contact: contact,
      image: image,
      amount: price
    }

    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)

    }

    if (description && image && make && price && model && year && mileage && contact) {
      fetch('http://localhost:8000/items', options)
        .then(res => {
          console.log(res)
          setRedirect(true)
        })
    } else {
      console.log('The form is not valid to be sent')
    }
  }

  const isImgReady = image
  let imagePreview

  if (isImgReady) {
    imagePreview = <img src={image} alt='product ' />
  } else {
    imagePreview = <img src={defaultImage} alt='default preview' />
  }

  const redirect = routeRedirect
  if (redirect) {
    return <Redirect to='/' />
  }

  return (
    <React.Fragment>
      <section >
        <div className='banner' />
        <h2>Create a new item</h2>

        <div className='itemCreation'>
          <form onSubmit={createItem}>
            <div className='control'>
              <label htmlFor='name'>Make: </label>
              <input type='text' name='name' onChange={e => setMake(e.target.value)} />
            </div>
            <div className='control'>
              <label htmlFor='model'>Model: </label>
              <input type='text' name='model' onChange={e => setModel(e.target.value)} />
            </div>
            <div className='control'>
              <label htmlFor='year'>Year: </label>
              <input type='text' name='year' onChange={e => setYear(e.target.value)} />
            </div>
            <div className='control'>
              <label htmlFor='mileage'>Mileage: </label>
              <input type='text' name='mileage' onChange={e => setMileage(e.target.value)} />
            </div>
            <div className='control'>
              <label htmlFor='description'> Description: </label>
              <textarea name='description' onChange={e => setDescription(e.target.value)} />
            </div>

            <div className='control'>
              <label htmlFor='price'>Product Price: </label>
              <input type='number' name='price' onChange={e => setPrice(e.target.value)} />
            </div>

            <div className='control'>
              <label htmlFor='contact'>Contact: </label>
              <input type='number' name='contact' onChange={e => setContact(e.target.value)} />
            </div>

            <div className='control'>
              <label htmlFor='image'>Product Image: </label>
              <input type='text' name='image' onChange={e => setImage(e.target.value)} />
            </div>

            <input type='submit' value='create post' />
          </form>

          <div className='preview'>

            {imagePreview}
            <p>Make: <strong> {make}</strong></p>
            <p>Model: <strong> {model}</strong></p>
            <p>Year: <strong> {year}</strong></p>
            <p>Mileage: <strong> {mileage}</strong></p>
            <p>Description: <strong> {description}</strong> </p>
            <p>Price: <strong> {price} </strong></p>
            <p>Contact: <strong> {contact} </strong></p>

          </div>

        </div>

      </section>

    </React.Fragment>
  )
}

export default AddItem
