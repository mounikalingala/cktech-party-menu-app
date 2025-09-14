# Party Menu Selection App
A React + Tailwind CSS application that allows users to select dishes for a party menu.
Users can search, filter by Veg/Non-Veg, switch between meal categories, view dish details in a modal, and check ingredients on a dedicated page.

## Screenshots
#### Home Page
![homepage](https://res.cloudinary.com/dblomc9cr/image/upload/v1757841759/Screenshot_2025-09-14_145107_wcfak9.png)

#### Selecterd Dishes
![selected dishes](https://res.cloudinary.com/dblomc9cr/image/upload/v1757841932/Screenshot_2025-09-14_145510_k1kos1.png)

#### Dishe Details
![Dish Details](https://res.cloudinary.com/dblomc9cr/image/upload/v1757842018/Screenshot_2025-09-14_145636_vw7wp7.png)

#### Ingedirent List
![Ingedirents List](https://res.cloudinary.com/dblomc9cr/image/upload/v1757842090/Screenshot_2025-09-14_145754_xssfih.png)

## Features

- Meal Categories Tabs – Switch between Starter, Main Course, Dessert, and Sides.
- Dish Cards – Show dish name, description, Veg/Non-Veg icon, image, and add/remove button.
- Search – Filter dishes by name within the selected meal type.
- Veg / Non-Veg Toggle – Show only vegetarian or non-vegetarian dishes.
- Dish Selection Summary – Shows count of selected dishes per category + total count.
- Ingredient Details – Clicking "Ingredient" navigates to /ingredients/:id and shows dish details + ingredients list.
- Modal View – Clicking "Read More" opens a bottom sheet modal with full description.
- Responsive Design – Fully responsive and mobile-friendly with TailwindCSS.

## Tech Stack

Frontend: React (functional components + hooks)

Styling: Tailwind CSS

Routing: React Router DOM

Icons: React Icons

State Management: React useState, useMemo
```
party-menu-app/
└── src/
    ├── components/
    │   ├── DishCard.jsx
    │   ├── DishList.jsx
    │   ├── DishModal.jsx
    │   ├── Filters.jsx
    │   ├── HomePage.jsx
    │   ├── IngredientModal.jsx
    │   └── Toggle.jsx
    ├── data/
    │   └── mockDishes.js
    ├── App.jsx
    └── index.js
```

## Installation & Setup

Clone the repo and install dependencies:
```
git clone https://github.com/your-username/party-menu-app.git
cd party-menu-app
npm install
```

Run the development server:
```
npm run dev
```

## Packages Used

- react-router-dom – Routing between - pages (Home, Ingredient)

- react-icons – For icons like search, back button, etc.

- tailwindcss – Utility-first styling

## Live Demo
[Live Demo]()