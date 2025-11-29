'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Simulation */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green via-[#1a3a1a] to-matte-black">
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyZmYyMiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1
            className="text-[12vw] md:text-[10vw] font-serif font-bold leading-none mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-acid-green">MAIN</span>
            <span className="block text-outline">CHARACTER</span>
            <span className="block text-white">ENERGY</span>
          </motion.h1>
          <motion.p
            className="text-2xl md:text-4xl font-mono tracking-wider text-acid-green"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            IN A CUP.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-acid-green rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-acid-green rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Social Proof Marquee */}
      <div className="bg-acid-green py-6 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-3xl font-bold text-matte-black mx-8 font-mono">
              NO DUST. NO FILLERS. JUST LEAVES. ✦
            </span>
          ))}
        </motion.div>
      </div>

      {/* Product Section - Bento Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-8xl md:text-[12rem] font-serif font-bold text-center mb-20 leading-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-white">THE</span>
          <br />
          <span className="text-acid-green">DROP</span>
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Main Product Card - Spans 2 columns */}
          <motion.div
            className="md:col-span-2 md:row-span-2 glassmorphism rounded-3xl p-8 border-4 border-acid-green relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(204,255,0,0.2) 0%, transparent 70%)',
              }}
              animate={isHovering ? { scale: 1.5, opacity: 0.3 } : { scale: 1, opacity: 0.1 }}
            />

            <div className="relative z-10">
              <div className="mb-8">
                <span className="text-acid-green font-mono text-sm tracking-wider">PRODUCT_001</span>
              </div>

              {/* 3D Tea Bag Effect */}
              <motion.div
                className="w-full h-80 mb-8 relative flex items-center justify-center"
                style={{
                  transform: isHovering ? `perspective(1000px) rotateY(${(mousePosition.x / window.innerWidth - 0.5) * 30}deg) rotateX(${(mousePosition.y / window.innerHeight - 0.5) * -30}deg)` : 'none'
                }}
              >
                <div className="glassmorphism w-48 h-64 rounded-2xl border-2 border-acid-green/50 relative shadow-[0_0_50px_rgba(204,255,0,0.3)]">
                  <div className="absolute inset-4 border border-acid-green/30 rounded-xl"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-8 bg-acid-green rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-serif font-bold text-acid-green">K</span>
                  </div>
                </div>
              </motion.div>

              <h3 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                KIRAN TEA
              </h3>
              <p className="text-xl text-gray-400 font-mono mb-6">
                AUTHENTIC_DARJEELING_ORIGIN
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-2">PRICE_TAG:</p>
                  <p className="text-6xl font-bold text-acid-green font-mono">₹900</p>
                  <p className="text-xl text-gray-400 font-mono">/ THE GOOD STUFF</p>
                </div>
                <motion.button
                  className="bg-acid-green text-matte-black px-8 py-4 rounded-full font-mono font-bold text-lg border-4 border-matte-black hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Side Cards */}
          <motion.div
            className="glassmorphism rounded-3xl p-8 border-2 border-acid-green/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-3xl font-serif font-bold text-acid-green mb-4">ORIGIN</h4>
            <p className="text-gray-300 font-mono leading-relaxed">
              HAND_PICKED<br />
              FROM_THE_SLOPES<br />
              OF_DARJEELING<br />
              <span className="text-acid-green">→ 100% PURE</span>
            </p>
          </motion.div>

          <motion.div
            className="glassmorphism rounded-3xl p-8 border-2 border-acid-green/50"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-3xl font-serif font-bold text-acid-green mb-4">VIBE</h4>
            <p className="text-gray-300 font-mono leading-relaxed">
              MORNING_RITUAL<br />
              AFTERNOON_BREAK<br />
              NIGHT_OWL_FUEL<br />
              <span className="text-acid-green">→ 24/7 ENERGY</span>
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-1 glassmorphism rounded-3xl p-8 border-2 border-acid-green/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-3xl font-serif font-bold text-acid-green mb-4">STATS</h4>
            <div className="space-y-4 font-mono">
              <div>
                <p className="text-sm text-gray-500">WEIGHT:</p>
                <p className="text-2xl text-white">1.0 KG</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">SERVES:</p>
                <p className="text-2xl text-white">~100 CUPS</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">GRADE:</p>
                <p className="text-2xl text-acid-green">PREMIUM++</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 glassmorphism rounded-3xl p-8 border-2 border-acid-green/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-acid-green/10 to-transparent"></div>
            <div className="relative z-10">
              <h4 className="text-4xl font-serif font-bold text-white mb-4">WHY KIRAN?</h4>
              <p className="text-xl text-gray-300 font-mono leading-relaxed mb-6">
                We don't do basic. Every leaf is hand-selected from Darjeeling's finest estates.
                No dust, no fillers, no compromises. Just pure, premium tea that hits different.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ZERO_ADDITIVES', 'DIRECT_TRADE', 'CARBON_NEUTRAL', 'GEN_Z_APPROVED'].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-matte-black border-2 border-acid-green text-acid-green font-mono text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Element - Color Mixer */}
      <section className="py-20 px-4 bg-forest-green">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-6xl md:text-8xl font-serif font-bold text-acid-green mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            BREW YOUR VIBE
          </motion.h2>
          <p className="text-xl font-mono text-gray-400 mb-12">
            [ INTERACTIVE_STRENGTH_SELECTOR ]
          </p>

          <div className="glassmorphism rounded-3xl p-12 border-4 border-acid-green">
            <TeaStrengthSelector />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-acid-green">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-7xl md:text-9xl font-serif font-bold text-matte-black mb-8 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            DROP<br />IS<br />LIVE
          </motion.h2>
          <motion.button
            className="bg-matte-black text-acid-green px-16 py-6 rounded-full font-mono font-bold text-2xl border-4 border-matte-black hover:bg-forest-green transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            SECURE THE BAG →
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-matte-black py-12 px-4 border-t-2 border-acid-green">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-serif font-bold text-acid-green mb-4">KIRAN</h3>
              <p className="font-mono text-sm text-gray-400">PREMIUM_TEA_EXPERIENCE</p>
            </div>
            <div>
              <h4 className="font-mono font-bold text-acid-green mb-4">LINKS</h4>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li>[ ABOUT ]</li>
                <li>[ ORIGIN ]</li>
                <li>[ CONTACT ]</li>
                <li>[ FAQ ]</li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono font-bold text-acid-green mb-4">SOCIALS</h4>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li>[ INSTAGRAM ]</li>
                <li>[ TWITTER ]</li>
                <li>[ TIKTOK ]</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center font-mono text-sm text-gray-500">
            <p>© 2025 KIRAN TEA. ALL RIGHTS RESERVED. MADE WITH ♥ FOR GEN Z</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function TeaStrengthSelector() {
  const [strength, setStrength] = useState(50)
  const [brewing, setBrewing] = useState(false)

  const strengthLabels = [
    { value: 0, label: 'LIGHT_SIP', color: '#8B7355' },
    { value: 25, label: 'EASY_GOING', color: '#6B5345' },
    { value: 50, label: 'BALANCED', color: '#4A3525' },
    { value: 75, label: 'STRONG_VIBE', color: '#2A1505' },
    { value: 100, label: 'MAIN_CHARACTER', color: '#0a0a0a' }
  ]

  const currentLabel = strengthLabels.reduce((prev, curr) =>
    Math.abs(curr.value - strength) < Math.abs(prev.value - strength) ? curr : prev
  )

  return (
    <div className="space-y-8">
      <div className="relative h-64 flex items-center justify-center">
        <motion.div
          className="w-48 h-48 rounded-full border-4 border-acid-green relative"
          style={{
            backgroundColor: currentLabel.color,
            boxShadow: `0 0 ${strength}px rgba(204,255,0,0.5)`
          }}
          animate={brewing ? { rotate: 360 } : {}}
          transition={{ duration: 2, repeat: brewing ? Infinity : 0, ease: "linear" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-acid-green font-mono">{strength}%</span>
          </div>
        </motion.div>
      </div>

      <div className="space-y-4">
        <input
          type="range"
          min="0"
          max="100"
          value={strength}
          onChange={(e) => setStrength(parseInt(e.target.value))}
          className="w-full h-3 bg-matte-black rounded-full appearance-none cursor-pointer accent-acid-green"
          style={{
            background: `linear-gradient(to right, #ccff00 0%, #ccff00 ${strength}%, #0a0a0a ${strength}%, #0a0a0a 100%)`
          }}
        />
        <p className="text-3xl font-mono font-bold text-acid-green">
          {currentLabel.label}
        </p>
      </div>

      <motion.button
        className="bg-acid-green text-matte-black px-8 py-4 rounded-full font-mono font-bold text-lg border-4 border-matte-black w-full"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          setBrewing(true)
          setTimeout(() => setBrewing(false), 2000)
        }}
      >
        {brewing ? 'BREWING...' : 'START BREWING →'}
      </motion.button>
    </div>
  )
}
