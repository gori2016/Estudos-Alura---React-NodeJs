import { livros } from './DadosUltimosLancamentos'
import styles from './UltimosLancamentos.module.css'
import titulo from 
function UltimosLancamentos() {
    return (
        <div className={styles.card}>
            <h2 className={styles.tituloUltimoLancamentos}>Ultimos Lançamentos</h2>
            <div className={styles.card2}>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}

            </div>
        </div>
    )
}

export default UltimosLancamentos 