import { defineStore } from 'pinia'; 
 
export const useCartStore = defineStore('cartStore', { 
    state: () => ({ 
      cart: [], 
    }), 
    actions: { 
        addToCart(product, count) { 
            const cartIndex = this.cart.findIndex((el) => el.id === product.id)
            if (cartIndex === -1) {
                for (let i = 0; i < count; i++) {
                    this.cart.push(product)
                }
            }
            console.log(this.cart)
        }, 
      }, 
  });