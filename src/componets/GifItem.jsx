export const GifItem = ({ url, title, id }) => {
    console.log({ url, title })
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

//<li key={i.id}>{i.title}</li>