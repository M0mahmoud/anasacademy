# Anas Academy Dashboard

A modern, responsive dashboard application built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui components.

## 🚀 Features

### 📊 Dashboard Analytics

- **Statistics Cards**: Real-time metrics display with trend indicators
  - Views, Visits, New Users, Active Users
  - Percentage change indicators with visual arrows
  - Responsive grid layout (1 column mobile → 4 columns desktop)

### 📈 Interactive Charts

- **Traffic by Device Chart**: Bar chart showing device distribution
  - Built with Recharts
  - Responsive sizing (250px mobile → 300px desktop)
  - Custom styling with tooltips and grid
- **Traffic by Location Chart**: Donut/Pie chart with location breakdown
  - Separated, rounded segments with white gaps
  - Legend with percentages
  - Responsive design

### 🎨 UI Components

#### **App Sidebar**

- Collapsible sidebar with icon mode
- **Favorites/Recently Tabs**: Quick access navigation
  - Tab switching functionality
  - Bullet-pointed list items
  - Auto-hides when sidebar collapses
- Multi-level navigation menu
- Dashboard and Pages sections
- Smooth animations

#### **Dashboard Header**

- **Dynamic Breadcrumbs**: Auto-generated from URL path
  - Capitalizes words automatically
  - Formats hyphens to spaces
  - Clickable navigation links
- **Search Input**: Full-featured search bar
  - Responsive width (200px tablet → 300px desktop)
  - Mobile icon button version
- **Action Buttons**: Theme toggle, history, notifications
- **Notification Badge**: Visual indicator on bell icon
- Fully responsive with adaptive layout

#### **Activities Sidebar**

- Right-side collapsible panel
- Three sections:
  - **Notifications**: Icon-based alerts with timestamps
  - **Activities**: Timeline view with connecting lines
  - **Contacts**: User list with avatars
- Mobile: Sheet/Modal overlay
- Desktop: Persistent sidebar with toggle
- Cookie-based state persistence

### 🎯 Core Features

- ✅ **Fully Responsive**: Mobile-first design
- ✅ **TypeScript**: Type-safe development
- ✅ **Dark Mode Ready**: Theme system configured
- ✅ **Accessible**: WCAG compliant components
- ✅ **Performance**: Optimized with Next.js 15 and Turbopack
- ✅ **Modern Stack**: React 19 with latest features

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.5.6**: App Router, Server Components
- **React 19.1.0**: Latest React features
- **TypeScript 5**: Type safety

### UI & Styling

- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: Accessible component library
- **Radix UI**: Unstyled, accessible components
- **Lucide React**: Icon library
- **Recharts 2.15.4**: Chart components

### Key Libraries

- `class-variance-authority`: Component variants
- `tailwind-merge`: Merge Tailwind classes
- `clsx`: Conditional classNames
- `cmdk`: Command palette component

## 📁 Project Structure

```
anasacademy/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx           # Dashboard layout with sidebars
│   │   ├── page.tsx              # Main dashboard page
│   │   ├── ecommerce/            # eCommerce pages
│   │   ├── projects/             # Projects pages
│   │   └── courses/              # Courses pages
│   ├── pages/
│   │   └── profile/              # User profile pages
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── activities/               # Activities sidebar components
│   │   ├── activities-sidebar.tsx
│   │   ├── activities-sidebar-provider.tsx
│   │   ├── activities-section.tsx
│   │   ├── notifications-section.tsx
│   │   └── contacts-section.tsx
│   ├── layout/                   # Layout components
│   │   ├── app-sidebar.tsx       # Main sidebar
│   │   ├── dashboard-header.tsx  # Header with breadcrumbs
│   │   ├── header-breadcrumb.tsx # Dynamic breadcrumb
│   │   ├── nav-main.tsx          # Navigation menu
│   │   └── command-search.tsx    # Search command palette
│   ├── pages/                    # Page-specific components
│   │   └── default-page/
│   │       ├── statsics.tsx      # Statistics cards
│   │       ├── traffic-chart.tsx # Device traffic chart
│   │       └── location-chart.tsx# Location donut chart
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── chart.tsx
│       ├── sidebar.tsx
│       └── ...
├── hooks/
│   └── use-mobile.ts             # Mobile detection hook
├── lib/
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets

```

## 🚦 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd anasacademy
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## 🎨 Component Documentation

### Statistics Cards

```tsx
import StatisticsData from "@/components/pages/default-page/statsics";

<StatisticsData />;
```

Displays metric cards with trends and percentage changes.

### Charts

```tsx
import TrafficChart from "@/components/pages/default-page/traffic-chart";
import LocationChart from "@/components/pages/default-page/location-chart";

<TrafficChart />
<LocationChart />
```

Interactive Recharts-based visualizations.

### Dynamic Breadcrumbs

Automatically generates breadcrumbs from URL pathname:

- `/dashboard` → **Dashboard**
- `/dashboard/ecommerce/products` → Dashboard > Ecommerce > **Products**

### Activities Sidebar

```tsx
import { ActivitiesSidebarProvider } from "@/components/activities/activities-sidebar-provider";
import ActivitiesSidebar from "@/components/activities/activities-sidebar";

<ActivitiesSidebarProvider>
  <ActivitiesSidebar />
</ActivitiesSidebarProvider>;
```

## 🎯 Key Features Explained

### Responsive Design

- **Mobile**: Single column, sheet modals, icon buttons
- **Tablet**: 2-column grids, full search input
- **Desktop**: 4-column grids, dual sidebars, full navigation

### State Management

- React Context API for sidebar states
- Cookie persistence for user preferences
- URL-based navigation state

### Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Semantic HTML structure

### Performance Optimizations

- Next.js 15 App Router with automatic code splitting
- Turbopack for fast builds
- React 19 with automatic batching
- Image optimization ready

## 🔧 Configuration Files

- `components.json`: shadcn/ui configuration
- `tsconfig.json`: TypeScript configuration
- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration (v4)
- `postcss.config.mjs`: PostCSS configuration

## 📊 Chart Configuration

Charts use CSS variables for theming:

```css
:root {
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

**Built with ❤️ using Next.js, React, TypeScript, and shadcn/ui**
