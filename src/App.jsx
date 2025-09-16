import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolDetailPage from './pages/ToolDetailPage';
import SafetyGuidePage from './pages/SafetyGuidePage';
import PartnerPage from './pages/PartnerPage';
import BlogPage from './pages/BlogPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:slug" element={<ToolDetailPage />} />
            <Route path="/safety-guide" element={<SafetyGuidePage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

