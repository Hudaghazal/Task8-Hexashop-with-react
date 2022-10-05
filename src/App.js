import "./App.css"
 
import { Header,Footer,Container } from "./components/index"
import prev from "../src/assets/img//prev.png"
import next from "../src/assets/img//next.png"
import men01 from "../src/assets/img//men-01.jpg"
import men02 from "../src/assets/img//men-02.jpg"
import men03 from "../src/assets/img//men-03.jpg"
import women01 from "../src/assets/img//women-01.jpg"
import women02 from "../src/assets/img//women-02.jpg"
import women03 from "../src/assets/img//women-03.jpg"
import kid01 from "../src/assets/img//kid-01.jpg"
import kid02 from "../src/assets/img//kid-02.jpg"
import kid03 from "../src/assets/img/kid-03.jpg"

const App=( )=>{
    return (
  <>
  <Header/>
  <Container>
  <div className="card">
            <div className="txt">
                <h2>Men's Latest</h2>
                <p><i>Details to details is what makes Hexashop different fromn the other themes</i></p>
            </div>
            <div className="card-item">
                <div>
                <img src={prev} alt=""/>
                
            </div>
            <div>
                <img src={men01} alt=""/>
                <div className="txtc ">

                <h4 >Classic Spring </h4>
                <p className="star">$120.00</p>
            </div>
            </div>
            <div>
                <img src={men02} alt=""/>
                <div className="txtc">
                <h4>Air Force 1 X </h4>
                <p className="star">$90.00</p>
            </div>
            </div>
            <div>
                <img src={men03} alt=""/>
                <div className="txtc">
                <h4>Love Nana'20 </h4>
                <p className="star">$150.00</p>
            </div>
            </div>
            <div>
                <img src={next} alt=""/>
            </div>
            </div>
        </div>
           <div className="card">
            <div className="txt">
                <h2> Women's Latest</h2>
                <p><i>Details to details is what makes Hexashop different fromn the other themes</i></p>
            </div>
         <div className="card-item">
            <div>
            <img src={prev} alt=""/>
            
        </div>
        <div>
            <img src={women01} alt=""/>
            <div  className="txtc">
            <h4>New Green Jacket</h4>
            <p className="star"> $75.00</p>
        </div>
        </div>
        <div>
            <img src={women02} alt=""/>
            <div className="txtc">
            <h4> Classic Dress</h4>
            <p className="star"> $90.00</p>
        </div>
        </div>
        <div>
            <img src={women03} alt=""/>
            <div className="txtc">
            <h4>Spring Collection </h4>
            <p className="star">$130.00</p>
        </div>
        </div>
        <div>
            <img src={next} alt=""/>
        </div>
        </div>
    </div>
         <div className="card">
            <div className="txt">
                <h2> Kid's Latest</h2>
                <p><i>Details to details is what makes Hexashop different fromn the other themes</i></p>
            </div>
            <div className="card-item">
                <div>
                <img src={prev} alt=""/>
                
            </div>
            <div>
                <img src={kid01} alt=""/>
            <div className="txtc">
                <h4>School Collection </h4>
                <p className="star">$80.00</p>
            </div>
            </div>
            <div>
                <img src={kid02} alt=""/>
                <div className="txtc">
                <h4>Summer Cap </h4>
                <p className="star">$12.00</p>
            </div>
            </div>
            <div>
                <img src={kid03} alt=""/>
                <div className="txtc">
                <h4>Classic Kid </h4>
                <p className="star">$30.00</p>
            </div>
            </div>
            <div>
                <img src={next} alt=""/>
            </div>
            </div>
        </div>
        

  </Container>
  <Footer/>

  </>

    )
}
export default App