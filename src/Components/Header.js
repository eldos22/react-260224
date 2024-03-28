import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={()=>navigate('/')}>Главное</button>
        <button onClick={()=>navigate('/conacts')}>Контакты</button>
        <button onClick={()=>navigate('about')}>О нас</button>
        <button onClick={()=>navigate('basket')}>Корзина</button>
    </div>
  )
}
