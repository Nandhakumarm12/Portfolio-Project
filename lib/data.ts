import { Project, BlogPost, Experience, Skill } from '@/types';

export const personalInfo = {
  name: "Nandhakumar Manikandasamy",
  title: "AI Engineer & Software Developer",
  location: "Nottingham, United Kingdom",
  email: "samynandhakumar82@gmail.com",
  phone: "+447553688243",
  github: "https://github.com/nandhakumar",
  linkedin: "https://linkedin.com/in/nandhakumarm",
  website: "https://nandhakumar.dev",
  resume: "/resume.pdf",
  bio: "Master's student in Cybersecurity at Nottingham Trent University with expertise in AI/ML, software engineering, and cybersecurity. Former SDE-II at AppViewX with experience in building enterprise-scale security platforms and AI-driven solutions.",
  about: `I'm a passionate AI Engineer and Software Developer currently pursuing my Master's in Cybersecurity at Nottingham Trent University. With a strong foundation in both software engineering and artificial intelligence, I specialize in building secure, scalable, and intelligent systems.

My journey includes developing enterprise-grade security platforms at AppViewX, where I led initiatives in domain security, threat intelligence, and AI automation. I'm particularly interested in the intersection of AI and cybersecurity, exploring how machine learning can enhance security posture and threat detection.

When I'm not coding, you'll find me researching new AI architectures, contributing to open-source projects, or exploring the latest advancements in LLMs and Agentic AI.`,
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Nottingham Trent University",
    role: "Research Assistant (Engineering)",
    period: "February 2025 - July 2025",
    location: "Nottingham, UK",
    description: [
      "Contributing to the development of telerobotic avatar technology with haptic feedback for healthcare applications",
      "Focused on robot vision and software modules, applying Pose CNN and Python-based image processing",
      "Implementing object detection and tracking systems for real-time robotic control"
    ],
    technologies: ["Python", "Pose CNN", "Computer Vision", "Robotics", "OpenCV"]
  },
  {
    id: "2",
    company: "AppViewX",
    role: "Software Development Engineer II",
    period: "January 2023 - December 2024",
    location: "Coimbatore, India",
    description: [
      "Built a Centralized Domain Security and Attack Surface Management platform for enterprise domain security assessment",
      "Developed a Threat Intelligence Search Optimization console (IP/FQDN) to identify digital footprints and improve threat detection",
      "Implemented a Secure Integration Framework for Vendor Systems with sync-engine architecture, reducing development cycles from months to weeks",
      "Designed an Application Security and Infrastructure Mapping topology view to visualize application dependencies and strengthen security visibility",
      "Awarded Engineer of the Month (August 2024) and Spot Award for high-impact solutions contributing to $1.5M in customer revenue"
    ],
    technologies: ["Python", "FastAPI", "React", "MongoDB", "Docker", "Kubernetes", "AWS"]
  }
];

export const education = [
  {
    school: "Nottingham Trent University",
    degree: "Master of Science in Cybersecurity",
    period: "January 2025 - January 2026",
    location: "Nottingham, UK",
    courses: ["Ethical Hacking", "Design of Secure Systems", "Information Security", "Digital Forensics"],
    achievements: []
  },
  {
    school: "Anna University - Coimbatore Institute of Technology",
    degree: "Bachelor of Engineering in Mechanical Engineering (Gold Medalist)",
    period: "July 2019 - May 2023",
    location: "Coimbatore, India",
    courses: ["C Programming", "Python", "Thermodynamics", "Theory of Machines", "Operations Research"],
    achievements: ["Gold Medalist", "University Rank Holder"]
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "AI/ML & Frameworks",
    items: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn", "Hugging Face", "LangChain", "OpenAI API", "XGBoost", "PySpark"]
  },
  {
    category: "Web Technologies",
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "REST API", "GraphQL"]
  },
  {
    category: "Databases & Vector Stores",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Pinecone", "Redis"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS (EC2, S3, IAM)", "Git", "Jenkins", "JIRA", "Bash", "PowerShell"]
  },
  {
    category: "Cybersecurity",
    items: ["Penetration Testing", "OWASP", "Digital Forensics", "Threat Intelligence", "Secure Coding"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Malware Detection System",
    description: "Novel hybrid AI system combining XGBoost and LLMs for intelligent malware detection and classification",
    longDescription: `Developed a cutting-edge malware detection system that combines traditional machine learning (XGBoost) with Large Language Models to identify and classify malware families through behavioral analysis.

The system achieves 93% accuracy in classifying malware families via dynamic analysis and automatically generates natural language mitigation reports, significantly reducing investigation time for security analysts.

Key innovations include:
- Hybrid architecture combining XGBoost for feature extraction and LLMs for contextual understanding
- Real-time behavioral analysis sandbox
- Automated IoC (Indicators of Compromise) extraction
- Natural language report generation using fine-tuned LLMs`,
    technologies: ["Python", "XGBoost", "LLM", "TensorFlow", "Docker", "FastAPI"],
    github: "https://github.com/nandhakumar/malware-detection-ai",
    featured: true
  },
  {
    id: "2",
    title: "Enterprise Domain Security Platform",
    description: "Centralized Domain Security and Attack Surface Management platform for enterprise security assessment",
    longDescription: `Built a comprehensive security platform at AppViewX that enables enterprises to assess and manage their domain security posture proactively.

The platform includes:
- Automated domain discovery and monitoring
- Vulnerability assessment and risk scoring
- Threat intelligence integration
- Security topology visualization
- Automated remediation workflows

Impact: Enabled proactive risk reduction for 50+ enterprise customers and contributed to $1.5M in revenue.`,
    technologies: ["React", "Python", "FastAPI", "MongoDB", "AWS", "Docker"],
    featured: true
  },
  {
    id: "3",
    title: "AI Genie - Workflow Automation",
    description: "AI-driven solution that automates workflow generation through natural language prompts",
    longDescription: `Developed during a hackathon at AppViewX, AI Genie is an innovative solution that transforms natural language descriptions into executable workflows.

Features:
- Natural language to workflow translation using LLMs
- Visual workflow builder with drag-and-drop interface
- Integration with enterprise tools (JIRA, ServiceNow, Slack)
- Automated testing and validation
- Version control for workflows

Impact: Reduced workflow development time from weeks to minutes, enabling faster customer adoption and seamless product integration.`,
    technologies: ["Python", "OpenAI API", "React", "Node.js", "MongoDB"],
    github: "https://github.com/nandhakumar/ai-genie",
    featured: true
  },
  {
    id: "4",
    title: "Secure Car Rental Platform",
    description: "Full-stack secure car rental website with MERN stack and advanced security features",
    longDescription: `Designed and built a secure, responsive car rental platform from the ground up using the MERN stack (MongoDB, Express, React, Node.js).

Security implementations:
- JWT-based authentication with refresh token rotation
- Role-based access control (RBAC)
- Input validation and sanitization
- Protection against OWASP Top 10 vulnerabilities
- Encrypted data storage
- Secure payment integration

Features include real-time availability, booking management, payment processing, and admin dashboard.`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/nandhakumar/secure-car-rental",
    demo: "https://car-rental-demo.vercel.app"
  },
  {
    id: "5",
    title: "Enterprise Network Security Design",
    description: "Complete school network architecture with security implementation in Cisco Packet Tracer",
    longDescription: `Architected a functional enterprise-grade school network infrastructure using Cisco Packet Tracer, implementing comprehensive security measures.

Network Design:
- Hierarchical network topology (Core, Distribution, Access layers)
- VLAN segmentation for different departments
- Inter-VLAN routing
- Redundant links and failover mechanisms

Security Implementation:
- Access Control Lists (ACLs)
- Port security
- DHCP snooping
- Dynamic ARP inspection
- 802.1X authentication
- Firewall rules and DMZ configuration`,
    technologies: ["Cisco Packet Tracer", "Network Security", "VLAN", "ACL", "Routing Protocols"]
  },
  {
    id: "6",
    title: "Penetration Testing Toolkit",
    description: "Comprehensive web application and network penetration testing with automated reporting",
    longDescription: `Performed grey-box penetration testing scoped to OWASP guidelines, discovering critical vulnerabilities including privilege escalation and SQL injection flaws.

Methodology:
- Reconnaissance and information gathering
- Vulnerability scanning and assessment
- Exploitation and post-exploitation
- Privilege escalation testing
- Database security assessment

Deliverables:
- Detailed penetration testing reports
- Risk prioritization matrix
- Remediation guidance
- Proof-of-concept exploits
- Security awareness recommendations`,
    technologies: ["Burp Suite", "OWASP ZAP", "Metasploit", "Nmap", "SQLMap", "Python"]
  }
];

export const publications = [
  {
    title: "AI Revolutionizing Cybersecurity: An Overview",
    journal: "International Journal of Cybersecurity",
    year: "2024",
    link: "#"
  },
  {
    title: "Lock Agents in Harbor-Lock for Enterprise-Scale Penetration Testing",
    journal: "Security Conference Proceedings",
    year: "2024",
    link: "#"
  },
  {
    title: "Functional Analysis of Magneto Rheological Fluid – A Critical Review",
    journal: "Journal of Mechanical Engineering",
    year: "2023",
    link: "#"
  },
  {
    title: "Predictive Maintenance in Wheelbase Assembly",
    journal: "International Journal of Mechanical Engineering",
    year: "2023",
    link: "#"
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-ai-malware-detection",
    title: "Building an AI-Powered Malware Detection System",
    excerpt: "How I combined XGBoost and LLMs to create a hybrid malware detection system achieving 93% accuracy",
    content: `# Building an AI-Powered Malware Detection System

In the evolving landscape of cybersecurity threats, traditional signature-based malware detection is no longer sufficient. I set out to build a system that combines the power of traditional machine learning with modern Large Language Models.

## The Challenge

Modern malware is increasingly sophisticated, using polymorphic code and zero-day exploits that evade traditional detection methods. We needed a system that could:
- Detect unknown malware variants
- Provide contextual analysis
- Generate actionable intelligence
- Reduce false positives

## The Solution: Hybrid Architecture

### Phase 1: Feature Extraction with XGBoost
I used XGBoost to extract relevant features from malware samples:
- API call sequences
- File entropy analysis
- Behavioral patterns
- Network activity

### Phase 2: Contextual Analysis with LLMs
The extracted features are fed into a fine-tuned LLM that provides:
- Semantic understanding of malware behavior
- Classification into malware families
- Natural language explanation of threats
- Mitigation recommendations

## Results

- **93% accuracy** in malware family classification
- **40% reduction** in analysis time
- **Automated report generation** for security teams

## Technical Implementation

The system uses a microservices architecture with:
- **FastAPI** for the backend API
- **Docker** for sandboxed analysis
- **TensorFlow** for model serving
- **React** for the analyst dashboard

## Future Improvements

I'm currently working on:
- Real-time behavioral analysis
- Integration with threat intelligence feeds
- Federated learning for distributed detection

Stay tuned for more updates on this project!`,
    date: "2024-12-15",
    readingTime: "8 min read",
    tags: ["AI", "Cybersecurity", "Machine Learning", "XGBoost", "LLM"],
    featured: true
  },
  {
    slug: "agentic-ai-future",
    title: "The Rise of Agentic AI in Enterprise Security",
    excerpt: "Exploring how autonomous AI agents are transforming cybersecurity operations and threat response",
    content: `# The Rise of Agentic AI in Enterprise Security

Agentic AI represents the next evolution in artificial intelligence – systems that can autonomously plan, execute, and adapt to achieve specific goals. In cybersecurity, this paradigm shift is particularly transformative.

## What is Agentic AI?

Unlike traditional AI systems that respond to specific prompts, agentic AI can:
- Set and pursue goals independently
- Make decisions based on changing contexts
- Learn from outcomes and adapt strategies
- Collaborate with other agents and human operators

## Applications in Cybersecurity

### Autonomous Threat Hunting
AI agents can continuously monitor networks, identify anomalies, and investigate potential threats without human intervention.

### Incident Response Automation
When a breach is detected, agentic AI can:
- Isolate affected systems
- Collect forensic evidence
- Implement containment measures
- Generate incident reports

### Vulnerability Management
Autonomous agents can:
- Scan for vulnerabilities
- Prioritize based on risk
- Suggest remediation steps
- Verify fixes

## Challenges and Considerations

While promising, agentic AI in security raises important questions:
- **Accountability**: Who is responsible for AI decisions?
- **Transparency**: Can we explain AI actions?
- **Safety**: How do we prevent unintended consequences?

## The Future

I believe agentic AI will become essential in cybersecurity, augmenting human analysts and handling routine tasks while humans focus on strategic decisions.

What are your thoughts on AI autonomy in security?`,
    date: "2024-11-28",
    readingTime: "6 min read",
    tags: ["Agentic AI", "Cybersecurity", "Automation", "Future Tech"]
  },
  {
    slug: "llm-security-best-practices",
    title: "Securing LLM Applications: A Developer's Guide",
    excerpt: "Essential security practices for building applications with Large Language Models",
    content: `# Securing LLM Applications: A Developer's Guide

As developers increasingly integrate Large Language Models (LLMs) into applications, security considerations become paramount. Here are essential practices I've learned from building production LLM systems.

## 1. Input Validation and Sanitization

LLMs are vulnerable to prompt injection attacks. Implement:
- Strict input validation
- Prompt sanitization
- Context boundary enforcement
- User input segregation

## 2. Output Filtering

Generated content must be filtered for:
- Sensitive information leakage
- Harmful content
- Hallucinations presented as facts
- Code injection attempts

## 3. Rate Limiting and Quotas

Prevent abuse through:
- Request rate limiting
- Token usage quotas
- Cost controls
- Abuse detection

## 4. Data Privacy

Protect sensitive data:
- Never send PII to external LLM APIs
- Implement data anonymization
- Use private LLM deployments for sensitive use cases
- Audit data flows

## 5. Monitoring and Logging

Comprehensive observability:
- Log all prompts and responses
- Monitor for anomalous patterns
- Track token usage and costs
- Alert on security events

## Implementation Example

Here's a secure wrapper for OpenAI API calls:

\`\`\`python
from typing import Optional
import openai
from pydantic import BaseModel, validator

class SecurePrompt(BaseModel):
    content: str
    max_tokens: int = 150

    @validator('content')
    def validate_content(cls, v):
        # Check for injection attempts
        forbidden_patterns = ['ignore previous', 'system prompt', 'override']
        if any(pattern in v.lower() for pattern in forbidden_patterns):
            raise ValueError("Potential injection attempt detected")
        return v

def secure_completion(prompt: SecurePrompt) -> Optional[str]:
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt.content}],
            max_tokens=prompt.max_tokens,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        logger.error(f"LLM API error: {e}")
        return None
\`\`\`

## Conclusion

Security in LLM applications requires a multi-layered approach. By implementing these practices, you can build powerful AI applications while maintaining security standards.

What security challenges have you faced with LLM integrations?`,
    date: "2024-10-20",
    readingTime: "10 min read",
    tags: ["LLM", "Security", "Best Practices", "AI"]
  },
  {
    slug: "from-mechanical-to-ai",
    title: "From Mechanical Engineering to AI: My Journey",
    excerpt: "How I transitioned from mechanical engineering to becoming an AI engineer and cybersecurity specialist",
    content: `# From Mechanical Engineering to AI: My Journey

People often ask how I transitioned from mechanical engineering to AI and cybersecurity. Here's my story and the lessons learned along the way.

## The Foundation

My mechanical engineering background provided unexpected advantages:
- **Systems thinking**: Understanding complex interconnected systems
- **Mathematical rigor**: Linear algebra, calculus, and statistics
- **Problem-solving methodology**: Structured approach to challenges
- **Programming basics**: C and Python for simulations

## The Transition

### Phase 1: Self-Learning (2022)
I started with online courses:
- Andrew Ng's Machine Learning course
- Fast.ai Practical Deep Learning
- Kaggle competitions

### Phase 2: Practical Application (2023)
Built projects to apply knowledge:
- Predictive maintenance models (leveraging my mechanical background)
- Computer vision for quality inspection
- NLP for technical document analysis

### Phase 3: Professional Transition (2023-2024)
Joined AppViewX as SDE-II, focusing on:
- AI-driven security solutions
- Automation platforms
- Enterprise software development

## Key Insights

### 1. Domain Knowledge is Valuable
My mechanical background became a differentiator in industrial AI applications.

### 2. Fundamentals Matter
Engineering mathematics directly applies to ML algorithms.

### 3. Build Projects
Theory alone isn't enough. Build, break, and rebuild.

### 4. Community Learning
Engage with AI communities, contribute to open source, attend conferences.

## Advice for Career Changers

1. **Start with the basics**: Don't skip fundamentals
2. **Find intersections**: Apply AI to your current domain
3. **Build publicly**: Share your work on GitHub
4. **Network actively**: Join AI communities
5. **Stay curious**: The field evolves rapidly

## Current Focus

Now pursuing Master's in Cybersecurity at Nottingham Trent University, combining AI expertise with security specialization.

The journey continues!`,
    date: "2024-09-10",
    readingTime: "7 min read",
    tags: ["Career", "AI", "Mechanical Engineering", "Journey"]
  }
];
