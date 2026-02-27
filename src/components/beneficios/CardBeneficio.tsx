interface CardBeneficioProps {
    icon: string
    titulo: string
    descricao: string
}

function CardBeneficio({ icon, titulo, descricao }: CardBeneficioProps) {
    return (
        <div className="bg-gray-100 rounded-2xl p-6 hover:bg-sky-50 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {titulo}
            </h3>
            <p className="text-gray-600 text-sm">{descricao}</p>
        </div>
    )
}

export default CardBeneficio