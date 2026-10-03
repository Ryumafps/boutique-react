import '../assets/style/product.css';

const Product = ({ product, addToCart }) => {
  return (
    <div className="product">
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="description">{product.description}</div>
      </div>
      <div>{product.weight}</div>
      <div className="imageProduit">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="stock">qté {product.stock}</div>
      <div className="price">{product.price}</div>
      {product.stock > 0 && (
        <img className="button" src="images/addCart.png" alt="ajouter" onClick={() => addToCart(product)} />
      )}
    </div>
  );
}
export default Product;