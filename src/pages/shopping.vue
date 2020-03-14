<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-color:#131F47"
      >
      </parallax>
      <div class="content-center">
        <div class="container brand">
          <img class="n-logo" src="img/logo.png" alt="logo"/> Shopping Cart
          <br>
          <n-button class="btn btn-primary" @click="showShoppingCart">Show Cart</n-button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container center">
        <div class="row center">
          <div :class="product.cardCustomClass" class="product card col-xl-2" style="width: 18rem;" :key="index" v-for="(product, index) in products">
            <img :src="product.img" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <p class="card-text">${{product.price}}</p>
              <a href="#" class="btn btn-primary" :class="product.customClass" @click="addToCart(product)">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <sweet-modal ref="modal">
        <h4>Your shopping cart ({{shoppingCartItemsLength}})</h4>
        <br>
        <div class="shoppingCartItem" :key="index" v-for="(product, index) in shoppingCart">
          <img :src="product.img" class="shoppingCartImg" :alt="product.name">
          <h5>{{product.name}}</h5>
          <span>${{product.price}}</span>
          <hr>
        </div>
        <h5 class="float-right">Total ${{shoppingCartTotal}}</h5>
      </sweet-modal>
    </div>
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
const IMG_PRODUCTS_PATH = "img/products/";
export default {
  name: 'demo',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      products: [
        {"name": "OnePlus One", "price": 150, "img": `${IMG_PRODUCTS_PATH}oneplus-one.jpg`},
        {"name": "OnePlus Two", "price": 150, "img": `${IMG_PRODUCTS_PATH}oneplus-two.jpg`},
        {"name": "OnePlus 3T", "price": 150, "img": `${IMG_PRODUCTS_PATH}oneplus-3t.jpg`},
        {"name": "OnePlus 5T", "price": 200, "img": `${IMG_PRODUCTS_PATH}oneplus-5t.jpg`},
        {"name": "OnePlus 6T Thunder Purple", "price": 300, "img": `${IMG_PRODUCTS_PATH}oneplus-6t-thunder-purple.jpg`, "cardCustomClass": "overlap-margin-left-max"},
        {"name": "OnePlus 6T McLaren", "price": 540, "img": `${IMG_PRODUCTS_PATH}oneplus-6t-mclarenjpg.jpg`},
        {"name": "OnePlus 7", "price": 540, "img": `${IMG_PRODUCTS_PATH}oneplus-7.jpg`},
        {"name": "OnePlus 7T", "price": 600, "img": `${IMG_PRODUCTS_PATH}oneplus-7t.jpg`},
        {"name": "OnePlus 7T PRO", "price": 700, "img": `${IMG_PRODUCTS_PATH}oneplus-7t-pro.jpg`},
        {"name": "OnePlus 7T PRO McLaren", "price": 890, "img": `${IMG_PRODUCTS_PATH}oneplus-7t-pro-5g-mclaren.jpg`, "cardCustomClass": "overlap-margin-left-max"},
        {"name": "Google Pixel 4", "price": 900, "img": `${IMG_PRODUCTS_PATH}google-pixel-4.jpg`, "customClass": "overlap"},
        {"name": "Apple Watch 4", "price": 270, "img": `${IMG_PRODUCTS_PATH}apple-watch-series-4-steel.jpg`, "customClass": "overlap-margin-left"},
        {"name": "iPhone 6S Plus", "price": 150, "img": `${IMG_PRODUCTS_PATH}apple-iphone-6s-plus.jpg`},
        {"name": "iPhone 7 Plus", "price": 250, "img": `${IMG_PRODUCTS_PATH}apple-iphone-7-plus-r2.jpg`},
        {"name": "iPhone X", "price": 800, "img": `${IMG_PRODUCTS_PATH}apple-iphone-x.jpg`, "cardCustomClass": "overlap-margin-left-max"},
        {"name": "iPhone 11 PRO", "price": 990, "img": `${IMG_PRODUCTS_PATH}apple-iphone-11-pro.jpg`}
      ],
      shoppingCart: [],
      shoppingCartItemsLength: 0,
      shoppingCartTotal: 0
      // shoppingCartSelectedQty: 1,
      // shoppingCartOptions: [
      //   { text: 1, value: 1 },
      //   { text: 2, value: 2 },
      //   { text: 3, value: 3 },
      //   { text: 4, value: 4 }
      // ]
    };
  },
   methods:{
      showShoppingCart(){
        this.$refs.modal.open();
      },
      addToCart(product){
        this.shoppingCart.push(product);
        this.shoppingCartTotal += product.price;
        this.shoppingCartItemsLength += 1;
      }
    }
};
</script>
<style>
.center{
  text-align:center!important;
  margin:0 auto!important;
}
.card.product{
  margin-left: 15px;
  margin-right:15px;
}
.shoppingCartItem:hover{
  cursor: pointer;
  background-color: #F8FAFC;
}
.shoppingCartImg{
  width:25%;
}
</style>
