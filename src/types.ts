export type ThemeMode = 'dark' | 'light';

export type UserRole = 'student' | 'instructor' | 'admin' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  headline?: string;
  enrolledCourseIds?: string[];
  completedCourseIds?: string[];
  certificates?: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
  description: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
    type: 'video' | 'quiz' | 'project' | 'reading';
    isFreePreview?: boolean;
  }[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    company?: string;
    bio?: string;
  };
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  enrolledCount?: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  originalPrice: number;
  discountedPrice: number;
  currency: string;
  image: string;
  badge?: string;
  description: string;
  learningOutcomes: string[];
  prerequisites: string[];
  modules: CourseModule[];
  syllabus?: CourseModule[];
  lessonsCount?: number;
  skills?: string[];
  lastUpdated?: string;
  featured?: boolean;
  certificateOffered: boolean;
  liveSessionsCount?: number;
}

export interface ProgramCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  programsCount: number;
  description: string;
  accentColor: string;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  role: string;
  startingLevel: string;
  duration: string;
  salaryRange: string;
  description: string;
  skills: string[];
  milestones: {
    phase: string;
    title: string;
    duration: string;
    topics?: string[];
    description?: string;
  }[];
  courses: string[];
  careerOutcomes: string[];
}

export interface Bootcamp {
  id: string;
  title: string;
  duration: string;
  schedule: string;
  batchDate: string;
  seatsLeft: number;
  price: number;
  originalPrice: number;
  rating: number;
  tags: string[];
  features: string[];
  curriculumHighlights: string[];
  description?: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  experience: string;
  expertise: string[];
  rating: number;
  reviewsCount: number;
  hourlyRate: number | string;
  availableSlots: string[];
  bio: string;
  linkedinUrl?: string;
  sessionsCount?: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  experience: string;
  coursesCount: number;
  studentsCount: number;
  bio: string;
  avatar: string;
  featured?: boolean;
  skills?: string[];
  rating?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  courseCompleted: string;
  beforeRole: string;
  afterRole: string;
  salaryHike: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  studentName: string;
  studentEmail: string;
  courseName: string;
  issueDate: string;
  expiryDate?: string;
  grade: string;
  verificationUrl: string;
  skillsVerified: string[];
  instructorName: string;
  status: 'Verified' | 'Revoked' | 'Pending';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}
