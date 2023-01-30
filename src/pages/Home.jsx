import './Page.css';

export default function Home() {
    return (
        <>
            <div className="container-img">
                <object type="image/svg+xml" data={process.env.PUBLIC_URL + '/img/banner.svg'} className="image-title banner"></object>
            </div>
            <div className="content-container">
                <div className="text-container">
                    <p>
                        Welcome to our website, where <b>we strive to make the complex world of Machine Learning more approachable through
                            clear and concise illustrations</b>. Our goal is to provide a visual aid for <b>students</b>, <b>professionals</b>, and anyone
                        preparing for a <b>technical interview</b> to better understand the underlying concepts of Machine Learning. <br /><br />

                        Whether you're just <b>starting out</b> in the field or you're a <b>seasoned professional</b> looking to refresh your knowledge,
                        we hope our illustrations will be a <b>valuable resource</b> on your journey to understanding Machine Learning. <br /><br />
                    </p>
                </div>
                <div className="text-container" style={{textAlign: 'center', color:'#1864ab'}}>
                  <p><i>To see our full list of topics, <b>click on the top-left hamburger-menu!</b></i></p>
                </div>
                <div className="text-container">
                    <p>If you find this project useful, or if you wish to contribute, reach out to our <a href="https://github.com/illustrated-machine-learning/illustrated-machine-learning.github.io">public repository</a>!</p>
                </div>
                
            </div>
            <center>
            <div className="container-github">
                <iframe src="https://ghbtns.com/github-btn.html?user=illustrated-machine-learning&type=follow&count=true&size=large" frameBorder="0" scrolling="0" width="500" height="30" title="GitHub"></iframe>
                <iframe src="https://ghbtns.com/github-btn.html?user=illustrated-machine-learning&repo=illustrated-machine-learning.github.io&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                <iframe src="https://ghbtns.com/github-btn.html?user=illustrated-machine-learning&repo=illustrated-machine-learning.github.io&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
            </div>
            </center>
            <div className="container-img">
                <object className="meme-banner" type="image/svg+xml" data={process.env.PUBLIC_URL + '/img/meme.svg'}></object>
            </div>
        </>
    );
}