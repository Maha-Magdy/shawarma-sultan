"use client"
import Image from 'next/image';
import MenuItem from '../components/menu-item';
import { useEffect, useState } from 'react';

async function getMenuItems() {
    const menuItemsResponse = await fetch('http://localhost:3001/api/meals', { next: { tags: ['menuItems'] } })
        .catch((error) => { throw new Error('failed to fetch data') });
    const menuItems = await menuItemsResponse.json();
    return menuItems;
}

const Menu = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    useEffect(() => {
        getMenuItems().then(menuItems => setMenuItems(menuItems))
    }, []);

    return (
        <main className='w-[100%]'>
            <section className="w-[100%] h-[500px] relative">
                <Image
                    src='/assets/images/menu-hero-section-photo.jpg'
                    alt='Menu hero section photo'
                    fill
                    className='object-cover object-[100%75%] contrast-125 brightness-75'
                />
                <div className='flex flex-col gap-4 text-white absolute right-1/2 bottom-1/2 translate-y-1/2 translate-x-1/2 w-4/5 lg:w-auto'>
                    <h1 className='text-3xl lg:text-4xl font-semibold'>Food Menu</h1>
                    <p className='text-sm lg:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>

            <section className="md:container mx-4 md:mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 overflow-visible">
                {menuItems.map((menuItem) => (
                    <MenuItem key={`${menuItem.name}-${menuItem.id}`} menuItem={menuItem} />
                ))}
            </section>
        </main>
    )
};

export default Menu;
