import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 text-center text-sm text-gray-100 opacity-80 py-4 border-t border-white/20">
      <div className="flex justify-center gap-6 mb-2">
        <a href="mailto:youremail@example.com" target="_blank" rel="noreferrer">
          <Mail />
        </a>
        <a href="https://github.com/njainmpi" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href="https://linkedin.com/in/naman-jain-a55a1171" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">
          <Globe />
        </a>
      </div>
      © {new Date().getFullYear()} Naman Jain. All rights reserved.
    </footer>
  );
}
