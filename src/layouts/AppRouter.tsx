import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RootLayout from './RootLayout';
import { Home } from '../pages/Home';

// Home is eager (it is the first paint); every other page is split into its own chunk.
const About = lazy(() => import('../pages/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('../pages/Contact').then((m) => ({ default: m.Contact })));
const Location = lazy(() => import('../pages/Location').then((m) => ({ default: m.Location })));
const Blog = lazy(() => import('../pages/Blog').then((m) => ({ default: m.Blog })));
const Article = lazy(() => import('../pages/Article').then((m) => ({ default: m.Article })));
const ProductPage = lazy(() => import('../pages/ProductPage').then((m) => ({ default: m.ProductPage })));
const NotFound = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading page…</span>
      <span
        aria-hidden="true"
        className="h-8 w-8 rounded-full border-2 border-border border-t-rust animate-spin"
      />
    </div>
  );
}

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />

          {/* /products used to be a 404 even though Home links to it */}
          <Route path="/products" element={<Navigate to="/products/tmt-steel" replace />} />
          <Route path="/products/:slug" element={<ProductPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
