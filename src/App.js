import React from 'react'; 
import Cart from './Cart'; 
import Navbar from './Navbar'; 

 class App extends React.Component{ 
  constructor(){
    super(); 
    this.state={
        products:[
        {  
            price:999, 
            title:'Watch', 
            qty:10, 
            img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            id: 1
        }, 

        {  
            price:999, 
            title:'Mobile Phone', 
            qty:5, 
            img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
            id: 2
        },  //map over the array 

        {  
            price:99999, 
            title:'Laptop', 
            qty:1, 
            img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
 
            id: 3
        } 
        ]
    } 
  } 
    //this.increaseQuantity =this.increaseQuantity.bind(this); //1st way of binding 
handleIncreaseQuantity=(product)=>{
    console.log('hey Please increase the qty of product',product); 
    const {products} =this.state; 
    const index=products.indexOf(product); 
    products[index].qty+=1; 

    this.setState({
        products :products
    })
}
handledecreaseQuantity=(product)=>{
    console.log('hey Please increase the qty of product',product); 
    const {products} =this.state; 
    const index=products.indexOf(product); 
    if(products[index].qty===0)
    return; 

    products[index].qty-=1; 

    this.setState({
        products :products
    })
} 
handleDeleteProduct=(id)=>{ 
    console.log(id); 
    const{products}=this.state; 

    const items=products.filter((item)=>item.id!==id ); 

    this.setState({
        products:items
    })
}
  getCartCount = () =>{
    const { products } = this.state; 
      let count=0; 
      products.forEach((product) => {
        count += product.qty; 
      })  
    return count; 
  }  
  getCartTotal = () =>{
    const {products} =this.state; 
    let cartTotal=0; 
    products.map((product)=>{
      cartTotal = cartTotal + product.qty*product.price; 
    }) 
    return cartTotal; 
  }

render(){ 
    const { products } =this.state; 
    return ( 
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart  
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity} 
      ondecreaseQuantity={this.handledecreaseQuantity} 
      ondeleteProduct={this.handleDeleteProduct} 
      /> 
      <div style={ {padding: 10, fontSize: 20} }> Total : {this.getCartTotal()}</div>
    </div> 
  ); 
} 
 }
export default App; 
