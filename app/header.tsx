import Image from 'next/image';

interface Props {
    showSideMenuHandler: () => void;
}

const Header = ({ showSideMenuHandler }: Props) => (
    <header className='py-2 lg:py-4 px-4 lg:px-8 sticky top-0 bg-white border-b border-solid border-[#3434341a] z-[2]'>
        <div className='lg:container lg:mx-auto'>
            <div className="grid grid-cols-3 items-centers lg:hidden">
                <button
                    className='w-fit'
                    onClick={showSideMenuHandler}
                >
                    <span className="text-4xl material-symbols-rounded">menu</span>
                </button>
                <div className='relative w-16 h-16 justify-self-center lg:w-32 lg:h-32'>
                    <Image
                        src="/assets/images/shawarma-sultan-logo-with-text.png"
                        alt="Shawarma Sultan Logo"
                        fill
                        className='object-contain'
                    />
                </div>
                <div className='inline-flex items-center justify-end gap-3'>
                    <span className="text-4xl material-symbols-rounded">person</span>
                    <span className="text-4xl material-symbols-rounded">shopping_basket</span>
                </div>
            </div>

            <div className='items-center justify-between hidden w-full lg:inline-flex'>
                <div className='flex items-center gap-1'>
                    <div className='relative justify-self-center w-14 h-14'>
                        <Image
                            src="/assets/images/shawarma-sultan-logo.png"
                            alt="Shawarma Sultan Logo"
                            fill
                            className='object-contain'
                        />
                    </div>
                    <p className='text-lg font-semibold'>SHAWARMA SULTAN</p>
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
                    <span className="text-4xl material-symbols-rounded">person</span>
                    <span className="text-4xl material-symbols-rounded">shopping_basket</span>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
