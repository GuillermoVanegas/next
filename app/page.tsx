import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">home</a>
          <a href="#">Acerca de</a>
        </nav>
      </div>
    </main>
  );
}
