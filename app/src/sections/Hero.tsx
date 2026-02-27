import { Button } from "@/components/ui/button";
import { Download, Star, Coffee, Smartphone, Gift, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-[#C9A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-5 w-60 h-60 bg-[#C9A87C]/15 rounded-full blur-3xl" />

      {/* Floating coffee beans decoration */}
      <div className="absolute top-20 right-10 opacity-20 animate-float">
        <Coffee className="w-8 h-8 text-[#C9A87C] rotate-12" />
      </div>
      <div className="absolute bottom-32 left-8 opacity-20 animate-float-delayed">
        <Coffee className="w-6 h-6 text-[#C9A87C] -rotate-12" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col items-center min-h-[calc(100vh-6rem)]">

          {/* Badge - Mobile Optimized */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A87C]/10 rounded-full border border-[#C9A87C]/20 mb-4">
            <Star className="w-3 h-3 text-[#C9A87C] fill-[#C9A87C]" />
            <span className="text-xs font-medium text-[#1E293B]">Aplikasi Coffee Shop #1</span>
          </div>

          {/* Main Phone Mockup - Centered & Large */}
          <div className="relative w-full max-w-[280px] mb-6 animate-slide-up">
            <div className="relative">
              <img
                src="/screenshots/Gemini_Generated_Image_x5ne3ax5ne3ax5ne.jpg"
                alt="Public Koffiee App"
                className="w-full h-auto rounded-[2rem] shadow-2xl"
                loading="eager"
              />
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 -z-10 bg-[#C9A87C]/30 rounded-[2rem] blur-2xl scale-110" />
            </div>

            {/* Floating reward card */}
            <div className="absolute -right-4 top-1/4 bg-white rounded-xl p-2.5 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#C9A87C]/10 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-[#C9A87C]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#64748B]">Reward</p>
                  <p className="text-sm font-bold text-[#1E293B]">+150 pts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Headline - Mobile Optimized */}
          <div className="text-center space-y-3 mb-6 px-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1E293B] leading-tight">
              Pesan Kopi Favoritmu{" "}
              <span className="text-[#C9A87C]">Lebih Mudah</span>
            </h1>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-xs mx-auto">
              Nikmati pengalaman memesan kopi praktis dengan menu lengkap, checkout cepat, dan reward menarik!
            </p>
          </div>

          {/* Stats Row - Compact */}
          <div className="flex justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2">
              <Coffee className="w-4 h-4 text-[#C9A87C]" />
              <div>
                <p className="text-sm font-bold text-[#1E293B]">50+</p>
                <p className="text-[10px] text-[#64748B]">Menu</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2">
              <Zap className="w-4 h-4 text-[#C9A87C]" />
              <div>
                <p className="text-sm font-bold text-[#1E293B]">3</p>
                <p className="text-[10px] text-[#64748B]">Cara Pesan</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2">
              <Gift className="w-4 h-4 text-[#C9A87C]" />
              <div>
                <p className="text-sm font-bold text-[#1E293B]">100%</p>
                <p className="text-[10px] text-[#64748B]">Reward</p>
              </div>
            </div>
          </div>

          {/* Main CTA - Download APK */}
          <div className="w-full max-w-xs space-y-3 mb-4">
            <Button
              size="lg"
              className="w-full bg-[#1E293B] hover:bg-[#334155] text-white py-5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              asChild
            >
              <a href="/public-koffiee.apk" download="public-koffiee.apk">
                <Download className="w-5 h-5 mr-2" />
                Download APK
              </a>
            </Button>
            <p className="text-center text-[10px] text-[#64748B]">
              Versi 1.0.0 • 25 MB • Android 6.0+
            </p>
          </div>

          {/* QR Code Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4 w-full max-w-xs">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center border-2 border-dashed border-[#C9A87C]/30">
                <div className="text-center">
                  <Smartphone className="w-6 h-6 text-[#C9A87C] mx-auto mb-1" />
                  <p className="text-[8px] text-[#64748B]">QR Code</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#1E293B] mb-1">Scan untuk Download</p>
                <p className="text-xs text-[#64748B]">
                  Akses website ini dari HP dan scan QR code untuk download langsung
                </p>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#C9A87C] fill-[#C9A87C]" />
              <span className="font-medium text-[#1E293B]">4.9</span>
            </div>
            <span>•</span>
            <span>10K+ Download</span>
            <span>•</span>
            <span>Gratis</span>
          </div>
        </div>
      </div>
    </section>
  );
}
