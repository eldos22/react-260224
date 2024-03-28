import React, { useRef } from 'react'

export default function FormControlled({addProduct}) {

  const refForm = useRef(null)
  const sendForm = (event)=>{
    event.preventDefault()
    const obj = {
      id: Date.now(),
      title: refForm.current.title.value,
      price: refForm.current.price.value
    }
    addProduct(obj)
    refForm.current.title.value = ''
    refForm.current.price.value = ''
  }

  return (
    <div>
      <form onSubmit={(event) => sendForm(event)} ref={refForm}>
        <input placeholder='title' name='title'></input>
        <input placeholder='price' name='price'></input>
        <button type='submit'>Добавить продукт </button>
      </form>
    </div>
  )
}

