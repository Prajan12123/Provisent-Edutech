export interface CertificateCategory {
  id: string;
  name: string;
  courseTitle: string;
  recipientName: string;
  duration: string;
  issueDate: string;
  mentorName: string;
  ceoName: string;
  certId: string;
  credentialLevel: string;
  description: string;
  keySkills: string[];
  eligibleRoles: string[];
  accreditations: string[];
  avgSalaryHike: string;
  hiringCompanies: string[];
  capstoneProject: string;
  badgeColor: string;
}

export const CERTIFICATE_TRACKS: CertificateCategory[] = [
  {
    id: 'track-python-ai',
    name: 'Python with AI & Machine Learning',
    courseTitle: 'PYTHON WITH AI',
    recipientName: 'VIJAY',
    duration: '01st APRIL 2026 to 30th June2026',
    issueDate: '01 JUNE 2026',
    mentorName: 'MENTOR',
    ceoName: 'CEO&FOUNDER',
    certId: 'PROV-2026-PYAI-0104',
    credentialLevel: 'Advanced Industry Traineeship',
    description: 'Comprehensive traineeship credential covering Python architecture, deep learning algorithms, neural network design, Hugging Face transformers, and LLM inference pipelines.',
    keySkills: ['Python 3.12', 'PyTorch', 'Computer Vision', 'Generative AI', 'NLP Pipelines', 'Model Serving'],
    eligibleRoles: ['AI Engineer', 'Python ML Specialist', 'Data Scientist', 'Automation Architect'],
    accreditations: ['AICTE Approved', 'ISO 9001:2015', 'Microsoft Tech Associate', 'MSME India', '#startupindia'],
    avgSalaryHike: '+115%',
    hiringCompanies: ['Google', 'NVIDIA', 'Amazon AWS', 'Microsoft', 'Fractal AI'],
    capstoneProject: 'Enterprise Multi-Modal Agent with Retrieval-Augmented Generation (RAG)',
    badgeColor: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'track-fullstack',
    name: 'Full Stack Web Engineering',
    courseTitle: 'FULL STACK WEB DEVELOPMENT',
    recipientName: 'PRIYA SHARMA',
    duration: '15th JAN 2026 to 15th MAY 2026',
    issueDate: '20 MAY 2026',
    mentorName: 'HEAD OF ENGINEERING',
    ceoName: 'CEO&FOUNDER',
    certId: 'PROV-2026-FSWD-0419',
    credentialLevel: 'Full Stack Master Traineeship',
    description: 'Validates mastery over modern end-to-end full stack development: React 19, TypeScript, Next.js server components, PostgreSQL architecture, Prisma ORM, and cloud CI/CD pipelines.',
    keySkills: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    eligibleRoles: ['Full Stack Engineer', 'Frontend Architect', 'Backend Developer', 'Software Engineer'],
    accreditations: ['AICTE Approved', 'ISO 9001:2015', 'Microsoft Certified', 'MSME India'],
    avgSalaryHike: '+105%',
    hiringCompanies: ['Razorpay', 'Atlassian', 'Flipkart', 'Cisco', 'Swiggy'],
    capstoneProject: 'Scalable Distributed Microservices E-Commerce Platform with Real-Time WebSockets',
    badgeColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'track-cybersecurity',
    name: 'Cybersecurity & Ethical Hacking',
    courseTitle: 'CYBERSECURITY & PENETRATION TESTING',
    recipientName: 'ROHAN VERMA',
    duration: '01st FEB 2026 to 30th APR 2026',
    issueDate: '05 MAY 2026',
    mentorName: 'SECURITY DIRECTOR',
    ceoName: 'CEO&FOUNDER',
    certId: 'PROV-2026-CSEC-0288',
    credentialLevel: 'Certified Security Professional',
    description: 'Validates practical capability in red team exercises, defensive SOC monitoring, network packet analysis, OWASP Top 10 web vulnerability assessments, and cryptography compliance.',
    keySkills: ['Penetration Testing', 'Burp Suite', 'Wireshark', 'SOC Operations', 'OWASP Top 10', 'Linux Security'],
    eligibleRoles: ['Cyber Defense Analyst', 'Penetration Tester', 'SOC Analyst', 'Security Engineer'],
    accreditations: ['ISO 9001:2015', 'AICTE Recognized', 'MSME India'],
    avgSalaryHike: '+120%',
    hiringCompanies: ['Palo Alto Networks', 'CrowdStrike', 'EY Advisory', 'Deloitte', 'Wipro Cyber'],
    capstoneProject: 'Red Team Network Intrusion Defense & Automated Vulnerability Scanning Suite',
    badgeColor: 'from-rose-500 to-amber-600'
  },
  {
    id: 'track-cloud-devops',
    name: 'Cloud Computing & DevOps Architecture',
    courseTitle: 'CLOUD DEVOPS & INFRASTRUCTURE',
    recipientName: 'ANANYA IYER',
    duration: '10th MAR 2026 to 10th JUL 2026',
    issueDate: '15 JULY 2026',
    mentorName: 'CLOUD ARCHITECT',
    ceoName: 'CEO&FOUNDER',
    certId: 'PROV-2026-CDOP-0391',
    credentialLevel: 'Production DevOps Specialist',
    description: 'Certifies practical expertise in multi-cloud container orchestration, Terraform Infrastructure as Code (IaC), GitOps pipelines with ArgoCD, and Kubernetes cluster scalability.',
    keySkills: ['Docker', 'Kubernetes', 'AWS & Azure', 'Terraform', 'CI/CD Pipelines', 'Prometheus & Grafana'],
    eligibleRoles: ['DevOps Engineer', 'Cloud Architect', 'Site Reliability Engineer (SRE)', 'Platform Engineer'],
    accreditations: ['Microsoft Partner Network', 'ISO 9001:2015', 'AICTE Approved', '#startupindia'],
    avgSalaryHike: '+125%',
    hiringCompanies: ['Morgan Stanley', 'Infosys Cloud', 'TCS Digital', 'Salesforce', 'Cognizant'],
    capstoneProject: 'Zero-Downtime Multi-Region Kubernetes Cluster with Automated Canary Deployments',
    badgeColor: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'track-data-science',
    name: 'Data Science & Big Data Engineering',
    courseTitle: 'DATA SCIENCE & ANALYTICS',
    recipientName: 'KARTHIK RAO',
    duration: '01st MAY 2026 to 31st JUL 2026',
    issueDate: '05 AUGUST 2026',
    mentorName: 'CHIEF DATA SCIENTIST',
    ceoName: 'CEO&FOUNDER',
    certId: 'PROV-2026-DSTA-0512',
    credentialLevel: 'Enterprise Data Specialist',
    description: 'Rigorous validation in distributed data processing, SQL query optimization, pandas data manipulation, predictive statistical modeling, and Tableau business intelligence dashboarding.',
    keySkills: ['Python & Pandas', 'Advanced SQL', 'Tableau / PowerBI', 'Statistical Modeling', 'ETL Pipelines', 'BigQuery'],
    eligibleRoles: ['Data Scientist', 'Business Intelligence Analyst', 'Data Engineer', 'Quantitative Analyst'],
    accreditations: ['ISO 9001:2015', 'AICTE Recognized', 'Microsoft Certified'],
    avgSalaryHike: '+110%',
    hiringCompanies: ['Mu Sigma', 'Tiger Analytics', 'JPMorgan Chase', 'Walmart Labs', 'Zomato'],
    capstoneProject: 'Petabyte-Scale Real-Time Financial Fraud Detection Pipeline with Machine Learning',
    badgeColor: 'from-amber-500 to-orange-600'
  }
];

export const CERTIFICATE_SECURITY_FEATURES = [
  {
    title: 'SHA-256 Ledger Seal',
    badge: 'Cryptographic',
    description: 'Every certificate issues with a distinct 64-character hash registered in Provisent immutable verification block.',
    detail: 'Tamper-evident verification hash prevents PDF editing or forged student names.'
  },
  {
    title: 'High-Density Dynamic QR Code',
    badge: 'Real-Time',
    description: 'Scanning with any phone camera links directly to the secure SSL Provisent registry entry showing original marks.',
    detail: 'Encoded with unique credential tokens that cannot be mirrored on external spoof sites.'
  },
  {
    title: 'Anti-Copy Wave Guilloche Patterns',
    badge: 'Visual Security',
    description: 'Geometric vector curves and multi-layered wave ribbons printed in high resolution defeat standard raster cloning.',
    detail: 'Calculated mathematical curves maintain razor-sharp vectors at any zoom or physical print scale.'
  },
  {
    title: 'Direct LinkedIn Credential Sync',
    badge: 'API Integrated',
    description: 'One-click automated synchronization to candidate LinkedIn "Licenses & Certifications" tab with official organization ID.',
    detail: 'Official Issuing Org ID: PROVISENT EDUTECH PRIVATE LIMITED with permanent, non-expiring URL.'
  },
  {
    title: 'Multi-Agency Regulatory Endorsement',
    badge: 'Recognitions',
    description: 'Compliant with AICTE curriculum guidelines, ISO 9001:2015 Quality Management Systems, MSME India, and Startup India.',
    detail: 'Accepted by background verification firms (First Advantage, HireRight, AuthBridge).'
  },
  {
    title: 'Git-Commit Provenance Backing',
    badge: 'Engineering Proof',
    description: 'Unlike multiple-choice quiz diplomas, every certificate links to genuine Git repositories and deployed live projects.',
    detail: 'Recruiters can inspect actual code commits, architecture diagrams, and mentor defense scorecards.'
  }
];

export const CERTIFICATION_COMPARISON = [
  {
    dimension: 'Assessment Rigor',
    provisent: '1-on-1 Live Code Defense + Deployed Capstone + Automated Unit Tests',
    typicalGeneric: 'Passive video completion + Multiple-choice 10-question quiz',
    unaccredited: 'No assessment; certificate auto-generated upon fee payment'
  },
  {
    dimension: 'Verification Mechanism',
    provisent: 'Instant Public QR Scanner + SHA-256 Ledger Hash + Zero-Login API',
    typicalGeneric: 'Static web page or easily downloadable unverified image',
    unaccredited: 'None (no searchable database or registry)'
  },
  {
    dimension: 'Accreditations & Badges',
    provisent: 'AICTE Aligned • ISO 9001:2015 • Microsoft Partner • MSME Govt of India • #startupindia',
    typicalGeneric: 'Platform-only internal badge without statutory bodies',
    unaccredited: 'Non-existent or self-claimed unverified seals'
  },
  {
    dimension: 'Recruiter & ATS Acceptance',
    provisent: 'Recognized by 450+ hiring partners & tier-1 background check agencies',
    typicalGeneric: 'Moderate recognition; often filtered out by strict ATS filters',
    unaccredited: 'Frequently flagged as non-verifiable credential during audits'
  },
  {
    dimension: 'Physical Hard Copy',
    provisent: 'High-grade embossed parchment paper with golden foil seal (Distinction graduates)',
    typicalGeneric: 'Print-at-home standard letter paper',
    unaccredited: 'Digital JPG/PNG only'
  },
  {
    dimension: 'Lifetime Registry Access',
    provisent: 'Guaranteed 99.99% perpetual uptime with permanent immutable URL',
    typicalGeneric: 'Subject to subscription or account expiration',
    unaccredited: 'Broken links within 6-12 months'
  }
];

export const CERTIFICATION_PILLARS = [
  {
    title: 'Cryptographic Hash Integrity',
    code: 'SHA-256 LEDGER',
    description: 'Every certificate issues with a distinct 64-character SHA-256 fingerprint timestamped on the Provisent verifiable ledger to prevent tampering and forged replicas.',
    badge: 'Security'
  },
  {
    title: 'QR Code Instant Verification',
    code: '1-SEC SCAN',
    description: 'Printed or digital copies can be instantly scanned with any smartphone camera to open the authenticated registry view showing exact dates, capstone grades, and project links.',
    badge: 'Verification'
  },
  {
    title: '1-Click LinkedIn Integration',
    code: 'DIRECT API',
    description: 'Synchronizes smoothly into your LinkedIn "Licenses & Certifications" profile section with official organization ID and instant credential URL.',
    badge: 'Career'
  },
  {
    title: 'Government & Industry Recognized',
    code: 'GOVT. ACCREDITED',
    description: 'Backed by AICTE curriculum alignments, ISO 9001:2015 Quality Management Standards, MSME Government of India registration, and #startupindia recognition.',
    badge: 'Compliance'
  },
  {
    title: 'Code Repository Proofs',
    code: 'GIT VERIFIED',
    description: 'Unlike multiple-choice quiz credentials, Provisent certificates validate verified GitHub pull requests, production code deploys, and mentor peer reviews.',
    badge: 'Practical'
  },
  {
    title: 'Perpetual Lifetime Hosting',
    code: 'ETERNAL URL',
    description: 'Your credential web link never expires. Recruiters and universities can inspect it 5 or 10 years from now with 99.99% uptime guarantee.',
    badge: 'Reliability'
  }
];

export const CERTIFICATION_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Capstone Project Evaluation',
    description: 'Students complete industry-level capstone projects, passing rigorous automated test suites and architectural linters.',
    milestone: '100% Code Quality'
  },
  {
    step: '02',
    title: '1-on-1 Mentor Code Defense',
    description: 'Defend your implementation in front of senior tech mentors, verifying genuine algorithmic grasp and clean code practices.',
    milestone: 'Live Tech Viva'
  },
  {
    step: '03',
    title: 'Cryptographic Ledger Registration',
    description: 'Provisent registers the candidate details, specialization track, completion timeframe, and cryptographic hash in the registry.',
    milestone: 'SHA-256 Hash'
  },
  {
    step: '04',
    title: 'Digital Credential Dispatch',
    description: 'Receive your high-resolution printable PDF diploma, tamper-proof QR code, and 1-click LinkedIn profile badge.',
    milestone: 'Lifetime Diploma'
  }
];

export const ALUMNI_STORIES = [
  {
    name: 'Vijay S.',
    role: 'AI Engineer at Quantix Labs',
    prevRole: 'B.Tech Graduate (Fresher)',
    course: 'PYTHON WITH AI',
    certId: 'PROV-2026-PYAI-0104',
    quote: 'The Python with AI certificate made my resume stand out immediately. Recruiters scanned the QR code during my interview and verified my capstone repo on the spot!',
    hike: '₹14.5 LPA First Offer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Priya Sharma',
    role: 'Senior Full Stack Engineer at Razorpay',
    prevRole: 'Junior Frontend Dev',
    course: 'FULL STACK WEB DEVELOPMENT',
    certId: 'PROV-2026-FSWD-0419',
    quote: 'Having an ISO 9001:2015 accredited certificate from Provisent backed by a defended Next.js project gave hiring managers total confidence in my system design abilities.',
    hike: '+140% Salary Growth',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Rohan Verma',
    role: 'Cyber Defense Analyst at EY Global',
    prevRole: 'Network Support Tech',
    course: 'CYBERSECURITY & PENETRATION TESTING',
    certId: 'PROV-2026-CSEC-0288',
    quote: 'The live SOC practicals and hands-on lab audits earned me this credential. Background check verification passed in under 2 minutes without any paperwork hassle.',
    hike: 'Transition to Security Tier-1',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const CERTIFICATE_ANATOMY_PARTS = [
  {
    id: 'header-crest',
    title: 'Official Provisent Emblem & Header',
    location: 'Top Center',
    details: 'Displays the recognized PROVISENT globe emblem and formal "CERTIFICATE OF TRAINEESHIP COMPLETION" gold-cyan heading typography.'
  },
  {
    id: 'recipient-citation',
    title: 'Candidate Name & Honor Citation',
    location: 'Mid Center',
    details: 'Emphasizes the graduate in cyan high-contrast display font, followed by the rigorous syllabus text and exact traineeship dates.'
  },
  {
    id: 'dual-signatures',
    title: 'Dual Authorized Executive Signatures',
    location: 'Lower Section',
    details: 'Formal counter-signatures of the assigned Mentor and CEO & Founder with stylized security ink flourishes and underlines.'
  },
  {
    id: 'regulatory-bar',
    title: 'Statutory Accreditations Footer',
    location: 'Bottom Center',
    details: 'Includes official badges for AICTE approval alignment, ISO 9001:2015 QMS, Microsoft partner network, MSME Govt. of India, and #startupindia.'
  },
  {
    id: 'security-qr',
    title: 'Machine-Readable QR Code & ID',
    location: 'Bottom Right',
    details: 'Permits instant smartphone scanning linking straight to our cloud SSL certificate verification endpoint.'
  },
  {
    id: 'wave-ribbons',
    title: 'Anti-Counterfeit Vector Waves & Rings',
    location: 'Corners & Background',
    details: 'Mathematical guilloche curves and cyan tech accent rings that distort when photocopied or manipulated in graphic editors.'
  }
];

export const CERTIFICATION_FAQS = [
  {
    q: 'How do employers verify my PROVISENT certificate?',
    a: 'Recruiters can either enter your unique Certificate ID (e.g., PROV-2026-PYAI-0104) directly on our public Verification Portal (/verify-certificate) or scan the QR code printed on the certificate. The portal instantly reveals candidate identity, issue date, curriculum syllabus, mentor notes, and accreditation status.'
  },
  {
    q: 'Are PROVISENT certificates recognized by top tech companies?',
    a: 'Yes. Our curriculum follows AICTE alignments and ISO 9001:2015 guidelines. Over 450+ hiring partners—including high-growth startups and global product enterprises—actively recruit PROVISENT graduates because our certificates guarantee hands-on project deployment, not just theoretical exams.'
  },
  {
    q: 'Can I add this certificate to my LinkedIn profile and resume?',
    a: 'Absolutely. Every certificate comes with a pre-formatted LinkedIn Add-to-Profile button that automatically fills the issuing organization (PROVISENT EDUTECH PRIVATE LIMITED), credential ID, issue date, and expiration (Does Not Expire).'
  },
  {
    q: 'Is there an expiration date on my digital credential?',
    a: 'No. All PROVISENT certificates are issued with lifetime validity. Your public verification link remains permanently accessible on our high-availability cloud registry.'
  },
  {
    q: 'Can I receive a physical hard copy of the certificate?',
    a: 'Yes. In addition to high-resolution vector PDF downloads, students graduating with Distinction (Honor roll) can request an embossed, high-grade parchment physical diploma with metallic foil seals mailed directly to their doorstep.'
  },
  {
    q: 'What distinguishes this certificate from generic online course completions?',
    a: 'Provisent certificates require genuine git-tracked repository commits, multi-tier module assessments, and live mentor project defenses. We do not issue credentials for passive video watching.'
  }
];
