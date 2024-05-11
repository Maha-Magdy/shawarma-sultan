import dynamic from 'next/dynamic';
import Image from 'next/image';

export default function Home() {
  const DynamicCarousel = dynamic(() => import("./components/menu-carousel"), {
    ssr: false,
  })

  return (
    <main className="md:container md:mx-auto flex flex-col items-center justify-between overflow-hidden">
      <section className="hero-section w-full h-[calc(100vh-85px)] lg:h-[calc(100vh-95px)] p-4 px-8 lg:px-4 flex flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="w-full lg:w-6/12 flex flex-col items-start justify-center gap-3 lg:gap-6 h-full">
          <h1 className='text-2xl lg:text-4xl font-semibold'>The Mobile Kabab Experience: <span className='underline decoration-[#f04637]'>Wherever</span>, <span className='underline decoration-[#f04637]'>Whenever</span></h1>
          <p className='text-base'>Our journey began with a dream to share our award-winning recipes with food lovers worldwide. Made with love, dedication, and passion, our delicious dishes will create heavenly moments for you.</p>
          <a className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white' href='./pop-up-locations'>Find Us</a>
        </div>
        <div className="w-full lg:w-6/12 h-full mx-1 lg:mx-0 mt-1 lg:mt-0 relative lg:bottom-[1.5%]">
          <div className='absolute lg:bottom-[47.5%] lg:right-[47.5%] lg:translate-y-1/2 lg:translate-x-1/2 w-full lg:w-10/12 h-full lg:h-5/6 bg-[#f04637]'></div>
          <div className='absolute bottom-3 lg:bottom-1/2 right-3 lg:right-1/2 lg:translate-y-1/2 lg:translate-x-1/2 w-full lg:w-10/12 h-full lg:h-5/6'>
            <Image
              src='/assets/images/hero-section-photo.jpg'
              alt='Shawarma Sultan Van'
              fill
              className='object-cover object-left'
            />
          </div>
        </div>
      </section>

      <section className="w-full p-4 px-16 md:px-20 lg:px-48 flex flex-col gap-6 items-center">
        <h2 className='text-2xl lg:text-4xl font-semibold underline decoration-[#f04637]'>Our Popular Food</h2>
        <p className='text-base lg:text-center'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <DynamicCarousel />
        <a className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white w-fit' href='./menu'>View All Menu</a>
      </section>
    </main>
  )
}
