
const deals = [
  { name: "Amazon.ca", bonus: null },
  { name: "DoorDash", bonus: "1.5% More" },
  { name: "Starbucks", bonus: null },
  { name: "Walmart Canada", bonus: "1% More" },
  { name: "PetSmart", bonus: "6% More" },
  { name: "Esso & Mobil", bonus: "1% More" },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <header className="w-full bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="font-bold text-xl tracking-tight text-purple-700">
            moola
          </div>

          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            <a className="hover:text-slate-900" href="#">Shop</a>
            <a className="hover:text-slate-900" href="#">How it Works</a>
            <a className="hover:text-slate-900" href="#">Refer & Earn</a>
            <a className="hover:text-slate-900" href="#">Merchant Solutions</a>
          </nav>

          <button className="rounded-full bg-purple-700 px-4 py-2 text-xs font-semibold text-white hover:bg-purple-800">
            DOWNLOAD NOW
          </button>
        </div>
      </header>
      <section className="w-full bg-purple-700">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2 md:py-10">
          {/* main hero card */}
          <div className="md:col-span-2 rounded-3xl bg-gradient-to-br from-purple-600 to-purple-900 p-8 text-white">
            <p className="text-xs font-semibold tracking-widest opacity-90">
              GIFTING MADE EASIER
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              Buy A Gift Card,
              <span className="block">Get Cash Back Rewards</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm opacity-90 md:text-base">
              Shop gift cards from popular brands and earn rewards. Send instantly
              through text or email.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-800 hover:bg-slate-100">
                Shop Gift Cards
              </button>
              <button className="rounded-full border border-white/40 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10">
                How it Works
              </button>
            </div>
          </div>

            <div className="rounded-3xl bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">
                Send gift cards instantly
                <span className="block">through text.</span>
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fast gifting, no shipping stress.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="h-10 w-28 rounded-lg bg-slate-200" />
                <div className="h-10 w-28 rounded-lg bg-slate-200" />
              </div>
            </div>
          <div className="rounded-3xl bg-white p-6">
            <h2 className="text-lg font-bold text-slate-900">
              Invite a friend & get
              <span className="block">cash back rewards.</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Simple referrals. Small wins add up.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Popular Deals
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              A simplified grid inspired by Moola's marketplace cards.
            </p>
          </div>
          <a className="text-sm font-semibold text-purple-700 hover:text-purple-900" href="#">
            View all
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((d) => (
            <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-slate-200" />
                <div>
                  <h3 className="font-bold text-slate-900">{d.name}</h3>
                  <p className="text-xs text-slate-500">Gift Card</p>
                </div>
              </div>

              <div className="mt-4">
                {d.bonus ? (
                  <>
                    <p className="text-xs text-slate-600">Buy Now And Get</p>
                    <p className="mt-1 text-lg font-extrabold text-purple-700">
                      {d.bonus}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-slate-600">
                    Great everyday value and quick delivery.
                  </p>
                )}
              </div>

              <button className="mt-5 w-full rounded-xl bg-purple-700 py-2 text-sm font-semibold text-white hover:bg-purple-800">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
