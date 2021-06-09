/* eslint-disable max-len */
import React from 'react'
import styles from '../index.css'

const Header = () => (
  <header className={styles.GridH}>
    <h1 className={styles.Titulo}>Portafolio Diego Crespo</h1>
    <h1 className={styles.Info}>Sobre Mi</h1>
    <h1 className={styles.Info2}>Estudiante Ciencias de la Computacion</h1>
    <h1 className={styles.Info3}>Desarrollador de Juegos</h1>
    <h1 className={styles.Info4}>Desarrollador Web</h1>
    <h1 className={styles.Info5}>Diseñador Interfaces y UI</h1>
    <img className={styles.Foto} src="https://i.ibb.co/gDdkvCC/PP.jpg" alt="Foto Cargando" />
    <img tabInndex="-1" onClick={() => {document.location='https://codepen.io/diego-crespo/pen/Vwmeoom'} } className={styles.FotoYoutube} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png" alt="Foto Cargando" />
    <img tabInndex="-1" onClick={() => {document.location='https://diego22314.itch.io/spaceformer'} } className={styles.FotoGame} src="https://previews.123rf.com/images/midsummerday/midsummerday1902/midsummerday190200030/125179165-new-game-text-in-style-of-old-8-bit-video-games-vibrant-colorful-3d-pixel-letters-creative-digital-v.jpg" alt="Foto Cargando" />
    <h1 tabInndex="-1" onClick={() => {document.location='https://codepen.io/diego-crespo/pen/Vwmeoom'} } className={styles.Youtube}>-Youtube CSS</h1>
    <h1 className={styles.Contacto}>Contacto: DiegoCrespo34@gmail.com</h1>
    <img tabInndex="-1" onClick={() => {document.location='https://www.linkedin.com/in/diego-crespo-b06592214/'} } className={styles.Link} src="https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg" alt="Foto Cargando" />
    <img tabInndex="-1" onClick={() => {document.location='https://github.com/Diego223'} } className={styles.Git} src="https://i2.wp.com/hipertextual.com/wp-content/uploads/2020/04/hipertextual-github-equipos-ahora-es-totalmente-gratis-2020680731.jpg?fit=1920%2C1080&ssl=1" alt="Foto Cargando" />

    <h1 tabInndex="-1" onClick={() => {document.location='https://diego22314.itch.io/spaceformer'} } className={styles.Game}>- Spaceformer</h1>

  </header>
)

export default Header
