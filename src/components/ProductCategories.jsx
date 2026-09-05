import { motion } from 'framer-motion'
import RevealText from './shared/RevealText'
import RevealImage from './shared/RevealImage'
import TiltCard from './shared/TiltCard'
import DrawUnderline from './shared/DrawUnderline'

import wovenBagsSacks from '../assets/brand/woven-bags-sacks.png'
import boppPrinted from '../assets/brand/bopp-printed-bags.png'
import gussetedBox from '../assets/brand/gusseted-box-bags.png'
import wovenFabric from '../assets/brand/woven-fabric.png'
import laminatedFabric from '../assets/brand/laminated-fabric.png'
import ldHmLiners from '../assets/brand/ld-hm-liners.png'

const CATEGORIES = [
  {
    title: 'HDPE/PP Woven Bags & Sacks',
    desc: 'Durable, flexible and cost-effective bags for bulk commodities. Available with or without liner, with UV-stabilised options and humidity-resistant printing.',
    img: wovenBagsSacks,
    dir: 'up',
  },
  {
    title: 'BOPP Printed Bags',
    desc: 'High-clarity, multi-colour printing with excellent tensile strength and gloss. Shelf-ready packaging that represents your brand.',
    img: boppPrinted,
    dir: 'left',
  },
  {
    title: 'Gusseted & Box Bags',
    desc: 'Shape-retaining constructions for efficient stacking, palletisation and maximum space utilisation.',
    img: gussetedBox,
    dir: 'right',
  },
  {
    title: 'HDPE/PP Woven Fabric',
    desc: 'Tubular and flat fabric in a range of widths and GSM, woven on high-speed circular looms under strict quality parameters.',
    img: wovenFabric,
    dir: 'left',
  },
  {
    title: 'Laminated/Coated Fabric',
    desc: 'PP-coated fabric that shields contents from moisture and dust, built for demanding storage and transit conditions.',
    img: laminatedFabric,
    dir: 'up',
  },
  {
    title: 'LD/HM Liners',
    desc: 'Inner liners for moisture-sensitive and hygroscopic goods, protecting product integrity from filling to final delivery.',
    img: ldHmLiners,
    dir: 'right',
  },
]

export default function ProductCategories() {
  return (
    <section id="products" className="bg-forest py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[12.5px] tracking-wide text-lime"
        >
          Product Range
        </motion.p>
        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-head font-bold text-[30px] leading-tight text-cream sm:text-[38px] max-w-xl">
            <RevealText text="Packaging for every load, every market" />
            <DrawUnderline delay={0.4} className="mt-3 h-[3px] w-16 bg-lime" />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-sm text-[14px] text-cream/55"
          >
            From single sacks to bulk containers. Woven, laminated, lined and
            as per your specifications.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group bg-cream"
            >
              <TiltCard className="h-56 overflow-hidden bg-white" max={6} scale={1}>
                <RevealImage
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full"
                  fit="contain" imgClassName="p-6 transition-transform duration-500 group-hover:scale-110"
                  direction={c.dir}
                  delay={(i % 3) * 0.05}
                />
              </TiltCard>
              <div className="border-t-2 border-forest bg-forest p-4">
                <h3 className="font-head text-[15px] font-bold text-cream">{c.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-[13.5px] leading-relaxed text-charcoal/70">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
