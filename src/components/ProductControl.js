import React, {Component} from 'react';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import NewProductForm from './NewProductForm';
/*Products images*/
import tshirt from '../images/products/tshirt.png';
import backpack from '../images/products/backpack.png';
import pants from '../images/products/pants.png';
import trekkingshoes from '../images/products/trekkingshoes.png';
import giacket from '../images/products/giacket.png';
import tshirt_ladies from '../images/products/tshirt_ladies.png';

const actualProductList = [
   {
       name: 'T-Shirt',
       price: '599',
       photo: tshirt,
       id: "1"
   },
   {
       name: 'BackPack',
       price: '1500',
       photo: backpack,
       id: "2"
   },
   {
       name: 'Pants',
       price: '1000',
       photo: pants,
       id: '3'
   },
   {
       name: 'Trekking Shoes',
       price: '2000',
       photo: trekkingshoes,
       id: '4'
   },
   {
       name: 'Jacket',
       price: '1500',
       photo: giacket,
       id: '5'
   },
   {
       name:'T-Shirt Ladies',
       price: '650',
       photo: tshirt_ladies,
       id: '6'
   }
];

class ProductControl extends Component{
	// Constructor
	constructor(props){
		super(props);
		this.state = {
			productFormVisible: false,
			products: actualProductList,
			selectedProduct: null
		}
	}
	// Button Click
	handleClick = () =>{
		if(this.state.selectedProduct != null){
			this.setState({
				productFormVisible: false,
				selectedProduct: null
			});
		}else{
			this.setState((prevState)=>({
				productFormVisible: !prevState.productFormVisible
			}));
		}
	}

	handleAddingNewProduct = (product) =>{
		if(product.photo === undefined){
			product.photo = pants;
		}

		const newProductList = this.state.products.concat(product);
		this.setState({
			productFormVisible: false,
			products: newProductList
		});
	}

	handleProductSelected  = (id) =>{
		const clickedProduct = this.state.products.filter(product => product.id === id)[0];
		this.setState({
			selectedProduct: clickedProduct
		});
	}

	render(){
		//Variables
		let visibleState = null;
		let buttonText   = "Go back to Product List";
		//Components Toggling
		if(this.state.selectedProduct != null){
				visibleState = <ProductDetail product = {this.state.selectedProduct}/>;
		}else{
			switch(this.state.productFormVisible){
				case true:
				visibleState = <NewProductForm productCreated = {this.handleAddingNewProduct}/>;
				break;

				default:
				visibleState = <ProductList productList     = {this.state.products}
																		productSelected = {this.handleProductSelected}/>
				buttonText   = "Add A Product";
				break;
			}
		}
		//Return Content
		return (
			<React.Fragment>
				<AddProduct 
					whenButtonClicked = {this.handleClick}
					buttonText = {buttonText}/>
				{visibleState}
			</React.Fragment>
		)
	}
}

export default ProductControl;