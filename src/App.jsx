import React from 'react';
import { Route, Switch, Router } from 'wouter';
// Must use hash mode, useHashLocation export from "wouter/use-hash-location", not direct import from "wouter"
import { useHashLocation } from 'wouter/use-hash-location';
import { Toaster } from 'sonner';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Sidebar from './components/Sidebar';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Home from './pages/Home';
import Work from './pages/Work';
import WorkDetail from './pages/WorkDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import MobileSidebar from './components/MobileSidebar';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router hook={useHashLocation}>
        <div className="flex min-h-screen bg-white">
          <MobileSidebar />
          
          {/* 侧边栏 */}
          <Sidebar />

          {/* 主内容区域 */}
          <main className="flex-1 md:ml-72 relative pt-16 md:pt-0">
            {/* 语言切换器 - 右上角 */}
            <div className="absolute top-6 right-8 z-10">
              <LanguageSwitcher />
            </div>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/work/:categoryId" component={Work} />
              <Route path="/work" component={Work} />
              <Route path="/work/:categoryId/:id" component={WorkDetail} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
        <Toaster />
      </Router>
    </I18nextProvider>
  );
}
