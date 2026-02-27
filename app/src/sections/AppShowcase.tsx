import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const screenshots = [
  {
    image: "/screenshots/Gemini_Generated_Image_x5ne3ax5ne3ax5ne.jpg",
    title: "Beranda",
    description: "Akses menu, voucher, referral, dan promo",
  },
  {
    image: "/screenshots/Gemini_Generated_Image_6jqz9b6jqz9b6jqz.jpg",
    title: "Menu",
    description: "Jelajahi berbagai kategori menu",
  },
  {
    image: "/screenshots/Gemini_Generated_Image_l37fj9l37fj9l37f.jpg",
    title: "Detail Produk",
    description: "Atur pesanan sesuai selera",
  },
  {
    image: "/screenshots/Gemini_Generated_Image_l7mezll7mezll7me.jpg",
    title: "Checkout",
    description: "Pilih tipe pesanan & bayar",
  },
  {
    image: "/screenshots/Gemini_Generated_Image_i1adm6i1adm6i1ad.jpg",
    title: "Point Rewards",
    description: "Kumpulkan & tukar point",
  },
  {
    image: "/screenshots/Gemini_Generated_Image_555egn555egn555e.jpg",
    title: "Referral",
    description: "Undang teman, dapat reward",
  },
];

export function AppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-12 bg-[#FDF8F3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-[#C9A87C]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A87C]/10 rounded-full mb-3">
            <Eye className="w-3 h-3 text-[#C9A87C]" />
            <span className="text-xs font-medium text-[#1E293B]">Lihat Aplikasi</span>
          </div>
          <h2 className="text-xl font-bold text-[#1E293B] mb-1">
            Tampilan <span className="text-[#C9A87C]">Aplikasi</span>
          </h2>
          <p className="text-xs text-[#64748B]">
            Antarmuka intuitif dengan desain elegan
          </p>
        </div>

        {/* Phone Carousel */}
        <div className="relative max-w-[240px] mx-auto mb-4">
          {/* Phone Frame */}
          <div className="relative aspect-[9/19] bg-[#1E293B] rounded-[2rem] p-2 shadow-2xl">
            <div className="relative w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
              <img
                src={screenshots[currentIndex].image}
                alt={screenshots[currentIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-[#C9A87C]/30 rounded-[2rem] blur-xl scale-110" />

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
          >
            <ChevronLeft className="w-4 h-4 text-[#1E293B]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform"
          >
            <ChevronRight className="w-4 h-4 text-[#1E293B]" />
          </button>
        </div>

        {/* Content Info */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#C9A87C]/10 rounded-full mb-2">
            <span className="text-[10px] font-medium text-[#C9A87C]">
              {currentIndex + 1} / {screenshots.length}
            </span>
          </div>
          <h3 className="text-sm font-bold text-[#1E293B] mb-0.5">
            {screenshots[currentIndex].title}
          </h3>
          <p className="text-xs text-[#64748B]">
            {screenshots[currentIndex].description}
          </p>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#C9A87C] w-5"
                  : "bg-[#E2E8F0] w-1.5"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Gallery */}
        <div className="mt-6 flex justify-center gap-2 overflow-x-auto pb-2">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-12 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-[#C9A87C] ring-offset-1"
                  : "opacity-50"
              }`}
            >
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
