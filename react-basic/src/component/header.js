import Logo from "../image/logo.png";
import "./header.css"
function Header(props) {
  return (
    <nav>
      <img src={Logo} alt="logo" className="logo"/>
      <a href="/">{props.title}</a>
    </nav>
  );
}

export default Header;
