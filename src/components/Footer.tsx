import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Youtube, ExternalLink } from "lucide-react";

const column = "space-y-2";
const heading = "text-xs font-semibold text-black uppercase tracking-wide";
const item = "text-sm text-davy-gray hover:text-black transition-colors duration-200";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Brand Section */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/Images/logo.png" alt="Devcorp logo" width={32} height={32} />
            <span className="text-xl font-bold text-black">Devcorp</span>
          </div>
          <p className="text-sm text-davy-gray leading-relaxed">
            Building innovative software solutions with modern technologies. From enterprise applications to cutting-edge web experiences.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/devcorptech"
              aria-label="GitHub"
              target="_blank"
              className="text-davy-gray hover:text-black transition-colors duration-200"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/devcorptech/"
              aria-label="LinkedIn"
              target="_blank"
              className="text-davy-gray hover:text-black transition-colors duration-200"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="https://www.youtube.com/@devcorptech"
              aria-label="YouTube"
              target="_blank"
              className="text-davy-gray hover:text-black transition-colors duration-200"
            >
              <Youtube size={18} />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className={column}>
          <div className={heading}>Navigation</div>
          <ul className="space-y-2">
            <li><Link href="/" className={item}>Home</Link></li>
            <li><Link href="/projects" className={item}>Projects</Link></li>
            <li><Link href="/blog" className={item}>Blog</Link></li>
            <li><Link href="/about" className={item}>About Us</Link></li>
            <li><Link href="/contact" className={item}>Contact</Link></li>
          </ul>
        </div>

        {/* Featured Projects */}
        <div className={column}>
          <div className={heading}>Featured Projects</div>
          <ul className="space-y-2">
            <li>
              <Link href="/projects/electronic-document-management" className={`${item} flex items-center gap-1`}>
                EDMS System
                <ExternalLink size={12} className="opacity-50" />
              </Link>
            </li>
            <li>
              <Link href="/projects/devcorp-website" className={`${item} flex items-center gap-1`}>
                Devcorp Website
                <ExternalLink size={12} className="opacity-50" />
              </Link>
            </li>
            <li>
              <Link href="/projects/what-if-market" className={`${item} flex items-center gap-1`}>
                What-If Market
                <ExternalLink size={12} className="opacity-50" />
              </Link>
            </li>
            <li>
              <Link href="/projects/ai-news-outlet" className={`${item} flex items-center gap-1`}>
                AI News Outlet
                <ExternalLink size={12} className="opacity-50" />
              </Link>
            </li>
            <li>
              <Link href="/projects" className={`${item} text-blue-600 hover:text-blue-800`}>
                View All Projects →
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources & Links */}
        <div className={column}>
          <div className={heading}>Resources</div>
          <ul className="space-y-2">
            <li><Link href="/blog" className={item}>Development Blog</Link></li>
            <li><Link href="/about#team" className={item}>Our Team</Link></li>
            <li><Link href="/about#mission" className={item}>Mission & Values</Link></li>
            <li><Link href="/contact" className={item}>Get In Touch</Link></li>
            <li>
              <a
                href="https://github.com/mahadevmohan/devcorpwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className={`${item} flex items-center gap-1`}
              >
                View Source Code
                <ExternalLink size={12} className="opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 bg-seasalt">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-davy-gray">
            <div className="flex items-center gap-4">
              <p>&copy; 2025 Devcorp. All rights reserved.</p>
              <span className="hidden sm:inline">•</span>
              <p className="text-xs">
                Built with <span className="font-semibold text-black">Next.js 15</span>,
                <span className="font-semibold text-black"> TypeScript</span>, and
                <span className="font-semibold text-black"> Tailwind CSS</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/contact" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


