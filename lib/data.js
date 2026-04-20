// lib/data.js — Central mock data store (used in getServerSideProps / getStaticProps)

// export const JOBS = [
//   { id: 1, title: 'Senior UI/UX Designer', company: 'Google', logo: 'G', logoColor: '#4285F4', location: 'Mountain View, CA', type: 'Full Time', salary: '$120k–$150k', tags: ['Design', 'Figma', 'React'], posted: '2 days ago', urgent: true, category: 'Design', experience: 'Senior', featured: true },
//   { id: 2, title: 'Frontend Engineer (React)', company: 'Meta', logo: 'M', logoColor: '#0668E1', location: 'Menlo Park, CA', type: 'Full Time', salary: '$130k–$180k', tags: ['React', 'TypeScript', 'GraphQL'], posted: '1 day ago', urgent: false, category: 'Engineering', experience: 'Senior', featured: true },
//   { id: 3, title: 'Product Manager', company: 'Apple', logo: 'A', logoColor: '#555', location: 'Cupertino, CA', type: 'Full Time', salary: '$150k–$200k', tags: ['Product', 'Strategy', 'Analytics'], posted: '3 days ago', urgent: false, category: 'Management', experience: 'Senior', featured: false },
//   { id: 4, title: 'DevOps Engineer', company: 'Amazon', logo: 'A', logoColor: '#FF9900', location: 'Seattle, WA', type: 'Remote', salary: '$110k–$140k', tags: ['AWS', 'Kubernetes', 'CI/CD'], posted: '5 days ago', urgent: true, category: 'Engineering', experience: 'Mid', featured: false },
//   { id: 5, title: 'Data Scientist', company: 'Netflix', logo: 'N', logoColor: '#E50914', location: 'Los Gatos, CA', type: 'Full Time', salary: '$125k–$165k', tags: ['Python', 'ML', 'SQL'], posted: '1 week ago', urgent: false, category: 'Data', experience: 'Senior', featured: false },
//   { id: 6, title: 'Backend Engineer', company: 'Stripe', logo: 'S', logoColor: '#6772E5', location: 'San Francisco, CA', type: 'Hybrid', salary: '$140k–$190k', tags: ['Go', 'Python', 'PostgreSQL'], posted: '4 days ago', urgent: false, category: 'Engineering', experience: 'Senior', featured: false },
//   { id: 7, title: 'Marketing Manager', company: 'Shopify', logo: 'S', logoColor: '#96BF48', location: 'Ottawa, ON', type: 'Full Time', salary: '$80k–$110k', tags: ['SEO', 'Content', 'Analytics'], posted: '6 days ago', urgent: false, category: 'Marketing', experience: 'Mid', featured: false },
//   { id: 8, title: 'iOS Developer', company: 'Airbnb', logo: 'A', logoColor: '#FF5A5F', location: 'San Francisco, CA', type: 'Full Time', salary: '$130k–$170k', tags: ['Swift', 'iOS', 'Objective-C'], posted: '2 days ago', urgent: false, category: 'Engineering', experience: 'Senior', featured: false },
//   { id: 9, title: 'Content Strategist', company: 'HubSpot', logo: 'H', logoColor: '#FF7A59', location: 'Boston, MA', type: 'Remote', salary: '$70k–$95k', tags: ['Content', 'SEO', 'CMS'], posted: '1 week ago', urgent: false, category: 'Marketing', experience: 'Mid', featured: false },
//   { id: 10, title: 'Security Engineer', company: 'Cloudflare', logo: 'C', logoColor: '#F48120', location: 'Austin, TX', type: 'Hybrid', salary: '$130k–$175k', tags: ['Security', 'Networking', 'Python'], posted: '3 days ago', urgent: true, category: 'Engineering', experience: 'Senior', featured: false },
//   { id: 11, title: 'Graphic Designer', company: 'Figma', logo: 'F', logoColor: '#F24E1E', location: 'San Francisco, CA', type: 'Full Time', salary: '$90k–$120k', tags: ['Design', 'Figma', 'Illustrator'], posted: '5 days ago', urgent: false, category: 'Design', experience: 'Mid', featured: false },
//   { id: 12, title: 'HR Business Partner', company: 'LinkedIn', logo: 'L', logoColor: '#0077B5', location: 'Sunnyvale, CA', type: 'Hybrid', salary: '$100k–$130k', tags: ['HR', 'Recruiting', 'L&D'], posted: '1 week ago', urgent: false, category: 'Human Resources', experience: 'Senior', featured: false },
// ]
export const JOBS = [
  { id: 1, title: 'Security Supervisor', company: 'Securitas India', logo: 'S', logoColor: '#1E3A8A', location: 'Mumbai, MH', type: 'Full Time', salary: '₹25k–₹35k', tags: ['Security', 'Supervision', 'Access Control'], posted: '2 days ago', urgent: true, category: 'Security', experience: 'Mid', featured: true },
  { id: 2, title: 'Warehouse Associate', company: 'Amazon Fulfillment', logo: 'A', logoColor: '#FF9900', location: 'Chennai, TN', type: 'Full Time', salary: '₹18k–₹22k', tags: ['Inventory', 'Packing', 'Logistics'], posted: '1 day ago', urgent: true, category: 'Logistics', experience: 'Entry', featured: false },
  { id: 3, title: 'Housekeeping Staff', company: 'Taj Hotels', logo: 'T', logoColor: '#B8860B', location: 'Delhi, NCR', type: 'Full Time', salary: '₹15k–₹20k', tags: ['Cleaning', 'Hospitality', 'Guest Service'], posted: '3 days ago', urgent: false, category: 'Facility Management', experience: 'Entry', featured: false },
  { id: 4, title: 'IT Support Executive', company: 'Infosys BPM', logo: 'I', logoColor: '#2C6E9E', location: 'Bengaluru, KA', type: 'Full Time', salary: '₹22k–₹28k', tags: ['Helpdesk', 'Hardware', 'Networking'], posted: '5 days ago', urgent: false, category: 'IT/BPO', experience: 'Entry', featured: false },
  { id: 5, title: 'Patient Care Coordinator', company: 'Apollo Hospitals', logo: 'A', logoColor: '#D32F2F', location: 'Hyderabad, TG', type: 'Full Time', salary: '₹20k–₹30k', tags: ['Healthcare', 'Patient Relations', 'Scheduling'], posted: '1 week ago', urgent: false, category: 'Healthcare', experience: 'Mid', featured: false },
  { id: 6, title: 'Production Operator', company: 'Maruti Suzuki', logo: 'M', logoColor: '#1F4E79', location: 'Gurugram, HR', type: 'Contract', salary: '₹18k–₹24k', tags: ['Assembly', 'Quality Check', 'Manufacturing'], posted: '4 days ago', urgent: true, category: 'Manufacturing', experience: 'Entry', featured: false },
  { id: 7, title: 'Retail Sales Associate', company: 'Reliance Retail', logo: 'R', logoColor: '#E53935', location: 'Kolkata, WB', type: 'Full Time', salary: '₹12k–₹18k', tags: ['Sales', 'Customer Service', 'POS'], posted: '6 days ago', urgent: false, category: 'Retail', experience: 'Entry', featured: false },
  { id: 8, title: 'CCTV Monitoring Operator', company: 'G4S India', logo: 'G', logoColor: '#00703C', location: 'Pune, MH', type: 'Rotational Shift', salary: '₹15k–₹22k', tags: ['Surveillance', 'Incident Reporting', 'Security Systems'], posted: '2 days ago', urgent: false, category: 'Security', experience: 'Entry', featured: false },
  { id: 9, title: 'Data Entry Operator', company: 'Cognizant', logo: 'C', logoColor: '#1A5F7A', location: 'Remote', type: 'Remote', salary: '₹15k–₹20k', tags: ['Typing', 'MS Office', 'Data Management'], posted: '3 days ago', urgent: false, category: 'IT/BPO', experience: 'Entry', featured: false },
  { id: 10, title: 'Logistics Coordinator', company: 'DHL Supply Chain', logo: 'D', logoColor: '#FFCC00', location: 'Mumbai, MH', type: 'Full Time', salary: '₹22k–₹30k', tags: ['Route Planning', 'Freight', 'Documentation'], posted: '5 days ago', urgent: false, category: 'Logistics', experience: 'Mid', featured: false },
  { id: 11, title: 'Facility Technician', company: 'CBRE India', logo: 'C', logoColor: '#E87722', location: 'Bengaluru, KA', type: 'Full Time', salary: '₹20k–₹28k', tags: ['HVAC', 'Electrical', 'Plumbing'], posted: '1 week ago', urgent: false, category: 'Facility Management', experience: 'Mid', featured: false },
  { id: 12, title: 'Healthcare Assistant', company: 'Fortis Healthcare', logo: 'F', logoColor: '#0097B2', location: 'Chandigarh', type: 'Full Time', salary: '₹15k–₹22k', tags: ['Patient Care', 'Vital Signs', 'Mobility Support'], posted: '2 days ago', urgent: true, category: 'Healthcare', experience: 'Entry', featured: false },
]



// export const EMPLOYERS = [
//   { id: 1, name: 'Google', logo: 'G', logoColor: '#4285F4', industry: 'Technology', location: 'Mountain View, CA', jobs: 245, founded: 1998, size: '100,000+', description: 'Organize the world\'s information and make it universally accessible.' },
//   { id: 2, name: 'Meta', logo: 'M', logoColor: '#0668E1', industry: 'Social Media', location: 'Menlo Park, CA', jobs: 183, founded: 2004, size: '50,000+', description: 'Building the future of human connection and the technology that makes it possible.' },
//   { id: 3, name: 'Apple', logo: 'A', logoColor: '#555555', industry: 'Consumer Electronics', location: 'Cupertino, CA', jobs: 312, founded: 1976, size: '100,000+', description: 'Think different. Creating innovative hardware, software, and services.' },
//   { id: 4, name: 'Amazon', logo: 'A', logoColor: '#FF9900', industry: 'E-Commerce / Cloud', location: 'Seattle, WA', jobs: 567, founded: 1994, size: '100,000+', description: 'Earth\'s most customer-centric company.' },
//   { id: 5, name: 'Netflix', logo: 'N', logoColor: '#E50914', industry: 'Entertainment', location: 'Los Gatos, CA', jobs: 89, founded: 1997, size: '10,000+', description: 'Entertainment, like you\'ve never seen it.' },
//   { id: 6, name: 'Stripe', logo: 'S', logoColor: '#6772E5', industry: 'Fintech', location: 'San Francisco, CA', jobs: 124, founded: 2010, size: '5,000+', description: 'The new standard in online payments infrastructure.' },
//   { id: 7, name: 'Shopify', logo: 'S', logoColor: '#96BF48', industry: 'E-Commerce', location: 'Ottawa, ON', jobs: 98, founded: 2006, size: '10,000+', description: 'Empowering entrepreneurs everywhere to build their businesses.' },
//   { id: 8, name: 'Airbnb', logo: 'A', logoColor: '#FF5A5F', industry: 'Travel & Hospitality', location: 'San Francisco, CA', jobs: 67, founded: 2008, size: '5,000+', description: 'Belong anywhere. Connecting hosts and travelers worldwide.' },
// ]


export const EMPLOYERS = [
  { 
    id: 1, 
    name: 'Securitas India', 
    logo: 'S', 
    logoColor: '#1E3A8A', 
    industry: 'Security Services', 
    location: 'Mumbai, MH', 
    jobs: 124, 
    founded: 1934, 
    size: '10,000+', 
    description: 'Global leader in security services providing manned guarding, electronic security, and corporate risk management.' 
  },
  { 
    id: 2, 
    name: 'Reliance Retail', 
    logo: 'R', 
    logoColor: '#E53935', 
    industry: 'Retail', 
    location: 'Mumbai, MH', 
    jobs: 245, 
    founded: 2006, 
    size: '50,000+', 
    description: 'India\'s largest retailer operating over 15,000 stores across grocery, electronics, fashion, and wholesale.' 
  },
  { 
    id: 3, 
    name: 'Apollo Hospitals', 
    logo: 'A', 
    logoColor: '#D32F2F', 
    industry: 'Healthcare', 
    location: 'Chennai, TN', 
    jobs: 312, 
    founded: 1983, 
    size: '10,000+', 
    description: 'Leading healthcare group with multi-specialty hospitals, clinics, and telemedicine services across India.' 
  },
  { 
    id: 4, 
    name: 'DHL Supply Chain', 
    logo: 'D', 
    logoColor: '#FFCC00', 
    industry: 'Logistics', 
    location: 'Gurugram, HR', 
    jobs: 187, 
    founded: 1969, 
    size: '10,000+', 
    description: 'World\'s largest logistics company providing warehousing, transportation, and supply chain solutions.' 
  },
  { 
    id: 5, 
    name: 'Tata Motors', 
    logo: 'T', 
    logoColor: '#1F4E79', 
    industry: 'Manufacturing', 
    location: 'Pune, MH', 
    jobs: 98, 
    founded: 1945, 
    size: '50,000+', 
    description: 'Leading automobile manufacturer producing commercial vehicles, passenger cars, and electric vehicles.' 
  },
  { 
    id: 6, 
    name: 'Infosys BPM', 
    logo: 'I', 
    logoColor: '#2C6E9E', 
    industry: 'IT/BPO', 
    location: 'Bengaluru, KA', 
    jobs: 234, 
    founded: 2002, 
    size: '50,000+', 
    description: 'Business process management arm of Infosys offering outsourcing solutions across finance, HR, and customer support.' 
  },
  { 
    id: 7, 
    name: 'CBRE India', 
    logo: 'C', 
    logoColor: '#E87722', 
    industry: 'Facility Management', 
    location: 'New Delhi, DL', 
    jobs: 156, 
    founded: 1906, 
    size: '10,000+', 
    description: 'Global leader in commercial real estate services including facility management, property maintenance, and workplace solutions.' 
  },
  { 
    id: 8, 
    name: 'Flipkart', 
    logo: 'F', 
    logoColor: '#2874F0', 
    industry: 'E-Commerce', 
    location: 'Bengaluru, KA', 
    jobs: 143, 
    founded: 2007, 
    size: '10,000+', 
    description: 'India\'s largest e-commerce marketplace with extensive warehousing and delivery network across the country.' 
  },
]
export const CANDIDATES = [
  { id: 1, name: 'Sarah Johnson', title: 'Senior UX Designer', location: 'San Francisco, CA', experience: '7 years', skills: ['Figma', 'User Research', 'Prototyping', 'React'], available: true, salary: '$120k', avatar: 'SJ', avatarColor: '#6366F1', education: 'Stanford University' },
  { id: 2, name: 'Marcus Chen', title: 'Full Stack Engineer', location: 'New York, NY', experience: '5 years', skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'], available: true, salary: '$140k', avatar: 'MC', avatarColor: '#EC4899', education: 'MIT' },
  { id: 3, name: 'Priya Patel', title: 'Data Scientist', location: 'Seattle, WA', experience: '4 years', skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'], available: false, salary: '$130k', avatar: 'PP', avatarColor: '#14B8A6', education: 'Carnegie Mellon' },
  { id: 4, name: 'James Wilson', title: 'Product Manager', location: 'Austin, TX', experience: '8 years', skills: ['Product Strategy', 'Agile', 'Analytics', 'Roadmapping'], available: true, salary: '$155k', avatar: 'JW', avatarColor: '#F59E0B', education: 'Harvard Business School' },
  { id: 5, name: 'Emma Rodriguez', title: 'DevOps Engineer', location: 'Remote', experience: '6 years', skills: ['Kubernetes', 'Terraform', 'CI/CD', 'AWS'], available: true, salary: '$125k', avatar: 'ER', avatarColor: '#10B981', education: 'UC Berkeley' },
  { id: 6, name: 'Liam O\'Brien', title: 'iOS Developer', location: 'Boston, MA', experience: '5 years', skills: ['Swift', 'SwiftUI', 'Objective-C', 'Core Data'], available: false, salary: '$130k', avatar: 'LO', avatarColor: '#3B82F6', education: 'Northeastern University' },
  { id: 7, name: 'Aisha Khan', title: 'Marketing Manager', location: 'Chicago, IL', experience: '6 years', skills: ['SEO', 'Content Strategy', 'Google Analytics', 'HubSpot'], available: true, salary: '$95k', avatar: 'AK', avatarColor: '#8B5CF6', education: 'Northwestern University' },
  { id: 8, name: 'David Park', title: 'Backend Engineer', location: 'Denver, CO', experience: '4 years', skills: ['Go', 'Python', 'gRPC', 'PostgreSQL'], available: true, salary: '$115k', avatar: 'DP', avatarColor: '#EF4444', education: 'University of Washington' },
]

export const BLOG_POSTS = [
  { id: 1, title: '10 Tips to Land Your Dream Job in 2024', category: 'Career Tips', author: 'Emily Clarke', authorAvatar: 'EC', date: 'Dec 15, 2024', readTime: '5 min read', image: null, excerpt: 'Landing your dream job requires more than just a polished resume. Here are ten proven strategies that will set you apart from the competition.', featured: true, tags: ['Career', 'Tips', 'Job Search'] },
  { id: 2, title: 'The Future of Remote Work: What Employers Need to Know', category: 'Workplace Trends', author: 'Michael Torres', authorAvatar: 'MT', date: 'Dec 10, 2024', readTime: '7 min read', image: null, excerpt: 'Remote work has transformed the modern workplace. We dive into what this means for employers trying to attract top talent in 2024.', featured: true, tags: ['Remote Work', 'Employers', 'Trends'] },
  { id: 3, title: 'How to Write a Resume That Gets Noticed', category: 'Resume Tips', author: 'Sarah Kim', authorAvatar: 'SK', date: 'Dec 5, 2024', readTime: '6 min read', image: null, excerpt: 'Your resume is your first impression. Learn how to craft one that captures attention and passes ATS filters with ease.', featured: false, tags: ['Resume', 'Career', 'Tips'] },
  { id: 4, title: 'Salary Negotiation: A Complete Guide for 2024', category: 'Salary', author: 'James Owusu', authorAvatar: 'JO', date: 'Nov 28, 2024', readTime: '8 min read', image: null, excerpt: 'Negotiating your salary can feel intimidating. This guide walks you through every step with confidence-building strategies.', featured: false, tags: ['Salary', 'Negotiation', 'Career'] },
  { id: 5, title: 'Top In-Demand Tech Skills Employers Want Right Now', category: 'Industry Insights', author: 'Priya Nair', authorAvatar: 'PN', date: 'Nov 20, 2024', readTime: '4 min read', image: null, excerpt: 'Technology is evolving fast. Here are the skills that every tech employer is actively looking for in new hires.', featured: false, tags: ['Tech', 'Skills', 'Industry'] },
  { id: 6, title: 'How to Ace a Video Interview in 5 Steps', category: 'Interview Tips', author: 'Ryan Lee', authorAvatar: 'RL', date: 'Nov 15, 2024', readTime: '5 min read', image: null, excerpt: 'Video interviews are the new norm. Learn how to present yourself professionally and confidently through the screen.', featured: false, tags: ['Interview', 'Remote', 'Tips'] },
]

// export const CATEGORIES = [
//   { name: 'Design', icon: '🎨', count: 1254, color: '#6366F1' },
//   { name: 'Engineering', icon: '💻', count: 3678, color: '#14B8A6' },
//   { name: 'Marketing', icon: '📣', count: 872, color: '#F59E0B' },
//   { name: 'Finance', icon: '💰', count: 541, color: '#10B981' },
//   { name: 'Management', icon: '📋', count: 934, color: '#3B82F6' },
//   { name: 'Human Resources', icon: '👥', count: 412, color: '#EC4899' },
//   { name: 'Data', icon: '📊', count: 1087, color: '#8B5CF6' },
//   { name: 'Sales', icon: '🤝', count: 765, color: '#EF4444' },
// ]
export const CATEGORIES = [
  { name: 'Security', icon: '🛡️', count: 2450, color: '#1E3A8A' },
  { name: 'Facility Management', icon: '🏢', count: 1870, color: '#E87722' },
  { name: 'IT/BPO', icon: '💻', count: 3100, color: '#2C6E9E' },
  { name: 'Healthcare', icon: '🏥', count: 1650, color: '#D32F2F' },
  { name: 'Logistics', icon: '🚚', count: 2100, color: '#FF9900' },
  { name: 'Manufacturing', icon: '⚙️', count: 2300, color: '#1F4E79' },
  { name: 'Retail', icon: '🛍️', count: 1200, color: '#E53935' },
  { name: 'Hospitality', icon: '🍽️', count: 980, color: '#B8860B' },
]

export const STATS = {
  jobs: '93,178',
  candidates: '56,240',
  employers: '12,534',
  placements: '29,180',
}

export const TESTIMONIALS = [
  { id: 1, name: 'Jessica Miller', role: 'Frontend Engineer at Google', avatar: 'JM', avatarColor: '#6366F1', text: 'SIS GLOBAL WORKFORCE SOLUTIONS completely changed my job search. Within 2 weeks of creating my profile, I had 5 interviews lined up and landed my dream role at Google!' },
  { id: 2, name: 'Raj Patel', role: 'Engineering Manager at Meta', avatar: 'RP', avatarColor: '#14B8A6', text: 'As a hiring manager, SIS GLOBAL WORKFORCE SOLUTIONS has been invaluable. The quality of candidates we get here is consistently outstanding. Highly recommend.' },
  { id: 3, name: 'Chloe Nguyen', role: 'UX Lead at Airbnb', avatar: 'CN', avatarColor: '#F59E0B', text: 'I was skeptical at first, but SIS GLOBAL WORKFORCE SOLUTIONS delivered. The smart matching algorithm connected me with exactly the kind of roles I was looking for.' },
]

export const PLANS = [
  {
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals getting started',
    features: ['5 job applications/month', 'Basic profile', 'Email support', 'Job alerts'],
    notIncluded: ['Featured listing', 'Analytics dashboard', 'Priority support', 'Unlimited applications'],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: 49,
    period: 'month',
    description: 'For serious job seekers and small employers',
    features: ['Unlimited applications', 'Featured profile', 'Analytics dashboard', 'Priority support', 'Job alerts', '10 job postings/month'],
    notIncluded: ['Dedicated account manager', 'Custom branding'],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 149,
    period: 'month',
    description: 'For large companies and recruiters',
    features: ['Everything in Professional', 'Unlimited job postings', 'Dedicated account manager', 'Custom branding', 'API access', 'Team management', 'Advanced analytics'],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
]

// export const FAQS = [
//   { q: 'How do I post a job on SIS GLOBAL WORKFORCE SOLUTIONS?', a: 'Simply create an employer account, navigate to "Post a Job," fill in the details, and publish. Your job will be live within minutes and visible to thousands of qualified candidates.' },
//   { q: 'Is SIS GLOBAL WORKFORCE SOLUTIONS free for job seekers?', a: 'Yes! Creating a candidate profile and applying to jobs is completely free. We offer premium features that give your application more visibility, but the core experience is free.' },
//   { q: 'How long does it take for my job to go live?', a: 'Jobs typically go live instantly after submission. For enterprise accounts, there may be a brief review process for the first posting (usually under 24 hours).' },
//   { q: 'Can I edit my job posting after it\'s published?', a: 'Absolutely. You can edit your job posting at any time from your employer dashboard. Changes will be reflected live within a few minutes.' },
//   { q: 'How does the candidate matching work?', a: 'Our smart matching algorithm analyzes skills, experience, location preferences, salary expectations, and more to surface the most relevant candidates for each role.' },
//   { q: 'What payment methods do you accept?', a: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for enterprise plans. All payments are secured with 256-bit SSL encryption.' },
//   { q: 'Can I cancel my subscription anytime?', a: 'Yes. You can cancel your subscription at any time. Your access will continue until the end of your current billing period, and you won\'t be charged again.' },
//   { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee for all paid plans. If you\'re not satisfied, reach out to our support team within 14 days of your purchase.' },
// ]
export const FAQS = [
  { q: 'What types of workforce does SIS Global provide?', a: 'We provide skilled and semi-skilled manpower across Security, Facility Management, IT/BPO, Healthcare, Logistics, Manufacturing, Retail, and Hospitality sectors — both for domestic and international deployment.' },
  { q: 'How does SIS Global ensure candidate compliance?', a: 'We follow a structured documentation and verification process including ID proofs, educational certificates, experience records, background checks, and regulatory compliance for cross-border deployment.' },
  { q: 'What is the typical deployment timeline?', a: 'Depending on the role and location, deployment can take 2 to 6 weeks. Our technology-driven tracking system helps reduce turnaround time significantly compared to traditional manpower suppliers.' },
  { q: 'Do you provide visa processing and travel coordination?', a: 'Yes, for international placements we manage end-to-end visa processing, medical tests, travel booking, and pre-departure orientation to ensure a smooth onboarding experience for employers and candidates.' },
  { q: 'How are candidates screened and trained?', a: 'Candidates go through multi-level screening — eligibility checks, skill assessments, trade tests (if required), and soft skills orientation. We also provide industry-specific upskilling where needed.' },
  { q: 'Can employers track the recruitment progress in real time?', a: 'Absolutely. Our employer dashboard gives you live visibility into candidate sourcing, documentation, approval status, and deployment milestones.' },
  { q: 'Is there a minimum contract period for hiring through SIS Global?', a: 'No minimum contract. We offer flexible engagement models — temporary, contract-to-hire, or permanent placements based on your business needs.' },
  { q: 'What geographies do you cover?', a: 'We operate across India and have capabilities to deploy to GCC countries, Southeast Asia, Europe, and other regions as per employer requirements.' },
]



export const PRODUCTS = [
  { id: 1, name: 'Resume Review Service', price: 29, category: 'Career Services', rating: 4.8, reviews: 234, description: 'Get your resume reviewed by a professional career coach within 48 hours.', popular: true },
  { id: 2, name: 'Interview Coaching Session', price: 79, category: 'Career Services', rating: 4.9, reviews: 186, description: '1-hour mock interview session with detailed feedback and improvement tips.', popular: true },
  { id: 3, name: 'LinkedIn Profile Makeover', price: 49, category: 'Career Services', rating: 4.7, reviews: 312, description: 'Complete LinkedIn profile optimization to attract recruiters organically.', popular: false },
  { id: 4, name: 'Job Search Masterclass', price: 99, category: 'Courses', rating: 4.6, reviews: 567, description: 'A comprehensive video course covering every aspect of a modern job search.', popular: false },
  { id: 5, name: 'Salary Negotiation Guide', price: 19, category: 'Guides', rating: 4.5, reviews: 891, description: 'Proven scripts and strategies to negotiate your salary with confidence.', popular: false },
  { id: 6, name: 'Featured Job Posting (30 days)', price: 199, category: 'For Employers', rating: 4.8, reviews: 145, description: 'Get 3x more visibility with a featured placement at the top of search results.', popular: true },
]
