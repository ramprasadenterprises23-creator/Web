import { Route, Routes } from 'react-router-dom';

import RootLayout from './RootLayout'; // Adjust path if RootLayout is located elsewhere
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Location } from '../pages/Location';
import { Blog } from '../pages/Blog';
import { Article } from '../pages/Article';
import { ProductPage } from '../pages/ProductPage';
import { NotFound } from '../pages/NotFound';

export function AppRouter() {
  return (
    <Routes>
      {/* RootLayout wraps all child routes */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />

        <Route path="/products/:slug" element={<ProductPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}