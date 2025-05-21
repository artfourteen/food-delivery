import 'dotenv/config';

export default {
  expo: {
    name: 'FoodDelivery',
    slug: 'food-delivery',
    scheme: 'food-delivery-scheme',
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
