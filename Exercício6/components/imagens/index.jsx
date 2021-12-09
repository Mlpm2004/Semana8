const Imagem = ({imagem,altura,largura})=>{
    return (
        <div style={{justifyContent:'center' ,display: 'flex'}}>
            <img src={imagem} style={{width:largura, height:altura}} alt='Dev'/>
        </div>
    )

}
export default Imagem