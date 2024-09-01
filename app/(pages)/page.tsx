import Container from '../components/Layout/Container/Container'

export default function Home() {
  return (
    <Container
      as="main"
      rootClassName="min-h-screen py-16 flex flex-col justify-center items-stretch"
      className="flex flex-col items-center"
    >
      <h1 className="mb-8 bg-slate-50 p-6 pb-0 text-5xl font-semibold leading-none sm:text-7xl md:text-8xl">
        Iwan Francis
      </h1>

      <p className="mx-10 bg-slate-50 px-6 pb-4 text-lg">
        Hi! I&apos;m Iwan Francis, a technical lead at&nbsp;
        <a href="https://www.apadmi.com/" className="link">
          Apadmi
        </a>
        . With 5 years of experience as a frontend developer, I specialize in
        crafting user-friendly and accessible web apps that deliver results.
      </p>
    </Container>
  )
}
