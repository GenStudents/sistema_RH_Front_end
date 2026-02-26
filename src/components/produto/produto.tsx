import BannerProduto from "../bannerproduto/BannerProduto"
import Cta from "../cta/Cta"
import DestaquesProduto from "../destaquesproduto/DestaquesProduto"
import Faq from "../faq/Faq"
import Planos from "../planos/Planos"

function Produto(){
  
    return(
      <>
        <BannerProduto></BannerProduto>
        <DestaquesProduto></DestaquesProduto>
        <Planos></Planos> 
        <Cta></Cta>
        <Faq></Faq>
      </>
    )
  
}
export default Produto