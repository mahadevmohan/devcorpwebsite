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
          <div className="flex items-center gap-3 text-davy-gray">
            <Link href="#" aria-label="X" target = "_blank"><X size={16} /></Link>
            <Link href="#" aria-label="Instagram" target = "_blank" ><Instagram size={16} /></Link>
            <Link href="#" aria-label="Github" target = "_blank"><Github size={16} /></Link>
            <Link href="#" aria-label="YouTube" target = "_blank" ><Youtube size={16} /></Link>
            <Link href="https://www.linkedin.com/company/devcorptech/" aria-label="LinkedIn" target = "_blank" ><Linkedin size={16} /></Link>
          </div>
        </div>

        <div className={column}>
          <div className={heading}>Use cases</div>
          <ul className="space-y-1">
            <li><Link href="#" className={item}>UI design</Link></li>
            <li><Link href="#" className={item}>UX design</Link></li>
            <li><Link href="#" className={item}>Wireframing</Link></li>
            <li><Link href="#" className={item}>Diagramming</Link></li>
            <li><Link href="#" className={item}>Brainstorming</Link></li>
            <li><Link href="#" className={item}>Online whiteboard</Link></li>
            <li><Link href="#" className={item}>Team collaboration</Link></li>
          </ul>
        </div>

        <div className={column}>
          <div className={heading}>Explore</div>
          <ul className="space-y-1">
            <li><Link href="#" className={item}>Design</Link></li>
            <li><Link href="#" className={item}>Prototyping</Link></li>
            <li><Link href="#" className={item}>Development features</Link></li>
            <li><Link href="#" className={item}>Design systems</Link></li>
            <li><Link href="#" className={item}>Collaboration features</Link></li>
            <li><Link href="#" className={item}>Design process</Link></li>
            <li><Link href="#" className={item}>FigJam</Link></li>
          </ul>
        </div>

        <div className={column}>
          <div className={heading}>Resources</div>
          <ul className="space-y-1">
            <li><Link href="/blog" className={item}>Blog</Link></li>
            <li><Link href="#" className={item}>Best practices</Link></li>
            <li><Link href="#" className={item}>Colors</Link></li>
            <li><Link href="#" className={item}>Color wheel</Link></li>
            <li><Link href="#" className={item}>Support</Link></li>
            <li><Link href="#" className={item}>Developers</Link></li>
            <li><Link href="#" className={item}>Resource library</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


