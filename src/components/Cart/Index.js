import React, { Component } from 'react';
import {JobsCart} from './StyleCart';


export default class Cart extends React.Component {
    state = {
        cart:this.props.cart
    }
    componentDidMount(){
        console.log("mount", this.props.cart)
        this.mountCart()
    }

    mountCart=()=>{
        this.setState({cart: this.props.cart})
    }
    precoFinal = (cart) => {
        const precofinal = cart.reduce((a, b) => ( (a) + (b.price)), 0)
        return precofinal;
    }
    
    render() { 
        const allCart = this.props.cart.map((job)=>{
            return(
                <JobsCart>
                    <div key={job.id}>
                        {job.title}
                        {job.price}
                    </div>
                    <button>Excluir</button>
            </JobsCart>)})
        return <div>
            {allCart}
            Total = {`RS${this.precoFinal(this.props.cart)},00`} 
            <button onClick={this.props.handleClickHireNinja}>Voltar</button>
        </div>;
    }
}

