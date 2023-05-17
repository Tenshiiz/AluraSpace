import "./style.css"
import Logo from "../../imagens/etc/logo.png"

function Header() {
    return(
       <header>
            <img src={Logo} className="logo"></img>
            <input className="pesquisa" placeholder="O que você procura?"></input>
       </header> 
    )
}

export default Header;