    function Objetoiduser({img,nome,descr}){
        return (    
                <div className="retangulo">
                    <div className='imagem'>
                        <img src={img} style={{width:'40px',height:'40px'}} alt='Dev'/>
                    </div >
                    <div className="textos">
                        <div>
                          <label><b><i>{nome}</i></b></label>
                        </div>
                        <div>
                          <label><small>{descr}</small></label>
                        </div>
                    </div >
                </div>)
        
    }
export default Objetoiduser