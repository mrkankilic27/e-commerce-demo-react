import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from "../../redux/actions/cartActions"
import {Table , Button, Container} from "reactstrap"
import alertify from "alertifyjs"

class CartDetail extends Component {

removeFromCart(product){
    this.props.actions.removeFromCart(product)
    alertify.error(product.productName+ " sepetten silindi.")
}

  render() {
    return (
      <div>
        <Container className='mx-auto'><h1>Sepet Detayları</h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Adet</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (<tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td><Button size="sm" color='danger' onClick={()=>this.removeFromCart(cartItem.product)}>Sepetten Kaldır</Button></td>
            </tr>))}

          </tbody>
        </Table></Container>
        
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

function maoStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

export default connect(maoStateToProps, mapDispatchToProps)(CartDetail)