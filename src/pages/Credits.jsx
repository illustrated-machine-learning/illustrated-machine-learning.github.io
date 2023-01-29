
export default function Credits() {
    return (
        <div className="content-container">
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + "/img/credits.svg"} className="credits"></object>
            </div>

            <div className="text-container" style={{marginBottom: 10 + '%'}}>
                
                <h3> Technical contributors </h3>

                <ul className="credits-list">
                    <li>Francesco Di Salvo 
                        [<a href="https://github.com/francescodisalvo05">Github</a>,
                        <a href="https://www.linkedin.com/in/francescodisalvo-pa/">LinkedIn</a>,
                        <a href="https://francescodisalvo05.github.io/">Website</a>]
                    </li>
                    <li>Simone Raponi 
                        [<a href="https://github.com/SimoneRaponi">Github</a>,
                        <a href="https://www.linkedin.com/in/simone-raponi/">LinkedIn</a>,
                        <a href="https://simoneraponi.github.io/">Website</a>]
                    </li>
                </ul>

                <h3>Web developers</h3>

                <ul className="credits-list">
                    <li>Francesco Di Salvo 
                        [<a href="https://github.com/francescodisalvo05">Github</a>,
                        <a href="https://www.linkedin.com/in/francescodisalvo-pa/">LinkedIn</a>,
                        <a href="https://francescodisalvo05.github.io/">Website</a>]
                    </li>
                    <li>Andrea Bozzelli
                        [<a href="https://github.com/bozzelliandrea">Github</a>,
                        <a href="https://www.linkedin.com/in/andrea-bozzelli/">LinkedIn</a>]
                    </li>
                    <li>Matteo Bernabito 
                        [<a href="https://github.com/berna1995">Github</a>,
                        <a href="https://www.linkedin.com/in/matteo-bernabito-268255215/">LinkedIn</a>,
                        <a href="https://www.bernabito.it/">Website</a>]
                    </li>
                </ul>

            </div>
        </div>
    );
}