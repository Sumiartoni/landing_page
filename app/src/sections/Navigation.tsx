import { useState, useEffect } from "react";
import { Coffee, Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Fitur", href: "#fitur" },
  { label: "Galeri", href: "#galeri" },
  { label: "Download", href: "#download" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              isScrolled ? "bg-[#C9A87C]" : "bg-[#1E293B]"
            }`}>
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <span className={`text-base font-bold transition-colors duration-300 ${
              isScrolled ? "text-[#1E293B]" : "text-[#1E293B]"
            }`}>
              Public Koffiee
            </span>
          </a>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1E293B] hover:text-[#C9A87C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-[#1E293B] hover:bg-[#334155] text-white rounded-lg text-xs"
            >
              <Download className="w-3.5 h-3.5 mr-1.5" />
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[#F5EBE0] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#1E293B]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1E293B]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#1E293B] font-medium py-2.5 px-3 rounded-lg hover:bg-[#F5EBE0] transition-colors duration-300 text-sm"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="bg-[#1E293B] hover:bg-[#334155] text-white rounded-lg mt-2 text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download APK
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
