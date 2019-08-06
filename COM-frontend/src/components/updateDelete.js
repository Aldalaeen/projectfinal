import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

const updateDelete = (props) => {
  const [id, setId] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [mileage, setMileage] = useState('')
  const [contact, setContact] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [routeRedirect, setRedirect] = useState('')   
    
    function getItem(){
        fetch("http://localhost:8000/item/" + props.match.params.id)
        .then(res => {
            return res.json();
        }).then(response => {
          setId(response.item._id)
          setMake(response.item.name)
          setModel(response.item.model)
          setYear(response.item.year)
          setMileage(response.item.mileage)
          setContact(response.item.contact)
          setDescription(response.item.description)
          setPrice(response.item.amount)
          setImage(response.item.image)
            
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getItem();
    }, []);


   const updateItem = (e) => {
        e.preventDefault();
        //update the item
        const item = {
         name: make,
         model: model,
         year: year,
         mileage: mileage,
         contact: contact,
         description: description,
         image: image,
         amount: price
        }
        const options = { 
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
             body: JSON.stringify(item)
        
        } 
       
        fetch("http://localhost:8000/item/"+ props.match.params.id, options)
        .then(res => {
          console.log(res);
          setRedirect(true);
        });
      }
    
    const deleteItem = () => {
      let confirmDelete = window.confirm("Are you sure you want to delete this?");
      if(confirmDelete){
        const options = { 
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({id: props.match.params.id})
        
        } 

        console.log(props.match.params.id)
        
        fetch("http://localhost:8000/item/"+ props.match.params.id, options)
        .then(res => {
          console.log(res);
          setRedirect(true);
        })
      }else{
        console.log("Item was not deleted")
      }
    
    }
    
    const redirect = routeRedirect;
    if(redirect){
        return <Redirect to="/" />  
    }
    

  return (
   
      <React.Fragment>
          <section >
          <div className="banner"></div>
          <h2>Update an item</h2>

      <div className="itemCreation">
          <form onSubmit={updateItem} >
           <div className="control">
            <label htmlFor="name">Make: </label>
            <input type="text" name="name"  onChange={e => setMake(e.target.value)} value={make} />
            </div>
            <div className="control">
            <label htmlFor="model">Model: </label>
            <input type="text" name="model" onChange={e => setModel(e.target.value)} value={model} />
            </div>
            <div className="control">
            <label htmlFor="year">Year: </label>
            <input type="number" name="year" onChange={e => setYear(e.target.value)} value={year} />
            </div>
            <div className="control">
            <label htmlFor="mileage">Mileage: </label>
            <input type="text" name="mileage" onChange={e => setMileage(e.target.value)} value={mileage} />
            </div>
            
            <div className="control">
            <label htmlFor="description">Description: </label>
            <textarea name="description" onChange={e => setDescription(e.target.value)} value={description} >
            </textarea>
            </div>

            <div className="control">
            <label htmlFor="price">Price: </label>
            <input type="number" name="price" onChange={e => setPrice(e.target.value)} value={price} />
            </div>
            <div className="control">
            <label htmlFor="contact">Contact: </label>
            <input type="number" name="contact" onChange={e => setContact(e.target.value)} value={contact} />
            </div>

            <div className="control">
            <label htmlFor="image">Image: </label>
            <input type="text" name="image" onChange={e => setImage(e.target.value)} value={image} />
            </div>
            
            <input type="submit" value="Update post" />
         </form>

   
          <div className="preview">
          
          <img src={image} alt='product' />
            <p>Make: <strong> {make}</strong></p>
            <p>Model: <strong> {model}</strong></p>
            <p>Year: <strong> {year}</strong></p>
            <p>Make: <strong> {make}</strong></p>
            <p>Mileage: <strong> {mileage}</strong></p>
            <p>Description: <strong> {description}</strong> </p>
            <p>Price: <strong> {price} </strong></p>
            <p>Contact: <strong> {contact}</strong></p>
            <button className="delete" onClick={deleteItem} >Delete this Item</button>
          </div>
       
        </div>
 
         </section>

      </React.Fragment>
   
    );
}


export default updateDelete
