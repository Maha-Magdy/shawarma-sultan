import Image from 'next/image';
import aboutUsHeroSectionPhoto from '../../public/assets/images/about-us-hero-section-photo.jpg';

export default function AboutUs() {
    return (
        <main>
            <div className="about_us_header">
                <div className='row-start-1 row-end-3 col-start-3 col-end-5 relative h-full flex'>
                    <Image
                        src={aboutUsHeroSectionPhoto}
                        alt="Shawarma Sultan team"
                        className='object-cover mt-0 lg:mt-12'
                    />
                    <div className='border border-solid	border-white absolute top-2 bottom-2 right-2 left-2 mt-0 lg:mt-12'></div>
                </div>
                <div className='row-start-1 row-end-2 col-start-2 col-end-3 self-end my-6 lg:my-0 mt-6 lg:mt-32 py-0 lg:py-14 pr-0 lg:pr-12'>
                    <h1 className=' sm:text-xl text-2xl uppercase mb-3'>Behind the Scenes</h1>
                    <p className="font-bold text-3xl lg:text-4xl">Spice Story of Shawarma Sultan</p>
                    <div className='bg-[#f04637] w-28 h-2'></div>
                </div>
                <p className='row-start-2 row-end-3 col-start-2 col-end-3 self-start py-0 lg:py-14 pr-12 text-xl lg:text-2xl leading-8 lg:leading-[3rem] h-auto lg:h-full block lg:flex items-center'>
                    The Mobile Kabab Experience Wherever, Whenever you want.
                </p>
            </div>

            <div className="lg:container mx-auto py-4 lg:py-16 px-4 lg:px-32 leading-8 lg:leading-[3rem] text-xl lg:text-2xl lg:text-center flex flex-col gap-4">
                <p>
                    Prepare to experience kebabs like you never have before with our delicious chicken sauce at your next event. We have developed a secret formula to make our secret recipe, our menu is the perfect mix of all mediterranean food ( shawarma - burger - grilled chicken - falafel - grilled halloumi cheese - appetiser )
                </p>
                <p>
                    we are confident there is something for everyone to enjoy. You and your guests can expect freshly made hot food to enjoy the taste of our delicious. within minutes, so taste you'll be dreaming of them long after your events.  We are a family of foodies and we want to share our passion for amazing products with as many people as possible at exciting events. Our crew have been expertly crafting kebabs for 7+ years with the highest hygiene rate, so you are in good hands.
                </p>
            </div>
        </main>
    )
};