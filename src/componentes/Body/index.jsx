import "./style.css";
import TagsGaleria from "../TagsGaleria";
import Nav from "../Nav";
import BannerEspaço from "../Banner";


function Body() {
    return(
        <div>
            <section className="sectionOne">
                <Nav/>

                <div className="ContentTwo">
                    <BannerEspaço/>
                    <TagsGaleria/>
                </div>
            </section>
        </div>
        
    )
}

export default Body;