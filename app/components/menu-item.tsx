'use client'
import Image from 'next/image';
import { MenuItem as MenuItemType } from '../types/menu-item';
import { useEffect, useState } from 'react';
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from './ui/dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface Props {
    menuItem: MenuItemType
};

const MenuItem = ({ menuItem: { imageUrl, name, description, vegetarian } }: Props) => {
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null)
    }, [imageUrl]);

    return (
        <Dialog>
            <DialogTrigger>
                <div className="h-full border border-solid border-[#3434341a] relative before:content-[''] before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-[#f04637]">
                    <div className="flex flex-col gap-4 pb-4 bg-white relative shadow-sm h-full">
                        <div className='relative h-[20rem]'>
                            <Image
                                src={error ? '/assets/images/fallback-image.jpg' : imageUrl}
                                alt={`${name}'s image`}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-lg md:text-xl font-semibold capitalize px-4 text-left'>{name}</h2>
                            {vegetarian && (
                                <div className='px-4 flex gap-2 items-center text-[#2d9f33]'>
                                    <span className="material-symbols-rounded" style={{ fontSize: '1.75rem !important' }}>psychiatry</span>
                                    <p className='text-lg'>Vegetarian</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </DialogTrigger>

            <DialogContent className="bg-white w-full lg:w-1/2 max-w-full lg:max-w-fit h-screen lg:h-auto min-h-[66.6%] max-h-screen sm:rounded-none">
                <DialogHeader>
                    <div className="lg:grid lg:grid-cols-2 gap-6 h-full">
                        <div className='flex justify-end lg:hidden mb-4'>
                            <DialogClose>
                                <Cross2Icon className="h-8 w-8 text-black hover:text-white hover:bg-[#f04637] hover:rotate-180 transition-transform duration-500" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                        </div>

                        <div className='relative h-1/3 lg:h-full'>
                            <Image
                                src={error ? '/assets/images/fallback-image.jpg' : imageUrl}
                                alt={`${name}'s image`}
                                fill
                                className='object-cover'
                            />
                        </div>
                        <div className='flex flex-col gap-2 lg:gap-4 items-start py-4'>
                            <DialogClose className='self-end hidden lg:block'>
                                <Cross2Icon className="h-8 w-8 text-black hover:text-white hover:bg-[#f04637] hover:rotate-180 transition-transform duration-500" />
                                <span className="sr-only">Close</span>
                            </DialogClose>
                            <h1 className='text-lg lg:text-3xl font-semibold underline decoration-[#f04637]'>{name}</h1>
                            <p className='text-base lg:text-xl text-left leading-relaxed'>{description}</p>
                            {vegetarian && (
                                <div className='flex gap-1 items-center text-[#2d9f33]'>
                                    <span className="material-symbols-rounded">psychiatry</span>
                                    <p className='text-base lg:text-lg'>Vegetarian</p>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog >
    )
};

export default MenuItem;