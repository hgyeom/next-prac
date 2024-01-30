export default function Cart() {
  let MyCarts = ['Tomatoes', 'Pasta', 'Coconut'];

  return (
    <div>
      <h4 className="title">장바구니</h4>
      {MyCarts.map((item, index) => {
        return <CartItem item={item} key={index} />;
      })}
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>{item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
