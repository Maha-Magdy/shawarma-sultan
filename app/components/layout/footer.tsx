import Link from "next/link";
import Image from 'next/image';

const Footer = () => (
    <footer className="py-6 px-4 lg:px-8 bg-[#343434] text-white relative">
        <Link href="/" className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
                src="/assets/images/shawarma-sultan-logo.png"
                alt="Shawarma Sultan Logo"
                width={100}
                height={100}
                className='object-contain w-[85px] lg:w-[100px] h-[85px] lg:h-[100px]'
            />
        </Link>
        <div className="lg:container lg:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 mt-12">
            <div className="order-2 lg:order-1">
                <ul className="flex flex-col xl:flex-row gap-2 lg:gap-4 items-center lg:items-start justify-center lg:justify-start">
                    <li>
                        <Link href="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link href="/pop-up-locations">Pop Up Locations</Link>
                    </li>
                    <li>
                        <Link href="/food-on-wheels">Event Enquiries</Link>
                    </li>
                    <li>
                        <Link href='about-us'>About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-3 lg:gap-6 order-1 lg:order-2">
                <div className="text-center">
                    <p className="text-xl font-semibold tracking-[2px] mb-2">
                        <span className="text-[#f04637]">Quickest Way </span>
                        <span>To Inquire?</span>
                    </p>
                    <p className="text-xl font-semibold tracking-[2px]">Call Us Now!</p>
                </div>

                <p>Don&apos;t be shy, we don&apos;t bite :)</p>

                <a href="tel:447378100033">+44 7378100033</a>
            </div>
            <div className="lg:justify-self-end order-3 lg:order-3">
                <ul className="flex items-center justify-center gap-2">
                    <li>
                        <Link href='https://www.instagram.com/sultanshawrma/' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,250,250"
                                style={{ fill: "#FFFFFF" }}>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(8.53333,8.53333)"><path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path></g></g>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.tiktok.com/@sultan.shawrma' target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,250,250"
                                style={{ fill: "#FFFFFF" }}>
                                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.757,0 -5,2.243 -5,5v32c0,2.757 2.243,5 5,5h32c2.757,0 5,-2.243 5,-5v-32c0,-2.757 -2.243,-5 -5,-5zM37.006,22.323c-0.227,0.021 -0.457,0.035 -0.69,0.035c-2.623,0 -4.928,-1.349 -6.269,-3.388c0,5.349 0,11.435 0,11.537c0,4.709 -3.818,8.527 -8.527,8.527c-4.709,0 -8.527,-3.818 -8.527,-8.527c0,-4.709 3.818,-8.527 8.527,-8.527c0.178,0 0.352,0.016 0.527,0.027v4.202c-0.175,-0.021 -0.347,-0.053 -0.527,-0.053c-2.404,0 -4.352,1.948 -4.352,4.352c0,2.404 1.948,4.352 4.352,4.352c2.404,0 4.527,-1.894 4.527,-4.298c0,-0.095 0.042,-19.594 0.042,-19.594h4.016c0.378,3.591 3.277,6.425 6.901,6.685z"></path></g></g>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer;