
export default function BlogCard({blogTitle, blogBody, blogDate}) {

    // Load data from Backend to Frontend
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/blogs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    response = await response.json();

    setArtItem(response[0]);
    setCategory(response[1]);
  }

  // When to load data from Backend to Frontend
  useEffect(() => {
    loadData();
  }, []);


    return (
        <>
            <div class="card mb-3">
                <img src="https://source.unsplash.com/random/800x600?Art" class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">hasdasdasd</h5>
                        <p className="card-text">asdasdasdasd</p>
                        <p className="card-text"><small class="text-muted">30th Sep</small></p>
                    </div>
            </div>
        </>
    )
}