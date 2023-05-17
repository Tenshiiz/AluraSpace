import "./style.css"
import imgOne from "../../imagens/galeria/foto-1.png"
import imgTwo from "../../imagens/galeria/foto-2.png"
import imgThree from "../../imagens/galeria/foto-3.png"
import imgFour from "../../imagens/galeria/foto-4.png"
import imgFive from "../../imagens/galeria/foto-5.png"
import imgSix from "../../imagens/galeria/foto-6.png"
import imgSeven from "../../imagens/galeria/foto-7.png"
import imgEight from "../../imagens/galeria/foto-8.png"
import imgNine from "../../imagens/galeria/foto-9.png"
import imgTen from "../../imagens/galeria/foto-10.png"
import popularesOne from "../../imagens/populares/foto-1.png"
import popularesTwo from "../../imagens/populares/foto-2.png"
import popularesThree from "../../imagens/populares/foto-3.png"
import popularesFour from "../../imagens/populares/foto-4.png"
import popularesFive from "../../imagens/populares/foto-5.png"


function GaleriaFotos () {
    return (
        <div id="gallery">
            <div className="galleryContent">

                <div>
                    <div className="SpaceIMG">
                    <img src={imgOne}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgTwo}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgThree}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

            </div>

            <div>
                <div className="SpaceIMG">
                    <img src={imgFour}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgFive}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgSix}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

            </div>

            <div>
                <div className="SpaceIMG">
                    <img src={imgSeven}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgEight}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

                <div className="SpaceIMG">
                    <img src={imgNine}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                </div>

            </div>

            <div>
                <div className="SpaceIMG">
                    <img src={imgTen}></img>
                    <h3>Nome Desconhecido</h3>
                    <p>Fonte desconhecida</p>
                 </div>
            </div>
                        
            </div>
                <div id="IMGpopulares">
                    <img src={popularesOne}></img>
                    <img src={popularesTwo}></img>
                    <img src={popularesThree}></img>
                    <img src={popularesFour}></img>
                    <img src={popularesFive}></img>
                    <a href="#"><p>Ver mais</p></a>
                </div>
            </div>
    )
}

export default GaleriaFotos;