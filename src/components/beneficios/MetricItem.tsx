interface MetricItemProps {
    numero: string
    texto: string
}

function MetricItem({ numero, texto }: MetricItemProps) {
    return (
        <div>
            <h3 className="text-5xl font-bold text-sky-600 mb-4">
                {numero}
            </h3>
            <p className="text-gray-800 font-medium">{texto}</p>
        </div>
    )
}

export default MetricItem