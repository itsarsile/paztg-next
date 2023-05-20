import Image from 'next/image'


export default function Home() {
  return (
    // <main className={`flex flex-col gap-6 items-center justify-center w-screen h-screen from-black via-slate-900/20 transition-colors to-red-600/20 bg-gradient-radial`}>
      <main className={`flex flex-col gap-6 items-center justify-center w-screen h-screen bg-gradient-to-tl from-amber-900/20 via-slate-900/20 to-amber-900/50 animate-gradient-fade-in`}>
      <div>
        <h2 className={`text-xs md:text-xl tracking-widest font-montserrat uppercase font-light animate-fade-in`}>Motionworks</h2>
      </div>
      <div className={`text-center space-y-2`}>
        <h1 className={`text-5xl md:text-9xl duration-1000 font-montserrat font-black uppercase animate-title`}>paztg</h1>
      </div>
        <nav>
          <ul className='flex list-none gap-3 text-xl text-zinc-500 justify-center animate-fade-in'>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </nav>
    </main>
  )
}
