import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Instagram, X, Youtube } from "lucide-react";

const column = "space-y-2";
const heading = "text-xs font-semibold text-foreground";
const item = "text-sm text-davy-gray hover:text-black";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-4 gap-8 items-start">
        <div className="space-y-3">
          <Image src="/Images/logo.png" alt="Devcorp logo" width={30} height={30} />
          <p className="text-sm text-davy-gray">
            Code. Create. Conquer. Building the future through innovative software development.
          </p>
          <div className="flex items-center gap-3 text-davy-gray">
            <Link href="#" aria-label="X" target="_blank"><X size={16} /></Link>
            <Link href="#" aria-label="Instagram" target="_blank"><Instagram size={16} /></Link>
            <Link href="#" aria-label="Github" target="_blank"><Github size={16} /></Link>
            <Link href="#" aria-label="YouTube" target="_blank"><Youtube size={16} /></Link>
            <Link href="https://www.linkedin.com/company/devcorptech/" aria-label="LinkedIn" target="_blank"><Linkedin size={16} /></Link>
          </div>
        </div>

        <div className={column}>
          <div className={heading}>Navigation</div>
          <ul className="space-y-1">
            <li><Link href="/" className={item}>Home</Link></li>
            <li><Link href="/projects" className={item}>Projects</Link></li>
            <li><Link href="/blog" className={item}>Blog</Link></li>
            <li><Link href="/about" className={item}>About</Link></li>
            <li><Link href="/contact" className={item}>Contact</Link></li>
          </ul>
        </div>

        <div className={column}>
          <div className={heading}>Projects</div>
          <ul className="space-y-1">
            <li><Link href="/projects/ai-fact-checker" className={item}>AI Fact Checker</Link></li>
            <li><Link href="/projects/speech-to-asl" className={item}>Speech to ASL</Link></li>
            <li><Link href="/projects/portfolio-website" className={item}>Portfolio Website</Link></li>
            <li><Link href="/projects/ecommerce-platform" className={item}>E-Commerce Platform</Link></li>
            <li><Link href="/projects/task-manager-pro" className={item}>Task Manager Pro</Link></li>
          </ul>
        </div>

        <div className={column}>
          <div className={heading}>Resources</div>
          <ul className="space-y-1">
            <li><Link href="/blog" className={item}>Dev Journal</Link></li>
            <li><Link href="/contact" className={item}>Get in Touch</Link></li>
            <li><Link href="/about" className={item}>Our Mission</Link></li>
            <li><Link href="/about" className={item}>Team</Link></li>
            <li><Link href="/about" className={item}>Values</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-davy-gray">
            <p>&copy; 2024 Devcorp. All rights reserved.</p>
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}


