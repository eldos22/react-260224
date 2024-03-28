
import { useEffect, useState } from 'react';
import './App.css';
import Product from './Components/Product';
import FormControlled from './Components/FormControlled';
import Header from './Components/Header';
import  Axios  from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const url = 'https://dummyjson.com/products?limit=10'

function App() {

  const [products, setProducts] = useState([])
  let [showModal, setShowModals] = useState(false)
  let [basket, setBasket] = useState([])

  const getData = async()=>{
    const data = await Axios.get(url)
      // const resp = await fetch('https://dummyjson.com/products?limit=10')
      // const data = await resp.json()
      // console.log(data.products);
      setProducts(data.data.products)
  }
  
  const addProduct = (obj) => {
    let newArr = [...products]
    newArr.push(obj)
    setProducts(newArr)
    setShowModals(false)
  }

  const buyProduct = (obj) => {
    let newArr = [...basket]
    newArr.push(obj)
    setBasket(newArr)
  
  }

  const filterProducts = (filter) => {
    let newArr = [...products]
      switch (filter) {
        case 'cheap':
          newArr = newArr.sort((a,b) => a.price - b.price)
          break;
        case 'expensive':
          newArr = newArr.sort((a,b) => b.price - a.price)
          break;
        default:
          break;
      }
    setProducts(newArr)
  }

  useEffect(()=> {
    getData() 
    // console.log(products);
  }, []) 
  

  return (
    <div className="App">
        <div>
          <BrowserRouter>
          <Header></Header>
            <Routes>
              <Route></Route>
            </Routes>
          </BrowserRouter>
          <p> Сумма {basket.reduce((accum,item)=> accum += item.price, 0)}$</p>
          <button onClick={()=>filterProducts('cheap')}>Сначал дешевле</button>
          <button onClick={()=>filterProducts('expensive')}>Сначал дороже</button>
        </div>
        <div className='Appproduct'>{products.map(product => <Product product={product} buyProduct={buyProduct} key={product.id}></Product>)}</div>
        <div>
          <button onClick={()=>setShowModals(showModal =! showModal)}>{showModal ? 'Закрыть' : 'Add product'}</button>
          {showModal && <FormControlled addProduct={addProduct}></FormControlled>}
        </div>
    </div>
  );
}

export default App;
