import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Maximize2, Volume, Laptop2, LayoutList, Mic2, Heart, XCircle, PictureInPicture2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 p-6">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Liked Songs</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">waiit.</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Spinnin Records</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Travis Scott</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">GANGSTAR GANG</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Delicious</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">All Out 2000s</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">RapCaviar</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">NoCap</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Dance Paradise</a>
          </nav>

        </aside>
        <main className="flex-1 bg-zinc-950 p-6">
          <div className="flex items-center gap-5">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button> 
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">

            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>
              
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>
            <a href="" className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
              <Image src="/popsmokeFaith.png" width={104} height={104} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong>Faith (Deluxe)</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible hover:scale-105">
                <Play width={22} fill="bg-black" />
              </button>
            </a>

          </div>

          <h2 className="font-semibold text-2xl mt-10">Jump back in</h2>

          <div className="grid grid-cols-7 gap-4 mt-4">

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bog-white/10">
              <Image src="/vidacara.png" className="w-full" width={200} height={200} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong className="font-semibold ">Vida Cara</strong>
              <span className="text-sm text-zinc-500">Orochi</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bog-white/10">
              <Image src="/vidacara.png" className="w-full" width={200} height={200} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong className="font-semibold ">Vida Cara</strong>
              <span className="text-sm text-zinc-500">Orochi</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bog-white/10">
              <Image src="/vidacara.png" className="w-full" width={200} height={200} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong className="font-semibold ">Vida Cara</strong>
              <span className="text-sm text-zinc-500">Orochi</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bog-white/10">
              <Image src="/vidacara.png" className="w-full" width={200} height={200} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong className="font-semibold ">Vida Cara</strong>
              <span className="text-sm text-zinc-500">Orochi</span>
            </a>

            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bog-white/10">
              <Image src="/vidacara.png" className="w-full" width={200} height={200} alt="Capa do álbum Faith do artista Pop Smoke" />
              <strong className="font-semibold ">Vida Cara</strong>
              <span className="text-sm text-zinc-500">Orochi</span>
            </a>

          </div>
        </main>
      </div>
      <footer className="bg-black border-t border-zinc-900 p-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <Image src="/vidacara.png" className="rounded" width={60} height={60} alt="Capa do álbum Vida Cara do artista Orochi" />
          <div className="flex flex-col">
            <strong className="font-normal">
              <a href="" className="hover:underline">Pradaboss</a>
            </strong>
            <span className="text-xs text-zinc-400">
              <a href="" className="hover:underline hover:text-zinc-100">Orochi</a>
            </span>
          </div>
          <div className="flex gap-3 pl-8">
            <Heart width={18} className="opacity-70 hover:opacity-100" />
            <XCircle width={18} className="opacity-70 hover:opacity-100" />
            <PictureInPicture2 width={18} className="opacity-70 hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
         <div className="flex items-center gap-6">
          <Shuffle width={18} className="opacity-40" />
          <SkipBack width={18} className="fill-white opacity-70 hover:opacity-100" />

          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:scale-110 hover:opacity-95">
            <Play width={18} fill="bg-black" />
          </button>

          <SkipForward width={18} className="fill-white opacity-70 hover:opacity-100" />
          <Repeat width={18} className="opacity-70 hover:opacity-100" /> 
         </div>
         <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:58</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 rounded-full w-40 h-1"></div>
          </div>
          <span className="text-xs text-zinc-400">3:27</span>
         </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 width={18} className="opacity-70 hover:opacity-100" />
          <LayoutList width={18} className="opacity-70 hover:opacity-100" />
          <Laptop2 width={18} className="opacity-70 hover:opacity-100" />

          <div className="flex items-center gap-2">
            <Volume width={18} className="opacity-70 hover:opacity-100" />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 rounded-full w-10 h-1"></div>
            </div>
          </div>
          <Maximize2 width={18} className="opacity-70 hover:opacity-100" />
        </div>
      </footer>
    </div>
  )
}
