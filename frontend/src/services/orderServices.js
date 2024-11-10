import axios from 'axios';

export const createOrder = async (orderData) => {
    // Calculate total price with error handling
    if (!orderData.totalprice) {
        orderData.totalprice = orderData.items.reduce((total, item) => {
            // Ensure item and item.product are defined and item.product has a price
            if (item && item.product && typeof item.product.price === 'number') {
                return total + item.product.price * item.quantity;
            } else {
                console.warn("Skipping item with missing or invalid product price:", item);
                return total; // Skip items with missing or invalid price
            }
        }, 0);
    }

    const response = await axios.post('/api/orders/create', orderData);
    return response.data;
};


