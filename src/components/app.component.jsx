import { useState, useEffect} from 'react';
import dataProduct from '../data/products.js';
import Shop from './shop.component.jsx';
import Cart from './cart.component.jsx';
import '../assets/style/app.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setProducts(dataProduct);
  },[]);

  const addToCart = (product) => {
    if (product.stock <= 0) return;
    const newProducts = products.map(p => {
      if(p.id === product.id){
        return {...p, stock : p.stock-1}
      }
      return p;
    }); 
    setProducts(newProducts);

    const existe = cart.find(item => item.id === product.id);
    if (existe){
      const newCart = cart.map(item => {
        if (item.id === product.id){
          return {...item, quantity: item.quantity + 1}
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, {...product, quantity:1}])
    }
  }

  const updateQuantity = (product, q) => {
    const newQuantity = product.quantity + q;
    if(newQuantity < 1) return;

    const newCart = cart.map(item => {
      if (item.id === product.id) {
        return {...item, quantity: newQuantity};
      }
      return item;
    });
    setCart(newCart);

    const newProducts = products.map(p => {
      if (p.id === product.id) {
        return {...p, stock: p.stock - q};
      }
      return p;
    });
    setProducts(newProducts);
  }
  const removeFromCart = (item) => {
    const rm = products.map(p => {
      if (p.id === item.id) {
        return {...p, stock: p.stock + item.quantity};
      }
      return p;
    });
    setProducts(rm);
    setCart(cart.filter(i=> i.id !== item.id));
  }

  return ( 
    <div>
      <Shop products={products} addToCart={addToCart} filterText={filterText} setFilterText={setFilterText} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} products={products}/>
    </div>
  );
}
export default App;
