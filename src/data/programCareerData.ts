export interface CareerLadderLevel {
  levelNumber: number;
  levelTitle: string;
  experienceRange: string;
  salaryRangeINR: string;
  salaryRangeUSD: string;
  targetJobTitles: string[];
  competencies: string[];
  recommendedPrograms: string[];
}

export interface DomainCareerLadder {
  domainId: string;
  domainName: string;
  categoryKeyword: string;
  growthStat: string;
  marketOutlook: string;
  topEmployers: string[];
  certificationsAligned: string[];
  levels: CareerLadderLevel[];
}

export interface ProgramBreakdownData {
  targetRoles: string[];
  salaryBenchmark: string;
  weeklyCommitment: string;
  handsOnLabRatio: string;
  capstoneProject: {
    title: string;
    industryContext: string;
    deliverables: string[];
    toolchain: string[];
  };
  syllabusPhases: {
    phaseNumber: string;
    duration: string;
    title: string;
    coreCompetencies: string[];
    handsOnLab: string;
  }[];
  careerTrajectory: {
    entryLevelRole: string;
    targetSeniorRole: string;
    typicalPromoTimeline: string;
    hiringDemandIndex: string;
  };
  topHiringPartners: string[];
}

// 10 Detailed Domain Career Ladders
export const DOMAIN_CAREER_LADDERS: DomainCareerLadder[] = [
  {
    domainId: 'web-development',
    domainName: 'Programming & Web Development',
    categoryKeyword: 'Programming & Web',
    growthStat: '+38% YoY Demand',
    marketOutlook: 'Explosive enterprise demand for React 19, Next.js 15, Go microservices, and Rust high-speed systems.',
    topEmployers: ['Google', 'Microsoft', 'Razorpay', 'Atlassian', 'Swiggy', 'CRED', 'Stripe'],
    certificationsAligned: ['ISO 9001:2015 Verified Full Stack Engineer', 'AWS Certified Developer Associate', 'OpenJS Node.js Application Developer'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Associate Software Engineer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹6 - 12 LPA',
        salaryRangeUSD: '$75,000 - $95,000',
        targetJobTitles: ['Junior Full Stack Developer', 'Frontend Engineer (React)', 'Node.js Backend Developer'],
        competencies: ['Modern TypeScript Generics', 'React Component Lifecycles', 'REST API Architecture', 'Git Workflows & Unit Testing'],
        recommendedPrograms: ['Full Stack Web Development (MERN & Next.js)', 'Full Stack Engineering Accelerator']
      },
      {
        levelNumber: 2,
        levelTitle: 'Mid-Level Full Stack Engineer',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹16 - 28 LPA',
        salaryRangeUSD: '$110,000 - $145,000',
        targetJobTitles: ['Full Stack Engineer (L4)', 'Systems Developer (Go/Rust)', 'Mobile Software Architect'],
        competencies: ['Distributed Microservices with Go', 'Redis Pub/Sub & Caching', 'PostgreSQL Query Optimization', 'Docker CI/CD Pipelines'],
        recommendedPrograms: ['Microservices Architecture with Go & gRPC', 'Modern Mobile Engineering with React Native', 'Rust Systems Programming']
      },
      {
        levelNumber: 3,
        levelTitle: 'Senior Staff Engineer / Tech Lead',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹32 - 55 LPA',
        salaryRangeUSD: '$165,000 - $225,000',
        targetJobTitles: ['Senior Staff Architect', 'Full Stack Tech Lead', 'Principal Application Engineer'],
        competencies: ['Multi-Tenant SaaS System Design', 'High-Throughput Concurrency', 'Zero-Downtime Database Migration', 'Cross-Team Mentorship'],
        recommendedPrograms: ['Full Stack Software Engineer Career Track', 'Modern Mobile Engineering']
      },
      {
        levelNumber: 4,
        levelTitle: 'Principal Architect / Director of Engineering',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹60 - 100+ LPA',
        salaryRangeUSD: '$260,000 - $390,000+',
        targetJobTitles: ['Director of Engineering', 'Chief Architect', 'VP of Technology'],
        competencies: ['Multi-Million Tech Budget Allocation', 'Enterprise High-Availability SLA (99.999%)', 'Strategic Vendor Negotiation', 'Engineering Org Culture'],
        recommendedPrograms: ['Full Stack Software Engineer Career Track']
      }
    ]
  },
  {
    domainId: 'artificial-intelligence',
    domainName: 'Artificial Intelligence & Machine Learning',
    categoryKeyword: 'Artificial Intelligence',
    growthStat: '+52% YoY Surge',
    marketOutlook: 'Skyrocketing compensation for engineers capable of building multi-agent systems, fine-tuning open SLMs/LLMs, and executing resilient RAG pipelines.',
    topEmployers: ['Google DeepMind', 'Microsoft AI', 'OpenAI', 'Meta AI', 'NVIDIA', 'Adobe Sensei', 'Ola Electric AI'],
    certificationsAligned: ['ISO 9001:2015 Machine Learning Specialist', 'TensorFlow Developer Certificate', 'AWS Certified Machine Learning Specialty'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Associate AI/ML Engineer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹8 - 15 LPA',
        salaryRangeUSD: '$85,000 - $115,000',
        targetJobTitles: ['Junior ML Engineer', 'Data Analyst (Applied AI)', 'LLM Application Developer'],
        competencies: ['NumPy & Pandas Data Manipulation', 'PyTorch Tensor Operations', 'Prompt Engineering & Few-Shot Chaining', 'Vector DB Embeddings'],
        recommendedPrograms: ['Artificial Intelligence & Machine Learning Specialization', 'AI & Machine Learning Specialist Bootcamp']
      },
      {
        levelNumber: 2,
        levelTitle: 'Machine Learning / RAG Engineer',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹20 - 36 LPA',
        salaryRangeUSD: '$135,000 - $175,000',
        targetJobTitles: ['RAG Pipeline Specialist', 'NLP Research Engineer', 'Autonomous Agent Architect'],
        competencies: ['LangGraph State Machine Graphs', 'LoRA & QLoRA Fine-Tuning with Unsloth', 'Self-Reflective RAG Pipelines', 'Quantized Inference with vLLM'],
        recommendedPrograms: ['Agentic AI Systems, LangGraph & Multimodal Workflows', 'NLP & LLM Fine-Tuning with LoRA']
      },
      {
        levelNumber: 3,
        levelTitle: 'Senior Staff AI Scientist / MLOps Lead',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹40 - 68 LPA',
        salaryRangeUSD: '$190,000 - $265,000',
        targetJobTitles: ['Staff AI Architect', 'Lead MLOps Engineer', 'Generative AI Director'],
        competencies: ['Distributed GPU Training (DeepSpeed/Megatron)', 'Evaluation Benchmarks & Hallucination Guardrails', 'Custom Tokenizer Optimization', 'Model Serving Latency <50ms'],
        recommendedPrograms: ['Artificial Intelligence Research Engineer Career Track']
      },
      {
        levelNumber: 4,
        levelTitle: 'Principal AI Architect / Head of AI Research',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹75 - 130+ LPA',
        salaryRangeUSD: '$300,000 - $450,000+',
        targetJobTitles: ['VP of AI & Data Science', 'Head of Foundation Models', 'Chief AI Officer'],
        competencies: ['Foundation Model Commercialization', 'Ethical AI & Compliance Governance', 'Patent Portfolio Strategy', 'Multi-Petaflop Compute Cluster Strategy'],
        recommendedPrograms: ['Artificial Intelligence Research Engineer Career Track']
      }
    ]
  },
  {
    domainId: 'cloud-devops',
    domainName: 'Cloud & DevOps Engineering',
    categoryKeyword: 'Cloud & DevOps',
    growthStat: '+41% Enterprise Need',
    marketOutlook: 'Critical industry demand for Kubernetes multi-cluster management, Terraform infrastructure automation, SRE observability, and eBPF kernel debugging.',
    topEmployers: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'Cloudflare', 'HashiCorp', 'Red Hat', 'Salesforce'],
    certificationsAligned: ['CKA: Certified Kubernetes Administrator', 'HashiCorp Certified Terraform Associate', 'AWS Certified Solutions Architect Professional'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Junior Cloud / DevOps Engineer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹7 - 13 LPA',
        salaryRangeUSD: '$80,000 - $105,000',
        targetJobTitles: ['DevOps Associate', 'Cloud Operations Engineer', 'Build & Release Engineer'],
        competencies: ['Linux System Administration', 'Docker Containerization', 'GitHub Actions CI Pipelines', 'Basic AWS Services (EC2, S3, RDS)'],
        recommendedPrograms: ['Cloud Native DevOps with Kubernetes & Terraform', 'Cloud DevOps & Platform Engineering Bootcamp']
      },
      {
        levelNumber: 2,
        levelTitle: 'Site Reliability Engineer (SRE) / Cloud Architect',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹18 - 32 LPA',
        salaryRangeUSD: '$125,000 - $160,000',
        targetJobTitles: ['Kubernetes Administrator', 'Site Reliability Engineer', 'Multi-Cloud Infrastructure Engineer'],
        competencies: ['Multi-Cluster Helm & ArgoCD GitOps', 'Terraform Modular Landing Zones', 'OpenTelemetry Tracing & Prometheus SLOs', 'Chaos Engineering with Chaos Mesh'],
        recommendedPrograms: ['Site Reliability Engineering & Observability', 'Multi-Cloud Architecture with Terraform']
      },
      {
        levelNumber: 3,
        levelTitle: 'Staff Platform Engineer / SRE Lead',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹35 - 58 LPA',
        salaryRangeUSD: '$175,000 - $240,000',
        targetJobTitles: ['Principal SRE Lead', 'Staff Platform Architect', 'Head of Cloud Infrastructure'],
        competencies: ['Internal Developer Platforms (IDP)', 'Zero-Trust Istio Service Mesh', 'Enterprise FinOps & 40% Bill Reduction', 'Blameless Postmortem Facilitation'],
        recommendedPrograms: ['Cloud Solutions & Platform Architect Career Track']
      },
      {
        levelNumber: 4,
        levelTitle: 'VP of Infrastructure / Cloud Fellow',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹65 - 110+ LPA',
        salaryRangeUSD: '$280,000 - $420,000+',
        targetJobTitles: ['VP of Infrastructure & Operations', 'Chief Platform Architect', 'Global Head of SRE'],
        competencies: ['Global Disaster Recovery (RTO/RPO = 0)', 'Multi-Cloud Cost Arbitrage', 'C-Level Regulatory Compliance (SOC2, ISO27001)', 'Data Center Modernization Strategy'],
        recommendedPrograms: ['Cloud Solutions & Platform Architect Career Track']
      }
    ]
  },
  {
    domainId: 'data-science',
    domainName: 'Data Science & Analytics',
    categoryKeyword: 'Data Science & Analytics',
    growthStat: '+39% YoY Expansion',
    marketOutlook: 'Huge requirement for PySpark Lakehouse builders, Snowflake data architects, dbt automation experts, and executive BI leaders.',
    topEmployers: ['Netflix', 'Spotify', 'Amazon Data', 'Fractal Analytics', 'Mu Sigma', 'JPMorgan Chase Data', 'Uber Analytics'],
    certificationsAligned: ['Snowflake SnowPro Core Certification', 'Databricks Certified Data Engineer', 'dbt Analytics Engineering Certification'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Junior Data Analyst / Engineer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹6 - 12 LPA',
        salaryRangeUSD: '$75,000 - $100,000',
        targetJobTitles: ['Data Analyst', 'Junior Analytics Engineer', 'Business Intelligence Associate'],
        competencies: ['Complex SQL & Window Functions', 'Python Data Cleansing with Pandas', 'Tableau & Power BI Dashboards', 'Statistical Significance Testing'],
        recommendedPrograms: ['Data Science, Predictive Modeling & Big Data Analytics', 'Advanced Business Intelligence, SQL & Storytelling']
      },
      {
        levelNumber: 2,
        levelTitle: 'Data Platform Engineer / Senior Analyst',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹17 - 30 LPA',
        salaryRangeUSD: '$120,000 - $155,000',
        targetJobTitles: ['Lakehouse Data Engineer', 'Analytics Engineer (dbt)', 'Predictive Modeling Specialist'],
        competencies: ['Distributed PySpark Transformations', 'Medallion Architecture on Delta Lake', 'dbt Automated Testing & Lineage', 'Airflow Directed Acyclic Graphs (DAGs)'],
        recommendedPrograms: ['Modern Data Engineering: Apache Spark & Snowflake', 'Data Science & Machine Learning Bootcamp']
      },
      {
        levelNumber: 3,
        levelTitle: 'Lead Data Architect / Analytics Director',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹34 - 56 LPA',
        salaryRangeUSD: '$165,000 - $230,000',
        targetJobTitles: ['Lead Data Architect', 'Head of Business Intelligence', 'Principal Analytics Scientist'],
        competencies: ['Enterprise Data Mesh Architecture', 'Real-Time Streaming Pipelines (Kafka/Flink)', 'Data Governance & GDPR Masking', 'Executive KPI Alignment & LTV/CAC Modeling'],
        recommendedPrograms: ['Data Science, Predictive Modeling & Big Data Analytics']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Data Officer (CDO) / VP of Analytics',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹62 - 105+ LPA',
        salaryRangeUSD: '$270,000 - $400,000+',
        targetJobTitles: ['Chief Data Officer', 'VP of Analytics & AI', 'Global Head of Data Engineering'],
        competencies: ['Monetization of Enterprise Data Assets', 'Corporate Governance & Data Auditing', 'Multi-PB Data Warehouse Cost Strategy', 'Data Culture Transformation'],
        recommendedPrograms: ['Data Science, Predictive Modeling & Big Data Analytics']
      }
    ]
  },
  {
    domainId: 'cybersecurity',
    domainName: 'Cybersecurity & Information Defense',
    categoryKeyword: 'Cybersecurity',
    growthStat: '+46% Critical Shortage',
    marketOutlook: 'Massive global shortage of skilled cybersecurity professionals in DevSecOps, cloud container hardening, ethical hacking, and SOC defense.',
    topEmployers: ['Palo Alto Networks', 'CrowdStrike', 'Cisco Systems', 'FireEye / Mandiant', 'KPMG Cyber', 'Tenable', 'HackerOne'],
    certificationsAligned: ['OSCP: Offensive Security Certified Professional', 'CISSP: Certified Information Systems Security Professional', 'CompTIA Security+'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'SOC Analyst / Security Associate',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹7 - 14 LPA',
        salaryRangeUSD: '$80,000 - $110,000',
        targetJobTitles: ['SOC Analyst (Tier 1/2)', 'Junior Penetration Tester', 'Vulnerability Assessment Analyst'],
        competencies: ['Wireshark Network Packet Inspection', 'OWASP Top 10 Vulnerabilities', 'Burp Suite Pro Web Proxy Interception', 'SIEM Alert Triage (Splunk/ELK)'],
        recommendedPrograms: ['Cybersecurity Defense, Ethical Hacking & SOC Operations', 'Cybersecurity Defense & Ethical Hacking Bootcamp']
      },
      {
        levelNumber: 2,
        levelTitle: 'DevSecOps Engineer / Penetration Tester',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹18 - 34 LPA',
        salaryRangeUSD: '$130,000 - $165,000',
        targetJobTitles: ['DevSecOps Specialist', 'Web Application Pentester', 'Bug Bounty Researcher'],
        competencies: ['CI/CD Pipeline Security Gates (SAST/DAST)', 'Container Hardening with Trivy & OPA', 'HashiCorp Vault Secret Management', 'Advanced IDOR & SSRF Exploitation'],
        recommendedPrograms: ['Cloud Security & DevSecOps Engineering', 'Applied Ethical Hacking, Web Penetration Testing']
      },
      {
        levelNumber: 3,
        levelTitle: 'Senior Security Architect / Incident Response Lead',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹36 - 60 LPA',
        salaryRangeUSD: '$175,000 - $245,000',
        targetJobTitles: ['Principal Security Architect', 'Threat Hunting Team Lead', 'Chief Penetration Tester'],
        competencies: ['Zero-Trust Architecture Blueprinting', 'Incident Containment & Digital Forensics', 'Red Team Active Directory Attacks', 'Cloud IAM Boundary Auditing'],
        recommendedPrograms: ['Cybersecurity Defense & Ethical Hacking Bootcamp']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Information Security Officer (CISO)',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹70 - 120+ LPA',
        salaryRangeUSD: '$290,000 - $430,000+',
        targetJobTitles: ['CISO', 'VP of Cyber Defense', 'Global Head of Security & Trust'],
        competencies: ['Board-Level Cyber Risk Reporting', 'Global Breach Response Crisis Management', 'Regulatory Audits (PCI-DSS, FedRAMP, HIPAA)', 'Multi-Million Cyber Defense Budget'],
        recommendedPrograms: ['Cybersecurity Defense, Ethical Hacking & SOC Operations']
      }
    ]
  },
  {
    domainId: 'design-creative',
    domainName: 'Design & Creative',
    categoryKeyword: 'Design & Creative',
    growthStat: '+33% Premium Demand',
    marketOutlook: 'High market demand for designers who build scalable multi-platform design systems in Figma, conduct rigorous user research, and build interactive micro-interactions.',
    topEmployers: ['Apple', 'Airbnb', 'Figma', 'Swiggy Design', 'CRED Design Studio', 'Uber UX', 'IDEO'],
    certificationsAligned: ['ISO 9001:2015 Certified Senior Product Designer', 'Nielsen Norman Group UX Master Certification'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Junior UI/UX Designer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹5.5 - 11 LPA',
        salaryRangeUSD: '$70,000 - $90,000',
        targetJobTitles: ['UI Designer', 'Junior UX Researcher', 'Product Design Associate'],
        competencies: ['Figma Auto-Layout & Component Variants', 'Wireframing & Information Architecture', 'Color Contrast & WCAG AA Accessibility', 'User Journey Mapping'],
        recommendedPrograms: ['UI/UX Design Masterclass & Design Systems', 'UI/UX Design & Design Systems Bootcamp']
      },
      {
        levelNumber: 2,
        levelTitle: 'Product Designer (Mid-Level)',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹15 - 26 LPA',
        salaryRangeUSD: '$105,000 - $140,000',
        targetJobTitles: ['Product Designer', 'Interaction Designer', 'Design Systems Specialist'],
        competencies: ['Design Tokens Architecture in Figma & Code', 'Qualitative User Research & JTBD Frameworks', 'High-Fidelity Micro-interactions with Framer', 'Developer Handoff Protocols'],
        recommendedPrograms: ['Product Design Strategy, User Research & Prototyping', 'Product Designer Career Track']
      },
      {
        levelNumber: 3,
        levelTitle: 'Staff / Lead Product Designer',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹30 - 50 LPA',
        salaryRangeUSD: '$155,000 - $210,000',
        targetJobTitles: ['Staff Product Designer', 'Design Systems Lead', 'Head of User Research'],
        competencies: ['Cross-Platform Design Governance (Web, iOS, Android)', 'A/B Test Design Validation at Scale', 'Design Org Strategy & Hiring', 'Business Metric Growth Design (Activation/Retention)'],
        recommendedPrograms: ['Product Designer Career Track']
      },
      {
        levelNumber: 4,
        levelTitle: 'VP of Design / Chief Experience Officer (CXO)',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹55 - 90+ LPA',
        salaryRangeUSD: '$240,000 - $350,000+',
        targetJobTitles: ['VP of Product Design', 'Chief Design Officer', 'Head of Brand & Experience'],
        competencies: ['Brand Identity & Global Product Vision', 'Design Ops Infrastructure Across 100+ Designers', 'Executive Product Strategy Partner to CEO', 'Design Culture & Global Awards'],
        recommendedPrograms: ['Product Designer Career Track']
      }
    ]
  },
  {
    domainId: 'business-strategy',
    domainName: 'Business Strategy & Product Management',
    categoryKeyword: 'Business Strategy',
    growthStat: '+35% Leadership Surge',
    marketOutlook: 'Companies actively seek leaders who can build AI-native product roadmaps, manage token economics, execute Product-Led Growth (PLG), and run financial DCF models.',
    topEmployers: ['McKinsey & Company', 'Boston Consulting Group (BCG)', 'Flipkart', 'Zomato', 'Amazon Product', 'Bain & Company', 'Google Strategy'],
    certificationsAligned: ['Certified Scrum Product Owner (CSPO)', 'Pragmatic Institute Product Certified', 'CFA Level 1 Foundation'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Associate Product Manager / Strategy Analyst',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹8 - 15 LPA',
        salaryRangeUSD: '$85,000 - $110,000',
        targetJobTitles: ['Associate Product Manager (APM)', 'Strategy Analyst', 'Business Operations Associate'],
        competencies: ['Product Requirements Documents (PRDs)', 'User Story Grooming & Agile Sprints', 'Financial Modeling & DCF Projections', 'Funnel Analytics & Conversion Metrics'],
        recommendedPrograms: ['Strategic Business Leadership, Financial Modeling & Tech Commercialization']
      },
      {
        levelNumber: 2,
        levelTitle: 'Product Manager / Growth Lead',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹18 - 32 LPA',
        salaryRangeUSD: '$130,000 - $165,000',
        targetJobTitles: ['AI Product Manager', 'Product Manager (Core Platform)', 'Growth Strategy Manager'],
        competencies: ['PRDs for Non-Deterministic AI Systems', 'GPU Token Unit Economics Modeling', 'Product-Led Growth (PLG) Onboarding Loops', 'Cohort Churn & LTV Optimization'],
        recommendedPrograms: ['AI Product Management & Tech Commercialization']
      },
      {
        levelNumber: 3,
        levelTitle: 'Group Product Manager (GPM) / Director of Strategy',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹36 - 60 LPA',
        salaryRangeUSD: '$175,000 - $240,000',
        targetJobTitles: ['Group Product Manager', 'Head of Monetization', 'Director of Strategy & Operations'],
        competencies: ['Multi-Product Portfolio Roadmapping', 'M&A Due Diligence & Tech Valuation', 'Cross-Functional Org Leadership (Tech, Sales, Legal)', 'P&L Ownership of 50Cr+ Lines'],
        recommendedPrograms: ['AI Product Management & Tech Commercialization']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Product Officer (CPO) / VP of Strategy',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹68 - 120+ LPA',
        salaryRangeUSD: '$280,000 - $420,000+',
        targetJobTitles: ['Chief Product Officer', 'VP of Corporate Strategy', 'General Manager (Business Unit)'],
        competencies: ['Corporate Vision & Board Alignment', 'Global Market Expansion Strategy', 'Enterprise Capital Allocation', 'Executive Talent Succession Planning'],
        recommendedPrograms: ['Strategic Business Leadership, Financial Modeling & Tech Commercialization']
      }
    ]
  },
  {
    domainId: 'digital-marketing',
    domainName: 'Digital Marketing & Growth Engineering',
    categoryKeyword: 'Digital Marketing',
    growthStat: '+32% High-Impact Demand',
    marketOutlook: 'Modern marketing requires technical rigor: programmatic SEO, Core Web Vitals optimization, automated bidding algorithms, and multi-touch attribution modeling.',
    topEmployers: ['HubSpot', 'Shopify', 'Nykaa', 'MakeMyTrip', 'Zomato Growth', 'GroupM', 'Ogilvy'],
    certificationsAligned: ['Google Ads Search & Measurement Professional', 'Meta Certified Media Planning Professional', 'HubSpot Inbound & SEO Specialist'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Growth Marketing Associate',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹5 - 10 LPA',
        salaryRangeUSD: '$65,000 - $85,000',
        targetJobTitles: ['SEO Specialist', 'Performance Marketer', 'Content Strategy Associate'],
        competencies: ['Keyword Clustering & Intent Mapping', 'Google Tag Manager & GA4 Event Tracking', 'Meta & Google Ads Campaign Management', 'On-Page SEO & Schema Markup'],
        recommendedPrograms: ['Digital Marketing Mastery & Performance Growth Engineering']
      },
      {
        levelNumber: 2,
        levelTitle: 'Growth Engineer / Technical SEO Lead',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹14 - 25 LPA',
        salaryRangeUSD: '$100,000 - $135,000',
        targetJobTitles: ['Technical SEO Manager', 'Growth Engineer', 'Paid Acquisition Lead'],
        competencies: ['Programmatic SEO Page Generation (10k+ URLs)', 'Core Web Vitals (LCP, INP, CLS) Scoring 95+', 'Automated Python Scraping & SERP Analysis', 'Multi-Touch Marketing Attribution Models'],
        recommendedPrograms: ['Technical SEO, Programmatic Content & Algorithmic Growth']
      },
      {
        levelNumber: 3,
        levelTitle: 'Head of Growth / Marketing Director',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹28 - 48 LPA',
        salaryRangeUSD: '$150,000 - $200,000',
        targetJobTitles: ['Head of Performance Marketing', 'Director of Growth Marketing', 'VP of Digital Demand'],
        competencies: ['Multi-Crore Monthly Ad Budget Allocation', 'CAC Payback Period Optimization (<6 Months)', 'Brand Equity & Performance Synergy', 'Marketing Tech Stack Architecture (CDPs)'],
        recommendedPrograms: ['Technical SEO, Programmatic Content & Algorithmic Growth']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Marketing Officer (CMO)',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹55 - 95+ LPA',
        salaryRangeUSD: '$240,000 - $360,000+',
        targetJobTitles: ['Chief Marketing Officer', 'Chief Growth Officer', 'Global VP of Marketing'],
        competencies: ['Omnichannel Global Go-to-Market Vision', 'Enterprise Brand Positioning & PR Crisis Control', 'Investor Relations & Growth Storytelling', 'Global Agency Network Governance'],
        recommendedPrograms: ['Digital Marketing Mastery & Performance Growth Engineering']
      }
    ]
  },
  {
    domainId: 'fintech',
    domainName: 'FinTech & Quantitative Analytics',
    categoryKeyword: 'FinTech & Analytics',
    growthStat: '+44% Specialized Surge',
    marketOutlook: 'Surging compensation for engineers who understand algorithmic trading, FIX protocol, smart contract DeFi liquidity pools, and low-latency order routing.',
    topEmployers: ['Goldman Sachs', 'Jane Street', 'Tower Research', 'Razorpay', 'Zerodha', 'Coinbase', 'Jump Trading'],
    certificationsAligned: ['CFA Institute Quantitative Methods Foundation', 'Certified Ethereum Developer (ConsenSys)', 'FINRA Series 7 Equivalent'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Junior Quantitative / FinTech Developer',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹9 - 18 LPA',
        salaryRangeUSD: '$95,000 - $130,000',
        targetJobTitles: ['FinTech Software Engineer', 'Quantitative Analyst Associate', 'Smart Contract Developer'],
        competencies: ['Time-Series Financial Modeling', 'Solidity Smart Contract Syntax', 'Payment Gateway Integration & Idempotency', 'Algorithmic Backtesting with Python'],
        recommendedPrograms: ['FinTech Engineering, Quantitative Analytics & Blockchain Architecture']
      },
      {
        levelNumber: 2,
        levelTitle: 'DeFi Protocol Engineer / Quant Strategist',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹22 - 40 LPA',
        salaryRangeUSD: '$145,000 - $190,000',
        targetJobTitles: ['DeFi Protocol Architect', 'Algorithmic Trading Engineer', 'Smart Contract Auditor'],
        competencies: ['Constant-Product AMM Math (Uniswap v3/v4)', 'Reentrancy & Flash Loan Attack Mitigation', 'Foundry Property-Based Fuzz Testing', 'Low-Latency High-Frequency Trading (HFT) Execution'],
        recommendedPrograms: ['Decentralized Finance (DeFi) Protocol Engineering & Auditing']
      },
      {
        levelNumber: 3,
        levelTitle: 'Lead Quantitative Architect / Head of DeFi',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹45 - 80 LPA',
        salaryRangeUSD: '$210,000 - $300,000',
        targetJobTitles: ['Head of Quantitative Research', 'Lead Blockchain Architect', 'Director of Trading Systems'],
        competencies: ['Cross-Chain Bridge Security & Zero-Knowledge Proofs', 'Multi-Asset Portfolio Optimization (Black-Litterman)', 'Regulatory Compliance (SEC, RBI, MiCA)', 'Microsecond Kernel Bypass Networking'],
        recommendedPrograms: ['Decentralized Finance (DeFi) Protocol Engineering & Auditing']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Investment Technology Officer / Head of Trading',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹85 - 150+ LPA',
        salaryRangeUSD: '$350,000 - $550,000+',
        targetJobTitles: ['Chief Technology Officer (Hedge Fund)', 'Head of Algorithmic Execution', 'Managing Director of Quantitative Technology'],
        competencies: ['Multi-Billion Dollar Liquidity Management', 'Proprietary Alpha Generation Engine Strategy', 'Enterprise Risk & Margin Hedging Policies', 'Direct Exchange Relationship Governance'],
        recommendedPrograms: ['FinTech Engineering, Quantitative Analytics & Blockchain Architecture']
      }
    ]
  },
  {
    domainId: 'health-informatics',
    domainName: 'Health Informatics & Biomedical Tech',
    categoryKeyword: 'Health Informatics',
    growthStat: '+37% Regulated Growth',
    marketOutlook: 'Massive investment into AI-powered medical diagnostics, MONAI 3D radiological imaging segmentation, and FHIR/HL7 interoperable clinical architectures.',
    topEmployers: ['Philips Healthcare', 'GE HealthCare', 'Apollo HealthTech AI', 'Epic Systems', 'Cerner / Oracle Health', 'Siemens Healthineers', 'Medtronic'],
    certificationsAligned: ['HL7 FHIR Certified Specialist', 'HIMSS Certified Healthcare CIO (CHCIO)', 'FDA AI/ML Software as a Medical Device (SaMD) Certification'],
    levels: [
      {
        levelNumber: 1,
        levelTitle: 'Clinical Software / Informatics Associate',
        experienceRange: '0 - 2 Years',
        salaryRangeINR: '₹6.5 - 13 LPA',
        salaryRangeUSD: '$80,000 - $105,000',
        targetJobTitles: ['Health Informatics Analyst', 'FHIR API Developer', 'Biomedical Data Engineer'],
        competencies: ['HL7 v2 & FHIR Resource Schemas', 'HIPAA Security & Patient Data Anonymization', 'Clinical Workflow Integration', 'DICOM Image Processing Basics'],
        recommendedPrograms: ['Health Informatics, Clinical Data Engineering & Telemedicine Systems']
      },
      {
        levelNumber: 2,
        levelTitle: 'Medical AI Engineer / Biomedical Lead',
        experienceRange: '2 - 5 Years',
        salaryRangeINR: '₹17 - 32 LPA',
        salaryRangeUSD: '$125,000 - $160,000',
        targetJobTitles: ['Medical Imaging AI Specialist', 'Senior Health Informatics Engineer', 'Clinical System Architect'],
        competencies: ['MONAI 3D MRI & CT Volumetric Segmentation', 'Diagnostic ECG/EEG Biometric Telemetry Filtering', 'Software as a Medical Device (SaMD) Guidelines', 'EMR/EHR Bi-Directional Interoperability'],
        recommendedPrograms: ['Biomedical Signal Processing & AI Medical Imaging']
      },
      {
        levelNumber: 3,
        levelTitle: 'Lead HealthTech Architect / Clinical AI Director',
        experienceRange: '5 - 8 Years',
        salaryRangeINR: '₹34 - 58 LPA',
        salaryRangeUSD: '$170,000 - $235,000',
        targetJobTitles: ['Principal HealthTech Architect', 'Director of Clinical Informatics', 'Head of Diagnostic AI'],
        competencies: ['Multi-Hospital Telehealth Infrastructure Design', 'FDA 510(k) Pre-Market Clearance Filing', 'Clinical Decision Support (CDS) Integration', 'Real-World Evidence (RWE) Observational Studies'],
        recommendedPrograms: ['Biomedical Signal Processing & AI Medical Imaging']
      },
      {
        levelNumber: 4,
        levelTitle: 'Chief Medical Information Officer (CMIO) / VP HealthTech',
        experienceRange: '8+ Years',
        salaryRangeINR: '₹65 - 115+ LPA',
        salaryRangeUSD: '$275,000 - $410,000+',
        targetJobTitles: ['CMIO', 'VP of Healthcare Innovation', 'Chief AI Officer (Hospital Network)'],
        competencies: ['Nationwide Public Health Protocol Architecture', 'Clinical Governance & Patient Safety Assurance', 'Cross-Enterprise Health Data Alliances', 'Multi-Million Medical Technology Investment Strategy'],
        recommendedPrograms: ['Health Informatics, Clinical Data Engineering & Telemedicine Systems']
      }
    ]
  }
];

// Helper to get structured program breakdown for any course or bootcamp
export function getProgramBreakdown(
  programId: string,
  category: string,
  title: string,
  difficulty: string
): ProgramBreakdownData {
  // Domain-specific customization rules
  const catLower = (category || '').toLowerCase();
  
  if (catLower.includes('ai') || catLower.includes('artificial') || catLower.includes('machine learning')) {
    return {
      targetRoles: ['AI Research Engineer', 'Machine Learning Engineer', 'RAG Systems Architect', 'MLOps Lead'],
      salaryBenchmark: '₹18 - 42 LPA ($130k - $185k)',
      weeklyCommitment: '8 - 12 Hours / Week',
      handsOnLabRatio: '85% Hands-On Labs & Capstone',
      capstoneProject: {
        title: 'Production Multi-Agent Autonomous Code Reviewer & Evaluator',
        industryContext: 'Build an enterprise-grade cyclical agent using LangGraph, local quantized LLMs, and real-time GitHub webhooks that analyzes pull requests, flags security flaws, and auto-submits refactor suggestions.',
        deliverables: [
          'State Graph with conditional routing & human-in-the-loop approval',
          'Self-Reflective RAG pipeline with Pinecone vector indices',
          'Automated evaluation benchmark comparing against GPT-4 & Claude 3.5',
          'FastAPI microservice packaged into a Docker container with low-latency vLLM'
        ],
        toolchain: ['PyTorch 2.5', 'LangGraph', 'LangChain', 'vLLM', 'Pinecone', 'FastAPI', 'Docker']
      },
      syllabusPhases: [
        {
          phaseNumber: 'Phase 01',
          duration: 'Weeks 1-3',
          title: 'Mathematical Foundations, Tensors & Model Mechanics',
          coreCompetencies: ['Matrix operations with NumPy', 'PyTorch autograd mechanics', 'Gradient descent optimizers', 'Backpropagation through time'],
          handsOnLab: 'Implement a Transformer self-attention mechanism from scratch in PyTorch without high-level library shortcuts.'
        },
        {
          phaseNumber: 'Phase 02',
          duration: 'Weeks 4-6',
          title: 'Deep Representation Learning & Vision / Sequence Models',
          coreCompetencies: ['Vision Transformers (ViT)', 'Multi-head attention deep dive', 'Embedding space projections', 'Loss function design'],
          handsOnLab: 'Fine-tune a vision model for real-time anomaly detection with 98.4% precision on multi-class datasets.'
        },
        {
          phaseNumber: 'Phase 03',
          duration: 'Weeks 7-9',
          title: 'Generative AI, Parameter-Efficient Tuning & Agentic Workflows',
          coreCompetencies: ['LoRA / QLoRA with Unsloth', 'LangGraph state graphs', 'Tool calling & working memory', 'Hallucination guardrails'],
          handsOnLab: 'Deploy a multi-turn autonomous support agent with dynamic tool execution and persistent episodic memory.'
        },
        {
          phaseNumber: 'Phase 04',
          duration: 'Weeks 10-12',
          title: 'Production MLOps, Model Serving & Live Faculty Defence',
          coreCompetencies: ['vLLM inference acceleration', 'Quantization (AWQ/GGUF)', 'Docker containerization', 'Code review & defence'],
          handsOnLab: 'Benchmark an 8B open model on GPU endpoints to achieve <35ms time-to-first-token under 100 concurrent requests.'
        }
      ],
      careerTrajectory: {
        entryLevelRole: 'Junior ML Engineer (₹8 - 14 LPA)',
        targetSeniorRole: 'Senior Staff AI Architect (₹38 - 65 LPA)',
        typicalPromoTimeline: '12 - 18 Months post-completion',
        hiringDemandIndex: 'Extreme Demand (18,500+ Open Positions)'
      },
      topHiringPartners: ['Google DeepMind', 'Microsoft AI', 'NVIDIA', 'Razorpay', 'Adobe Sensei', 'CRED']
    };
  }

  if (catLower.includes('cloud') || catLower.includes('devops')) {
    return {
      targetRoles: ['DevOps Engineer', 'Kubernetes Administrator', 'Site Reliability Engineer (SRE)', 'Cloud Solutions Architect'],
      salaryBenchmark: '₹16 - 36 LPA ($120k - $165k)',
      weeklyCommitment: '8 - 10 Hours / Week',
      handsOnLabRatio: '80% Hands-On Sandbox Labs',
      capstoneProject: {
        title: 'Multi-Region High-Availability Kubernetes Cluster with GitOps & Chaos Resilience',
        industryContext: 'Architect an enterprise cloud landing zone spanning AWS and GCP using Terraform, with zero-trust Istio service mesh, ArgoCD continuous deployment, and automated Chaos Mesh resilience testing.',
        deliverables: [
          'Modular Terraform codebase with remote state locking in S3/DynamoDB',
          'Production Kubernetes cluster with Helm charts and automated HPA scaling',
          'OpenTelemetry distributed tracing pipeline integrated with Prometheus & Grafana',
          'Chaos engineering test report demonstrating sub-second recovery under simulated pod kill'
        ],
        toolchain: ['Kubernetes', 'Docker', 'Terraform', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'Istio', 'AWS EKS']
      },
      syllabusPhases: [
        {
          phaseNumber: 'Phase 01',
          duration: 'Weeks 1-3',
          title: 'Linux Kernel Internals, Networking & Multi-Stage Docker',
          coreCompetencies: ['cgroups and Linux namespaces', 'Multi-stage Docker builds', 'TCP/IP routing & DNS', 'Zero-privilege container runtime'],
          handsOnLab: 'Shrink a bloated 1.4GB enterprise Node/Python image down to a secure 42MB distroless container.'
        },
        {
          phaseNumber: 'Phase 02',
          duration: 'Weeks 4-6',
          title: 'Production Kubernetes Cluster Administration & Storage',
          coreCompetencies: ['Deployments, StatefulSets & DaemonSets', 'Ingress Controllers (NGINX/Traefik)', 'PersistentVolumes & CSI Drivers', 'RBAC Security Policies'],
          handsOnLab: 'Configure zero-downtime rolling canary deployments with automated rollback on error spikes.'
        },
        {
          phaseNumber: 'Phase 03',
          duration: 'Weeks 7-9',
          title: 'Infrastructure as Code (Terraform) & GitOps Delivery',
          coreCompetencies: ['Terraform modular architecture', 'State locking & drift detection', 'ArgoCD declarative pipelines', 'Vault secrets injection'],
          handsOnLab: 'Spin up an entire multi-tier staging environment across 2 AWS regions in under 4 minutes using Terragrunt.'
        },
        {
          phaseNumber: 'Phase 04',
          duration: 'Weeks 10-12',
          title: 'Observability, Chaos Engineering & Production Defence',
          coreCompetencies: ['OpenTelemetry traces & metrics', 'SLO error budgets & burn rate alerts', 'Chaos Mesh failure simulation', 'Live architecture defence'],
          handsOnLab: 'Simulate a 60% packet loss network partition and demonstrate automated traffic rerouting via Istio.'
        }
      ],
      careerTrajectory: {
        entryLevelRole: 'Cloud Operations Engineer (₹7 - 12 LPA)',
        targetSeniorRole: 'Principal Platform Engineer / SRE Lead (₹35 - 58 LPA)',
        typicalPromoTimeline: '10 - 15 Months post-completion',
        hiringDemandIndex: 'High Demand (15,200+ Open Positions)'
      },
      topHiringPartners: ['Amazon Web Services', 'Google Cloud', 'Microsoft Azure', 'Cloudflare', 'HashiCorp', 'Red Hat']
    };
  }

  if (catLower.includes('cyber') || catLower.includes('security')) {
    return {
      targetRoles: ['Penetration Tester', 'DevSecOps Engineer', 'Security Operations Center (SOC) Lead', 'Offensive Security Consultant'],
      salaryBenchmark: '₹15 - 38 LPA ($115k - $170k)',
      weeklyCommitment: '8 - 12 Hours / Week',
      handsOnLabRatio: '90% Virtual Attack & Defense Labs',
      capstoneProject: {
        title: 'Full-Scope Red Team Engagement & DevSecOps CI/CD Hardening Audit',
        industryContext: 'Execute a comprehensive offensive penetration test against simulated financial web applications and API gateways, followed by designing automated shift-left security guardrails to eliminate vulnerabilities in CI/CD.',
        deliverables: [
          'Executive Vulnerability Disclosure Report formatted to HackerOne/Bugcrowd standards',
          'Automated security gate in GitHub Actions using SonarQube, Trivy, and OWASP ZAP',
          'Hardened HashiCorp Vault dynamic database credential rotation pipeline',
          'Kubernetes admission controller policies blocking unverified privileged containers'
        ],
        toolchain: ['Burp Suite Pro', 'Metasploit', 'Wireshark', 'Trivy', 'SonarQube', 'HashiCorp Vault', 'OPA Gatekeeper']
      },
      syllabusPhases: [
        {
          phaseNumber: 'Phase 01',
          duration: 'Weeks 1-3',
          title: 'Network Packet Analysis, Reconnaissance & Threat Modeling',
          coreCompetencies: ['Wireshark deep packet inspection', 'Passive & active subdomain enumeration', 'Port scanning and OS fingerprinting', 'STRIDE threat modeling'],
          handsOnLab: 'Perform non-attributable target mapping and discover shadow API endpoints on enterprise domains.'
        },
        {
          phaseNumber: 'Phase 02',
          duration: 'Weeks 4-6',
          title: 'Offensive Web Application Pentesting & OWASP Top 10',
          coreCompetencies: ['Burp Suite Pro intruder automation', 'Insecure Direct Object References (IDOR)', 'Server-Side Request Forgery (SSRF)', 'SQL Injection & XSS exploitation'],
          handsOnLab: 'Exploit a complex multi-stage SSRF flaw to retrieve IAM metadata credentials from an AWS instance.'
        },
        {
          phaseNumber: 'Phase 03',
          duration: 'Weeks 7-9',
          title: 'DevSecOps, Container Hardening & Secret Management',
          coreCompetencies: ['SAST/DAST automated pipelines', 'Software Bill of Materials (SBOM)', 'Trivy image vulnerability gating', 'HashiCorp Vault secrets orchestration'],
          handsOnLab: 'Build a zero-leakage CI/CD workflow that blocks any commit containing API keys or unpatched CVEs.'
        },
        {
          phaseNumber: 'Phase 04',
          duration: 'Weeks 10-12',
          title: 'SOC Incident Response, Forensics & Audit Defense',
          coreCompetencies: ['Splunk SIEM correlation rules', 'Memory forensics with Volatility', 'Ransomware containment playbooks', 'Live offensive security defence'],
          handsOnLab: 'Investigate a simulated breach in Splunk, reconstruct the attacker lateral movement, and write an eradication plan.'
        }
      ],
      careerTrajectory: {
        entryLevelRole: 'Junior SOC Analyst (₹7 - 13 LPA)',
        targetSeniorRole: 'Principal Cyber Defense Architect (₹36 - 60 LPA)',
        typicalPromoTimeline: '12 - 16 Months post-completion',
        hiringDemandIndex: 'Acute Shortage (22,000+ Unfilled Global Roles)'
      },
      topHiringPartners: ['Palo Alto Networks', 'CrowdStrike', 'Cisco Security', 'KPMG Cyber', 'Mandiant', 'Tenable']
    };
  }

  if (catLower.includes('data') || catLower.includes('analytics')) {
    return {
      targetRoles: ['Data Engineer', 'Analytics Engineer (dbt)', 'Business Intelligence Architect', 'Machine Learning Analyst'],
      salaryBenchmark: '₹14 - 34 LPA ($110k - $155k)',
      weeklyCommitment: '8 - 10 Hours / Week',
      handsOnLabRatio: '80% Real-World Dataset Pipelines',
      capstoneProject: {
        title: 'Modern Enterprise Lakehouse Architecture on Snowflake & Delta Lake',
        industryContext: 'Build an end-to-end data platform processing 100M+ e-commerce transaction records using PySpark distributed compute, dbt data modeling with lineage, and real-time Kafka event streaming.',
        deliverables: [
          'Bronze, Silver, Gold Medallion architecture on Delta Lake',
          'dbt Core project with 50+ modular models, documentation, and automated tests',
          'Airflow DAG orchestrating daily pipeline refreshes with Slack alerting on failure',
          'Executive C-suite retention cohort dashboard in Tableau/Power BI'
        ],
        toolchain: ['Apache Spark (PySpark)', 'Snowflake', 'dbt', 'Apache Airflow', 'Kafka', 'PostgreSQL', 'Tableau']
      },
      syllabusPhases: [
        {
          phaseNumber: 'Phase 01',
          duration: 'Weeks 1-3',
          title: 'Advanced Analytical SQL, Window Functions & CTEs',
          coreCompetencies: ['Complex CTEs & recursive queries', 'Window functions (RANK, LEAD, LAG)', 'Query execution plans and indexing', 'Cohort retention calculations'],
          handsOnLab: 'Author a high-speed analytical query calculating 90-day rolling customer churn across 5M user records.'
        },
        {
          phaseNumber: 'Phase 02',
          duration: 'Weeks 4-6',
          title: 'Distributed Big Data Processing with Apache Spark',
          coreCompetencies: ['Spark DataFrames & Catalyst Optimizer', 'Partitioning, bucketing & shuffle reduction', 'Delta Lake ACID transactions', 'Handling skewed datasets'],
          handsOnLab: 'Transform a messy 25GB unpartitioned CSV dump into clean Parquet partitions in under 90 seconds.'
        },
        {
          phaseNumber: 'Phase 03',
          duration: 'Weeks 7-9',
          title: 'Cloud Warehousing with Snowflake & dbt Data Modeling',
          coreCompetencies: ['Snowflake virtual warehouses & clustering', 'dbt staging, intermediate, and marts layers', 'Automated data freshness tests', 'Data lineage graphing'],
          handsOnLab: 'Build a production dbt pipeline with automated schema validation and documentation generation.'
        },
        {
          phaseNumber: 'Phase 04',
          duration: 'Weeks 10-12',
          title: 'Orchestration with Airflow & Executive Storytelling',
          coreCompetencies: ['Airflow DAG design & task dependencies', 'Data quality SLAs and alerting', 'Executive metric presentation', 'Live capstone defence'],
          handsOnLab: 'Deploy a resilient Airflow orchestration cluster with automated retry policies and metric dashboards.'
        }
      ],
      careerTrajectory: {
        entryLevelRole: 'Junior Data Analyst (₹6 - 12 LPA)',
        targetSeniorRole: 'Lead Data Architect / Analytics Director (₹32 - 55 LPA)',
        typicalPromoTimeline: '12 - 18 Months post-completion',
        hiringDemandIndex: 'High Demand (14,800+ Open Positions)'
      },
      topHiringPartners: ['Netflix', 'Spotify', 'Amazon', 'Fractal Analytics', 'Snowflake', 'JPMorgan Chase']
    };
  }

  if (catLower.includes('design') || catLower.includes('ui/ux') || catLower.includes('creative')) {
    return {
      targetRoles: ['Senior Product Designer', 'UI/UX Lead', 'Design Systems Architect', 'User Research Specialist'],
      salaryBenchmark: '₹14 - 30 LPA ($105k - $145k)',
      weeklyCommitment: '6 - 10 Hours / Week',
      handsOnLabRatio: '85% Design Studio & Prototype Labs',
      capstoneProject: {
        title: 'Enterprise Multi-Platform Design System & User-Validated Mobile Experience',
        industryContext: 'Construct a production-ready Figma design system with tokens, component variants, and interactive documentation, accompanied by an end-to-end fintech mobile app tested with 20+ live users.',
        deliverables: [
          'Figma Design System with 150+ components, responsive auto-layout, and token variables',
          'Comprehensive User Research Deck with affinity maps, personas, and JTBD insights',
          'High-fidelity interactive prototype with realistic micro-interactions',
          'Token JSON export package ready for instant software engineer handoff'
        ],
        toolchain: ['Figma', 'Tokens Studio', 'Framer', 'FigJam', 'Maze User Testing', 'WCAG Auditing Tools']
      },
      syllabusPhases: [
        {
          phaseNumber: 'Phase 01',
          duration: 'Weeks 1-3',
          title: 'User Psychology, Discovery & Research Methodologies',
          coreCompetencies: ['Qualitative interview protocols', 'Affinity diagramming and empathy maps', 'Information architecture & sitemaps', 'Competitive usability benchmarking'],
          handsOnLab: 'Conduct 5 user research sessions and synthesize an actionable pain-point matrix for an onboarding flow.'
        },
        {
          phaseNumber: 'Phase 02',
          duration: 'Weeks 4-6',
          title: 'Visual Design Craft, Typography & Mathematical Spacing',
          coreCompetencies: ['Modular typographic scales', 'WCAG AA / AAA contrast validation', '8pt rhythmic spatial grids', 'Micro-copywriting for conversions'],
          handsOnLab: 'Design a clean, distraction-free dashboard layout strictly adhering to visual hierarchy and contrast limits.'
        },
        {
          phaseNumber: 'Phase 03',
          duration: 'Weeks 7-9',
          title: 'Enterprise Design Systems & Token Architecture',
          coreCompetencies: ['Design tokens (color, spacing, elevation)', 'Figma component properties & slot components', 'Cross-platform design parity', 'Handoff documentation'],
          handsOnLab: 'Build an accessible multi-theme component library that seamlessly switches between light and dark modes.'
        },
        {
          phaseNumber: 'Phase 04',
          duration: 'Weeks 10-12',
          title: 'Interactive Prototyping, Usability Audits & Portfolio Defence',
          coreCompetencies: ['Smart animate & micro-interactions', 'Unmoderated user testing with Maze', 'Design defense before staff designers', 'Case study presentation'],
          handsOnLab: 'Run an interactive prototype through 15 remote user tests and present data-backed design revisions.'
        }
      ],
      careerTrajectory: {
        entryLevelRole: 'Junior UI/UX Designer (₹5.5 - 11 LPA)',
        targetSeniorRole: 'Staff Product Designer / Design Systems Lead (₹30 - 50 LPA)',
        typicalPromoTimeline: '10 - 14 Months post-completion',
        hiringDemandIndex: 'High Demand (9,400+ Design Roles)'
      },
      topHiringPartners: ['Apple', 'Airbnb', 'Figma', 'Swiggy Design', 'CRED Design Studio', 'Uber UX']
    };
  }

  // Default / Web / Engineering fallback
  return {
    targetRoles: ['Full Stack Engineer', 'Senior Frontend Engineer', 'Backend Specialist (Node/Go/Rust)', 'Software Architect'],
    salaryBenchmark: '₹14 - 32 LPA ($105k - $150k)',
    weeklyCommitment: '8 - 12 Hours / Week',
    handsOnLabRatio: '85% Hands-On Production Code',
    capstoneProject: {
      title: 'Full-Scale Enterprise Microservices Platform with High-Throughput Processing',
      industryContext: 'Architect, code, test, and deploy a distributed multi-tenant platform with edge middleware, Redis asynchronous job queues, Stripe webhooks, and sub-100ms API response times.',
      deliverables: [
        'Production TypeScript / Go codebase structured with Clean Architecture',
        'Redis BullMQ queue handling 1,000+ jobs/sec with retry mechanisms',
        'End-to-end integration test suite with Vitest and Cypress achieving 85%+ coverage',
        'Live deployment on AWS/GCP with automated GitHub Actions CI/CD'
      ],
      toolchain: ['TypeScript', 'React 19', 'Next.js 15', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
    },
    syllabusPhases: [
      {
        phaseNumber: 'Phase 01',
        duration: 'Weeks 1-3',
        title: 'First-Principles Architecture & Modern TypeScript',
        coreCompetencies: ['Advanced generics & conditional types', 'React 19 compiler & server actions', 'State management patterns', 'Bundle size optimization'],
        handsOnLab: 'Construct a state-driven real-time canvas application with zero unmemoized re-renders.'
      },
      {
        phaseNumber: 'Phase 02',
        duration: 'Weeks 4-6',
        title: 'Resilient Backend Engineering & Database Design',
        coreCompetencies: ['Modular Express / Axum servers', 'PostgreSQL B-tree indexing & execution plans', 'Distributed Redis caching strategies', 'Transaction isolation levels'],
        handsOnLab: 'Engineer a concurrent ticket booking service that prevents race conditions and overselling under load.'
      },
      {
        phaseNumber: 'Phase 03',
        duration: 'Weeks 7-9',
        title: 'Distributed Queues, Webhooks & Event-Driven Architecture',
        coreCompetencies: ['BullMQ worker queues & Redis streams', 'Idempotent webhook consumers', 'JWT & OAuth authentication flows', 'API rate limiting & security'],
        handsOnLab: 'Build an asynchronous payment processing microservice that reconciles failed third-party webhooks.'
      },
      {
        phaseNumber: 'Phase 04',
        duration: 'Weeks 10-12',
        title: 'Production CI/CD, Containerization & Live Code Defence',
        coreCompetencies: ['Multi-container Docker compose', 'GitHub Actions automated testing', 'APM with Prometheus & Grafana', 'Live technical code defence'],
        handsOnLab: 'Deploy your complete production system with zero downtime and defend your architectural choices.'
      }
    ],
    careerTrajectory: {
      entryLevelRole: 'Junior Full Stack Developer (₹6 - 12 LPA)',
      targetSeniorRole: 'Senior Staff Engineer / Tech Lead (₹32 - 55 LPA)',
      typicalPromoTimeline: '12 - 16 Months post-completion',
      hiringDemandIndex: 'Very High Demand (24,000+ Global Openings)'
    },
    topHiringPartners: ['Google', 'Microsoft', 'Razorpay', 'Atlassian', 'Swiggy', 'CRED', 'Stripe']
  };
}
