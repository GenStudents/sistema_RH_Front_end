import { useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom"; 
import { Menu, X } from "lucide-react"; 

function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [mobileOpen, setMobileOpen] = useState(false);

    let component: ReactNode;

    component = (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#ebebeb]">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                
                {/* Logo RHConnect */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0f3460]">
                        <span className="text-sm font-bold text-white">RH</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-[#212121]">
                        RHConnect
                    </span>
                </Link>

                {/* Navegação Desktop */}
                <div className="hidden items-center gap-8 md:flex">
                    
                    <Link to="/" className={`text-sm font-medium transition-colors hover:text-[#0f3460] ${pathname === "/" ? "text-[#0f3460] font-bold" : "text-[#555555]"}`}>
                        Home
                    </Link>

                    <Link to="/sobre" className={`text-sm font-medium transition-colors hover:text-[#0f3460] ${pathname === "/sobre" ? "text-[#0f3460] font-bold" : "text-[#555555]"}`}>
                        Sobre Nós
                    </Link>

                    <Link to="/produto" className={`text-sm font-medium transition-colors hover:text-[#0f3460] ${pathname === "/produto" ? "text-[#0f3460] font-bold" : "text-[#555555]"}`}>
                        Produto
                    </Link>
                    
                    <button className="rounded-lg bg-[#0f3460] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1a4a80]">
                        Solicitar Demo
                    </button>
                </div>

                {/* Botão para abrir o menu no celular */}
                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#0f3460]">
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Menu Mobile */}
            {mobileOpen && (
                <div className="border-t border-[#ebebeb] bg-white px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        
                        <Link to="/" onClick={() => setMobileOpen(false)} className={`text-sm font-medium ${pathname === "/" ? "text-[#0f3460]" : "text-[#555555]"}`}>
                            Home
                        </Link>

                        <Link to="/sobre" onClick={() => setMobileOpen(false)} className={`text-sm font-medium ${pathname === "/sobre" ? "text-[#0f3460]" : "text-[#555555]"}`}>
                            Sobre Nós
                        </Link>

                        <Link to="/produto" onClick={() => setMobileOpen(false)} className={`text-sm font-medium ${pathname === "/produto" ? "text-[#0f3460]" : "text-[#555555]"}`}>
                            Produto
                        </Link>

                        <button className="rounded-lg bg-[#0f3460] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#1a4a80]">
                            Solicitar Demo
                        </button>
                    </div>
                </div>
            )}
        </header>
    );

    return <>{component}</>;
}

export default Navbar;