import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Archive } from './pages/Archive';
import { Apparel } from './pages/Apparel';
import { Objects } from './pages/Objects';
import { CustomerStory } from './pages/CustomerStory';
import { Makers } from './pages/Makers';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'apparel', Component: Apparel },
      { path: 'objects', Component: Objects },
      { path: 'archive', Component: Archive },
      { path: 'about', Component: About },
      { path: 'makers', Component: Makers },
      { path: 'stories/:id', Component: CustomerStory },
      { path: 'story/:id', Component: CustomerStory },
      { path: '*', Component: Home },
    ],
  },
]);