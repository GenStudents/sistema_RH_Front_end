import BannerProduto from "../../components/bannerproduto/BannerProduto";
import Cta from "../../components/cta/Cta";
import DestaquesProduto from "../../components/destaquesproduto/DestaquesProduto";
import Faq from "../../components/faq/Faq";
import Planos from "../../components/planos/Planos";

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
export default Produto;