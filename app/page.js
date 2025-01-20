import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Services from '@/components/light/modern-startup/Services';
import Header from '@/components/light/modern-startup/Header';
import Navbar from '@/components/light/modern-startup/Navbar';
import Footer from '@/components/light/modern-startup/Footer';
import Script from 'next/script';
import Intro from '@/components/light/modern-startup/Intro';
import About from '@/components/light/modern-startup/About';
import IndustriesWeServe from '@/components/light/modern-startup/Industries';
import CoreValues from '@/components/light/modern-startup/CoreValues'
import Numbers from '@/components/light/modern-startup/Numbers';
import Interactive from '@/components/light/modern-startup/Interactive';
import Clients from '@/components/light/modern-startup/Clients';
import MapSection from '@/components/light/modern-startup/MapSection'
import ContactMarquee from '@/components/light/modern-startup/ContactMarquee'

export const metadata = {
  title: 'Third Eye Info Technology',
  icons: {
    icon: '/light/assets/imgs/favicon.ico',
    shortcut: '/light/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/light/assets/css/plugins.css',
      '/light/assets/css/satoshi.css',
      '/light/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
    ]),
  },
};

export default function HomeModernStartup() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />

      <div id="smooth-wrapper">
        <Navbar />
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
            <About />
            <Numbers />
            <Services />
            <CoreValues />
            <IndustriesWeServe/>
            <Interactive/>
            <MapSection/>
            <Clients />
            <ContactMarquee/>
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/light/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/light/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/light/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/light/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/light/assets/js/scripts.js"></Script>
    </body>
  );
}
