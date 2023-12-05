const Home = () => {
    const handleClick = () => {
        console.log('Hello');
    }
    return ( 
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={handleClick}>Click Me</button>
            </div>
    );
}

export default Home;