import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>

    <Head>
      <title>Pagina Principal</title>
      <meta name='keyworkds' content="Roupas, Calçados, Boné"></meta>
      <meta name='description' content="Encontre a melhor roupa para voce"></meta>
    </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> hello world</h1>
        <Image className={styles.imagem}
          src="/images/city.jpg" 
          width="200" 
          height="300" 
          alt='Cidade a noite'
        />
      </main>
    </>
  )
}
