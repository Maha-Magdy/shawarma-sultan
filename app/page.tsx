import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const DynamicCarousel = dynamic(() => import("./components/menu-carousel"), {
    ssr: false,
  })

  return (
    <main className="flex flex-col items-center justify-between overflow-hidden">
      <section className="hero-section md:container md:mx-auto h-[calc(100vh-85px)] lg:h-[calc(100vh-95px)] p-4 px-8 lg:px-4 flex flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-start justify-center w-full h-full gap-3 lg:w-6/12 lg:gap-6">
          <h1 className='text-2xl font-semibold lg:text-4xl'>The Mobile Kabab Experience: <span className='underline decoration-[#f04637]'>Wherever</span>, <span className='underline decoration-[#f04637]'>Whenever</span></h1>
          <p className='text-base'>Our journey began with a dream to share our award-winning recipes with food lovers worldwide. Made with love, dedication, and passion, our delicious dishes will create heavenly moments for you.</p>
          <a className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white' href='./pop-up-locations'>Find Us</a>
        </div>
        <div className="w-full lg:w-6/12 h-full mx-1 lg:mx-0 mt-1 lg:mt-0 relative lg:bottom-[1.5%]">
          <div className='absolute lg:bottom-[47.5%] lg:right-[47.5%] lg:translate-y-1/2 lg:translate-x-1/2 w-full lg:w-10/12 h-full lg:h-5/6 bg-[#f04637]'></div>
          <div className='absolute w-full h-full bottom-3 lg:bottom-1/2 right-3 lg:right-1/2 lg:translate-y-1/2 lg:translate-x-1/2 lg:w-10/12 lg:h-5/6'>
            <Image
              src='/assets/images/hero-section-photo.jpg'
              alt='Shawarma Sultan Van'
              fill
              className='object-cover object-left'
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full gap-6 p-4 px-16 mb-6 md:container md:mx-auto md:px-20 lg:px-48">
        <h2 className='text-2xl lg:text-4xl font-semibold underline decoration-[#f04637]'>Our Popular Food</h2>
        <p className='text-base lg:text-center'>
          Please find our recommended selections from our catering menus. Whether you are looking for one of our amazing food vans, an impressive boardroom lunch, a finger food selection for clients, or food delivery for the entire company, Sultan Catering will help you choose whatever suits your needs.
        </p>
        <DynamicCarousel />
        <Link className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white w-fit' href='./menu'>View All Menu</Link>
      </section>

      <section className='relative w-full py-4 h-[auto] md:h-[400px] lg:h-[auto] lg:max-h-[600px]'>
        <Image
          src='/assets/images/pop-up-locations-section.jpg'
          alt='Shawarma and falafel image as background'
          fill
          className='!relative w-full h-[auto] hidden md:block'
        />
        <Image
          src='/assets/images/pop-up-locations-section-mobile-version.jpg'
          alt='Shawarma and falafel image as background'
          fill
          className='!relative w-full h-[auto] block md:hidden'
        />
        <div className='absolute top-20 md:top-[50%] md:translate-y-[-50%] w-full'>
          <div className='md:container md:mx-auto'>
            <div className='flex flex-col items-start justify-center w-full gap-3 px-8 md:w-1/2 lg:gap-6 2xl:px-0'>
              <h2 className='text-2xl lg:text-4xl font-semibold underline decoration-[#f04637]'>Come Hungry, Leave Happy: Your Food Awaits</h2>
              <p className='text-baser'>
                Get ready to embark on a delicious adventure! Our Sultan Catering vans are rolling out mouthwatering options guaranteed to satisfy your cravings. Whether you&apos;re in the mood for savory bites, sweet treats, or something uniquely delightful, our food trucks are here to serve up happiness on wheels!
              </p>
              <Link href={'/pop-up-locations'} className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white w-fit'>Find Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
