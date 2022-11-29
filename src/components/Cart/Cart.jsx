import React from "react";
import './Cart.css';

function Cart() {


  return (

<>
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{fontSize: 25}}>Phone</div>
          <div style={{color:'grey'}}>Rs 999</div>
          <div style={{color:'grey'}}>Qty: 1</div>
          <div className="cart-item-actions">
            {/* {Buttons} */}
            <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="action-icons" alt="increase" />
            <img src="https://cdn-icons-png.flaticon.com/512/992/992683.png" className="action-icons" alt="deacrease" />
            <img src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" className="action-icons" alt="delete" />
            
            </div>
        </div>
      </div>
    </>
  );
}

const styles = {
    image: {
        height:110,
        width:110,
        borderRadius:4
    }
}


export default Cart;
