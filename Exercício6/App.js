
import './App.css';
import Objetoiduser from './components/objetoiduser'
import Texto from './components/textos'
import Imagem from './components/imagens'
import Triangle from './components/Triangle';
function App() {

    return (
      <>
        <div className="raiz">
          <div className="container">
            <div className="textos">
              <Objetoiduser img='http://localhost:3000/img/homer.jpg' nome='Kiran Acharya' descr='5m'/>
              <Texto  texto="Loren ipsum dolor sit amet, consectur adispiscing elit." font={14}/>
              <Imagem imagem="http://localhost:3000/img/homer.jpg" altura="200px" largura="200px"     />
              <div style={{display:'flex', flexDirection:'row',width: '280px'}}>
                <div style={{display:'flex'}}>
                  <div style={{width:'20px'}}>
                    <Imagem imagem="http://localhost:3000/img/homer.jpg" altura="10px" largura="10px" />
                  </div>
                  <div style={{width:'180px'}}>
                    <Texto  texto="Comments" font={14}/>
                  </div>
                  <div >
                    <Texto  texto="Share" font={14}/>
                  </div>
                </div>
              </div>
              <div style={{display:'flex'}}>
                <div><Texto  texto="Liked by" font={14}/></div>
                <div><Texto  texto="John Doe & 25 Others" font={14} negrito="bolder"/></div>
              </div>
               
            </div>
          </div>
        </div>
      </>
    )

}

export default App;
