import Container from '../components/Layout/Container/Container'

export default function Home() {
  return (
    <Container
      as="main"
      rootClassName="min-h-screen py-16 flex flex-col justify-center items-stretch"
      className="flex min-h-[60vh] w-full flex-col items-center"
    >
      <h1 className="mb-8 bg-slate-50 p-6 pb-0 text-5xl font-semibold leading-none sm:text-7xl md:text-8xl">
        Iwan Francis
      </h1>

      <p className="bg-slate-50 px-6 pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <p className="bg-slate-50 px-6 pb-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Container>
  )
}
