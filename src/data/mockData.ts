import { Course, ProgramCategory, LearningPath, Bootcamp, Mentor, FacultyMember, Testimonial, CertificateRecord, BlogPost, FAQItem } from '../types';

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  {
    id: 'cat-programming',
    name: 'Programming & Web',
    slug: 'programming',
    iconName: 'Code2',
    programsCount: 18,
    description: 'Modern full stack, cloud native systems, and resilient engineering architectures.',
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'cat-ai',
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    iconName: 'Cpu',
    programsCount: 14,
    description: 'Generative AI, Large Language Models, PyTorch, computer vision, and neural pipelines.',
    accentColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'cat-datascience',
    name: 'Data Science & Analytics',
    slug: 'data-science',
    iconName: 'BarChart3',
    programsCount: 12,
    description: 'Statistical modeling, predictive analytics, automated pipelines, and big data lakehouses.',
    accentColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'cat-design',
    name: 'Design & Creative',
    slug: 'design',
    iconName: 'Palette',
    programsCount: 9,
    description: 'Enterprise design systems, interactive prototyping, spatial UI, and user research.',
    accentColor: 'from-pink-500 to-rose-600'
  },
  {
    id: 'cat-cloud',
    name: 'Cloud & DevOps',
    slug: 'engineering',
    iconName: 'Cloud',
    programsCount: 11,
    description: 'Kubernetes, Terraform, AWS/GCP cloud orchestration, CI/CD, and site reliability.',
    accentColor: 'from-sky-500 to-cyan-600'
  },
  {
    id: 'cat-business',
    name: 'Business Strategy',
    slug: 'business',
    iconName: 'Briefcase',
    programsCount: 8,
    description: 'Product management, executive decision-making, tech commercialization, and agility.',
    accentColor: 'from-amber-500 to-orange-600'
  },
  {
    id: 'cat-cybersecurity',
    name: 'Cybersecurity',
    slug: 'cybersecurity',
    iconName: 'ShieldAlert',
    programsCount: 7,
    description: 'Zero-trust networks, ethical hacking, SOC monitoring, and enterprise threat intelligence.',
    accentColor: 'from-violet-500 to-purple-600'
  },
  {
    id: 'cat-marketing',
    name: 'Digital Marketing',
    slug: 'digital-marketing',
    iconName: 'TrendingUp',
    programsCount: 6,
    description: 'Algorithmic growth loops, programmatic advertising, content engines, and analytics.',
    accentColor: 'from-fuchsia-500 to-pink-600'
  },
  {
    id: 'cat-finance',
    name: 'FinTech & Analytics',
    slug: 'finance',
    iconName: 'Coins',
    programsCount: 5,
    description: 'Quantitative finance, blockchain rails, risk algorithms, and automated compliance.',
    accentColor: 'from-yellow-500 to-amber-600'
  },
  {
    id: 'cat-healthcare',
    name: 'Health Informatics',
    slug: 'healthcare',
    iconName: 'Activity',
    programsCount: 4,
    description: 'Biomedical data systems, clinical intelligence, and electronic records architecture.',
    accentColor: 'from-emerald-500 to-green-600'
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development (MERN & Next.js)',
    category: 'Programming & Web',
    instructor: {
      name: 'Janani K',
      role: 'Lead Architect & Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Senior Tech Lead'
    },
    rating: 4.9,
    reviewCount: 1420,
    studentsEnrolled: 8640,
    enrolledCount: 8640,
    duration: '16 Weeks • 120 Hours',
    difficulty: 'Intermediate',
    originalPrice: 34999,
    discountedPrice: 19999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    badge: 'Bestseller',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 32,
    skills: ['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Prisma', 'Tailwind CSS'],
    lessonsCount: 50,
    lastUpdated: 'August 2026',
    description: 'Master full stack architecture from microservices to modern interactive frontends. Build scalable React 19 web apps, Node.js GraphQL and REST APIs, PostgreSQL and MongoDB data pipelines, and deploy with Docker and CI/CD.',
    learningOutcomes: [
      'Architect production-grade React & Next.js applications with server components',
      'Design fault-tolerant backend microservices in Node.js and TypeScript',
      'Optimize database queries in PostgreSQL with indexing, migrations & ACID safety',
      'Implement OAuth 2.0, JWT authentication, and secure session management',
      'Deploy applications to production using Docker, GitHub Actions, and Kubernetes'
    ],
    prerequisites: ['Basic familiarity with HTML/CSS and core JavaScript concepts.'],
    modules: [
      {
        id: 'm1',
        title: 'Module 01: Modern TypeScript & Next-Gen React Architecture',
        duration: '3 Weeks',
        lessonsCount: 14,
        description: 'Advanced hooks, state machines, performance profiling, and design patterns.',
        lessons: [
          { id: 'l1', title: 'React 19 Core: Compiler & Actions', duration: '45 mins', type: 'video', isFreePreview: true },
          { id: 'l2', title: 'Strict TypeScript with Generics & Utility Types', duration: '55 mins', type: 'video', isFreePreview: true },
          { id: 'l3', title: 'State Architecture with Zustand and TanStack Query', duration: '50 mins', type: 'video' },
          { id: 'l4', title: 'Lab Project: Real-time Collaborative Task Canvas', duration: '120 mins', type: 'project' }
        ]
      },
      {
        id: 'm2',
        title: 'Module 02: Resilient Backend Engineering with Node & Express',
        duration: '4 Weeks',
        lessonsCount: 16,
        description: 'API design, asynchronous queues, caching with Redis, and data validation.',
        lessons: [
          { id: 'l5', title: 'Modular Express Server & Middleware Chains', duration: '60 mins', type: 'video' },
          { id: 'l6', title: 'PostgreSQL Architecture, Indexing & Prisma ORM', duration: '75 mins', type: 'video' },
          { id: 'l7', title: 'Redis Caching & Distributed Job Queues (BullMQ)', duration: '65 mins', type: 'video' },
          { id: 'l8', title: 'Lab Project: High-Throughput Payment & Webhook Service', duration: '180 mins', type: 'project' }
        ]
      },
      {
        id: 'm3',
        title: 'Module 03: Cloud Infrastructure, CI/CD & DevOps',
        duration: '4 Weeks',
        lessonsCount: 12,
        description: 'Containerization, automated pipelines, Kubernetes deployments, and telemetry.',
        lessons: [
          { id: 'l9', title: 'Dockerizing Multi-Container Architectures', duration: '50 mins', type: 'video' },
          { id: 'l10', title: 'GitHub Actions Continuous Delivery Pipeline', duration: '70 mins', type: 'video' },
          { id: 'l11', title: 'Monitoring & APM with Prometheus & Grafana', duration: '60 mins', type: 'video' }
        ]
      },
      {
        id: 'm4',
        title: 'Module 04: Capstone Industry Project & Career Launch',
        duration: '5 Weeks',
        lessonsCount: 8,
        description: 'Real-world enterprise system with code reviews and hiring partner evaluations.',
        lessons: [
          { id: 'l12', title: 'Enterprise Capstone Architecture Blueprint', duration: '90 mins', type: 'video' },
          { id: 'l13', title: 'Mock Technical System Design Interview', duration: '60 mins', type: 'quiz' }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    slug: 'artificial-intelligence-machine-learning',
    title: 'Artificial Intelligence & Machine Learning Specialization',
    category: 'Artificial Intelligence',
    instructor: {
      name: 'Lakshanaya KM',
      role: 'Principal AI Scientist',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-AI Research Fellow'
    },
    rating: 4.95,
    reviewCount: 980,
    studentsEnrolled: 5410,
    enrolledCount: 5410,
    duration: '20 Weeks • 150 Hours',
    difficulty: 'Advanced',
    originalPrice: 42999,
    discountedPrice: 24999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
    badge: 'Trending',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 40,
    skills: ['PyTorch', 'Large Language Models', 'RAG Pipelines', 'Vector Databases', 'Python', 'FastAPI', 'MLOps', 'Transformers'],
    lessonsCount: 53,
    lastUpdated: 'September 2026',
    description: 'Comprehensive pathway covering mathematical foundations of ML, deep neural networks, transformer architectures, LLM fine-tuning, RAG pipelines, and MLOps deployment.',
    learningOutcomes: [
      'Master PyTorch, NumPy, and Scikit-Learn for scalable model development',
      'Build and train Transformer architectures, attention mechanisms and diffusion models',
      'Implement Retrieval-Augmented Generation (RAG) using vector databases (Pinecone/Milvus)',
      'Fine-tune open-weights models (Llama 3, Mistral) using LoRA and QLoRA',
      'Deploy production models with FastAPI, ONNX Runtime, and TensorRT'
    ],
    prerequisites: ['Proficiency in Python programming and basic linear algebra.'],
    modules: [
      {
        id: 'ai-m1',
        title: 'Module 01: Mathematical Foundations & Statistical Machine Learning',
        duration: '4 Weeks',
        lessonsCount: 15,
        description: 'Linear algebra, vector spaces, gradient descent optimization, and regression.',
        lessons: [
          { id: 'ai-l1', title: 'Vector Math & Matrix Operations with NumPy', duration: '60 mins', type: 'video', isFreePreview: true },
          { id: 'ai-l2', title: 'Supervised Learning Algorithms & Hyperparameter Tuning', duration: '80 mins', type: 'video' }
        ]
      },
      {
        id: 'ai-m2',
        title: 'Module 02: Deep Learning & Computer Vision with PyTorch',
        duration: '5 Weeks',
        lessonsCount: 18,
        description: 'Convolutional neural networks, transfer learning, and segmentation models.',
        lessons: [
          { id: 'ai-l3', title: 'PyTorch Autograd & Tensor Computations', duration: '65 mins', type: 'video' },
          { id: 'ai-l4', title: 'ResNet, Vision Transformers & Object Detection', duration: '90 mins', type: 'video' }
        ]
      },
      {
        id: 'ai-m3',
        title: 'Module 03: Large Language Models, Generative AI & RAG',
        duration: '6 Weeks',
        lessonsCount: 20,
        description: 'Self-attention, tokenization, embeddings, vector indexing, and agentic workflows.',
        lessons: [
          { id: 'ai-l5', title: 'Attention Is All You Need: Transformer Deep Dive', duration: '85 mins', type: 'video' },
          { id: 'ai-l6', title: 'Building Multi-Agent RAG with LangChain & LlamaIndex', duration: '110 mins', type: 'project' }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    slug: 'ui-ux-design-masterclass',
    title: 'UI/UX Design Masterclass & Design Systems',
    category: 'Design & Creative',
    instructor: {
      name: 'Sharan M',
      role: 'Staff Product Designer & Design Systems Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Global Design Lead'
    },
    rating: 4.88,
    reviewCount: 820,
    studentsEnrolled: 4320,
    enrolledCount: 4320,
    duration: '12 Weeks • 80 Hours',
    difficulty: 'All Levels',
    originalPrice: 28999,
    discountedPrice: 16499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80',
    badge: 'Popular',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['Figma Variables', 'Design Systems', 'User Testing', 'Interaction Design', 'Micro-animations', 'Design Handoff'],
    lessonsCount: 28,
    lastUpdated: 'July 2026',
    description: 'Transform your design intuition into world-class product experiences. Master Figma token systems, user testing protocols, micro-interactions, responsive grids, and design-to-code handoff.',
    learningOutcomes: [
      'Build scalable multi-brand design systems in Figma with auto-layout and variables',
      'Conduct rigorous user research, usability heuristics, and qualitative interviews',
      'Design intuitive micro-interactions and interactive motion prototypes',
      'Create production-ready design tokens and coordinate handoff with engineering teams'
    ],
    prerequisites: ['No prior design software experience required; creative curiosity is essential.'],
    modules: [
      {
        id: 'des-m1',
        title: 'Module 01: Design Psychology & User Research Methodologies',
        duration: '3 Weeks',
        lessonsCount: 12,
        description: 'Mental models, information architecture, journey mapping, and wireframing.',
        lessons: [
          { id: 'des-l1', title: 'Cognitive Biases in Digital Product UX', duration: '50 mins', type: 'video', isFreePreview: true },
          { id: 'des-l2', title: 'Conducting Contextual User Inquiries', duration: '60 mins', type: 'video' }
        ]
      },
      {
        id: 'des-m2',
        title: 'Module 02: Figma Mastery & Enterprise Design Systems',
        duration: '4 Weeks',
        lessonsCount: 16,
        description: 'Tokens, typography scales, dynamic components, and auto-layout algorithms.',
        lessons: [
          { id: 'des-l3', title: 'Design Tokens & Multi-Theme Variable Binding', duration: '75 mins', type: 'video' },
          { id: 'des-l4', title: 'Complex Responsive Layouts with Nested Auto-Layout', duration: '80 mins', type: 'video' }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    slug: 'business-management-strategy',
    title: 'Business Strategy, Product Management & Growth',
    category: 'Business Strategy',
    instructor: {
      name: 'Aswin R',
      role: 'Chief Strategy Advisor & Ex-McKinsey',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Enterprise Consultant'
    },
    rating: 4.92,
    reviewCount: 650,
    studentsEnrolled: 3180,
    enrolledCount: 3180,
    duration: '10 Weeks • 70 Hours',
    difficulty: 'Intermediate',
    originalPrice: 29999,
    discountedPrice: 17999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['Competitive Strategy', 'Unit Economics (LTV/CAC)', 'Product Roadmaps', 'Agile & OKRs', 'Product-Led Growth'],
    lessonsCount: 22,
    lastUpdated: 'August 2026',
    description: 'Learn executive decision frameworks, unit economics, product roadmapping, customer discovery, and SaaS growth models used by high-performance tech enterprises.',
    learningOutcomes: [
      'Formulate defensible competitive strategies using Porter & 7 Powers frameworks',
      'Analyze P&L statements, unit economics (LTV/CAC), and SaaS retention cohorts',
      'Lead cross-functional product squads with OKRs and agile sprint cadences',
      'Execute product-led growth experiments that drive exponential organic adoption'
    ],
    prerequisites: ['Basic business or functional experience in any domain.'],
    modules: [
      {
        id: 'biz-m1',
        title: 'Module 01: Strategic Moats & Market Positioning',
        duration: '3 Weeks',
        lessonsCount: 10,
        description: 'Value curve differentiation, network effects, and high-margin business models.',
        lessons: [
          { id: 'biz-l1', title: 'Analyzing Network Effects & Switching Costs', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    slug: 'python-data-science-analytics',
    title: 'Python for Data Science, Analytics & Big Data',
    category: 'Data Science & Analytics',
    instructor: {
      name: 'Lakshanaya KM',
      role: 'Principal AI Scientist',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-AI Research Fellow'
    },
    rating: 4.89,
    reviewCount: 1140,
    studentsEnrolled: 6920,
    enrolledCount: 6920,
    duration: '14 Weeks • 100 Hours',
    difficulty: 'Beginner',
    originalPrice: 31999,
    discountedPrice: 17499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 28,
    skills: ['Python', 'SQL & CTEs', 'Pandas & NumPy', 'Streamlit & Plotly', 'Hypothesis Testing', 'Big Data Analytics'],
    lessonsCount: 36,
    lastUpdated: 'August 2026',
    description: 'Start from fundamental Python syntax to exploratory data analysis, Pandas manipulation, SQL window functions, automated visualization dashboards, and statistical testing.',
    learningOutcomes: [
      'Manipulate complex tabular datasets using Pandas and NumPy arrays',
      'Write optimized SQL queries with CTEs, window functions, and indexing',
      'Build interactive dashboards with Streamlit and Plotly',
      'Formulate hypothesis testing (A/B testing, ANOVA, p-values)'
    ],
    prerequisites: ['No previous coding background required.'],
    modules: [
      {
        id: 'ds-m1',
        title: 'Module 01: Python Programming Foundations for Data',
        duration: '3 Weeks',
        lessonsCount: 12,
        description: 'Data structures, control flow, functions, OOP, and file I/O.',
        lessons: [
          { id: 'ds-l1', title: 'Python Fundamentals & Clean Code Conventions', duration: '60 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    slug: 'cloud-devops-kubernetes',
    title: 'Cloud Architecture, DevOps & Kubernetes Mastery',
    category: 'Cloud & DevOps',
    instructor: {
      name: 'Janani K',
      role: 'Lead Architect & Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Senior Tech Lead'
    },
    rating: 4.91,
    reviewCount: 780,
    studentsEnrolled: 3890,
    enrolledCount: 3890,
    duration: '14 Weeks • 110 Hours',
    difficulty: 'Advanced',
    originalPrice: 38999,
    discountedPrice: 21999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    badge: 'Enterprise Tier',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 28,
    skills: ['AWS / GCP', 'Kubernetes', 'Terraform (IaC)', 'Docker', 'CI/CD Pipelines', 'Prometheus & Grafana'],
    lessonsCount: 40,
    lastUpdated: 'September 2026',
    description: 'Become an enterprise cloud engineer. Learn Infrastructure-as-Code with Terraform, Helm charting, Kubernetes container orchestration, service meshes, and multi-region failover.',
    learningOutcomes: [
      'Deploy multi-tier AWS and GCP infrastructure with declarative Terraform code',
      'Configure auto-scaling Kubernetes clusters with ingress controllers and TLS',
      'Implement zero-downtime blue/green and canary release pipelines in ArgoCD',
      'Establish security auditing, IAM least-privilege policies, and disaster recovery'
    ],
    prerequisites: ['Familiarity with Linux terminal commands and basic networking.'],
    modules: [
      {
        id: 'cloud-m1',
        title: 'Module 01: Cloud Fundamentals & Infrastructure as Code (Terraform)',
        duration: '4 Weeks',
        lessonsCount: 14,
        description: 'VPCs, security groups, compute clusters, and declarative state files.',
        lessons: [
          { id: 'cl-l1', title: 'AWS VPC Architecture & Subnetting Mechanics', duration: '70 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    slug: 'cybersecurity-fundamentals-soc',
    title: 'Cybersecurity Defense, Threat Intelligence & Ethical Hacking',
    category: 'Cybersecurity',
    instructor: {
      name: 'Aswin R',
      role: 'Chief Strategy Advisor & Ex-McKinsey',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Enterprise Consultant'
    },
    rating: 4.87,
    reviewCount: 540,
    studentsEnrolled: 2780,
    enrolledCount: 2780,
    duration: '12 Weeks • 90 Hours',
    difficulty: 'Intermediate',
    originalPrice: 32999,
    discountedPrice: 18499,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['Kali Linux', 'Ethical Hacking', 'Splunk SIEM', 'OWASP Top 10', 'Wireshark', 'PKI & Cryptography'],
    lessonsCount: 32,
    lastUpdated: 'June 2026',
    description: 'Learn modern defense against advanced persistent threats, SOC analysis, SIEM tools (Splunk), penetration testing with Kali Linux, and ISO 27001 compliance standards.',
    learningOutcomes: [
      'Perform vulnerability assessments and ethical exploitation on lab networks',
      'Monitor and triage alerts in Splunk SIEM environments',
      'Secure web applications against OWASP Top 10 vulnerabilities',
      'Implement cryptography, PKI certificates, and zero-trust authentication'
    ],
    prerequisites: ['Basic understanding of operating systems and TCP/IP networking.'],
    modules: [
      {
        id: 'sec-m1',
        title: 'Module 01: Threat Landscapes, Attack Vectors & Cryptography',
        duration: '3 Weeks',
        lessonsCount: 12,
        description: 'Symmetric/asymmetric encryption, hashing, and adversary tactics.',
        lessons: [
          { id: 'sec-l1', title: 'Network Packet Analysis with Wireshark', duration: '65 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    slug: 'digital-marketing-growth-hacking',
    title: 'Digital Marketing Strategy, Performance Ads & Growth Systems',
    category: 'Digital Marketing',
    instructor: {
      name: 'Sharan M',
      role: 'Staff Product Designer & Growth Lead',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Global Design Lead'
    },
    rating: 4.85,
    reviewCount: 610,
    studentsEnrolled: 3450,
    enrolledCount: 3450,
    duration: '10 Weeks • 75 Hours',
    difficulty: 'Beginner',
    originalPrice: 24999,
    discountedPrice: 14999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['Google Ads', 'Meta Performance Max', 'GA4 & Tag Manager', 'Programmatic SEO', 'Attribution Modeling'],
    lessonsCount: 24,
    lastUpdated: 'July 2026',
    description: 'Master data-driven customer acquisition. Deep dive into Google Ads auctions, Meta conversion APIs, programmatic SEO, email marketing flows, and attribution modeling.',
    learningOutcomes: [
      'Design profitable paid campaign funnels across Google, LinkedIn, and Meta',
      'Implement GA4, Google Tag Manager server-side tracking, and UTM schemas',
      'Architect programmatic SEO architectures that rank for thousands of keywords',
      'Calculate ROAS, CAC, cohort retention, and multi-touch attribution'
    ],
    prerequisites: ['No prerequisite technical skills needed.'],
    modules: [
      {
        id: 'mkt-m1',
        title: 'Module 01: Paid Acquisition Engines & Auction Theory',
        duration: '3 Weeks',
        lessonsCount: 10,
        description: 'Quality score mechanics, bidding strategies, and conversion tracking.',
        lessons: [
          { id: 'mkt-l1', title: 'Mastering the Google Ads Quality Score Formula', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    slug: 'fintech-algorithmic-trading-smart-contracts',
    title: 'FinTech Engineering, Algorithmic Trading & Smart Contract Architecture',
    category: 'FinTech & Analytics',
    instructor: {
      name: 'Dr. Siddharth Menon',
      role: 'Head of Quantitative Systems & Web3 Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Goldman Sachs / QuantLead'
    },
    rating: 4.93,
    reviewCount: 420,
    studentsEnrolled: 2150,
    enrolledCount: 2150,
    duration: '12 Weeks • 90 Hours',
    difficulty: 'Intermediate',
    originalPrice: 32999,
    discountedPrice: 19999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['Algorithmic Trading', 'Solidity & EVM', 'Python Quant', 'High-Frequency Orderbooks', 'DeFi Protocols', 'Financial Risk'],
    lessonsCount: 28,
    lastUpdated: 'August 2026',
    description: 'Engineer institutional-grade financial systems: low-latency order matching engines, automated algorithmic trading bots with Python, smart contract auditing on EVM, and quantitative risk modeling.',
    learningOutcomes: [
      'Build low-latency limit order books and WebSocket feeds in Python and C++',
      'Backtest statistical arbitrage and mean-reversion algorithmic strategies',
      'Architect and audit Solidity smart contracts with Foundry and Hardhat',
      'Implement real-time Value-at-Risk (VaR) and automated regulatory compliance pipelines'
    ],
    prerequisites: ['Basic Python or programming familiarity and elementary algebra.'],
    modules: [
      {
        id: 'fin-m1',
        title: 'Module 01: Microstructure & High-Frequency Orderbooks',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'Matching engine architecture, latency optimization, and tick data feeds.',
        lessons: [
          { id: 'fin-l1', title: 'Designing an In-Memory Limit Order Book', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-10',
    slug: 'health-informatics-clinical-ai-systems',
    title: 'Health Informatics, Clinical Data Science & AI Diagnostic Systems',
    category: 'Health Informatics',
    instructor: {
      name: 'Dr. Kavitha Raman',
      role: 'Principal Bio-Informatics Researcher',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Apollo HealthTech AI Lab'
    },
    rating: 4.91,
    reviewCount: 310,
    studentsEnrolled: 1840,
    enrolledCount: 1840,
    duration: '10 Weeks • 70 Hours',
    difficulty: 'Intermediate',
    originalPrice: 30999,
    discountedPrice: 18999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['FHIR & HL7 Standards', 'Clinical NLP', 'DICOM Imaging Pipelines', 'HIPAA & Compliance', 'Predictive Patient Triage'],
    lessonsCount: 22,
    lastUpdated: 'August 2026',
    description: 'Bridge medical informatics and modern artificial intelligence: interoperability standards (FHIR/HL7), clinical note extraction using BioBERT, radiological DICOM processing, and hospital triage algorithms.',
    learningOutcomes: [
      'Implement Fast Healthcare Interoperability Resources (FHIR) API architectures',
      'Process medical imaging datasets with PyTorch DICOM computer vision pipelines',
      'Build clinical NLP transformers for automated doctor notes synthesis',
      'Navigate HIPAA, GDPR, and medical ethical AI compliance regulations'
    ],
    prerequisites: ['Basic Python programming and interest in healthcare data systems.'],
    modules: [
      {
        id: 'hlth-m1',
        title: 'Module 01: Modern Healthcare Standards & FHIR APIs',
        duration: '3 Weeks',
        lessonsCount: 7,
        description: 'Electronic Health Record (EHR) schemas and RESTful clinical communication.',
        lessons: [
          { id: 'hlth-l1', title: 'FHIR Resources & Secure Medical REST Endpoints', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-11',
    slug: 'distributed-systems-golang-microservices',
    title: 'High-Performance Go, Distributed Systems & Microservices Architecture',
    category: 'Programming & Web',
    instructor: {
      name: 'Aditya V',
      role: 'Principal Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Uber Infrastructure'
    },
    rating: 4.96,
    reviewCount: 540,
    studentsEnrolled: 3120,
    enrolledCount: 3120,
    duration: '12 Weeks • 85 Hours',
    difficulty: 'Advanced',
    originalPrice: 29999,
    discountedPrice: 17999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 22,
    skills: ['Golang', 'gRPC & Protobuf', 'Raft Consensus', 'Kafka Event Streaming', 'Distributed Tracing', 'Postgres Sharding'],
    lessonsCount: 26,
    lastUpdated: 'September 2026',
    description: 'Construct resilient, multi-million RPS distributed architectures using Go, gRPC, Apache Kafka event streaming, Raft distributed consensus, distributed telemetry with OpenTelemetry, and database sharding.',
    learningOutcomes: [
      'Write idiomatic concurrent Go code utilizing goroutines and sync primitives',
      'Design bidirectional streaming gRPC microservices with Protobuf contracts',
      'Implement fault-tolerant event streams with Apache Kafka and partition balancing',
      'Implement distributed locking, distributed caching, and zero-downtime rolling upgrades'
    ],
    prerequisites: ['Fundamental programming experience in any language (Java, C++, Python, or JS).'],
    modules: [
      {
        id: 'go-m1',
        title: 'Module 01: Go Memory Model & Concurrency Primitives',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'Channels, select statements, deadlocks, and race condition detection.',
        lessons: [
          { id: 'go-l1', title: 'CSP Concurrency & Advanced Channel Patterns', duration: '60 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-12',
    slug: 'autonomous-computer-vision-edge-ai',
    title: 'Autonomous Computer Vision, Edge AI & Deep Neural Pipelines',
    category: 'Artificial Intelligence',
    instructor: {
      name: 'Rohan Sharma',
      role: 'Staff ML Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      company: 'Robotics & Autonomous Perception Lab'
    },
    rating: 4.92,
    reviewCount: 480,
    studentsEnrolled: 2750,
    enrolledCount: 2750,
    duration: '11 Weeks • 80 Hours',
    difficulty: 'Advanced',
    originalPrice: 36999,
    discountedPrice: 21999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['PyTorch Vision', 'YOLOv10', 'TensorRT Optimization', 'Edge TPU & Jetson', 'Object Tracking & SLAM', 'OpenCV'],
    lessonsCount: 26,
    lastUpdated: 'September 2026',
    description: 'Build real-time vision pipelines for autonomous robotics, drones, and edge devices. Implement state-of-the-art YOLO object detectors, semantic segmentation, 3D point cloud processing, and TensorRT acceleration.',
    learningOutcomes: [
      'Train custom YOLO models on proprietary edge datasets with data augmentation',
      'Optimize PyTorch deep neural models to INT8 and FP16 with NVIDIA TensorRT',
      'Deploy real-time inference on NVIDIA Jetson and Raspberry Pi edge devices',
      'Implement multi-object tracking (ByteTrack) and spatial camera calibration'
    ],
    prerequisites: ['Intermediate Python and fundamental linear algebra.'],
    modules: [
      {
        id: 'cv-m1',
        title: 'Module 01: Real-Time Object Detection & YOLO Architecture',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'Bounding boxes, anchor-free detection, and loss formulations.',
        lessons: [
          { id: 'cv-l1', title: 'YOLOv10 Deep Architecture & PyTorch Implementation', duration: '65 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-13',
    slug: 'react-native-expo-swift-mobile',
    title: 'Modern Mobile Engineering with React Native, Expo & Swift Native Modules',
    category: 'Programming & Web',
    instructor: {
      name: 'Karthik Raja',
      role: 'Staff Mobile Architect',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Swiggy / MobileLead'
    },
    rating: 4.91,
    reviewCount: 390,
    studentsEnrolled: 2310,
    enrolledCount: 2310,
    duration: '10 Weeks • 75 Hours',
    difficulty: 'Intermediate',
    originalPrice: 28999,
    discountedPrice: 16999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['React Native', 'Expo Application Services', 'Swift Native Modules', 'Offline SQLite', 'Reanimated 3', 'App Store CI/CD'],
    lessonsCount: 24,
    lastUpdated: 'August 2026',
    description: 'Engineer cross-platform iOS and Android applications. Master gesture physics with React Native Reanimated, native Swift bridges, background geolocation, offline data synchronization, and automated Fastlane deployments.',
    learningOutcomes: [
      'Build 60FPS fluid mobile experiences using Reanimated 3 and Gesture Handler',
      'Bridge native iOS (Swift) and Android (Kotlin) SDKs to React Native',
      'Implement offline-first databases with SQLite and sync conflict resolution',
      'Deploy production apps to Apple App Store and Google Play using Fastlane'
    ],
    prerequisites: ['Proficiency in modern JavaScript/TypeScript and React.'],
    modules: [
      {
        id: 'mob-m1',
        title: 'Module 01: Native Architecture & Expo Router',
        duration: '2.5 Weeks',
        lessonsCount: 6,
        description: 'New Architecture (TurboModules & Fabric), Expo Config Plugins, and file-based routing.',
        lessons: [
          { id: 'mob-l1', title: 'TurboModules & Fabric Render Architecture Deep Dive', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-14',
    slug: 'rust-systems-programming-webassembly',
    title: 'Systems Programming, Concurrency & WebAssembly with Rust',
    category: 'Programming & Web',
    instructor: {
      name: 'Vikram Seth',
      role: 'Principal Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Cloudflare'
    },
    rating: 4.95,
    reviewCount: 460,
    studentsEnrolled: 2680,
    enrolledCount: 2680,
    duration: '12 Weeks • 85 Hours',
    difficulty: 'Advanced',
    originalPrice: 31999,
    discountedPrice: 18999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['Rust', 'Borrow Checker & Lifetimes', 'Tokio Async Runtime', 'WebAssembly (WASM)', 'SIMD Optimization', 'Low-Level Networking'],
    lessonsCount: 28,
    lastUpdated: 'September 2026',
    description: 'Harness the supreme speed and memory safety of Rust. Master the borrow checker, async I/O with Tokio, compiling Rust into high-speed WebAssembly browser modules, and building lightning-fast edge proxies.',
    learningOutcomes: [
      'Master ownership, borrowing, lifetimes, and unsafe Rust boundaries',
      'Architect non-blocking high-concurrency microservices using Tokio and Axum',
      'Compile compute-intensive algorithms into WebAssembly with wasm-pack',
      'Profile memory allocations, cache misses, and CPU cycles with cargo-flamegraph'
    ],
    prerequisites: ['Prior programming experience in C, C++, Go, or Java.'],
    modules: [
      {
        id: 'rust-m1',
        title: 'Module 01: Memory Safety Without Garbage Collection',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'Ownership, move semantics, lifetimes, and custom smart pointers.',
        lessons: [
          { id: 'rust-l1', title: 'The Rust Borrow Checker: Solving Data Races at Compile Time', duration: '65 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-15',
    slug: 'agentic-ai-langgraph-autonomous-workflows',
    title: 'Agentic AI Systems, LangGraph & Multimodal Autonomous Workflows',
    category: 'Artificial Intelligence',
    instructor: {
      name: 'Dr. Arjun Rao',
      role: 'Principal AI Architect & Research Fellow',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Google DeepMind Alumni'
    },
    rating: 4.97,
    reviewCount: 620,
    studentsEnrolled: 3890,
    enrolledCount: 3890,
    duration: '10 Weeks • 75 Hours',
    difficulty: 'Advanced',
    originalPrice: 39999,
    discountedPrice: 23999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 22,
    skills: ['LangGraph', 'Multi-Agent Systems', 'Tool Calling & Memory', 'Self-Reflective RAG', 'Local SLMs (Ollama)', 'Production Guardrails'],
    lessonsCount: 26,
    lastUpdated: 'September 2026',
    description: 'Transition from single prompt calls to resilient multi-agent cognitive architectures. Learn LangGraph state machines, agent memory persistence, reflection loops, human-in-the-loop approvals, and production evaluation frameworks.',
    learningOutcomes: [
      'Design stateful multi-agent graphs with LangGraph, LangChain, and CrewAI',
      'Implement episodic, semantic, and working memory architectures for autonomous agents',
      'Integrate external APIs, SQL databases, and code execution sandboxes safely',
      'Deploy low-latency local small language models (SLMs) with vLLM and Ollama'
    ],
    prerequisites: ['Intermediate Python and basic understanding of LLM APIs.'],
    modules: [
      {
        id: 'agent-m1',
        title: 'Module 01: State Graphs & Cyclical Agent Architectures',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'Cyclical execution graphs, state reduction, and conditional edge routing.',
        lessons: [
          { id: 'agent-l1', title: 'Designing State Graphs with LangGraph', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-16',
    slug: 'nlp-llm-fine-tuning-lora-unsloth',
    title: 'Natural Language Processing & LLM Fine-Tuning with LoRA & Unsloth',
    category: 'Artificial Intelligence',
    instructor: {
      name: 'Pooja Iyer',
      role: 'Senior NLP Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Hugging Face Contributor'
    },
    rating: 4.93,
    reviewCount: 410,
    studentsEnrolled: 2450,
    enrolledCount: 2450,
    duration: '11 Weeks • 80 Hours',
    difficulty: 'Advanced',
    originalPrice: 37999,
    discountedPrice: 22999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['Hugging Face Transformers', 'LoRA & QLoRA', 'Unsloth Fast Tuning', 'DPO Alignment', 'Tokenization', 'vLLM Serving'],
    lessonsCount: 24,
    lastUpdated: 'August 2026',
    description: 'Train and fine-tune custom open-weights models (Llama 3, Mistral, Gemma). Learn low-rank adaptation (LoRA), Direct Preference Optimization (DPO), synthetic dataset curation, and quantized model serving.',
    learningOutcomes: [
      'Fine-tune 8B-70B parameter models on consumer GPUs using QLoRA and Unsloth',
      'Curate instruction datasets and run automated LLM-as-a-Judge evaluations',
      'Align models with Direct Preference Optimization (DPO) and ORPO',
      'Deploy high-throughput inference endpoints using vLLM and TensorRT-LLM'
    ],
    prerequisites: ['Python proficiency and foundational PyTorch knowledge.'],
    modules: [
      {
        id: 'nlp-m1',
        title: 'Module 01: Tokenizer Mechanics & Parameter Efficient Tuning',
        duration: '3 Weeks',
        lessonsCount: 7,
        description: 'Byte-pair encoding, rank decomposition, and quantized matrix weights.',
        lessons: [
          { id: 'nlp-l1', title: 'LoRA Mathematical Mechanics & Unsloth Speedup', duration: '60 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-17',
    slug: 'site-reliability-engineering-chaos-observability',
    title: 'Site Reliability Engineering (SRE), Chaos Engineering & Observability',
    category: 'Cloud & DevOps',
    instructor: {
      name: 'Ramesh Krishnan',
      role: 'Staff SRE & Distributed Systems Lead',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Microsoft Azure'
    },
    rating: 4.94,
    reviewCount: 380,
    studentsEnrolled: 2190,
    enrolledCount: 2190,
    duration: '10 Weeks • 70 Hours',
    difficulty: 'Advanced',
    originalPrice: 34999,
    discountedPrice: 19999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['OpenTelemetry', 'Prometheus & Grafana', 'Chaos Mesh', 'SLOs & Error Budgets', 'Linux eBPF', 'Incident Postmortems'],
    lessonsCount: 22,
    lastUpdated: 'September 2026',
    description: 'Ensure 99.999% uptime for cloud systems. Learn to define mathematically rigorous SLIs and SLOs, instrument distributed tracing with OpenTelemetry, execute automated chaos experiments, and debug Linux kernel events with eBPF.',
    learningOutcomes: [
      'Formulate error budgets, burn rate alerts, and blameless post-mortem cultures',
      'Instrument applications with OpenTelemetry traces, metrics, and structured logs',
      'Simulate network latency, pod failures, and disk corruptions using Chaos Mesh',
      'Inspect kernel-level system calls and socket latency using eBPF probes'
    ],
    prerequisites: ['Familiarity with Linux commands, Docker, and containerized architectures.'],
    modules: [
      {
        id: 'sre-m1',
        title: 'Module 01: SLO Engineering & Observability Instrumentation',
        duration: '2.5 Weeks',
        lessonsCount: 6,
        description: 'Multi-window multi-burn-rate alerting and OpenTelemetry collector setups.',
        lessons: [
          { id: 'sre-l1', title: 'Designing Error Budgets and Production Burn Rates', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-18',
    slug: 'multicloud-architecture-terraform-aws-gcp',
    title: 'Multi-Cloud Architecture with Terraform, AWS & Google Cloud',
    category: 'Cloud & DevOps',
    instructor: {
      name: 'Siddharth Nair',
      role: 'Principal Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      company: 'AWS APN Ambassador'
    },
    rating: 4.91,
    reviewCount: 440,
    studentsEnrolled: 2890,
    enrolledCount: 2890,
    duration: '11 Weeks • 80 Hours',
    difficulty: 'Intermediate',
    originalPrice: 32999,
    discountedPrice: 18999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 22,
    skills: ['Terraform Cloud', 'AWS Landing Zones', 'GCP Anthos', 'VPC Peering & Transit Gateways', 'Cloud Cost FinOps', 'Zero Trust IAM'],
    lessonsCount: 24,
    lastUpdated: 'August 2026',
    description: 'Design enterprise-scale cloud infrastructures spanning AWS and GCP. Master reusable Terraform modules, secure multi-region VPC topologies, automated FinOps cost optimization, and cross-cloud disaster recovery.',
    learningOutcomes: [
      'Write modular, state-locked Infrastructure as Code using Terraform and Terragrunt',
      'Architect highly secure AWS Landing Zones and GCP Organizations with SCPs',
      'Implement cross-cloud transit gateways, site-to-site VPNs, and peering networks',
      'Audit and reduce enterprise cloud bills by 30-50% with automated FinOps policies'
    ],
    prerequisites: ['Basic understanding of cloud concepts and networking (IP addresses, subnets).'],
    modules: [
      {
        id: 'mc-m1',
        title: 'Module 01: Enterprise Infrastructure as Code with Terraform',
        duration: '3 Weeks',
        lessonsCount: 7,
        description: 'Remote backends, state locking, module composition, and automated linting.',
        lessons: [
          { id: 'mc-l1', title: 'Modular Terraform Best Practices & State File Isolation', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-19',
    slug: 'data-engineering-apache-spark-snowflake-dbt',
    title: 'Modern Data Engineering: Apache Spark, Snowflake & dbt Lakehouses',
    category: 'Data Science & Analytics',
    instructor: {
      name: 'Meera Nambiar',
      role: 'Data Platform Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Netflix Data Infrastructure'
    },
    rating: 4.96,
    reviewCount: 520,
    studentsEnrolled: 3340,
    enrolledCount: 3340,
    duration: '12 Weeks • 90 Hours',
    difficulty: 'Intermediate',
    originalPrice: 35999,
    discountedPrice: 20999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 24,
    skills: ['PySpark', 'Snowflake Cloud Data Warehouse', 'dbt (Data Build Tool)', 'Apache Airflow', 'Kafka Streaming', 'Delta Lake'],
    lessonsCount: 28,
    lastUpdated: 'September 2026',
    description: 'Transform raw data into governed, analytical lakehouses. Master distributed data transformations with Apache Spark, automated data modeling with dbt, enterprise warehousing on Snowflake, and Airflow orchestration.',
    learningOutcomes: [
      'Process billions of rows using distributed PySpark DataFrame transformations',
      'Build modern Medallion Architecture (Bronze, Silver, Gold) on Delta Lake',
      'Implement automated data tests, lineage, and documentation using dbt Core',
      'Orchestrate fault-tolerant DAGs with Apache Airflow and real-time Kafka consumers'
    ],
    prerequisites: ['Solid SQL foundation and intermediate Python skills.'],
    modules: [
      {
        id: 'de-m1',
        title: 'Module 01: Distributed Processing with Apache Spark',
        duration: '3 Weeks',
        lessonsCount: 8,
        description: 'RDDs, Catalyst Optimizer, memory partitions, and shuffle tuning.',
        lessons: [
          { id: 'de-l1', title: 'Spark Catalyst Optimizer & Avoiding Expensive Shuffles', duration: '60 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-20',
    slug: 'business-intelligence-sql-executive-storytelling',
    title: 'Advanced Business Intelligence, SQL & Executive Data Storytelling',
    category: 'Data Science & Analytics',
    instructor: {
      name: 'Kiran Patel',
      role: 'Lead BI Architect & Analytics Director',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      company: 'Global Analytics Partners'
    },
    rating: 4.88,
    reviewCount: 390,
    studentsEnrolled: 2600,
    enrolledCount: 2600,
    duration: '8 Weeks • 60 Hours',
    difficulty: 'Beginner',
    originalPrice: 26999,
    discountedPrice: 15999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 18,
    skills: ['Complex SQL & CTEs', 'Cohort Retention Modeling', 'Executive Dashboarding', 'Tableau Desktop', 'Power BI DAX', 'Business Metrics'],
    lessonsCount: 20,
    lastUpdated: 'July 2026',
    description: 'Turn complex database tables into actionable executive strategies. Master advanced SQL window functions, cohort retention modeling, LTV/CAC calculations, and dynamic executive dashboards.',
    learningOutcomes: [
      'Write complex analytical SQL queries using Common Table Expressions and Window Functions',
      'Build interactive KPI dashboards in Tableau and Power BI that leaders rely on',
      'Analyze customer churn, cohorts, and funnels to unearth growth bottlenecks',
      'Communicate data insights persuasively to C-suite and executive stakeholders'
    ],
    prerequisites: ['No prior technical prerequisites required.'],
    modules: [
      {
        id: 'bi-m1',
        title: 'Module 01: Analytical SQL & Window Calculations',
        duration: '2 Weeks',
        lessonsCount: 6,
        description: 'RANK, DENSE_RANK, LEAD/LAG, running totals, and rolling averages.',
        lessons: [
          { id: 'bi-l1', title: 'Mastering SQL Window Functions for Business Metrics', duration: '45 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-21',
    slug: 'cloud-security-devsecops-engineering',
    title: 'Cloud Security & DevSecOps Engineering',
    category: 'Cybersecurity',
    instructor: {
      name: 'Varun Tej',
      role: 'Head of Cyber Defense & SOC Architect',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Cisco Security'
    },
    rating: 4.93,
    reviewCount: 420,
    studentsEnrolled: 2540,
    enrolledCount: 2540,
    duration: '11 Weeks • 80 Hours',
    difficulty: 'Intermediate',
    originalPrice: 33999,
    discountedPrice: 19999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 22,
    skills: ['DevSecOps Pipelines', 'SAST & DAST (SonarQube/ZAP)', 'Container Hardening (Trivy)', 'AWS IAM Auditing', 'Secret Management (Vault)', 'Kubernetes Admission Controllers'],
    lessonsCount: 24,
    lastUpdated: 'September 2026',
    description: 'Embed continuous security into modern CI/CD pipelines. Learn automated static code analysis, container vulnerability scanning, HashiCorp Vault secrets orchestration, and cloud policy-as-code with OPA Gatekeeper.',
    learningOutcomes: [
      'Integrate SAST, DAST, and dependency scanning into GitHub Actions pipelines',
      'Audit and enforce least-privilege IAM policies across AWS and Kubernetes',
      'Manage dynamic production credentials securely with HashiCorp Vault',
      'Enforce zero-trust container security policies using Trivy and OPA'
    ],
    prerequisites: ['Basic knowledge of Linux, Docker, and Git workflows.'],
    modules: [
      {
        id: 'sec-m1',
        title: 'Module 01: Shift-Left Security in CI/CD',
        duration: '2.5 Weeks',
        lessonsCount: 6,
        description: 'Automated vulnerability gates, software bill of materials (SBOM), and secrets scanning.',
        lessons: [
          { id: 'sec-l1', title: 'Automating Security Gates in GitHub Actions', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-22',
    slug: 'ethical-hacking-web-pentesting-bugbounty',
    title: 'Applied Ethical Hacking, Web Penetration Testing & Bug Bounty',
    category: 'Cybersecurity',
    instructor: {
      name: 'Ananya Roy',
      role: 'Offensive Security Consultant & OSCP',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      company: 'Top-10 HackerOne Researcher'
    },
    rating: 4.95,
    reviewCount: 490,
    studentsEnrolled: 3100,
    enrolledCount: 3100,
    duration: '10 Weeks • 75 Hours',
    difficulty: 'Beginner',
    originalPrice: 29999,
    discountedPrice: 17999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['Burp Suite Pro', 'OWASP Top 10 Exploitation', 'API Penetration Testing', 'Bug Bounty Methodology', 'XSS & SQLi Defense', 'Reconnaissance Workflows'],
    lessonsCount: 24,
    lastUpdated: 'August 2026',
    description: 'Learn offensive security from an active bug bounty hunter. Hunt for critical vulnerabilities in real web applications: IDOR, SSRF, SQL injection, GraphQL flaws, and write professional responsible disclosure reports.',
    learningOutcomes: [
      'Master Burp Suite Pro proxy, intruder, and repeater for deep web inspection',
      'Discover and safely exploit OWASP Top 10 vulnerabilities in target labs',
      'Perform thorough reconnaissance and subdomain enumeration using automated tools',
      'Write professional, high-payout vulnerability disclosure reports for bug bounty programs'
    ],
    prerequisites: ['Basic understanding of web technologies (HTTP, HTML, JavaScript).'],
    modules: [
      {
        id: 'hack-m1',
        title: 'Module 01: Offensive Web Reconnaissance & Burp Suite',
        duration: '2.5 Weeks',
        lessonsCount: 6,
        description: 'Target scoping, passive DNS analysis, and HTTP request interception.',
        lessons: [
          { id: 'hack-l1', title: 'Burp Suite Mastery: Intercepting & Fuzzing Modern Web Traffic', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-23',
    slug: 'product-design-strategy-user-research',
    title: 'Product Design Strategy, User Research & Interactive Prototyping',
    category: 'Design & Creative',
    instructor: {
      name: 'Sharan M',
      role: 'Staff Product Designer & Growth Lead',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
      company: 'Global Design Lead'
    },
    rating: 4.89,
    reviewCount: 340,
    studentsEnrolled: 1980,
    enrolledCount: 1980,
    duration: '9 Weeks • 65 Hours',
    difficulty: 'Intermediate',
    originalPrice: 27999,
    discountedPrice: 16999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932ded8?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 18,
    skills: ['Qualitative User Research', 'Information Architecture', 'Figma Interactive Prototyping', 'Usability Audits', 'Design Systems Governance', 'Cross-Functional Handoff'],
    lessonsCount: 20,
    lastUpdated: 'August 2026',
    description: 'Elevate from UI styling to strategic product design. Conduct user research interviews, synthesize affinity maps, validate user journey flows, and craft realistic interactive prototypes that stakeholders love.',
    learningOutcomes: [
      'Plan and execute effective user research sessions and usability testing protocols',
      'Synthesize customer pain points into prioritized product roadmaps and empathy maps',
      'Build realistic micro-interactions and high-fidelity prototypes in Figma',
      'Collaborate with software engineers to deliver pixel-perfect production handoffs'
    ],
    prerequisites: ['Familiarity with basic design tools or creative mindset.'],
    modules: [
      {
        id: 'pds-m1',
        title: 'Module 01: Discover & Define: User Research Methodologies',
        duration: '2 Weeks',
        lessonsCount: 5,
        description: 'Qualitative interviews, user surveys, jobs-to-be-done (JTBD) frameworks.',
        lessons: [
          { id: 'pds-l1', title: 'Conducting User Research Interviews That Uncover True Needs', duration: '45 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-24',
    slug: 'ai-product-management-tech-commercialization',
    title: 'AI Product Management & Tech Commercialization',
    category: 'Business Strategy',
    instructor: {
      name: 'Priya Sundaram',
      role: 'VP of Product Strategy',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Flipkart / Tech Advisor'
    },
    rating: 4.92,
    reviewCount: 370,
    studentsEnrolled: 2200,
    enrolledCount: 2200,
    duration: '10 Weeks • 70 Hours',
    difficulty: 'Intermediate',
    originalPrice: 31999,
    discountedPrice: 18999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['AI Product Roadmapping', 'LLM Pricing & Token Economics', 'Evaluation Benchmarks', 'Product-Led Growth (PLG)', 'PRDs for AI Features', 'Go-to-Market Strategy'],
    lessonsCount: 22,
    lastUpdated: 'September 2026',
    description: 'Lead AI product initiatives from concept to monetization. Learn how to write PRDs for non-deterministic AI models, calculate inference token unit economics, design feedback collection loops, and navigate ethical compliance.',
    learningOutcomes: [
      'Write comprehensive Product Requirement Documents (PRDs) for generative AI features',
      'Model unit economics, GPU inference costs, and value-based pricing strategies',
      'Establish evaluation benchmarks to quantify model accuracy and hallucinations',
      'Execute product-led growth (PLG) flywheels for B2B and consumer SaaS'
    ],
    prerequisites: ['Basic understanding of product development and business strategy.'],
    modules: [
      {
        id: 'aipm-m1',
        title: 'Module 01: Product Strategy for Non-Deterministic AI Systems',
        duration: '2.5 Weeks',
        lessonsCount: 6,
        description: 'Managing uncertainty, failure modes, confidence thresholds, and user trust.',
        lessons: [
          { id: 'aipm-l1', title: 'Designing Product Fallbacks When AI Models Hallucinate', duration: '50 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-25',
    slug: 'technical-seo-programmatic-growth-engineering',
    title: 'Technical SEO, Programmatic Content & Algorithmic Growth',
    category: 'Digital Marketing',
    instructor: {
      name: 'Amit Verma',
      role: 'Head of Growth Engineering',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'SaaS Growth Architects'
    },
    rating: 4.87,
    reviewCount: 310,
    studentsEnrolled: 1870,
    enrolledCount: 1870,
    duration: '8 Weeks • 60 Hours',
    difficulty: 'Beginner',
    originalPrice: 24999,
    discountedPrice: 14999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 16,
    skills: ['Programmatic SEO', 'Core Web Vitals Optimization', 'Structured Schema Markup', 'Python for Scraping & SEO', 'Internal Linking Graphs', 'Search Console Auditing'],
    lessonsCount: 18,
    lastUpdated: 'July 2026',
    description: 'Scale organic search traffic programmatically. Master Core Web Vitals optimization, server-side rendering for search crawlers, structured data schemas, and automating landing page generation for thousands of keywords.',
    learningOutcomes: [
      'Architect programmatic SEO templates that generate thousands of high-ranking pages',
      'Optimize Core Web Vitals (LCP, INP, CLS) to score 95+ on Google PageSpeed',
      'Implement rich Schema.org microdata (Product, FAQ, Course, Article) for rich snippets',
      'Analyze search trends and competitive backlink graphs using Python and APIs'
    ],
    prerequisites: ['Basic HTML/CSS familiarity is helpful but not mandatory.'],
    modules: [
      {
        id: 'seo-m1',
        title: 'Module 01: Core Web Vitals & Crawl Budget Mechanics',
        duration: '2 Weeks',
        lessonsCount: 5,
        description: 'Rendering pipelines, canonical tags, sitemap architectures, and log file analysis.',
        lessons: [
          { id: 'seo-l1', title: 'Diagnosing Crawl Budget Bottlenecks with Server Logs', duration: '45 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-26',
    slug: 'defi-protocol-engineering-security-auditing',
    title: 'Decentralized Finance (DeFi) Protocol Engineering & Security Auditing',
    category: 'FinTech & Analytics',
    instructor: {
      name: 'Dr. Siddharth Menon',
      role: 'Head of Quantitative Systems & Web3 Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      company: 'Ex-Goldman Sachs / QuantLead'
    },
    rating: 4.96,
    reviewCount: 380,
    studentsEnrolled: 1950,
    enrolledCount: 1950,
    duration: '11 Weeks • 80 Hours',
    difficulty: 'Advanced',
    originalPrice: 36999,
    discountedPrice: 21999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80',
    featured: true,
    certificateOffered: true,
    liveSessionsCount: 22,
    skills: ['Automated Market Makers (AMMs)', 'Solidity & Foundry', 'Reentrancy Defense', 'Flash Loan Mechanics', 'Smart Contract Auditing', 'Slither & Echidna Fuzzing'],
    lessonsCount: 26,
    lastUpdated: 'September 2026',
    description: 'Design and audit decentralized liquidity protocols. Master constant-product AMM mathematics (Uniswap v3/v4), lending vault mechanics, flash loans, and auditing vulnerabilities with Foundry fuzzing and Slither static analysis.',
    learningOutcomes: [
      'Build concentrated liquidity AMM pools and multi-token staking vaults in Solidity',
      'Audit common DeFi exploit vectors: reentrancy, oracle manipulation, and frontrunning',
      'Implement property-based invariant fuzz testing using Foundry and Echidna',
      'Write professional security audit reports adhering to top Web3 auditing firm standards'
    ],
    prerequisites: ['Basic Solidity or smart contract fundamentals and algebra.'],
    modules: [
      {
        id: 'defi-m1',
        title: 'Module 01: AMM Mathematical Models & Liquidity Vaults',
        duration: '3 Weeks',
        lessonsCount: 7,
        description: 'xy=k curve mechanics, concentrated liquidity math, and tick math calculations.',
        lessons: [
          { id: 'defi-l1', title: 'Deconstructing Uniswap v3 Concentrated Liquidity Mathematics', duration: '60 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  },
  {
    id: 'course-27',
    slug: 'biomedical-signal-processing-ai-medical-imaging',
    title: 'Biomedical Signal Processing & AI Medical Imaging',
    category: 'Health Informatics',
    instructor: {
      name: 'Dr. Kavitha Raman',
      role: 'Principal Bio-Informatics Researcher',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      company: 'Apollo HealthTech AI Lab'
    },
    rating: 4.94,
    reviewCount: 290,
    studentsEnrolled: 1620,
    enrolledCount: 1620,
    duration: '10 Weeks • 75 Hours',
    difficulty: 'Advanced',
    originalPrice: 34999,
    discountedPrice: 20999,
    currency: '₹',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=900&q=80',
    featured: false,
    certificateOffered: true,
    liveSessionsCount: 20,
    skills: ['MONAI Framework', '3D MRI Segmentation', 'ECG/EEG Signal Filtering', 'PyTorch Medical', 'DICOM & NIfTI', 'FDA AI Software Guidelines'],
    lessonsCount: 22,
    lastUpdated: 'August 2026',
    description: 'Apply deep learning to clinical imaging and biometric telemetry. Learn 3D volumetric segmentation of MRI and CT scans using the MONAI framework, wave filtering for ECG telemetry, and clinical validation standards.',
    learningOutcomes: [
      'Segment 3D radiological scans (MRI/CT) using U-Net and UNETR architectures with MONAI',
      'Filter and extract diagnostic features from noisy ECG and EEG biometrics',
      'Handle 3D spatial voxel transforms, affine matrices, and NIfTI data formats',
      'Navigate regulatory clearance standards for Software as a Medical Device (SaMD)'
    ],
    prerequisites: ['Intermediate Python and fundamental linear algebra / calculus.'],
    modules: [
      {
        id: 'bio-m1',
        title: 'Module 01: 3D Volumetric Imaging & MONAI Framework',
        duration: '3 Weeks',
        lessonsCount: 7,
        description: 'Voxel grids, windowing, 3D convolutions, and Dice coefficient loss functions.',
        lessons: [
          { id: 'bio-l1', title: '3D Medical Segmentation Pipelines with MONAI', duration: '55 mins', type: 'video', isFreePreview: true }
        ]
      }
    ]
  }
];

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-fullstack',
    slug: 'full-stack-developer',
    title: 'Full Stack Software Engineer',
    role: 'Full Stack Engineer / Senior Frontend / Backend Developer',
    startingLevel: 'Beginner to Intermediate',
    duration: '6 to 9 Months',
    salaryRange: '₹8 LPA - ₹28 LPA',
    description: 'A comprehensive, end-to-end curriculum training you in modern TypeScript, React 19, distributed backend systems, databases, cloud architecture, and technical interview mastery.',
    skills: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'System Design', 'Redis', 'AWS'],
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Foundations & Interactive Frontend',
        duration: 'Months 1-2',
        topics: ['Modern JavaScript & TypeScript', 'React Components & Hooks', 'Tailwind CSS & Animations', 'State Management']
      },
      {
        phase: 'Phase 2',
        title: 'Distributed Backend & Data Systems',
        duration: 'Months 3-4',
        topics: ['Node.js & Express REST APIs', 'Relational DBs (PostgreSQL) & NoSQL', 'Authentication & JWT', 'Caching with Redis']
      },
      {
        phase: 'Phase 3',
        title: 'Cloud DevOps & Production Scaling',
        duration: 'Months 5-6',
        topics: ['Docker & Containerization', 'CI/CD Pipelines with GitHub Actions', 'Cloud Ingress & Monitoring', 'Microservices']
      },
      {
        phase: 'Phase 4',
        title: 'Capstone & Placement Preparation',
        duration: 'Months 7-8',
        topics: ['Enterprise Capstone Project', 'System Design Interview Prep', 'LeetCode Algorithm Patterns', 'Resume & Referral Network']
      }
    ],
    courses: ['Full Stack Web Development (MERN & Next.js)', 'Cloud Architecture, DevOps & Kubernetes Mastery'],
    careerOutcomes: ['Full Stack Engineer', 'Backend Specialist', 'Frontend Architect', 'Application Developer']
  },
  {
    id: 'path-ai',
    slug: 'ai-engineer',
    title: 'AI & Machine Learning Engineer',
    role: 'AI Engineer / Machine Learning Specialist / LLM Developer',
    startingLevel: 'Intermediate',
    duration: '6 to 8 Months',
    salaryRange: '₹10 LPA - ₹35 LPA',
    description: 'Transform into a generative AI and machine learning practitioner capable of training deep neural networks and deploying production-grade LLM applications.',
    skills: ['PyTorch', 'Large Language Models', 'RAG Pipelines', 'Vector Databases', 'Python', 'FastAPI', 'MLOps'],
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Mathematical Rigor & Classical ML',
        duration: 'Months 1-2',
        topics: ['Linear Algebra & Calculus for ML', 'Statistical Inferences', 'NumPy & Scikit-Learn', 'Ensemble Methods']
      },
      {
        phase: 'Phase 2',
        title: 'Deep Learning & Neural Networks',
        duration: 'Months 3-4',
        topics: ['PyTorch Computational Graphs', 'CNNs & Computer Vision', 'RNNs & Sequential Modeling', 'Transfer Learning']
      },
      {
        phase: 'Phase 3',
        title: 'Transformers, Generative AI & Agentic RAG',
        duration: 'Months 5-6',
        topics: ['Attention Mechanisms', 'Fine-tuning LLMs with LoRA', 'Vector Databases (Pinecone/Chroma)', 'Autonomous Agents']
      }
    ],
    courses: ['Artificial Intelligence & Machine Learning Specialization', 'Python for Data Science, Analytics & Big Data'],
    careerOutcomes: ['AI Solutions Engineer', 'Machine Learning Scientist', 'Generative AI Developer', 'NLP Specialist']
  },
  {
    id: 'path-data',
    slug: 'data-scientist',
    title: 'Data Scientist & Analytics Architect',
    role: 'Data Scientist / Business Intelligence Lead / Data Engineer',
    startingLevel: 'Beginner',
    duration: '5 to 7 Months',
    salaryRange: '₹7 LPA - ₹24 LPA',
    description: 'Master analytical storytelling, statistical experiments, automated data pipelines, predictive models, and enterprise executive dashboarding.',
    skills: ['Python', 'SQL & CTEs', 'Pandas', 'Predictive Modeling', 'Tableau / Streamlit', 'BigQuery', 'Statistics'],
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Data Wrangling & Advanced SQL',
        duration: 'Months 1-2',
        topics: ['Relational Schemas', 'Window Functions & Aggregations', 'Data Cleaning with Pandas', 'Exploratory Data Analysis']
      },
      {
        phase: 'Phase 2',
        title: 'Statistical Testing & Predictive Analytics',
        duration: 'Months 3-4',
        topics: ['Hypothesis Testing & A/B Experiments', 'Regression & Classification', 'Time Series Forecasting', 'Clustering']
      }
    ],
    courses: ['Python for Data Science, Analytics & Big Data'],
    careerOutcomes: ['Data Scientist', 'Senior Data Analyst', 'BI Architect', 'Analytics Consultant']
  },
  {
    id: 'path-design',
    slug: 'ui-ux-designer',
    title: 'Product & UI/UX Designer',
    role: 'Senior Product Designer / UX Architect / Design Systems Specialist',
    startingLevel: 'Beginner to Intermediate',
    duration: '4 to 6 Months',
    salaryRange: '₹6 LPA - ₹22 LPA',
    description: 'Learn to design captivating digital products that solve complex user problems, scale across platforms, and integrate seamlessly with software engineering.',
    skills: ['Figma Variables', 'Design Systems', 'User Testing', 'Interaction Design', 'Micro-animations', 'Design Handoff'],
    milestones: [
      {
        phase: 'Phase 1',
        title: 'Human-Centered UX & Research',
        duration: 'Months 1-2',
        topics: ['User Personas & Empathy Maps', 'Wireframing & Information Architecture', 'Usability Audits', 'Card Sorting']
      },
      {
        phase: 'Phase 2',
        title: 'Visual Craft, Figma & Token Systems',
        duration: 'Months 3-4',
        topics: ['Color Psychology & Typography', 'Auto-Layout Algorithms', 'Component Variants & Tokens', 'Design Systems']
      }
    ],
    courses: ['UI/UX Design Masterclass & Design Systems'],
    careerOutcomes: ['UI/UX Designer', 'Product Designer', 'Design Systems Lead', 'UX Researcher']
  }
];

export const BOOTCAMPS: Bootcamp[] = [
  {
    id: 'bootcamp-fs',
    title: '90-Day Full Stack Accelerator Bootcamp',
    duration: '90 Days • Intensive',
    schedule: 'Mon, Wed, Fri (Live) + Weekend Hackathons',
    batchDate: 'Next Cohort: Oct 15, 2026',
    seatsLeft: 8,
    price: 34999,
    originalPrice: 59999,
    rating: 4.96,
    tags: ['Job Guarantee Assistance', 'Live Projects', '1:1 Mentorship'],
    features: [
      'Over 120+ hours of live instructor-led coding sessions',
      '4 portfolio-grade production deployments on cloud infrastructure',
      'Unlimited 1-on-1 code reviews and technical mock interviews',
      'Direct interview referrals with Provisent hiring partner network'
    ],
    curriculumHighlights: [
      'Days 1-25: TypeScript, React 19, Modern State Management & Motion',
      'Days 26-55: Node.js, Express, Microservices, PostgreSQL & Redis',
      'Days 56-75: Docker, Cloud Deployment, CI/CD & Production Hardening',
      'Days 76-90: Enterprise Capstone & Intensive Placement Sprints'
    ]
  },
  {
    id: 'bootcamp-ai',
    title: '30-Day Generative AI & LLM Bootcamp',
    duration: '30 Days • Immersive',
    schedule: 'Daily Evening Sessions (7:30 PM - 9:30 PM IST)',
    batchDate: 'Next Cohort: Oct 01, 2026',
    seatsLeft: 5,
    price: 21999,
    originalPrice: 39999,
    rating: 4.94,
    tags: ['Hands-on RAG', 'Agentic Workflows', 'Verified Credential'],
    features: [
      'Live code walkthroughs building production RAG systems',
      'Fine-tuning open weights models using cloud GPU compute labs',
      'Deploying multimodal autonomous agents in real-world environments',
      'Verified Provisent AI Specialist Digital Credential'
    ],
    curriculumHighlights: [
      'Week 1: Vector Embeddings, Chunking Strategies & Vector DBs',
      'Week 2: Advanced RAG with Re-ranking, Hybrid Search & LangGraph',
      'Week 3: Fine-Tuning Open Source LLMs with LoRA & Unsloth',
      'Week 4: Autonomous Multi-Agent Systems & Production Serving'
    ]
  },
  {
    id: 'bootcamp-ds',
    title: '60-Day Data Science & Predictive Analytics Bootcamp',
    duration: '60 Days • Cohort-based',
    schedule: 'Tue, Thu, Sat (Live Evening Sessions)',
    batchDate: 'Next Cohort: Oct 20, 2026',
    seatsLeft: 12,
    price: 27999,
    originalPrice: 46999,
    rating: 4.88,
    tags: ['Portfolio Building', 'Industry Datasets', 'Mentorship'],
    features: [
      'Work with real-world enterprise datasets exceeding 10M+ rows',
      'Master SQL, Python, machine learning, and business storytelling',
      'Live mentorship from senior data scientists at tier-1 tech firms',
      'Resume review and capstone presentation to hiring managers'
    ],
    curriculumHighlights: [
      'Weeks 1-3: Advanced SQL, Data Wrangling & Statistical Foundations',
      'Weeks 4-6: Predictive ML Algorithms & Feature Engineering',
      'Weeks 7-8: End-to-End Analytics Dashboards & Final Capstone'
    ]
  },
  {
    id: 'bootcamp-mkt',
    title: '45-Day Growth Marketing & Performance Ads Bootcamp',
    duration: '45 Days • Practical',
    schedule: 'Weekend Deep Dives + Midweek Strategy Clinics',
    batchDate: 'Next Cohort: Nov 05, 2026',
    seatsLeft: 14,
    price: 18999,
    originalPrice: 32999,
    rating: 4.86,
    tags: ['Live Ad Budgets', 'Conversion Tracking', 'Career Guidance'],
    features: [
      'Hands-on campaign setups with real experimental advertising budgets',
      'Server-side GTM, GA4 custom dimension setups, and attribution models',
      'Funnels, copywriting frameworks, and viral loops',
      'Access to Provisent Growth Marketer alumni community'
    ],
    curriculumHighlights: [
      'Weeks 1-2: Campaign Architecture & Audience Profiling',
      'Weeks 3-4: Meta Ads & Google Search/Performance Max Domination',
      'Weeks 5-6: CRO, Programmatic SEO & Data Attribution Analytics'
    ]
  },
  {
    id: 'bootcamp-cloud',
    title: '60-Day Cloud Architect & Kubernetes DevOps Bootcamp',
    duration: '60 Days • Cohort-based',
    schedule: 'Mon, Wed, Fri (Live Evening) + Sunday Hack-labs',
    batchDate: 'Next Cohort: Oct 25, 2026',
    seatsLeft: 9,
    price: 29999,
    originalPrice: 49999,
    rating: 4.95,
    tags: ['AWS & GCP Labs', 'Kubernetes CKA Ready', 'Production SRE'],
    features: [
      'Dedicated AWS/GCP live sandbox cloud accounts provided with billing credits',
      'Architect resilient multi-region Kubernetes clusters with Helm and ArgoCD',
      'Infrastructure as Code with modular Terraform, Vault, and GitHub Actions',
      'Real production war-room simulations and disaster recovery drills'
    ],
    curriculumHighlights: [
      'Weeks 1-2: Linux Kernel Networking, Docker Multi-Stage & Cloud VPCs',
      'Weeks 3-5: Kubernetes Production Orchestration, Ingress & Service Meshes',
      'Weeks 6-7: Terraform Enterprise, GitOps (ArgoCD) & Automated Observability',
      'Week 8: Multi-Region High-Availability Capstone & Chaos Engineering'
    ]
  },
  {
    id: 'bootcamp-cyber',
    title: '45-Day Offensive Cybersecurity & Threat Hunting Bootcamp',
    duration: '45 Days • Immersive Labs',
    schedule: 'Tue, Thu, Sat (Live Labs & Capture The Flag)',
    batchDate: 'Next Cohort: Nov 10, 2026',
    seatsLeft: 7,
    price: 26999,
    originalPrice: 44999,
    rating: 4.92,
    tags: ['Live CTF Labs', 'SOC Automation', 'OSCP Aligned'],
    features: [
      'Access to dedicated private virtual penetration testing ranges and target machines',
      'Hands-on network pivoting, active directory exploitation, and web app pen-testing',
      'SIEM threat hunting rules with Splunk, Elastic Security, and Sigma',
      'Defensive hardening guides and statutory cyber compliance frameworks'
    ],
    curriculumHighlights: [
      'Weeks 1-2: Threat Reconnaissance, OSINT & Vulnerability Scanning',
      'Weeks 3-4: Web Exploitation (OWASP Top 10) & Active Directory Attacks',
      'Weeks 5-6: SOC Incident Response, Malware Analysis & Final 24-hr CTF'
    ]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Janani K',
    role: 'Full Stack Developer & Technical Lead',
    expertise: 'React 19, Distributed Node.js, Cloud Architectures, PostgreSQL',
    experience: '8+ Years Industry Experience',
    coursesCount: 6,
    studentsCount: 14500,
    rating: 4.98,
    skills: ['React 19', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Janani specializes in resilient distributed software architectures, reactive frontend interfaces, and large-scale enterprise deployments. She has trained thousands of engineers transitioning to tier-1 technology teams.',
    featured: true
  },
  {
    id: 'fac-2',
    name: 'Sharan M',
    role: 'Senior UI/UX Designer & Design Systems Lead',
    expertise: 'Figma Systems, Spatial UI, Human Factors, Interactive Micro-animations',
    experience: '7+ Years Product Design',
    coursesCount: 4,
    studentsCount: 9200,
    rating: 4.92,
    skills: ['Figma', 'Design Systems', 'UX Research', 'Prototyping', 'Design Tokens'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Sharan has created design systems and product architectures used by millions of users globally. He focuses on mathematically balanced layouts, typography hierarchy, and effortless digital interactions.',
    featured: true
  },
  {
    id: 'fac-3',
    name: 'Aswin R',
    role: 'Business Strategist & Management Consultant',
    expertise: 'Enterprise Strategy, Product Management, SaaS Metrics, Corporate Scaling',
    experience: '10+ Years Strategic Advisory',
    coursesCount: 5,
    studentsCount: 7800,
    rating: 4.94,
    skills: ['Product Strategy', 'Unit Economics', 'SaaS Growth', 'Executive OKRs', 'Market Discovery'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Aswin advises high-growth startups and multinational corporations on product-led growth, unit economics, and operational efficiency. His teaching demystifies strategic decision-making for aspiring leaders.',
    featured: true
  },
  {
    id: 'fac-4',
    name: 'Lakshanaya KM',
    role: 'Data Science Expert & AI Researcher',
    expertise: 'Machine Learning, PyTorch, Generative AI, Large Language Models',
    experience: '9+ Years AI/ML Research',
    coursesCount: 5,
    studentsCount: 11800,
    rating: 4.96,
    skills: ['PyTorch', 'Transformers', 'Generative AI', 'RAG Pipelines', 'MLOps'],
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    bio: 'Lakshanaya has published breakthrough machine learning papers and led AI transformation initiatives across enterprise datasets. She specializes in making cutting-edge AI concepts intuitive and deployable.',
    featured: true
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Janani K',
    role: 'Senior Full Stack Tech Lead',
    company: 'Provisent Edutech Faculty',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    experience: '8 yrs exp',
    expertise: ['System Architecture', 'MERN Stack', 'Code Reviews', 'Interview Prep'],
    rating: 4.98,
    reviewsCount: 184,
    hourlyRate: 1499,
    availableSlots: ['Today, 5:00 PM', 'Tomorrow, 11:00 AM', 'Saturday, 3:00 PM'],
    bio: 'Get actionable feedback on your architecture blueprints, code quality, and senior engineer interview readiness.'
  },
  {
    id: 'mentor-2',
    name: 'Lakshanaya KM',
    role: 'Principal AI Scientist',
    company: 'Provisent Edutech Faculty',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    experience: '9 yrs exp',
    expertise: ['PyTorch Deep Learning', 'LLM Fine-Tuning', 'AI Career Transition', 'Research Strategy'],
    rating: 4.95,
    reviewsCount: 142,
    hourlyRate: 1899,
    availableSlots: ['Today, 6:30 PM', 'Thursday, 4:00 PM', 'Sunday, 10:00 AM'],
    bio: 'Tailored 1:1 roadmap reviews for transitioning from software development or analytics into specialized AI and MLOps roles.'
  },
  {
    id: 'mentor-3',
    name: 'Sharan M',
    role: 'Staff Product Designer',
    company: 'Provisent Edutech Faculty',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    experience: '7 yrs exp',
    expertise: ['Figma Portfolio Critique', 'Design Systems', 'UX Case Studies', 'Product Pitching'],
    rating: 4.93,
    reviewsCount: 128,
    hourlyRate: 1399,
    availableSlots: ['Tomorrow, 2:00 PM', 'Friday, 5:00 PM', 'Sunday, 4:00 PM'],
    bio: 'Detailed portfolio deep-dives: we analyze your case studies, narrative structure, and prototype polish together.'
  },
  {
    id: 'mentor-4',
    name: 'Aswin R',
    role: 'Executive Strategy Consultant',
    company: 'Provisent Edutech Faculty',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    experience: '10 yrs exp',
    expertise: ['Executive Presence', 'Product Management Transition', 'Salary Negotiation', 'SaaS Business Models'],
    rating: 4.97,
    reviewsCount: 165,
    hourlyRate: 1999,
    availableSlots: ['Wednesday, 7:00 PM', 'Friday, 3:00 PM', 'Saturday, 11:00 AM'],
    bio: 'Strategic career guidance, executive communication sharpening, and senior compensation negotiation advice.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aditya Verma',
    role: 'Software Engineer II',
    company: 'Fintech Unicorn',
    courseCompleted: 'Full Stack Web Development Accelerator',
    beforeRole: 'Junior Support Engineer (₹3.5 LPA)',
    afterRole: 'Full Stack Software Engineer (₹16.5 LPA)',
    salaryHike: '370% Hike',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    quote: 'Provisent completely transformed my trajectory. The mentors did not just teach theory; they tore down my pull requests, taught me production-grade TypeScript, and simulated tough system design rounds.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sneha Nambiar',
    role: 'AI Research Engineer',
    company: 'HealthTech Global Labs',
    courseCompleted: 'Artificial Intelligence & Machine Learning Specialization',
    beforeRole: 'Data Analyst (₹5.2 LPA)',
    afterRole: 'AI Research Engineer (₹21 LPA)',
    salaryHike: '304% Hike',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'The depth of the curriculum is unmatched. Building custom transformer attention heads and deploying agentic RAG with Lakshanaya maam gave me the confidence to ace top-tier AI interviews.',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Rahul Sen',
    role: 'Lead Product Designer',
    company: 'Enterprise SaaS Platform',
    courseCompleted: 'UI/UX Design Masterclass & Design Systems',
    beforeRole: 'Graphic Designer (₹4.0 LPA)',
    afterRole: 'Product Designer (₹15.8 LPA)',
    salaryHike: '295% Hike',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    quote: 'Under Sharan sir’s guidance, I rebuilt my portfolio from scratch. The focus on real business metrics, design tokens, and user research was the differentiator that got me hired in 3 weeks.',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Divya Krishnan',
    role: 'Senior Cloud Consultant',
    company: 'Global Cloud Solutions',
    courseCompleted: 'Cloud Architecture, DevOps & Kubernetes Mastery',
    beforeRole: 'System Administrator (₹4.8 LPA)',
    afterRole: 'DevOps Architect (₹18.2 LPA)',
    salaryHike: '280% Hike',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    quote: 'The hands-on cloud labs gave me exposure to Terraform and Kubernetes cluster orchestration that usually takes years on the job to learn. The verifiable Provisent certificate opened immediate doors.',
    rating: 5
  }
];

export const VERIFIED_CERTIFICATES: CertificateRecord[] = [
  {
    id: 'cert-1',
    certificateNumber: 'PROV-2026-8894',
    studentName: 'Vikram Malhotra',
    studentEmail: 'vikram.m@example.com',
    courseName: 'Full Stack Web Development (MERN & Next.js)',
    issueDate: 'August 14, 2026',
    grade: 'Grade A+ (Distinction - 96%)',
    verificationUrl: 'https://provisent.com/verify/PROV-2026-8894',
    skillsVerified: ['React 19 Architecture', 'TypeScript Generics', 'Node.js Microservices', 'PostgreSQL Schema Design', 'Docker & CI/CD'],
    instructorName: 'Janani K',
    status: 'Verified'
  },
  {
    id: 'cert-2',
    certificateNumber: 'PROV-2026-4421',
    studentName: 'Pooja Sundaram',
    studentEmail: 'pooja.s@example.com',
    courseName: 'Artificial Intelligence & Machine Learning Specialization',
    issueDate: 'July 28, 2026',
    grade: 'Grade A (Honors - 94%)',
    verificationUrl: 'https://provisent.com/verify/PROV-2026-4421',
    skillsVerified: ['PyTorch Deep Learning', 'Transformer Architecture', 'Agentic RAG Workflows', 'Vector Databases', 'Model Deployment'],
    instructorName: 'Lakshanaya KM',
    status: 'Verified'
  },
  {
    id: 'cert-3',
    certificateNumber: 'PROV-2026-1092',
    studentName: 'Ananya Deshmukh',
    studentEmail: 'ananya.d@example.com',
    courseName: 'UI/UX Design Masterclass & Design Systems',
    issueDate: 'August 02, 2026',
    grade: 'Grade A+ (Top 1% - 98%)',
    verificationUrl: 'https://provisent.com/verify/PROV-2026-1092',
    skillsVerified: ['Design Tokens in Figma', 'User Testing & Heuristics', 'Information Architecture', 'Micro-interactions'],
    instructorName: 'Sharan M',
    status: 'Verified'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'the-shift-to-agentic-ai-engineering-in-2026',
    title: 'The Shift to Agentic AI Engineering: What Every Developer Needs to Know in 2026',
    excerpt: 'How multi-agent systems, deterministic tool use, and fine-tuned domain models are replacing basic prompt engineering in modern enterprise stacks.',
    category: 'Artificial Intelligence',
    author: {
      name: 'Lakshanaya KM',
      role: 'Principal AI Scientist',
      avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 04, 2026',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=900&q=80',
    featured: true,
    tags: ['Generative AI', 'Agentic Workflows', 'Architecture', 'Python'],
    content: `
The landscape of software development is undergoing its most significant structural evolution in decades. Where 2023 and 2024 were dominated by exploratory chat interfaces and raw prompt engineering, 2026 belongs squarely to **Agentic Systems** — autonomous, resilient, and multi-step cognitive workflows that interface directly with enterprise tools and codebases.

### 1. From Chatbots to Deterministic Tool Users
Early generative implementations suffered from hallucination and lack of state persistence. Modern production architectures combine small, specialized open-weights models fine-tuned for structured JSON extraction with deterministic verification runtimes.

### 2. Multi-Agent Orchestration
Instead of tasking a single model with an entire feature request, high-performing systems break tasks down into specialist roles:
- **Planner**: Deconstructs requirements into acyclic dependency graphs.
- **Coder**: Executes isolated atomic functions against defined interfaces.
- **Reviewer**: Analyzes static type errors, security vulnerabilities, and test coverage before commit.

### 3. What This Means for Your Career
Engineers who understand the marriage of classical distributed computing (databases, queues, idempotency) with neural reasoning will command immense career leverage over the next decade.
    `
  },
  {
    id: 'blog-2',
    slug: 'react-19-production-architecture-guide',
    title: 'React 19 Architecture: Optimizing Compilers, Actions, and Zero-Hydration Overhead',
    excerpt: 'A deep-dive into how React 19 compiler eliminates manual memoization and how Server Actions streamline enterprise full-stack pipelines.',
    category: 'Programming',
    author: {
      name: 'Janani K',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 28, 2026',
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    tags: ['React 19', 'TypeScript', 'Frontend', 'Web Performance'],
    content: `
React 19 represents the most fundamental rethinking of frontend optimization since the introduction of Hooks. For years, engineers spent thousands of hours wrestling with \`useMemo\`, \`useCallback\`, and delicate dependency arrays. The React Compiler renders this manual optimization obsolete.
    `
  },
  {
    id: 'blog-3',
    slug: 'design-systems-that-scale-mathematical-tokens',
    title: 'Design Systems That Scale: Mathematical Token Scaling and Optical Rhythms',
    excerpt: 'Why arbitrary pixel values break modern UI architectures and how to construct mathematical design tokens in Figma and Tailwind.',
    category: 'Design',
    author: {
      name: 'Sharan M',
      role: 'Senior UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 19, 2026',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80',
    tags: ['UI/UX', 'Design Systems', 'Figma', 'Typography'],
    content: `
Great digital design is not an accident of artistic flair; it is applied visual mathematics. In this guide, we break down harmonic scale ratios (1.25 Major Third, 1.333 Perfect Fourth), nested border-radius geometry, and optical padding alignment.
    `
  },
  {
    id: 'blog-4',
    slug: 'demystifying-saas-unit-economics-ltv-cac',
    title: 'Demystifying SaaS Unit Economics: How to Calculate True LTV, CAC, and Payback Cycles',
    excerpt: 'An executive breakdown of financial models, customer retention cohorts, and strategic moats in corporate education ventures.',
    category: 'Business',
    author: {
      name: 'Aswin R',
      role: 'Business Strategist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 10, 2026',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    tags: ['Business Strategy', 'SaaS', 'Finance', 'Leadership'],
    content: `
Every sustainable tech enterprise lives or dies by its unit economics. We examine net revenue retention (NRR), gross margin implications, and why customer acquisition cost payback periods below 12 months remain the holy grail of high-multiple valuations.
    `
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Enrollment & Access',
    question: 'How do I enroll in a Provisent program?',
    answer: 'Simply click "Enroll Now" on any program or course page. You can complete secure checkout using UPI, NetBanking, Credit/Debit cards via Razorpay or International cards via Stripe. Instant access to the learning dashboard, curriculum, Discord community, and scheduled live sessions is granted immediately.'
  },
  {
    id: 'faq-2',
    category: 'Certifications',
    question: 'Do I receive an accredited certificate upon completion?',
    answer: 'Yes. Every graduate who satisfies project requirements and passes the final assessments receives a cryptographically signed Provisent Edutech Private Limited digital credential. Each certificate features a unique verification ID, dynamic QR code, and 1-click LinkedIn credential synchronization.'
  },
  {
    id: 'faq-3',
    category: 'Learning Format',
    question: 'Are courses live or recorded?',
    answer: 'All Provisent flagship programs and bootcamps combine high-definition on-demand architectural modules with interactive live weekend masterclasses, practical code-along clinics, and live Q&A with industry faculty. All live sessions are recorded and indexed with search timestamps in your dashboard.'
  },
  {
    id: 'faq-4',
    category: 'Learning Format',
    question: 'Can I learn at my own pace alongside a full-time job?',
    answer: 'Absolutely. Over 65% of our learners are working professionals balancing careers. The curriculum provides structured weekly milestones, flexible self-paced video modules, and evening/weekend live sessions to suit demanding schedules.'
  },
  {
    id: 'faq-5',
    category: 'Mentorship',
    question: 'Do you provide 1-on-1 career and technical mentorship?',
    answer: 'Yes. Students enrolled in Provisent bootcamps and specialized tracks receive dedicated 1-on-1 mentor booking credits. You can schedule screen-sharing sessions for code reviews, portfolio teardowns, mock interviews, and career navigation directly from your student dashboard.'
  },
  {
    id: 'faq-6',
    category: 'Career & Placement',
    question: 'What career and placement support does Provisent offer?',
    answer: 'Our dedicated Career Services cell provides algorithmic resume rebuilding, LinkedIn profile optimization, Github portfolio curation, behavioral interview rehearsals, and direct referrals to our network of 250+ enterprise hiring partners and high-growth startups.'
  },
  {
    id: 'faq-7',
    category: 'Certifications',
    question: 'Are certificates verifiable by employers?',
    answer: 'Yes. Any employer, university, or recruiter globally can verify the authenticity of a credential in seconds using our public Verification Portal at /verify-certificate by entering the Certificate ID or scanning the embedded QR code.'
  },
  {
    id: 'faq-8',
    category: 'Payments',
    question: 'What payment methods and EMI options are supported?',
    answer: 'We support all major payment instruments: UPI (Google Pay, PhonePe, Paytm), Credit Cards, Debit Cards, NetBanking, International Cards, and zero-cost No-Cost EMI plans spanning 3, 6, 9, or 12 months through our banking partners.'
  },
  {
    id: 'faq-refund',
    category: 'Payments & Policies',
    question: 'What is your Refund and Cancellation Policy for courses and workshops?',
    answer: 'We are committed to ensuring your satisfaction with any product, service, course, or workshop you have purchased from us. Workshops: No refunds or credits will be granted against payments related to workshops. Courses: We do not offer refunds for courses. Please carefully consider your schedule and commitment before enrolling. Cohort Transfers: You may transfer your enrollment to a subsequent cohort. A nominal administrative fee will apply for such transfers.'
  },
  {
    id: 'faq-9',
    category: 'Corporate',
    question: 'Can companies purchase customized corporate training programs?',
    answer: 'Yes. PROVISENT EDUTECH PRIVATE LIMITED works directly with enterprises, global capability centers (GCCs), and tech organizations to deliver customized upskilling cohorts, leadership academies, and specialized workshops in Full Stack, Cloud, and AI. Contact our enterprise team at hr@provisent.com.'
  }
];

export const STATS = [
  { value: '50+', label: 'Expert Programs', subtext: 'Curated by tech leaders' },
  { value: '10K+', label: 'Active Learners', subtext: 'Across 150+ countries' },
  { value: '95%', label: 'Career Transition Rate', subtext: 'Within 6 months of completion' },
  { value: '150+', label: 'Global Communities', subtext: 'Worldwide alumni network' },
  { value: '500+', label: 'Industry Mentors', subtext: 'From tier-1 companies' }
];

export const PLACEMENT_STEPS = [
  { step: '01', title: 'Learn Deeply', desc: 'Master production-grade engineering principles, system architectures, and mathematical fundamentals.' },
  { step: '02', title: 'Hands-On Practice', desc: 'Solve real-world algorithmic problems and build resilient microservice components.' },
  { step: '03', title: 'Build Portfolio', desc: 'Develop multi-tier deployed applications with clean Git commits, unit tests, and CI/CD.' },
  { step: '04', title: 'Get Certified', desc: 'Earn verified, tamper-proof credentials from PROVISENT EDUTECH PRIVATE LIMITED.' },
  { step: '05', title: 'Interview Mastery', desc: 'Simulate high-pressure technical interviews, system design whiteboarding, and salary negotiation.' },
  { step: '06', title: 'Get Hired', desc: 'Connect directly with hiring partners and step into high-impact engineering and leadership roles.' }
];

export const PARTNER_LOGOS = [
  { name: 'CloudTech Systems', role: 'Global Tech' },
  { name: 'Nexis Enterprise', role: 'SaaS Platform' },
  { name: 'Aegis Analytics', role: 'Data Intelligence' },
  { name: 'Vertex Digital', role: 'Product Studio' },
  { name: 'HyperScale AI', role: 'AI Labs' },
  { name: 'Quantix Financial', role: 'FinTech' }
];

export const MOCK_CERTIFICATE = {
  id: 'PROV-2026-PYAI-0104',
  studentName: 'VIJAY',
  courseName: 'PYTHON WITH AI',
  duration: '01st APRIL 2026 to 30th June2026',
  issueDate: '01 JUNE 2026',
  grade: 'Distinction Honor',
  verificationUrl: 'https://verify.provisent.com/cert/PROV-2026-PYAI-0104',
  qrCode: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%2307090E"/></svg>',
  status: 'Verified & Authentic',
  issuer: 'PROVISENT EDUTECH PRIVATE LIMITED',
  type: 'Certificate of Traineeship Completion'
};
