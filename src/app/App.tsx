import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';

export default function App() {
  useEffect(() => {
    // Disable right-click on all images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}