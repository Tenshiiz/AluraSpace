import "./style.css"
import Inicio from "../../imagens/icones/home-ativo.png"
import MaisVistos from "../../imagens/icones/mais-vistas-inativo.png"
import MaisCurtidos from "../../imagens/icones/mais-curtidas-inativo.png"
import Novos from "../../imagens/icones/novas-inativo.png"
import SurpreendaMe from "../../imagens/icones/surpreenda-me-inativo.png"

function Nav() {
    return(
        <nav>
            <div className="ContentNavOne">
                <div className="subContent">
                    <img src={Inicio} className="NavIcons"alt="Inicio"></img>
                    <a href="#"><p id="InicioActive">Início</p></a>
                </div>

                <div className="subContent">
                    <img src={MaisVistos} className="NavIcons" alt="Mais Vistos"></img>
                    <a href="#"><p>Mais vistas</p></a>
                </div>

                <div className="subContent">
                    <img src={MaisCurtidos} className="NavIcons" alt="Mais Curtidos"></img>
                    <a href="#"><p>Mais curtidas</p></a>
                </div>

                <div className="subContent">
                    <img src={Novos} className="NavIcons" alt="Novos"></img>
                    <a href="#"><p>Novas</p></a>
                </div>

                <div className="subContent">
                     <img src={SurpreendaMe} className="NavIcons" alt="Icone Surpreenda-me"></img>
                    <a href="#"><p>Surpreenda-me</p></a>
                </div>
            </div>
        </nav>
    )
}
export default Nav;