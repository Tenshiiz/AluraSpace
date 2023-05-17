import "./style.css"
import Banner from "../../imagens/etc/banner.png"

function BannerEspaço() {
    return(
        <div>
            <p className="DescriçãoBanner">A galeria mais completa de fotos do espaço!</p>
            <img src={Banner} className="banner"></img>
        </div>
    )
}
export default BannerEspaço;