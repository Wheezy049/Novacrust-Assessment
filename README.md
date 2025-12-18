# Crypto Conversion Widget
A high-fidelity, responsive crypto-to-cash conversion widget built with Next.js, TypeScript, and Tailwind CSS. This project demonstrates clean component architecture, state management, and a polished UI/UX matching specific design requirements.

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18.x or later recommended)
- npm

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd crypto-conversion-widget
```

2.  **Install dependencies:**
```Bash
npm install
```

3.  **Run the development server:**
```Bash
npm run dev
```
View the app: Open http://localhost:3000 in your browser.

## 🛠 Technical Choices
1. Next.js (App Router): Chosen for its robust routing and optimized image handling via the next/image component.

2. Tailwind CSS: Used for rapid, utility-first styling to achieve the exact border-radius (40px), custom colors (#003131), and responsive layouts.

3. Lucide React: Implemented for lightweight, consistent iconography.

4. Component Composition: The UI is broken down into reusable atoms (Button, Dropdown) and patterns (TabSwitcher, ConversionForm) to ensure maintainability.

## 📝 Assumptions & Trade-offs

### Assumptions
1. Static Mock Data: Since no backend was required, all currency rates (e.g., 1 ETH = X NGN) and wallet options are hardcoded as mock data within the state.

2. Icon Assets: It is assumed that currency icons (eth.png, NGN.png) and wallet logos are stored in the /public directory.

3. Local State only: Form data is managed via React useState. In a production environment, this might be handled by a form library like React Hook Form or a global store like Zustand.

### Trade-offs
1. Custom Dropdown vs. Native Select: I built a custom Dropdown component instead of using the native HTML <select>.

2. Animations: Basic Tailwind animate-in classes were used for tab switching. For more complex, physics-based transitions, Framer Motion would be a better choice but was omitted to keep the bundle size small and dependencies minimal.

3. Client-Side Rendering: The widget is marked with "use client" because it relies heavily on user interaction and state. This bypasses Server-Side Rendering (SSR) for the widget specifically to allow for immediate interactivity.

## ✨ Features
1. Tab-Based Navigation: Seamlessly switch between "Crypto to cash" and "Cash to crypto" views.

2. Variant Dropdowns: A single reusable Dropdown component handles both small currency selectors and large wallet selectors via a variant prop.

3. Fully Responsive: The layout scales gracefully from mobile devices to large desktops.