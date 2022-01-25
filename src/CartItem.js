import React from 'react'; 

const CartItem =(props)=>{ 

    // increaseQuantity = () =>{
    //     console.log('this.state', this.state);  //3rd way for binding 
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty+1
    //         }
    //     }); 
    // } 
    // decreaseQuantity = () =>{
    //     console.log('this', this.state);  //3rd way for binding 
    //     const {qty} = this.state; 
    //     if(qty===0) 
    //     return;
    //     this.setState((prevState)=>{
    //         return {
    //             qty:prevState.qty-1
    //         }
    //     }); 
    // } 
        //console.log('this.props', this.props);
        const { price,title,qty }=props.product; 
        const {
            product, 
            onIncreaseQuantity, 
            ondecreaseQuantity, 
            ondeleteProduct
        } =props; 
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img}/> 

                </div> 
                <div className="right-block">
                    <div style={ { fontSize:25 } }>{ title }</div> 
                    <div style={ { color:'#777' } }>Rs { price }</div> 
                    <div style={ { color:'#777' } }>Qty: { qty }</div>

                    <div className="cart-item-actions"> 
                       
                       <img alt="increase" className="actions-icons" style={ { height: 25,width: 25,marginRight: 10 } } 
                       src="https://cdn-icons.flaticon.com/png/128/3303/premium/3303893.png?token=exp=1641470964~hmac=ccc67457afddf9afe4b1fd9f9a24acdb" 
                       onClick={() => onIncreaseQuantity(product)} />  
                       <img alt="decrease" className="actions-icons" style={ { height: 25,width: 25,marginRight: 10} }
                       src="https://cdn-icons.flaticon.com/png/128/2740/premium/2740679.png?token=exp=1641470881~hmac=56d144c07b0034a8bdb0c8cbf8a6a31e" 
                       onClick={() => ondecreaseQuantity(product)} /> 
                       <img alt="delete" className="actions-icons"   style={ { height: 25,width: 25,marginRight: 10} }
                       src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
                       onClick={() => ondeleteProduct(product.id)}
                       />

                    </div> 

                </div>
            </div>
        ); 
} 

const styles={
    image:{
        height:120, 
        width:120, 
        borderRadius:4, 
        background:'#ccc'
    }
}
export default CartItem; 