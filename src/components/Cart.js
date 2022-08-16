import { Link } from 'gatsby'
import React from 'react'

const Cart = () => {
    
  return (
    <><section id="cart_items">
    <div class="container">
        <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li><Link to="#">Home</Link></li>
              <li class="active">Shopping Cart</li>
            </ol>
        </div>
        <div class="table-responsive cart_info">
            <table class="table table-condensed">
                <thead>
                    <tr class="cart_menu">
                        <td class="image">Item</td>
                        <td class="description"></td>
                        <td class="price">Price</td>
                        <td class="quantity">Quantity</td>
                        <td class="total">Total</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="cart_product">
                            <Link to="#"><img src="images/cart/one.png" alt="product" /></Link>
                        </td>
                        <td class="cart_description">
                            <h4><Link to="#">Colorblock Scuba</Link></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td class="cart_price">
                            <p>$59</p>
                        </td>
                        <td class="cart_quantity">
                            <div class="cart_quantity_button">
                                <Link class="cart_quantity_up" to="#"> + </Link>
                                <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                <Link class="cart_quantity_down" to="#"> - </Link>
                            </div>
                        </td>
                        <td class="cart_total">
                            <p class="cart_total_price">$59</p>
                        </td>
                        <td class="cart_delete">
                            <Link class="cart_quantity_delete" to="#"><i class="fa fa-times"></i></Link>
                        </td>
                    </tr>

                    <tr>
                        <td class="cart_product">
                            <Link to="#"><img src="images/cart/two.png" alt="product" /></Link>
                        </td>
                        <td class="cart_description">
                            <h4><Link to="#">Colorblock Scuba</Link></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td class="cart_price">
                            <p>$59</p>
                        </td>
                        <td class="cart_quantity">
                            <div class="cart_quantity_button">
                                <Link class="cart_quantity_up" to="#"> + </Link>
                                <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                <Link class="cart_quantity_down" to="#"> - </Link>
                            </div>
                        </td>
                        <td class="cart_total">
                            <p class="cart_total_price">$59</p>
                        </td>
                        <td class="cart_delete">
                            <Link class="cart_quantity_delete" to="#"><i class="fa fa-times"></i></Link>
                        </td>
                    </tr>
                    <tr>
                        <td class="cart_product">
                            <Link to="#"><img src="images/cart/three.png" alt="product" /></Link>
                        </td>
                        <td class="cart_description">
                            <h4><Link to="#">Colorblock Scuba</Link></h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td class="cart_price">
                            <p>$59</p>
                        </td>
                        <td class="cart_quantity">
                            <div class="cart_quantity_button">
                                <Link class="cart_quantity_up" to="#"> + </Link>
                                <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                <Link class="cart_quantity_down" to="#"> - </Link>
                            </div>
                        </td>
                        <td class="cart_total">
                            <p class="cart_total_price">$59</p>
                        </td>
                        <td class="cart_delete">
                            <Link class="cart_quantity_delete" to="#"><i class="fa fa-times"></i></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section> </>
  )
}

export default Cart