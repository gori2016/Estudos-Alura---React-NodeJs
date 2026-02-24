import styles from './CardRecomenda.module.css'

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <div className={styles.cardRecomenda}>
            {/* Coluna da Esquerda: Textos */}
            <div className={styles.conteudoEsquerda}>
                <h3 className={styles.tituloRecomenda}>{titulo}</h3>
                <h4 className={styles.subtitulo}>{subtitulo}</h4>
                <p className={styles.descricao}>{descricao}</p>
            </div>

            {/* Coluna da Direita: Imagem e Botão */}
            <div className={styles.conteudoDireita}>
                <img className={styles.imgAngular} src={img} alt="" />
                <button className={styles.botaoRecomenda}>Saiba Mais</button>
            </div>
        </div>
    )
}

export default CardRecomenda