import Image from 'next/image'

export default function Home() {
  return (
    <main className="container">
      <section className="card">
        <Image
          src="/minha-foto.png"
          alt="Foto de perfil"
          width={190}
          height={190}
          className="foto"
          priority
        />

        <h1>Tiago Marques de Oliveira</h1>

        <p className="bio">
          Oi, eu sou Tiago Marques de Oliveira sou estudante de ciência da computação .
          Gosto criar projetos e jogos
          Linguagens de Programação: Pytho, C , js, html5 e CSS.
        </p>
      </section>
    </main>
  )
}
