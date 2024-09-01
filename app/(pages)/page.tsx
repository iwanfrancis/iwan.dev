import Link from 'next/link'
import Container from '../components/Layout/Container/Container'

export default function Home() {
  return (
    <Container
      as="main"
      rootClassName="min-h-screen py-16 flex flex-col justify-center items-stretch"
      className="flex min-h-[60vh] w-full flex-col items-center gap-y-4 rounded-lg bg-slate-50 p-8 text-center shadow-lg"
    >
      <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl">
        Iwan Francis
      </h1>
    </Container>
  )
}
