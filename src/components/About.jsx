import { motion } from 'framer-motion'
import RevealText from './shared/RevealText'
import RevealImage from './shared/RevealImage'
import DrawUnderline from './shared/DrawUnderline'
import rollYellow from '../assets/brand/factory-roll-yellow.jpg'
import rollsColor from '../assets/brand/factory-rolls-color.jpg'

const FEATURES = [
  'Current-generation machinery',
  'Every batch lab-tested',
  'Made to specification',
  'Fast sampling and response',
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex w-fit items-center bg-forest px-4 py-1.5 font-head text-[13px] font-bold text-cream"
            >
              About <span className="ml-1 text-lime">Company</span>
            </motion.span>

            <h2 className="font-head font-bold text-[30px] leading-[1.15] sm:text-[36px]">
              <span className="text-lime"><RevealText text="New Machines." /></span>
              <br />
              <span className="text-forest"><RevealText text="Old-Fashioned Reliability." delay={0.15} /></span>
            </h2>
            <DrawUnderline delay={0.5} className="mt-4 h-[3px] w-16 bg-lime" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 space-y-5 text-[15px] leading-relaxed text-charcoal/80"
            >
              <p>
                Dynamic Innovations is a manufacturer and supplier of HDPE/PP
                woven fabric and bags, serving the industrial, agricultural
                and packaging sectors all over the globe.
              </p>
              <p>
                We run current-generation extrusion, weaving, lamination and
                bag-making lines. That means tighter tolerances, cleaner
                printing and faster changeovers than plants running
                decades-old equipment, and it shows in every batch we ship.
              </p>
              <p>
                We are built to be easy to work with — direct access to
                decision-makers, quick sampling and transparent communication
                from enquiry to dispatch.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <RevealImage
              src={rollYellow}
              alt="Yellow woven polypropylene fabric roll on the production floor"
              direction="right"
              className="h-[220px] w-full sm:h-[260px]"
              imgClassName="transition-transform duration-700 hover:scale-110"
            />
            <RevealImage
              src={rollsColor}
              alt="Rows of finished woven fabric rolls in red, white, blue and green"
              direction="right"
              delay={0.1}
              className="h-[220px] w-full sm:h-[260px]"
              imgClassName="transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden bg-forest/10 sm:grid-cols-4"
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ backgroundColor: '#9ab525' }}
              className="bg-lime/80 p-6 text-center transition-colors"
            >
              <p className="font-head text-[14px] font-semibold leading-snug text-forest-deep">
                {f}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
