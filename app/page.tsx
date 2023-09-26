import Image from 'next/image'

export default function Home() {
  return (
    <main className="md:container md:mx-auto flex flex-col items-center justify-between overflow-hidden">
      <section className="hero-section w-full	h-[calc(100vh-95px)] p-4 flex flex-col gap-4 lg:flex-row lg:gap-0">
        <div className="w-full lg:w-6/12 flex flex-col items-start justify-center gap-6 h-1/2 lg:h-full">
          <h1 className='text-4xl font-semibold'>The Mobile Kabab Experience: <span className='underline decoration-[#f04637]'>Wherever</span>, <span className='underline decoration-[#f04637]'>Whenever</span></h1>
          <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white'>See More</button>
        </div>
        <div className="w-full lg:w-6/12 relative h-1/2 lg:h-full mx-1 lg:mx-0">
          <div className='absolute lg:bottom-[47.5%] lg:right-[47.5%] lg:translate-y-1/2 lg:translate-x-1/2 w-full lg:w-10/12 h-full lg:h-5/6 bg-[#f04637]'></div>
          <div className='absolute bottom-3 lg:bottom-1/2 right-3 lg:right-1/2 lg:translate-y-1/2 lg:translate-x-1/2 w-full lg:w-10/12 h-full lg:h-5/6'>
            <Image
              src='/assets/images/hero-section-photo.avif'
              alt='Shawarma Sultan Van'
              fill
              className='object-cover object-left'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
