import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-3xl px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Capish
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Premium headwear inspired by street culture.
        </p>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-block rounded-md bg-white px-8 py-3 text-black font-medium hover:bg-gray-200 transition"
          >
            View Collection
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Drop 01 · Limited release
        </p>
      </div>
    </main>
  );
}
