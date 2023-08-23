<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Continuar</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
const url = 'https://hackaton-final-grupo-2-dev.netlify.app';
import { useCartStore } from '@/stores/cart.store.js';

export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    return {
      coursesCart: [],
      loading: false,
      lineItems: [],
      successURL: `${url}/pago/aceptado`,
      cancelURL: `${url}/pago/cancelado`,
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.onLineItems()
      this.$refs.checkoutRef.redirectToCheckout();
    },
    onLineItems() {
      for( let curso of this.refresh ){
        const item = {
          price: curso.idstripe,
          quantity: curso.cantidad
        }
        this.lineItems.push(item)
      }
    }
  },
  computed: {
    refresh() {
      useCartStore().getProductsCart();
      return useCartStore().productos;
    },
  },
};
</script>
