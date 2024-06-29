"use client";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";


const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className='bg-[#f04637] hover:bg-[#e64335] py-3 px-10 text-white w-full'
            disabled={pending}
        >
            {pending ? 'Submitting ...' : 'Submit'}
        </button>
    )
}

export default SubmitButton;
