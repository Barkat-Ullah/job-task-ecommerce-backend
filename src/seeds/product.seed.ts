import mongoose from 'mongoose';

import dotenv from 'dotenv';
import { Product } from '../app/modules/products/product.model';

dotenv.config();

const dummyProducts = [
  {
    title: 'Wireless Bluetooth Headphones',
    price: 1999,
    category: 'Electronics',
    description: 'High quality wireless headphones with noise cancellation.',
    quantity: 25,
    image: 'https://i.ibb.co/G3sxJPFt/hearing-aids-case-arrangement.jpg',
  },
  {
    title: "Men's Casual T-Shirt",
    price: 499,
    category: 'Fashion',
    description: '100% cotton t-shirt for everyday comfort.',
    quantity: 100,
    image:
      'https://i.ibb.co/BVH58rR8/young-male-showing-phone-gesture-orange-t-shirt-hat-looking-cheery-front-view.jpg',
  },
  {
    title: 'Skin Care Face Cream',
    price: 899,
    category: 'Beauty',
    description: 'Moisturizing face cream suitable for all skin types.',
    quantity: 50,
    image: 'https://i.ibb.co/Q7BtHXs3/cosmetics-composition-with-oranges.jpg',
  },
  {
    title: 'Cricket Bat - Grade A English Willow',
    price: 2499,
    category: 'Sports',
    description: 'Professional quality cricket bat for all-round performance.',
    quantity: 10,
    image: 'https://i.ibb.co/YB7C68xx/234dfae0-9d64-4af1-a539-2ee81a13ef08.jpg',
  },
  {
    title: 'Football - Grade A English Willow',
    price: 599,
    category: 'Sports',
    description: 'Professional quality football for all-round performance.',
    quantity: 12,
    image: 'https://i.ibb.co/SwyvCM87/41812.jpg',
  },
  {
    title: 'LED Wall Lamp',
    price: 1299,
    category: 'Home',
    description: 'Elegant wall lamp for modern home decor.',
    quantity: 15,
    image: 'https://i.ibb.co/HLZ9fLZH/673.jpg',
  },
];

const runSeed = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log('✅ MongoDB connected');

    await Product.deleteMany({});
    console.log('🧹 Existing products cleared');

    await Product.insertMany(dummyProducts);
    console.log('🚀 Dummy products inserted successfully');

    await mongoose.disconnect();
    console.log('🔌 MongoDB disconnected');
  } catch (error) {
    console.error('❌ Error while seeding data:', error);
  }
};

runSeed();
