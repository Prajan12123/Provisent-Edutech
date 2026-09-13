import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, User, UserRole, ToastMessage, CertificateRecord } from '../types';
import { COURSES, VERIFIED_CERTIFICATES } from '../data/mockData';

interface AppContextType {
  currentPath: string;
  navigateTo: (path: string) => void;
  selectedCourseId: string | null;
  selectedBlogSlug: string | null;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  currentUser: User | null;
  loginAs: (role: UserRole) => void;
  logout: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAiAssistantOpen: boolean;
  setIsAiAssistantOpen: (open: boolean) => void;
  checkoutCourse: Course | null;
  openCheckout: (course: Course) => void;
  closeCheckout: () => void;
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  enrolledCourses: Course[];
  enrollInCourse: (course: Course) => void;
  certificates: CertificateRecord[];
  addCertificate: (cert: CertificateRecord) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return hash || '/';
    }
    return '/';
  });

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>('course-1');
  const [selectedBlogSlug, setSelectedBlogSlug] = useState<string | null>('the-shift-to-agentic-ai-engineering-in-2026');
  
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('provisent_theme');
      return (saved === 'light' || saved === 'dark') ? saved : 'dark';
    }
    return 'dark';
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState<boolean>(false);
  const [checkoutCourse, setCheckoutCourse] = useState<Course | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(['course-1', 'course-2']);
  const [certificates, setCertificates] = useState<CertificateRecord[]>(VERIFIED_CERTIFICATES);

  // Sync theme to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('provisent_theme', theme);
  }, [theme]);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || '/';
      if (hash.startsWith('/courses/')) {
        const id = hash.replace('/courses/', '');
        setSelectedCourseId(id);
      } else if (hash.startsWith('/blog/')) {
        const slug = hash.replace('/blog/', '');
        setSelectedBlogSlug(slug);
      }
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('/courses/')) {
      const id = path.replace('/courses/', '');
      setSelectedCourseId(id);
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      setSelectedBlogSlug(slug);
    }
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const loginAs = (role: UserRole) => {
    if (role === 'guest') {
      setCurrentUser(null);
      addToast('Logged Out', 'You have been signed out successfully.', 'info');
      return;
    }

    const profiles: Record<UserRole, User> = {
      student: {
        id: 'usr-student-1',
        name: 'Student Learner',
        email: 'student@provisent.com',
        role: 'student',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        headline: 'Provisent Tech Scholar',
        enrolledCourseIds: enrolledCourseIds
      },
      instructor: {
        id: 'usr-instructor-1',
        name: 'Janani K',
        email: 'janani.k@provisent.com',
        role: 'instructor',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        headline: 'Lead Architect & Faculty'
      },
      admin: {
        id: 'usr-admin-1',
        name: 'Admin Provisent',
        email: 'admin@provisent.com',
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
        headline: 'Executive Operations Controller'
      },
      guest: {
        id: 'usr-guest',
        name: 'Guest User',
        email: 'guest@provisent.com',
        role: 'guest',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        headline: 'Guest Learner'
      }
    };

    setCurrentUser(profiles[role]);
    addToast('Switched Account', `Logged in as ${role.toUpperCase()} (${profiles[role].name})`, 'success');
  };

  const logout = () => {
    setCurrentUser(null);
    addToast('Signed Out', 'You are now viewing as Guest.', 'info');
  };

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = 'toast-' + Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const openCheckout = (course: Course) => {
    setCheckoutCourse(course);
  };

  const closeCheckout = () => {
    setCheckoutCourse(null);
  };

  const enrollInCourse = (course: Course) => {
    if (!enrolledCourseIds.includes(course.id)) {
      setEnrolledCourseIds(prev => [...prev, course.id]);
    }
    addToast('Enrollment Successful!', `You are now enrolled in ${course.title}. Welcome aboard!`, 'success');
    closeCheckout();
    navigateTo('/student/dashboard');
  };

  const addCertificate = (cert: CertificateRecord) => {
    setCertificates(prev => [cert, ...prev]);
    addToast('Certificate Created', `Generated ${cert.certificateNumber} for ${cert.studentName}`, 'success');
  };

  const enrolledCourses = COURSES.filter(c => enrolledCourseIds.includes(c.id));

  return (
    <AppContext.Provider
      value={{
        currentPath,
        navigateTo,
        selectedCourseId,
        selectedBlogSlug,
        theme,
        toggleTheme,
        currentUser,
        loginAs,
        logout,
        isSearchOpen,
        setIsSearchOpen,
        isAiAssistantOpen,
        setIsAiAssistantOpen,
        checkoutCourse,
        openCheckout,
        closeCheckout,
        toasts,
        addToast,
        removeToast,
        enrolledCourses,
        enrollInCourse,
        certificates,
        addCertificate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
