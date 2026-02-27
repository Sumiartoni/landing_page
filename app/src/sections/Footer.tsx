import { Coffee, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 bg-[#C9A87C] rounded-lg flex items-center justify-center">
            <Coffee className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold">Public Koffiee</span>
        </div>

        <p className="text-center text-xs text-gray-400 mb-6 max-w-xs mx-auto">
          Aplikasi coffee shop terbaik untuk memesan kopi favoritmu dengan mudah
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          <a
            href="#"
            className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A87C] transition-colors duration-300"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A87C] transition-colors duration-300"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#C9A87C] transition-colors duration-300"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Contact */}
        <div className="flex justify-center gap-4 mb-6 text-xs text-gray-400">
          <a href="mailto:support@publickoffiee.com" className="flex items-center gap-1.5 hover:text-[#C9A87C] transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <a href="tel:+6281234567890" className="flex items-center gap-1.5 hover:text-[#C9A87C] transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>Telepon</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 text-xs mb-6">
          <a href="#" className="text-gray-400 hover:text-[#C9A87C] transition-colors">
            Tentang Kami
          </a>
          <a href="#" className="text-gray-400 hover:text-[#C9A87C] transition-colors">
            FAQ
          </a>
          <a href="#" className="text-gray-400 hover:text-[#C9A87C] transition-colors">
            Kebijakan Privasi
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-3">
          <p className="text-center text-[10px] text-gray-500">
            © {new Date().getFullYear()} Public Koffiee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
