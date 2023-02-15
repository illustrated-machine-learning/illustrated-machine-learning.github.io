export default function News() {
    
    const styles = {
        news:  {
            width: "25vmin",
            height: "auto"
        }
    }

    return (
        <div className="content-container">
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/news.svg"} style={styles.news}></object>
            </div>

            <div className="text-container" style={{marginBottom: 10 + '%', lineHeight: 2}}>

                <ul>
                    <li><b>2023/02/08</b>: Added the "Deep Learning Tuning Playbook" from Google's researchers</li>
                    <li><b>2023/01/25</b>: Reached 200 stars on GitHub!</li>
                    <li><b>2023/01/21</b>: Started the "Machine Learning Engineering" section</li>
                    <li><b>2023/01/14</b>: Added until the fourth lecture of Prof. Andreas Geiger’s Computer Vision course (Projective Geometry).</li>
                    <li><b>2023/01/12</b>: Reached 100 stars on GitHub!</li>
                    <li><b>2023/01/07</b>: Added full support to SVGs! The website is now much faster.</li>
                    <li><b>2023/01/04</b>: Published the first Lecture of Prof. Andreas Geiger’s Computer Vision course.</li>
                    <li><b>2023/01/02</b>: Published a first version of the website, containing the “Machine Learning” section. We requested feedback on Reddit. The post went viral and we observed 2k+ website views and 50+ stars on GitHub. Minor fixes were published, after users’ feedback. </li>
                    <li><b>2022/12</b>: Discovered excalidraw.com and dreamed about an open-source website with illustrations about diverse topics in Machine Learning.</li>
                </ul>

            </div>
        </div>
    );
}
