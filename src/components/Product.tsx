
export const Product = ({ product, handleAddToCart }: any) => {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.name} />
      <div className='Product-item-info'>
        <h2>{product.title}</h2>
        <span>$ {product.price}</span>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={() => handleAddToCart(product)}>Buy</button>
    </div>
  );
};
