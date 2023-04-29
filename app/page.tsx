import Image from 'next/image'


export default function Home() {
  return (
    <main className={`flex flex-col gap-6 items-center justify-center w-screen h-screen from-black via-slate-900/20 to-black`}>
      <div className={`text-center space-y-2`}>
        <h1 className={`text-5xl md:text-9xl font-montserrat font-black uppercase`}>paztg</h1>
        <h2 className={`tracking-[0.25rem] text-xs md:text-4xl font-montserrat font-light`}>Motionworks</h2>
      </div>
      <div>
        <nav>
          <ul className='flex list-none gap-3 text-xs text-zinc-500'>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
    </main>
  )
}
