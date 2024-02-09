import "./header.css"
import { MdOutlineNightsStay } from "react-icons/md";
import { MdSunny } from "react-icons/md";

export default function Header(props){
    const{theme,setTheme}=props;
    function ToggleTheme() {
        if(theme==="light"){
            setTheme("dark");
        }else {
            setTheme("light");
        }
    }
    return(
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme === "light"? "Light mode":"Dark mode"}</span>
                <span className="icon" onClick={ToggleTheme}>
                    {theme==="light"?<MdSunny />: <MdOutlineNightsStay/>}
                </span>
            </div>
        </header>
    );
}