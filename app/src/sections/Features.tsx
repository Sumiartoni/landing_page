import { 
  Coffee, 
  ShoppingCart, 
  Gift, 
  Users, 
  Zap, 
  Star,
  Truck,
  CreditCard
} from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Banyak Pilihan Menu",
    description: "Kopi, minuman segar, dan camilan favorit dengan kategori terorganisir",
    color: "text-[#C9A87C]",
    bgColor: "bg-[#C9A87C]/10",
  },
  {
    icon: ShoppingCart,
    title: "Checkout Cepat",
    description: "Pilih Dine-in, Pickup, atau Delivery dengan pembayaran mudah",
    color: "text-[#1E293B]",
    bgColor: "bg-[#1E293B]/10",
  },
  {
    icon: Zap,
    title: "Atur Sesuai Selera",
    description: "Pilih level es, tambahan shot, dan preferensi lainnya",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Gift,
    title: "Point Reward",
    description: "Dapatkan point setiap transaksi dan tukarkan dengan menu gratis",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Undang teman dan dapatkan free coffee untuk setiap pendaftar",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Star,
    title: "Voucher & Promo",
    description: "Nikmati berbagai voucher dan promo eksklusif di aplikasi",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function Features() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-40 h-40 bg-[#C9A87C]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A87C]/10 rounded-full mb-4">
            <Star className="w-3 h-3 text-[#C9A87C] fill-[#C9A87C]" />
            <span className="text-xs font-medium text-[#1E293B]">Fitur Unggulan</span>
          </div>
          <h2 className="text-xl font-bold text-[#1E293B] mb-2">
            Kemudahan yang Kamu <span className="text-[#C9A87C]">Dapatkan</span>
          </h2>
          <p className="text-xs text-[#64748B]">
            Public Koffiee hadir dengan fitur lengkap untuk pengalaman terbaik
          </p>
        </div>

        {/* Features Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FDF8F3] rounded-xl p-3.5 border border-[#E2E8F0]/50"
            >
              {/* Icon */}
              <div className={`w-9 h-9 ${feature.bgColor} rounded-lg flex items-center justify-center mb-2.5`}>
                <feature.icon className={`w-4 h-4 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xs font-bold text-[#1E293B] mb-1 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[10px] text-[#64748B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats - Compact */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-[#FDF8F3] rounded-xl px-4 py-2.5">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#C9A87C]" />
              <span className="text-[10px] text-[#64748B]">Cepat</span>
            </div>
            <div className="w-px h-4 bg-[#E2E8F0]" />
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-[#C9A87C]" />
              <span className="text-[10px] text-[#64748B]">Aman</span>
            </div>
            <div className="w-px h-4 bg-[#E2E8F0]" />
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#C9A87C]" />
              <span className="text-[10px] text-[#64748B]">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
