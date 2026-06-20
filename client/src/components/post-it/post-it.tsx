import './post-it.css'

export default function PostIt() {
    return (
        <div id="post-it">
            <h2 className="post-it-title">¿Qué anotamos hoy?</h2>
            <ul className="post-it-list">
                <li className="post-it-item"><a href="/">Ingresos</a></li>
                <li className="post-it-item"><a href="/">Gastos</a></li>
                <li className="post-it-item"><a href="/">Objetivos</a></li>
            </ul>
        </div>
    )
}