import { PartnerEntity } from '@entities/partners/model/partners';

export const mockPartners: PartnerEntity[] = [
  {
    id: '1',
    name: 'Subway',
    address: 'Santa Nella, CA 95322',
    rating: 4.5,
    distance: 1.5,
    freeShipping: true,
    open: true,
    categories: ['Sandwich', 'Salads', 'Fast Food'],
    reviews: [
      {
        id: '1',
        user: 'Eleanor Summers',
        description:
          "What can I say it's fast food, it's Burger King.No different to any of the other burger kings, nice with adequate seating",
        likesCount: 68,
        createdAt: 'Today, 16:40',
        rating: 5,
        liked: true,
      },
      {
        id: '2',
        user: 'Victoria Champain',
        description:
          'Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel.',
        likesCount: 132,
        createdAt: 'Today, 09:12',
        rating: 5,
        liked: false,
      },
      {
        id: '3',
        user: 'Laura Smith',
        description:
          'Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!',
        likesCount: 32,
        createdAt: 'Yesterday, 16:40',
        rating: 3,
        liked: true,
      },
      {
        id: '4',
        user: 'Dora Perry',
        description:
          'I popped in for a late lunch on Friday after a long morning working. The staff member was rude and unhelpful and the toilets were closed. I will not be returning and suggest others do not either.',
        likesCount: 99,
        createdAt: 'Yesterday, 16:40',
        rating: 1,
        liked: false,
      },
    ],
  },
  {
    id: '2',
    name: 'Burger King',
    address: 'Los Banos, CA 93635',
    rating: 4.2,
    distance: 2.1,
    freeShipping: false,
    open: true,
    categories: ['Burgers', 'Fries', 'Drinks'],
    reviews: [
      {
        id: '1',
        user: 'Eleanor Summers',
        description:
          "What can I say it's fast food, it's Burger King.No different to any of the other burger kings, nice with adequate seating",
        likesCount: 68,
        createdAt: 'Today, 16:40',
        rating: 5,
        liked: true,
      },
      {
        id: '2',
        user: 'Victoria Champain',
        description:
          'Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel.',
        likesCount: 132,
        createdAt: 'Today, 09:12',
        rating: 5,
        liked: false,
      },
      {
        id: '3',
        user: 'Laura Smith',
        description:
          'Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!',
        likesCount: 32,
        createdAt: 'Yesterday, 16:40',
        rating: 3,
        liked: true,
      },
      {
        id: '4',
        user: 'Dora Perry',
        description:
          'I popped in for a late lunch on Friday after a long morning working. The staff member was rude and unhelpful and the toilets were closed. I will not be returning and suggest others do not either.',
        likesCount: 99,
        createdAt: 'Yesterday, 16:40',
        rating: 1,
        liked: false,
      },
    ],
  },
  {
    id: '3',
    name: 'Pizza Hut',
    address: 'Merced, CA 95340',
    rating: 3.9,
    distance: 3.5,
    freeShipping: true,
    open: false,
    categories: ['Pizza', 'Pasta', 'Desserts'],
    reviews: [
      {
        id: '1',
        user: 'Eleanor Summers',
        description:
          "What can I say it's fast food, it's Burger King.No different to any of the other burger kings, nice with adequate seating",
        likesCount: 68,
        createdAt: 'Today, 16:40',
        rating: 5,
        liked: true,
      },
      {
        id: '2',
        user: 'Victoria Champain',
        description:
          'Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel.',
        likesCount: 132,
        createdAt: 'Today, 09:12',
        rating: 5,
        liked: false,
      },
      {
        id: '3',
        user: 'Laura Smith',
        description:
          'Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!',
        likesCount: 32,
        createdAt: 'Yesterday, 16:40',
        rating: 3,
        liked: true,
      },
      {
        id: '4',
        user: 'Dora Perry',
        description:
          'I popped in for a late lunch on Friday after a long morning working. The staff member was rude and unhelpful and the toilets were closed. I will not be returning and suggest others do not either.',
        likesCount: 99,
        createdAt: 'Yesterday, 16:40',
        rating: 1,
        liked: false,
      },
    ],
  },
  {
    id: '4',
    name: 'Starbucks',
    address: 'Turlock, CA 95380',
    rating: 4.7,
    distance: 0.8,
    freeShipping: false,
    open: true,
    categories: ['Drinks', 'Breakfast', 'Desserts'],
    reviews: [
      {
        id: '1',
        user: 'Eleanor Summers',
        description:
          "What can I say it's fast food, it's Burger King.No different to any of the other burger kings, nice with adequate seating",
        likesCount: 68,
        createdAt: 'Today, 16:40',
        rating: 5,
        liked: false,
      },
      {
        id: '2',
        user: 'Victoria Champain',
        description:
          'Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel.',
        likesCount: 132,
        createdAt: 'Today, 09:12',
        rating: 5,
        liked: true,
      },
      {
        id: '3',
        user: 'Laura Smith',
        description:
          'Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!',
        likesCount: 32,
        createdAt: 'Yesterday, 16:40',
        rating: 3,
        liked: false,
      },
      {
        id: '4',
        user: 'Dora Perry',
        description:
          'I popped in for a late lunch on Friday after a long morning working. The staff member was rude and unhelpful and the toilets were closed. I will not be returning and suggest others do not either.',
        likesCount: 99,
        createdAt: 'Yesterday, 16:40',
        rating: 1,
        liked: true,
      },
    ],
  },
  {
    id: '5',
    name: 'Taco Bell',
    address: 'Modesto, CA 95354',
    rating: 4.1,
    distance: 4.2,
    freeShipping: true,
    open: false,
    categories: ['Tacos', 'Burritos', 'Fast Food'],
    reviews: [
      {
        id: '1',
        user: 'Eleanor Summers',
        description:
          "What can I say it's fast food, it's Burger King.No different to any of the other burger kings, nice with adequate seating",
        likesCount: 68,
        createdAt: 'Today, 16:40',
        rating: 5,
        liked: false,
      },
      {
        id: '2',
        user: 'Victoria Champain',
        description:
          'Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel.',
        likesCount: 132,
        createdAt: 'Today, 09:12',
        rating: 5,
        liked: true,
      },
      {
        id: '3',
        user: 'Laura Smith',
        description:
          'Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!',
        likesCount: 32,
        createdAt: 'Yesterday, 16:40',
        rating: 3,
        liked: false,
      },
      {
        id: '4',
        user: 'Dora Perry',
        description:
          'I popped in for a late lunch on Friday after a long morning working. The staff member was rude and unhelpful and the toilets were closed. I will not be returning and suggest others do not either.',
        likesCount: 99,
        createdAt: 'Yesterday, 16:40',
        rating: 1,
        liked: true,
      },
    ],
  },
];
