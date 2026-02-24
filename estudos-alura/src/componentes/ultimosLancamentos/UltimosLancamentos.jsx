import { livros } from './DadosUltimosLancamentos'
import styles from './UltimosLancamentos.module.css'
import CardRecomenda from '../CardRecomenda/CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
function UltimosLancamentos() {
    return (
        <div className={styles.card}>
            <h2 className={styles.tituloUltimoLancamentos}>Ultimos Lançamentos</h2>
            <div className={styles.card2}>
                {livros.map(livro => (
                    <img src={livro.src} />
                ))}

            </div>
            <CardRecomenda
            titulo="Talvez você se interesse por"
            subtitulo="Angular 11"
            descricao="construindo uma aplicação com a plataforma google"
            img={imagemLivro}
            />
        </div>
        
    )
}

export default UltimosLancamentos 