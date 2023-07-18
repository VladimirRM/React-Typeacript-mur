import React,{FC ,useState,ChangeEvent,FormEvent} from 'react'
import "./styles.css"


const initialState = {
  title: '',
  price: '',
  img:'',
}

const AddPizzaForm:FC = () => {
const [newPizza,setNewPizza] = useState<{title:string,price: string,img: string  }>(initialState)


const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
  console.log('handle change >>',e.target)
     const {name,value} = e.target 
     setNewPizza({
      ...newPizza,
      [name]: value
     })
}
const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  console.log('handle change >>',e.target)
    
}

  return (
    <form onSubmit={handleSubmit}>
      <input
       type="text"
      name='title'
      placeholder='название'
      onChange={handleChange}
      value = {newPizza.title}
      />
      <input
       type="text"
      name='price'
      placeholder='стоимость'
      onChange={handleChange}
      value = {newPizza.price}
      />
      <input
       type="text"
      name='img'
      placeholder='изображение'
      onChange={handleChange}
      value = {newPizza.img}
      />
      <button type='submit'>+ Add to menu</button>
    </form>
  )
}

export default AddPizzaForm
