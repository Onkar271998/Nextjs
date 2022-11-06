import Link from "next/link"
import styles  from "./Navbar.module.css";

const Navbar = () => {
  return (
      <div className={styles.box}>
          <Link href="/" className={styles.text}>Home</Link>
          <Link href="/users">Users</Link>
    </div>
  )
}

export default Navbar