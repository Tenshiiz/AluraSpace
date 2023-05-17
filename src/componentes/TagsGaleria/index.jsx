import "./style.css"
import GaleriaFotos from "../Galeria";
function TagsGaleria() {
    return(
        <section className="imageSpace">
            <h2>Navegue pela galeria</h2>
            <div>
                <p>Busque por tags:</p>
                <div className="navImage">
                    <ul>
                        <a href="#"><li>Estrelas</li></a>
                        <a href="#"><li>Galáxias</li></a>
                        <a href="#"><li id="teste">Lua</li></a>
                        <a href="#"><li>Planetas</li></a>
                    </ul>
                    <p>Populares</p>
                </div>
            </div>
            <GaleriaFotos/>
        </section>
    )
}
export default TagsGaleria;