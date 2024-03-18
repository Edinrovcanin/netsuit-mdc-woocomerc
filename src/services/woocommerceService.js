// services/woocommerceService.js
import axios from 'axios';

const WooCommerceService = {
  async getOrders() {
    try {
      const response = await axios.get('YOUR_WOOCOMMERCE_API/orders');  /* prave endpoint ovde unijet */
      return response.data;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }
};

export default WooCommerceService;
