import SmoothScroll from './components/shared/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import VisionMissionValues from './components/VisionMissionValues'
import ManufacturingProcess from './components/ManufacturingProcess'
import ProductCategories from './components/ProductCategories'
import Clients from './components/Clients'
import MaterialsPrinting from './components/MaterialsPrinting'
import CustomManufacturing from './components/CustomManufacturing'
import Gallery from './components/Gallery'
import EnquiryForm from './components/EnquiryForm'
import Instagram from './components/Instagram'
import ContactMap from './components/ContactMap'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMissionValues />
        <ManufacturingProcess />
        <ProductCategories />
        <Clients />
        <MaterialsPrinting />
        <CustomManufacturing />
        <Gallery />
        <EnquiryForm />
        <Instagram />
        <ContactMap />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  )
}
