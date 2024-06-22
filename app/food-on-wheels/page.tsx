"use client"

import { createEventEnquiry } from '@/actions/eventEnquiry';
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';
import SubmitButton from '../components/submit-button';
import { useEffect, useRef } from 'react';

const FoodOnWheels = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const initialState = {
        message: null,
        error: undefined
    }

    const [state, formAction] = useFormState(createEventEnquiry, initialState);

    useEffect(() => {
        if (!state.error) {
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <main className="md:container md:mx-auto px-4 lg:px-0">
            <section className="py-12 px-8 lg:px-40">
                <h1 className='text-2xl lg:text-4xl text-center font-semibold underline decoration-[#f04637] mb-5'>Food Van Event Enquiries</h1>
                <p className='text-base text-center'>
                    Shawarma Sultan is available for celebrations, weddings, birthday parties, and picnics. Whatever special event you're planning, Shawarma Sultan would love to be a part of it. We offer a variety of meal choices guaranteed to please everyone at your event. Give us a call or fill in the form below, and a member of our team will be in touch very soon!
                </p>
            </section>

            <section className="w-full lg:w-9/12 xl:w-6/12 p-5 lg:p-10 lg:mx-auto border border-[#f04637]">
                <form action={formAction} ref={formRef}>
                    <div className="flex flex-col gap-6">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Name
                            </span>
                            <input type="text" name="name" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                What type of event do you need us for?
                            </span>
                            <input type="text" name="eventCategory" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Phone number
                            </span>
                            <input type="tel" name="phoneNumber" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Email
                            </span>
                            <input type="email" name="email" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Event date
                            </span>
                            <input type="date" name="eventDate" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Event time
                            </span>
                            <input type="time" name="eventTime" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Number of guests
                            </span>
                            <input type="number" name="guestsNumber" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-[#f04637] block text-lg font-medium">
                                Address and postcode of the event
                            </span>
                            <input type="string" name="address" required className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <label className="block">
                            <span className="block text-lg font-medium">
                                Tell us more details
                            </span>
                            <textarea name="details" rows={6} className="mt-1 px-2.5 py-2.5 text-[#f04637] bg-white border shadow-sm border-[#ccc] placeholder-[#b7b6b6] focus:outline-none focus:border-[#ccc] focus:ring-[#ccc] block w-full sm:text-sm md:text-base focus:ring-0" placeholder="you@example.com" />
                        </label>

                        <SubmitButton />
                    </div>
                </form>
            </section>
        </main>
    )
};

export default FoodOnWheels;
