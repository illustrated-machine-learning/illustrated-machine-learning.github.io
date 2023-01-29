export default function Todos() {
    return (
        <div className="content-container">
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/todos.svg"} className="credits"></object>
            </div>

            <div className="text-container" style={{ marginBottom: 10 + '%', lineHeight: 2 }}>

                <h3>Website</h3>
                <ul>
                    <li><del>Add credits & references</del></li>
                    <li><del>Add to-dos page</del></li>
                    <li><del>Switch to SVG images</del></li>
                    <li><del>Keep track of web-traffic (Google Analytics or Clustrmaps)</del></li>
                    <li><del>Re-order sidebar &gt; ML as second element</del></li>
                    <li><del>Add left/right buttons at the beginning and at the end of a page</del></li>
                    <li><del>Add a new page in which we report every update on the website</del></li>
                    <li><del>Increase the touch/target visible area</del></li>
                    <li><del>Build a webapp (in progress)</del></li>
                    <li>Add switch for the font-style (sketchy / normal)</li>
                    <li>Leave the sidebar opened for desktop</li>
                    <li>Improve responsiveness</li>
                    <li>Add searchbar</li>
                </ul>

            </div>
        </div>
    );
}