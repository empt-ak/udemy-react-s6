import logo from '../../assets/logo.png';

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="A canvas" className="w-44 mb-8 object-contain"/>
      <h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800">ReactArt</h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  )
}

export default Header
