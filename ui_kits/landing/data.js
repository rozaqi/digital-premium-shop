/* Landing kit — mock store data. Edit freely; structure mirrors what a
   real product feed would provide. */
window.SHOP_DATA = {
  whatsapp: '#wa',

  categories: [
    { label: 'Streaming', icon: 'play', count: 12, tint: '#5046E5' },
    { label: 'AI Tools', icon: 'sparkles', count: 8, tint: '#10B981' },
    { label: 'Productivity', icon: 'briefcase', count: 9, tint: '#F59E0B' },
    { label: 'Cloud Storage', icon: 'cloud', count: 5, tint: '#0EA5E9' },
    { label: 'Learning', icon: 'graduation-cap', count: 7, tint: '#8B5CF6' },
    { label: 'Design Tools', icon: 'palette', count: 6, tint: '#EC4899' },
  ],

  products: [
    { name: 'Netflix Premium', category: 'Streaming', price: 'Rp25.000', oldPrice: 'Rp54.000', duration: '1 Bulan',
      brandColor: '#E50914', brandInitial: 'N', badge: { tone: 'bestseller', label: 'Best Seller' },
      benefits: ['4K Ultra HD', 'Garansi penuh', 'Aktivasi cepat'] },
    { name: 'Spotify Premium', category: 'Streaming', price: 'Rp18.000', oldPrice: 'Rp54.900', duration: '1 Bulan',
      brandColor: '#1DB954', brandInitial: 'S', badge: { tone: 'popular', label: 'Popular' },
      benefits: ['Tanpa iklan', 'Offline mode', 'Garansi penuh'] },
    { name: 'ChatGPT Plus', category: 'AI Tools', price: 'Rp75.000', duration: '1 Bulan',
      brandColor: '#10A37F', brandInitial: 'G', badge: { tone: 'new', label: 'New' },
      benefits: ['GPT-4o akses', 'Prioritas server', 'Garansi penuh'] },
    { name: 'Canva Pro', category: 'Design Tools', price: 'Rp15.000', oldPrice: 'Rp75.000', duration: '1 Bulan',
      brandColor: '#7D2AE8', brandInitial: 'C', badge: { tone: 'bestseller', label: 'Best Seller' },
      benefits: ['100M+ aset premium', 'Background remover', 'Brand kit'] },
    { name: 'YouTube Premium', category: 'Streaming', price: 'Rp20.000', duration: '1 Bulan',
      brandColor: '#FF0000', brandInitial: 'Y', badge: { tone: 'popular', label: 'Popular' },
      benefits: ['Tanpa iklan', 'Background play', 'YouTube Music'] },
    { name: 'Google One', category: 'Cloud Storage', price: 'Rp22.000', duration: '1 Bulan',
      brandColor: '#1A73E8', brandInitial: 'G', badge: null,
      benefits: ['100 GB storage', 'Backup otomatis', 'Garansi penuh'] },
  ],

  benefits: [
    { icon: 'wallet', title: 'Harga lebih hemat', desc: 'Akun premium resmi dengan harga jauh di bawah harga normal.' },
    { icon: 'zap', title: 'Aktivasi cepat', desc: 'Pesanan diproses cepat — akun siap dipakai dalam hitungan menit.' },
    { icon: 'headphones', title: 'Support after-sales', desc: 'Ada kendala? Admin kami responsif dan siap bantu setiap hari.' },
    { icon: 'layers', title: 'Pilihan produk lengkap', desc: 'Dari streaming, AI tools, sampai cloud storage — semua ada.' },
    { icon: 'shield-check', title: 'Garansi produk', desc: 'Semua akun bergaransi sesuai ketentuan masing-masing produk.' },
    { icon: 'check-circle', title: 'Cocok untuk semua', desc: 'Untuk kebutuhan personal, belajar, hiburan, maupun kerja.' },
  ],

  steps: [
    { icon: 'package-check', title: 'Pilih produk', desc: 'Cari akun premium yang kamu butuhkan dari katalog.' },
    { icon: 'message-circle', title: 'Chat admin', desc: 'Klik order atau langsung chat admin via WhatsApp.' },
    { icon: 'credit-card', title: 'Lakukan pembayaran', desc: 'Bayar lewat transfer, e-wallet, atau QRIS.' },
    { icon: 'send', title: 'Akun dikirim', desc: 'Akun langsung dikirim dan siap kamu gunakan.' },
  ],

  testimonials: [
    { name: 'Rizky Alfian', product: 'Netflix Premium', rating: 5, color: '#5046E5',
      comment: 'Prosesnya cepat banget, akun langsung aktif kurang dari 10 menit. Adminnya ramah juga. Recommended!' },
    { name: 'Putri Maharani', product: 'Canva Pro', rating: 5, color: '#EC4899',
      comment: 'Harga jauh lebih hemat dibanding langganan resmi dan fiturnya lengkap. Bakal langganan lagi di sini.' },
    { name: 'Bagus Pratama', product: 'ChatGPT Plus', rating: 5, color: '#10B981',
      comment: 'Sempat ragu, tapi ternyata aman dan bergaransi. Support-nya fast response kalau ada pertanyaan.' },
    { name: 'Dewi Lestari', product: 'Spotify Premium', rating: 5, color: '#F59E0B',
      comment: 'Murah, cepat, dan akun stabil. Sudah beberapa kali order dan selalu lancar. Mantap!' },
    { name: 'Fajar Nugroho', product: 'YouTube Premium', rating: 4, color: '#0EA5E9',
      comment: 'Pelayanan oke dan harga bersaing. Aktivasi sedikit nunggu tapi tetap sesuai janji.' },
    { name: 'Sinta Wijaya', product: 'Google One', rating: 5, color: '#8B5CF6',
      comment: 'Storage langsung nambah, transaksi gampang lewat WhatsApp. Adminnya sopan dan jelas.' },
  ],

  faqs: [
    { question: 'Apakah akun bergaransi?', answer: 'Ya. Semua akun bergaransi sesuai ketentuan masing-masing produk. Jika ada kendala dalam masa garansi, kami bantu ganti atau perbaiki tanpa ribet.' },
    { question: 'Berapa lama proses aktivasi?', answer: 'Rata-rata 5–15 menit setelah pembayaran dikonfirmasi. Untuk beberapa produk, akun bisa dikirim instan.' },
    { question: 'Apakah bisa request produk lain?', answer: 'Bisa. Chat admin via WhatsApp dan sebutkan produk yang kamu butuhkan — kami cek ketersediaannya untuk kamu.' },
    { question: 'Metode pembayaran apa saja yang tersedia?', answer: 'Kami menerima transfer bank, e-wallet (DANA, OVO, GoPay), dan QRIS. Pilih yang paling nyaman buat kamu.' },
    { question: 'Bagaimana jika akun bermasalah?', answer: 'Langsung hubungi admin dengan menyertakan bukti order. Selama masih dalam masa garansi, akan kami bantu selesaikan secepatnya.' },
  ],

  nav: [
    { label: 'Home', href: '#home' },
    { label: 'Produk', href: '#produk' },
    { label: 'Benefit', href: '#benefit' },
    { label: 'Cara Order', href: '#cara-order' },
    { label: 'FAQ', href: '#faq' },
  ],
};
