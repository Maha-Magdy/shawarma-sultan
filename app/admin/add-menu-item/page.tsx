"use client"
import { createMeal } from "@/actions/meal";
import { FormEvent, useState } from "react";
// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
// @ts-ignore
import { experimental_useFormState as useFormState } from 'react-dom';

const initialState = {
    message: null,
}

const AddMenuItem = () => {
    const [state, formAction] = useFormState(createMeal, initialState);

    const { pending } = useFormStatus();

    const [imageUrlObject, setImageUrlObject] = useState<string>();

    const convertingImageToUrlObject = async (e: any) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            setImageUrlObject(reader.result as string);
        }
        reader.readAsDataURL(file);
    }

    return (
        <>
            <p>Hello, I am admin, and I can add menu item from here</p>

            <form action={formAction}>
                <label htmlFor="image">Photo</label>
                <input type="file" name="image" id="image" onChange={convertingImageToUrlObject} />

                <input type="text" name="imageUrlObject" id="imageUrlObject" hidden value={imageUrlObject} />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />

                <input type="checkbox" name="vegetarian" id="vegetarian" />
                <label htmlFor="vegetarian">Vegetarian</label>

                <button type="submit" aria-disabled={pending}>Add</button>
            </form>
        </>
    )
};

export default AddMenuItem;