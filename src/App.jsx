import { useMemo } from 'react'

function App() {
  const whatsapp = '+62-857-8447-3515'
  const whatsappLink = useMemo(() => {
    const num = whatsapp.replace(/[^0-9]/g, '')
    const text = encodeURIComponent('Halo Ste-Crispy! Saya ingin memesan ayam crispy.')
    return `https://wa.me/${num}?text=${text}`
  }, [whatsapp])

  const email = 'order@ste-crispy.id'

  const menu = [
    {
      name: 'Crispy Original',
      desc: 'Ayam crispy klasik dengan bumbu gurih khas.',
      price: 'Rp18.000',
      img: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Crispy Spicy',
      desc: 'Level pedas nikmat yang bikin nagih.',
      price: 'Rp20.000',
      img: 'https://images.unsplash.com/photo-1514518520219-662f0f66fd22?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Crispy Cheese',
      desc: 'Taburan keju melimpah di atas ayam renyah.',
      price: 'Rp22.000',
      img: 'https://images.unsplash.com/photo-1604908176997-43162b3d5b9a?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Crispy BBQ',
      desc: 'Glaze BBQ smoky manis-gurih.',
      price: 'Rp22.000',
      img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Crispy Wings',
      desc: 'Sayap ayam crispy bumbu spesial.',
      price: 'Rp19.000',
      img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1400&auto=format&fit=crop',
    },
    {
      name: 'Crispy Combo',
      desc: 'Paket ayam, kentang, dan minum hemat.',
      price: 'Rp35.000',
      img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-900 to-neutral-900 text-white relative overflow-hidden">
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-pink-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/10 to-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',backgroundSize:'24px 24px'}} />
      </div>

      {/* header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40 bg-zinc-900/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg sm:text-xl font-semibold tracking-wide">Ste-Crispy</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#menu" className="hover:text-white transition">Menu</a>
            <a href="#about" className="hover:text-white transition">Tentang</a>
            <a href="#contact" className="hover:text-white transition">Kontak</a>
            <a href={whatsappLink} target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-zinc-900 font-semibold px-4 py-2 rounded-md shadow-amber-500/20 shadow hover:brightness-95 transition">
              Order via WA
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 mb-4">
              Premium Crunch • Halal • Fresh Daily
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Ayam Crispy Elegan, Rasa Juara.
            </h1>
            <p className="mt-4 text-zinc-300 max-w-xl">
              Nikmati kerenyahan sempurna dengan bumbu khas Ste-Crispy. Dibuat dari bahan segar, dimasak dengan hati, untuk pengalaman makan yang berkelas.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition shadow">
                Lihat Menu
              </a>
              <a href={whatsappLink} target="_blank" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 text-zinc-900 font-semibold hover:brightness-95 transition shadow">
                Pesan Sekarang
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-rose-500/20 blur-2xl rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1625944525603-c5b4d7454d06?q=80&w=1600&auto=format&fit=crop"
                alt="Ste-Crispy Hero"
                className="h-72 sm:h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* menu */}
      <section id="menu" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Menu Unggulan</h2>
              <p className="text-zinc-300 mt-2">Pilihan terbaik Ste-Crispy untuk kamu.</p>
            </div>
            <a href={whatsappLink} target="_blank" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition">
              Order via WhatsApp
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((item, idx) => (
              <article key={idx} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="text-amber-300 font-bold">{item.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-300">{item.desc}</p>
                  <div className="mt-4">
                    <a href={whatsappLink} target="_blank" className="inline-flex text-sm px-3 py-2 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 text-zinc-900 font-semibold hover:brightness-95 transition">
                      Pesan ini
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold">Tentang Ste-Crispy</h2>
            <p className="mt-4 text-zinc-300">
              Ste-Crispy hadir untuk membawa sensasi ayam crispy yang elegan ke level berikutnya. Kami memilih bahan berkualitas, teknik goreng presisi, dan racikan bumbu yang seimbang.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-zinc-200">
              <li className="flex items-center gap-2"><Dot /> Crispy tahan lama</li>
              <li className="flex items-center gap-2"><Dot /> Minyak selalu fresh</li>
              <li className="flex items-center gap-2"><Dot /> Rasa konsisten</li>
              <li className="flex items-center gap-2"><Dot /> Halal & higienis</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-rose-500/20 blur-2xl rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1600&auto=format&fit=crop"
                alt="Tentang Ste-Crispy"
                className="h-72 sm:h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <footer id="contact" className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <p className="font-semibold">Ste-Crispy</p>
              <p className="text-sm text-zinc-300">Elegan. Renyah. Menggugah selera.</p>
            </div>
          </div>

          <div className="md:text-right space-y-2">
            <p className="text-sm text-zinc-300">Email: <a href={`mailto:${email}`} className="underline hover:text-white">{email}</a></p>
            <p className="text-sm text-zinc-300">WhatsApp: <a href={whatsappLink} target="_blank" className="underline hover:text-white">{whatsapp}</a></p>
            <div className="pt-2">
              <a href={whatsappLink} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-zinc-400">© {new Date().getFullYear()} Ste-Crispy. All rights reserved.</div>
      </footer>
    </div>
  )
}

function Logo() {
  return (
    <div className="relative grid place-items-center h-10 w-10 rounded-xl bg-white text-zinc-900 shadow border border-white/20 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'linear-gradient(135deg, #f59e0b22, #ef444422, #ec489922)'}} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative">
        <path d="M6 12c0-3 2.5-6 6-6s6 3 6 6-2.5 6-6 6c-1.7 0-3.2-.7-4.3-1.8" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M7 14c1.2-1.5 3.8-2.2 6-1.6 1.6.4 2.7 1.3 3.2 2.6" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M5 8c1.2.4 2.7.4 4 0 1.2-.4 2.8-1.5 3-3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    </div>
  )
}

function Dot() {
  return (
    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
  )
}

export default App
