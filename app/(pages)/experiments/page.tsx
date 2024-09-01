import Container from '@/app/components/Layout/Container/Container'

export default function Experiments() {
  return (
    <Container
      as="main"
      rootClassName="min-h-screen py-16 flex flex-col justify-center items-stretch"
      className="flex min-h-[60vh] w-full flex-col items-center gap-y-4 rounded-lg bg-white p-8 text-center shadow-2xl"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl">Exeriments</h1>
    </Container>
  )
}
