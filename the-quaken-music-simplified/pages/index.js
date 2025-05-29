import { useEffect, useState } from 'react'

export default function Home() {
  const [audioFiles, setAudioFiles] = useState([])

  useEffect(() => {
    async function fetchAudioFiles() {
      const response = await fetch('/audio/audiofiles.json')
      const files = await response.json()
      setAudioFiles(files)
    }
    fetchAudioFiles()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-gray-900 text-white font-sans">
      <header className="w-full py-6 px-8 shadow-md bg-slate-950 bg-opacity-70 backdrop-blur-lg border-b border-slate-700 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wide">The Quaken Music</h1>
        <nav className="text-sm text-slate-300">Listen. Discover. Repeat.</nav>
      </header>
      <main className="px-6 py-10 max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {audioFiles.map((file, index) => (
            <div key={index} className="bg-slate-800/70 border border-slate-700 hover:border-indigo-400 transition-all duration-300 rounded-xl p-5 shadow-xl backdrop-blur">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-white truncate">{file.title}</h2>
              </div>
              <audio controls className="w-full rounded focus:outline-none">
                <source src={file.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} The Quaken Music. Built for listeners.
      </footer>
    </div>
  )
}