
# Crypto Immobilier Frontend

Modern real estate web application for Crypto Immobilier, built with React, Vite, and Tailwind CSS.

## Features

- **Multi-language support** (French & English)
- **Light/Dark theme toggle**
- **Animated sections** using Framer Motion
- **Dynamic Hero, Description, Sellers, and Reservation sections**
- **API integration** for dynamic content (apartments, regions, reservation form)
- **Responsive design** for desktop and mobile
- **Custom UI components** (Navbar, Footer, Region Selector, etc.)
- **Google Maps integration** in the footer

## Project Structure

- `src/components/` – UI components (Header, Hero, Description, SellersSection, ReservationForm, Footer)
- `src/constants/` – Default content and API endpoints
- `src/contexts/` – React context providers (Language, Theme, Hero, Description)
- `src/hooks/` – Custom hooks for fetching content
- `src/locales/` – i18n translation files (en, fr)
- `src/utils/` – API utility functions
- `src/assets/` – Images and icons

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Install dependencies
```sh
npm install
# or
yarn install
```

### Run the development server
```sh
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173)

### Build for production
```sh
npm run build
# or
yarn build
```

### Preview production build
```sh
npm run preview
# or
yarn preview
```

### Lint the code
```sh
npm run lint
# or
yarn lint
```

## Environment & API

- The frontend expects a backend API running locally (see endpoints in `src/constants/index.js`).
- Update API endpoints as needed for deployment.

## Customization

- **Translations:** Edit `src/locales/en.json` and `src/locales/fr.json`.
- **Theme:** Tailwind config in `tailwind.config.js`.
- **Images:** Place new images in `src/assets/images/` or `src/assets/icons/`.

## License

© 2025 Crypto Immobilier. All rights reserved.
