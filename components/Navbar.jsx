import Link from "next/link"
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div> 
      
        <ul className={styles.navbar}>
          <li>
           <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
        
          <li>
          <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/ateste">aTeste</Link>
          </li>
          <li>
            <Link href="/todos">todos</Link>
          </li>
        </ul>
    </div>
  )     
}

export default Navbar