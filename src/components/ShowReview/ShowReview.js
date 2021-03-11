const ShowReview = (props) => {
  const { name, img, quantity, price, key } = props.cart;
  const handleDelete = props.handleDelete;
  return (
    <div className="row">
      <div>
        <div className="row border mt-2 mb-2  pb-2">
          <p className="f-1 bold"> {name} </p>
          <img src={img} alt={name} style={{ width: "18rem" }} />
          <p>Quantity {quantity}</p>
          <p>Price : ${price}</p>
          <button onClick={() => handleDelete(key)} className="btn btn-danger">
            Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
