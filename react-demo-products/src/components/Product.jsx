function Product(props) {  //{pops:{productDetails}}
  let product = props.productDetails;

    return (
        <div className="flex flex-col justify-evenly items-center w-90 p-2 shadow-2xl rounded-xl min-h-90 text-center">
            <img src={product.image} alt="product image" width={"150px"} className="rounded-2xl"/>
            <h3 className="font-bold">{product.name}</h3>
            <p> <b>Brand : </b> {product.brand}</p>
            <p>{product.description}</p>
            <p>{product.price}/-</p>
        </div>
    );

}

export default Product;
