import './Home.css'

const Home = () => {
    return (
        <>
        <div className="main__container">
            {/* Analysis Input */}
            <div className="">
                <p>Select Signal Acquisition Input File</p>
                <div className="">
                    <input type="file" className="" name="upload" accept="application/pdf" />
                </div>
                <div className="">
                    <p>Signal Output File</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;
