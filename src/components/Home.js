import React from 'react'
import iphone from '../iphone.jpg'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={iphone} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $1000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home