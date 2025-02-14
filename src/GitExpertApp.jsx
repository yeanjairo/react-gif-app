import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['naruto', 'valorant']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))

            }

        </>

    )
}
