import { GifItem } from "./GifItem";
import { useFetchGits } from "../hooks/useFetchGits";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGits(category);
    console.log({ isLoading })

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((i) => (
                        <GifItem
                            key={i.id}
                            {...i}
                        />

                    ))
                }
            </div>
        </>
    )
}
