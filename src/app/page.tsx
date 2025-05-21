'use client'
import Image from "next/image";

export default function Home(){
  return(
    <div className="max-w-screen-xl mx-auto px-4">
      <header className="bg-[url('/images/hero-image-desktop.png')] bg-cover bg-center h-screen text-white">
        <nav className="flex justify-between items-center px-20 py-6">
          <div className="text-2xl font-bold">
            <Image
              src='/images/logo.svg'
              alt="logo"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
          </div>
          <ul className="flex font-poppins font-semibold text-xl gap-6">
            <li><a className="hover:text-baige" href="#home">Home</a></li>
            <li><a className="hover:text-baige" href="#blog">Blog</a></li>
            <li><a className="hover:text-baige" href="#contact">Contact</a></li>
            <li><a className="hover:text-baige" href="#services">Services</a></li>
          </ul>
        </nav>
        <div className="px-20 mt-40 w-1/2 p-4">
          <h2 className="font-inter font-semibol text-2xl text-baige">Delicious Cafe</h2>
          <h1 className="font-sansita_swashed text-7xl">Sweet Treats,<br/>Perfect Eats</h1>
          <div className="py-24">
            <a className="bg-brown text-white px-[38px] py-6 font-inter font-semibold text-2xl rounded-lg" href="#shop_now">Shop Now</a>
            <a className="font-inter font-semibold text-2xl text-baige px-2.5" href="#learn_more">Learn More</a>
          </div>
        </div>
      </header>
      <main>
        <section>
          <h2 className="font-sansita_swashed font-semibold text-[64px] text-center mt-32 mb-32">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center justify-items-center w-[1120px] gap-3 mx-auto">
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[url('/images/top_products/whole-grain-bread.png')] bg-cover bg-center h-[410px] w-[360px] rounded-xl p-6 flex flex-col items-center relative">
              <div className="mt-auto w-full flex justify-between items-start font-inter text-2xl text-white">
                <div className="flex flex-col items-start gap-4">
                  <p className="font-semibold">$40</p>
                  <p className="font-medium">Whole Grain<br />Bread</p>
                </div>
                <div className="flex flex-col items-center h-full justify-between">
                  <button className="w-6 h-6 rounded-full border border-white text-sm">
                    i
                  </button>
                  <button className="bg-brown px-3 py-4 rounded">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <article>
          <div className="mt-32 mb-32 bg-[url('/images/offer-section-banner.png')] h-[440px] bg-cover bg-center flex flex-col items-center justify-center text-center gap-6">
              <p className="font-sansita_swashed font-medium text-5xl text-brown">20% Off your<br/>First Order</p>
              <p className="font-inter font-normal text-2xl text-gray-500">Suspendisse ac rhoncus nisl,<br/> eu tempor urna. Curabitur vel<br/>bibenjgg.</p>
              <a className="px-[35px] py-[23px] bg-brown rounded-[10px] font-inter font-semibold text-2xl text-white" href="#learn_more">Lean More</a>
          </div>
        </article>
        <section>
          <h2 className="mb-[95px] font-sansita_swashed font-semibold text-6xl text-center">Explore More</h2>
          <nav className="mb-[120px] w-[698px] flex justify-between font-poppins font-semibold text-2xl mx-auto">
            <a className="relative group" href="#cake">Cake
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group" href="#muffins">Muffins
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group" href="#croissant">Croissant
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group" href="#bread">Bread
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group" href="#tart">Tart
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group" href="#favorite">Favorite
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-brown rounded-[10px] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <div className="w-[1120px] h-[720px] grid grid-cols-3 gap-[20px] mx-auto">
            <Image src="/images/explore_section/cake.png" width={360} height={350} alt="cake"/>
            <Image src="/images/explore_section/cheesecake.png" width={360} height={350} alt="cheesecake"/>
            <Image src="/images/explore_section/chifon.png" width={360} height={350} alt="chifon"/>
            <Image src="/images/explore_section/chocolate-cake.png" width={360} height={350} alt="chocolate-cake"/>
            <Image src="/images/explore_section/explore-peaceofcake.png" width={360} height={350} alt="explore-peaceofcake"/>
            <Image src="/images/explore_section/muse-chocolate.png" width={360} height={350} alt="muse-chocolate"/>
          </div>
        </section>
        <section>
          <div className="mt-32 mb-32 bg-[url('/images/about-us-section.png')] h-[440px] bg-cover bg-center flex flex-col items-center justify-center text-center gap-6">
            <h2 className="font-sansita_swashed font-medium text-5xl text-white">About Us</h2>
            <p className="font-inter font-normal text-2xl text-gray-300">Suspendisse ac rhoncus nisl,<br/> eu tempor urna. Curabitur vel<br/>bibendum lorem. Morbi<br/>convallis.</p>
            <a className="px-[35px] py-[23px] bg-brown rounded-[10px] font-inter font-semibold text-2xl text-white" href="#read_more">Read More</a>
          </div>
        </section>
        <section>
          <h2 className="mb-32 font-sansita_swashed font-semibold text-6xl text-center">Featured Treats</h2>
          <div className="w-[1120px] h-[420px] grid grid-cols-3 gap-[20px] mx-auto font-inter font-semibold text-[32px]">
            <div>
              <Image src="/images/featured_treats/brownies.png" width={360} height={350} alt="brownies"/>
              <div className="flex justify-evenly mt-2 px-1">
                <p>Brownies</p>
                <p>$8</p>
              </div>
            </div>
            <div>
              <Image src="/images/featured_treats/doughnuts.png" width={360} height={350} alt="doughnuts"/>
              <div className="flex justify-evenly mt-2 px-1">
                <p>Doughnuts</p>
                <p>$8</p>
              </div>
            </div>
            <div>
              <Image src="/images/featured_treats/puff-pastry.png" width={360} height={350} alt="puff-pastry"/>
              <div className="flex justify-evenly mt-2 px-1">
                <p>Puff Pastry</p>
                <p>$8</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="mt-32 bg-[url('/images/footer-background.png')] bg-cover bg-center h-[633px]">
        <div className="px-20 py-6">
          <div className="flex justify-between items-center">
            <Image
              src='/images/logo.svg'
              alt="logo"
              width={115}
              height={115}
              className="h-auto w-auto"
            />
            <div className="flex items-center gap-4">
              <h3 className="font-inter font-semibold text-2xl text-baige">Follow Us</h3>
              <Image src="/images/icons/facebook.svg" alt="facebook" width={42} height={42} className="text-baige" />
              <Image src="/images/icons/pinterest.svg" alt="pinterest" width={42} height={42} className="text-baige" />
              <Image src="/images/icons/whatsapp.svg" alt="whatsapp" width={42} height={42} className="text-baige" />
              <Image src="/images/icons/instagram.svg" alt="instagram" width={42} height={42} className="text-baige" />
            </div>
          </div>
          <section className="font-poppins font-semibold text-2xl text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-20">
            <div className="flex flex-col gap-4">
              <h2 className="font-inter font-bold text-3xl text-baige">About Us</h2>
              <p>(456) 789-12301</p>
              <p>info@modrino.co.uk</p>
              <p>South 13th street</p>
              <p>New york America</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-inter font-bold text-3xl text-baige">Explore</h2>
              <a href="#home">Home</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <a href="#services">Services</a>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-inter font-bold text-3xl text-baige">Recent News</h2>
              <div className="flex items-start gap-4">
                <Image src="/images/footer/cake-puff.png" alt="cake-puff" width={100} height={67} />
                <div className="flex flex-col">
                  <p className="font-poppins font-normal text-[18px] text-baige">June 14, 2024</p>
                  <p className="font-popping font-medium text-2xl text-white">Puff pastry bliss</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src="/images/footer/puff-pastry.png" alt="puff-pastry" width={100} height={67} />
                <div className="flex flex-col">
                  <p className="font-poppins font-normal text-[18px] text-baige">June 14, 2024</p>
                  <p className="font-popping font-medium text-2xl text-white">Puff pastry bliss</p>
                </div>
              </div>
            </div>
          </section>
          <h4 className="font-inter font-semibold text-2xl text-gray-400 text-center mt-28">© 2024 Bake House. All rights reserved</h4>
        </div>
      </footer>
    </div>
  )
}
