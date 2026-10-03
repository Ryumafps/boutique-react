import Product from './product.component.jsx';
import '../assets/style/productList.css';

const Shop = ({ products, addToCart, filterText, setFilterText }) => {
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="productList">
      <h4>Boutique</h4>
      <input
        className="filter"
        type="text"
        placeholder="filtrer les produits"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <div className="productsZone">
        {filtered.map(p => <Product key={p.id} product={p} addToCart={addToCart} />)}
      </div>
    </div>
  );
}
export default Shop;