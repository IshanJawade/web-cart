
export default function BlogCard({blogTitle, blogBody, blogDate}) {

    return (
        <>
            <div className="card mb-3">
                <img src="https://source.unsplash.com/random/?Art" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{blogTitle}</h5>
                        <p className="card-text">{blogBody}</p>
                        <p className="card-text text-muted"><small>{blogDate}</small></p>
                    </div>
            </div>
        </>
    )
}