import { Outlet } from 'react-router';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-sans)' }}>
      <AnnouncementBar />
      <Navigation />
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};