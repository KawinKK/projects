import home from "../images/home.svg";

export default function Home(){
    return(
        <div className="container">
            <h1 className="title">Homepage of the website</h1>
            <img src={home} alt="home"/>
        </div>
    );
}