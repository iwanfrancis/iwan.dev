import Link from 'next/link'
import Container from '../components/Layout/Container/Container'

export default function Home() {
  return (
    <Container
      as="main"
      rootClassName="min-h-screen py-16 flex flex-col justify-center items-stretch"
      className="flex min-h-[60vh] w-full flex-col items-center gap-y-4 rounded-lg bg-white p-8 text-center shadow-2xl"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl">Iwan Francis</h1>
      <nav className="flex gap-4">
        <Link href="/cv">CV</Link>
        <Link href="/experiments">Experiments</Link>
      </nav>
    </Container>
  )
}
