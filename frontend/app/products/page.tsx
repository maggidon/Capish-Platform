type Product = {
  id: number;
  name: string;
  price: number;
};

const CAP_EMOJI = ["🧢", "🎩", "👒", "🧢", "🧢"];

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://127.0.0.1:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Capish Collection</h1>
            <p className="mt-2 text-sm text-gray-600">
              Drop 01 — curated staples. Limited release.
            </p>
          </div>

          <a
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Back to home →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, idx) => (
            <div
              key={p.id}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              {/* “Cap thumbnail” placeholder that doesn't look like fog */}
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4">
                <div className="text-4xl leading-none">{CAP_EMOJI[idx % CAP_EMOJI.length]}</div>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700">
                  New
                </span>
              </div>

              <h2 className="mt-4 text-base font-semibold leading-snug">
                {p.name}
              </h2>

              <div className="mt-2 flex items-center justify-between">
                <p className="text-lg font-bold">£{p.price}</p>
                <p className="text-xs text-gray-500">In stock soon</p>
              </div>

              <button
                disabled
                className="mt-5 w-full rounded-xl bg-black py-2.5 text-sm font-medium text-white opacity-90 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
