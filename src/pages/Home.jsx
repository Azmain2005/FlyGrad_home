// import React from 'react'
import {Hero,Testimonials,Footer, Gallery,TopBar, Team, Faq} from "../Components/Index"
import "../App.css";
function Home() {
  return (
   <>
   <section class="bg-gray-900">
   <main class=" bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-2.png')] bg-cover text-sm text-white max-md:px-4 text-center">
   <Hero/>
   <Team />
   <Testimonials />
    {/* <Gallery /> */}
    <Faq />
    <Footer />
    </main>
</section>

   </>
  )
}


export default Home
