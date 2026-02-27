import { Button } from "@/components/ui/button";
import { Download, Star, CheckCircle2, Smartphone, Shield, Clock } from "lucide-react";

const benefits = [
  "Gratis download, tanpa biaya",
  "Voucher diskon pertama install",
  "Point reward tiap transaksi",
  "Promo eksklusif pengguna app",
];

export function DownloadCTA() {
  return (
    <section className="py-12 bg-[#1E293B] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-[#C9A87C]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-5 w-60 h-60 bg-[#C9A87C]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A87C]/20 rounded-full mb-4 border border-[#C9A87C]/30">
            <Download className="w-3 h-3 text-[#C9A87C]" />
            <span className="text-xs font-medium text-[#C9A87C]">Download Sekarang</span>
          </div>

          {/* Headline */}
          <h2 className="text-xl font-bold text-white mb-2 leading-tight">
            Mulai Pesan Kopi{" "}
            <span className="text-[#C9A87C]">Lebih Mudah</span>
          </h2>

          <p className="text-xs text-gray-400 mb-6 max-w-xs mx-auto">
            Download Public Koffiee dan nikmati berbagai keuntungan menarik
          </p>

          {/* App Info Cards */}
          <div className="flex justify-center gap-3 mb-6">
            <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#C9A87C]" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400">Versi</p>
                <p className="text-xs text-white font-medium">1.0.0</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-[#C9A87C]" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400">Ukuran</p>
                <p className="text-xs text-white font-medium">25 MB</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C9A87C]" />
              <div className="text-left">
                <p className="text-[10px] text-gray-400">Android</p>
                <p className="text-xs text-white font-medium">6.0+</p>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-left">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A87C] flex-shrink-0" />
                <span className="text-[10px] text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <Button
            size="lg"
            className="w-full max-w-xs bg-[#C9A87C] hover:bg-[#B89A6F] text-white py-5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#C9A87C]/20 mb-3"
            asChild
          >
            <a href="/public-koffiee.apk" download="public-koffiee.apk">
              <Download className="w-5 h-5 mr-2" />
              Download APK
            </a>
          </Button>

          <p className="text-[10px] text-gray-500 mb-6">
            File aman & terpercaya • Scan dengan antivirus
          </p>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#C9A87C] fill-[#C9A87C]" />
                ))}
              </div>
              <span className="text-white text-xs font-medium ml-1">4.9</span>
            </div>
            <div className="w-px h-3 bg-gray-600" />
            <div className="text-xs">
              <span className="text-white font-medium">10K+</span> Download
            </div>
            <div className="w-px h-3 bg-gray-600" />
            <div className="flex items-center gap-1 text-xs">
              <Clock className="w-3 h-3" />
              <span>Gratis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
