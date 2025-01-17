"use client";
import Image from 'next/image';
import { MenuItem as MenuItemType } from '../types/menu-item';
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

async function getMenuItems() {
    const menuItemsResponse = await fetch('/api/meals', { next: { tags: ['menuItems'] } })
        .catch((error) => { throw new Error('failed to fetch data') });
    const menuItems = await menuItemsResponse.json();
    return menuItems;
}

const MenuItem = ({ menuItem: { imageUrl, name } }: { menuItem: MenuItemType }) => {
    return (
        <div className="border-2 border-solid border-[#3434341a] relative shadow-md">
            <div className="flex flex-col gap-4 pb-4 bg-white relative h-full">
                <div className='relative h-[15rem] lg:h-[20rem]'>
                    <Image
                        src={!imageUrl ? '/assets/images/fallback-image.jpg' : imageUrl}
                        alt={`${name}'s image`}
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-lg md:text-xl font-semibold capitalize px-4 text-left truncate'>{name}</h2>
                </div>
            </div>
        </div>
    )
}

const MenuCarousel = () => {
    const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

    useEffect(() => {
        getMenuItems().then(menuItems => setMenuItems(menuItems))
    }, []);

    return (
        menuItems.length > 0 && (
            <OwlCarousel className='owl-theme' margin={40}
            dots={false}
            responsive={{
                0: {
                    items: 1,
                    nav: true
                },
                640: {
                    items: 2,
                    nav: true,
                },
                1025: {
                    items: 3,
                    nav: true,
                    loop: true
                }
            }}
        >
            {menuItems.map((menuItem) => (
                <div className='item' key={`${menuItem.name}-${menuItem.id}`}>
                    <MenuItem menuItem={menuItem} />
                </div>
            ))}
        </OwlCarousel >
        )
    )
}

export default MenuCarousel;