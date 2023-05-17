import "./style.css"
import Facebook from "../../imagens/etc/facebook.svg"
import Twitter from "../../imagens/etc/twitter.svg"
import Instagram from "../../imagens/etc/instagram.svg"

function Footer() {
    return(
        <div>
            <footer>
                <div className="iconsFooter">
                    <a href=""><img src={Facebook}></img></a>
                     <a href=""><img src={Twitter}></img></a>
                     <a href=""><img src={Instagram}></img></a>
                </div>
                <p className="developer">
                    Desenvolvido por Carlos.
                </p>
            </footer>
        </div>
    )
}
export default Footer;