import '../assets/style/cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart, products }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWeight = cart.reduce((acc, item) => acc + item.weight * item.quantity, 0);

  return (
    <div className="cart">
      <div className="weight">{totalWeight}</div>
      <h4>Panier</h4>
      {cart.map(item => {
        const stockDispo = products.find(p => p.id === item.id).stock;
        return (
          <div key={item.id} className="itemCart" style={{display:'flex', alignItems:'center', gap:'5px'}}>
            <div style={{width:'120px'}}>{item.name}</div>
            <div className="imageProduit">
              <img src={item.image} alt={item.name} />
            </div>
            <input 
              type="number" 
              value={item.quantity}
              min="1"
              max={item.quantity + stockDispo}
              onChange={e => updateQuantity(item, parseInt(e.target.value) - item.quantity)}
            />
            <button onClick={() => removeFromCart(item)}>🗑</button>
          </div>
        );
      })}
      <div className="total">
        <div>total commande : <strong>{total} €</strong></div>
      </div>
    </div>
  );
}
export default Cart;