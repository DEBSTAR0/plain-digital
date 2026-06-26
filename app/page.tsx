export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-3xl">
        <span className="inline-block mb-6 px-4 py-1 rounded-full text-xs font-semibold bg-blue-700 text-white">
          BETA
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          PLAIN DIGITAL
          <br />
          for modern creators
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          We build clean, fast, and powerful websites that make your brand stand out.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition">
          Get Started
        </button>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <img
          src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200"
          alt="workspace"
          className="rounded-2xl w-full"
        />
      </div>
    </main>
  );
}
