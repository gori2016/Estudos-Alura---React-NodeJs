import styles from './Search.module.css'
import { useState } from 'react'
import { livros } from '../dados/dadosPesquisa'

function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <div className={styles.div}>
            <h2 className={styles.titulo}>Já sabe por onde começar?</h2>
            <h3 className={styles.subtitulo}>Encontre seu livro em nossa estante</h3>
            <input type="text" placeholder="Escreva sua próxima leitura" onBlur={(evento) => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro=>livro.nome.includes(textoDigitado))
               setLivrosPesquisados(resultadoPesquisa)
            }} />
            {livrosPesquisados.map(livro=>(
                <div className={styles.divResultadoPesquisa}>
                    <p className={styles.paragrafoResultado}>{livro.nome}</p>
                    <img className={styles.img} src={livro.src} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Search