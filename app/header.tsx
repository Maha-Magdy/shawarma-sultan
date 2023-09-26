import Image from 'next/image';

interface Props {
    showSideMenuHandler: () => void;
}

const Header = ({ showSideMenuHandler }: Props) => (
    <header className='py-2 lg:py-4 px-4 lg:px-8 sticky top-0 bg-white	border-b border-solid border-[#3434341a]'>
        <div className='lg:container lg:mx-auto'>
            <div className="grid grid-cols-3 items-center block lg:hidden">
                <button
                    className='w-fit'
                    onClick={showSideMenuHandler}
                >
                    <span className="material-symbols-rounded text-4xl">menu</span>
                </button>
                <div className='justify-self-center w-16 lg:w-32 h-16 lg:h-32 relative'>
                    <Image
                        src="/assets/images/shawarma-sultan-logo-with-text.png"
                        alt="Shawarma Sultan Logo"
                        fill
                        className='object-contain'
                    />
                </div>
                <div className='inline-flex	justify-end	items-center gap-3'>
                    <span className="material-symbols-rounded text-4xl">person</span>
                    <span className="material-symbols-rounded text-4xl">shopping_basket</span>
                </div>
            </div>

            <div className='hidden lg:inline-flex justify-between items-center w-full'>
                <div className='flex items-center gap-1'>
                    <div className='justify-self-center w-14 h-14 relative'>
                        <Image
                            src="/assets/images/shawarma-sultan-logo.png"
                            alt="Shawarma Sultan Logo"
                            fill
                            className='object-contain'
                        />
                    </div>
                    <p className='font-semibold text-lg'>SHAWARMA SULTAN</p>
                </div>

                <ul className='flex items-center justify-center gap-20 font-semibold text-[#343434] text-lg'>
                    <li
                        className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-[#f04637] after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left">
                        <a href="/">HOME</a>
                    </li>
                    <li
                        className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-[#f04637] after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left">
                        <a href="/menu">MENU</a>
                    </li>
                    <li
                        className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-[#f04637] after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left">
                        <a href="/pop-up-locations">POP UP LOCATIONS</a>
                    </li>
                    <li
                        className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-[#f04637] after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left">
                        <a href="/food-on-wheels">FOOD ON WHEELS</a>
                    </li>
                    <li
                        className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-1 after:bottom-0 after:left-0 after:bg-[#f04637] after:origin-bottom-right after:transition-transform after:ease-out after:duration-200 hover:after:scale-x-100 hover:after:origin-bottom-left">
                        <a href="/about-us">ABOUT US</a>
                    </li>
                </ul>

                <div className='invisible lg:visible inline-flex justify-end items-center gap-3 text-[#343434]'>
                    <span className="material-symbols-rounded text-4xl">person</span>
                    <span className="material-symbols-rounded text-4xl">shopping_basket</span>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
