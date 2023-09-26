import Image from 'next/image'

export default function Home() {
  return (
    <main className="md:container md:mx-auto flex flex-col items-center justify-between overflow-hidden">
      <section className="hero-section w-full	h-[calc(100vh-95px)] p-4 block md:flex">
        <div className="w-full md:w-6/12 flex flex-col items-start justify-center gap-6">
          <h1 className='text-4xl font-semibold'>The Mobile Kabab Experience: <span className='underline decoration-[#f04637]'>Wherever</span>, <span className='underline decoration-[#f04637]'>Whenever</span></h1>
          <p className='text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white'>See More</button>
        </div>
        <div className="w-full md:w-6/12 relative">
          {/* <div className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 w-9/12 h-3/4 bg-[#f04637]'></div> */}
          <div className='absolute bottom-1/2 right-1/2 translate-y-1/2 translate-x-1/2 w-10/12 h-5/6'>
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
