export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface CtaLink {
  label: string;
  url: string;
}

export interface Hero {
  badge: string;
  title: string;
  subtitle: string;
  socialLinks: SocialLinks;
  primaryCta: CtaLink;
  secondaryCtas: CtaLink[];
  stats?: { label: string; value: string }[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  imageUrl: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  company: string;
  industry?: string;
  image?: string;
  link?: string;
  videoLink?: string;
}

export type EmploymentType =
  | "full-time"
  | "contract"
  | "freelance"
  | "consulting"
  | "founder"
  | "self-employed";

export type EmploymentStatus = "past" | "current";

export type WorkMode = "on-site" | "remote" | "hybrid";

export interface TechTag {
  label: string;
  category?: "language" | "framework" | "platform" | "cloud" | "database" | "tooling";
}

export interface EmploymentLink {
  kind: "company" | "project" | "case-study" | "repository" | "external";
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  employmentType: EmploymentType;
  status: EmploymentStatus;
  workMode?: WorkMode;
  location?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights?: string[];
  achievements?: string[];
  stack?: TechTag[];
  links?: EmploymentLink[];
  featured?: boolean;
}

export interface Contact {
  heading: string;
  description: string;
  location: string;
}

export interface Profile {
  name: string;
  title: string;
  avatar: string;
  resumeLink: string;
  socialLinks: SocialLinks;
}

export interface About {
  profile: Profile;
  agency: string;
  originStory: string[];
}

export interface ContentData {
  hero: Hero;
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  experiences: Experience[];
  contact: Contact;
  about: About;
}
