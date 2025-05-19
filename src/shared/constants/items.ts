import { ItemEntity } from '@entities/items/model/items';

export const mockPopularItems: ItemEntity[] = [
  {
    id: '1',
    name: 'Extreme cheese whopper JR',
    price: 5.99,
    category: 'Burger',
    liked: true,
  },
  {
    id: '2',
    name: 'Extreme cheese whopper JR',
    price: 5.99,
    category: 'Burger',
    liked: true,
  },
  {
    id: '3',
    name: 'Extreme cheese whopper JR',
    price: 5.99,
    category: 'Burger',
    liked: true,
  },
  {
    id: '4',
    name: 'Extreme cheese whopper JR',
    price: 5.99,
    category: 'Burger',
    liked: true,
  },
  {
    id: '5',
    name: 'Extreme cheese whopper JR',
    price: 5.99,
    category: 'Burger',
    liked: true,
  },
];

export const mockCombosBurger: ItemEntity[] = [
  {
    id: '1',
    name: 'Combo spicy tender',
    price: 10.15,
    category: 'Burger combo',
    liked: true,
  },
  {
    id: '2',
    name: 'Combo spicy tender',
    price: 10.15,
    category: 'Burger combo',
    liked: false,
  },
  {
    id: '3',
    name: 'Combo spicy tender',
    price: 10.15,
    category: 'Burger combo',
    liked: false,
  },
];

export const mockCombosChicken: ItemEntity[] = [
  {
    id: '1',
    name: 'Chicken BBQ',
    price: 10.15,
    category: 'Chicken combo',
    liked: false,
  },
  {
    id: '2',
    name: 'Chicken BBQ',
    price: 10.15,
    category: 'Chicken combo',
    liked: true,
  },
  {
    id: '3',
    name: 'Chicken BBQ',
    price: 10.15,
    category: 'Chicken combo',
    liked: false,
  },
];
