import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { AiAssistantModal } from './components/AiAssistantModal';
import { PaymentModal } from './components/PaymentModal';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { BootcampsPage } from './pages/BootcampsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { MentorsPage } from './pages/MentorsPage';
import { InstructorsPage } from './pages/InstructorsPage';
import { CorporatePage } from './pages/CorporatePage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { InstructorDashboard } from './pages/InstructorDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { RefundPolicyPage } from './pages/RefundPolicyPage';

const AppContent: React.FC = () => {
  const { currentPath } = useApp();

  const renderCurrentView = () => {
    // Dynamic course detail route matching
    if (currentPath.startsWith('/courses/')) {
      const courseId = currentPath.replace('/courses/', '');
      return <CourseDetailPage courseId={courseId} />;
    }

    // Dynamic blog detail route matching
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      return <BlogDetailPage slug={slug} />;
    }

    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/courses':
      case '/programs':
        return <CoursesPage />;
      case '/learning-paths':
        return <LearningPathsPage />;
      case '/bootcamps':
        return <BootcampsPage />;
      case '/certifications':
      case '/certificates':
        return <CertificationsPage />;
      case '/verify-certificate':
        return <VerifyCertificatePage />;
      case '/mentors':
        return <MentorsPage />;
      case '/instructors':
        return <InstructorsPage />;
      case '/corporate':
        return <CorporatePage />;
      case '/about':
        return <AboutPage />;
      case '/careers':
        return <CareersPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact':
        return <ContactPage />;
      case '/auth':
      case '/login':
        return <AuthPage initialMode="login" />;
      case '/register':
      case '/enroll':
        return <AuthPage initialMode="register" />;
      case '/student/dashboard':
        return <StudentDashboard />;
      case '/instructor/dashboard':
        return <InstructorDashboard />;
      case '/admin/dashboard':
        return <AdminDashboard />;
      case '/refund-policy':
      case '/refunds':
      case '/cancellation-policy':
        return <RefundPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer />

      {/* Global Interactive Modals */}
      <GlobalSearchModal />
      <AiAssistantModal />
      <PaymentModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
