import { type ReactNode } from "react";
import { Link } from "react-router-dom";

function Footer() {

    
    let data = new Date().getFullYear(); // Pega o ano atual automaticamente para o Copyright
    let component: ReactNode;

    // Fundo azul escuro
    component = (
        <footer className="bg-[#061325] text-white border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-16">
                
                {/* Grid principal: 1 coluna no mobile, 4 no desktop */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    
                    {/* Lado Esquerdo: Marca e Descrição */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="flex items-center gap-2">
                            {/* Logo azul claro */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0077b6]">
                                <span className="text-sm font-bold text-white">RH</span>
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                RHConnect
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                            Transformando a gestão de recursos humanos com tecnologia inteligente e automatizada.
                        </p>
                    </div>

                    {/* Coluna: Produto */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                            Produto
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/produto" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Funcionalidades</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Preços</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Integração</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Atualizações</Link></li>
                        </ul>
                    </div>

                    {/* Coluna: Empresa */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                            Empresa
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/sobre" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Sobre Nós</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Carreiras</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Blog</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Contato</Link></li>
                        </ul>
                    </div>

                    {/* Coluna: Recursos */}
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                            Recursos
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Documentação</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Central de Ajuda</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Comunidade</Link></li>
                            <li><Link to="#" className="text-sm text-gray-400 font-semibold hover:text-white transition-colors">Status</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Linha Inferior */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
                    <p className="text-sm text-gray-500 font-semibold">
                        © {data} RHConnect. Todos os direitos reservados.
                    </p>
                    
                    <div className="flex gap-6">
                        <Link to="#" className="text-sm text-gray-500 font-semibold hover:text-white transition-colors">Privacidade</Link>
                        <Link to="#" className="text-sm text-gray-500 font-semibold hover:text-white transition-colors">Termos</Link>
                        <Link to="#" className="text-sm text-gray-500 font-semibold bold hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );

    return (
        <>
            { component }
        </>
    );
}

export default Footer;

