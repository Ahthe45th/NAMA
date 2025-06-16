import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600 text-white font-sans">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300">Namaa <span className="text-yellow-500">نَمَاء</span></h1>
      </header>
      <main className="flex-1 space-y-12 px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3].map((idx)=>(
            <div key={idx} className="aspect-[9/16] bg-black/20 flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/qLVCEYaN59A"
                title="YouTube video"
                className="h-full w-full"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </section>

        <section id="tiers" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {level:'Basic',benefits:['Access to updates']},
              {level:'Premium',benefits:['Updates','Community access']},
              {level:'Elite',benefits:['All benefits','1-on-1 mentoring']},
            ].map((tier)=>(
              <div key={tier.level} className="border border-yellow-400 rounded-lg p-4 shadow-sm bg-white/20">
                <h3 className="text-xl font-bold mb-2 text-center text-yellow-200">{tier.level}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white">
                  {tier.benefits.map((b)=>(<li key={b}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Join Namaa</h2>
          <form className="space-y-4" onSubmit={e=>{e.preventDefault(); fetch('/api/placeholder',{method:'POST'});}}>
            <input type="text" placeholder="Name" className="w-full border border-emerald-900 p-2 rounded bg-white/80 text-emerald-900" required />
            <input type="email" placeholder="Email" className="w-full border border-emerald-900 p-2 rounded bg-white/80 text-emerald-900" required />
            <input type="tel" placeholder="Phone" className="w-full border border-emerald-900 p-2 rounded bg-white/80 text-emerald-900" required />
            <textarea placeholder="Why do you want to join Namaa?" className="w-full border border-emerald-900 p-2 rounded bg-white/80 text-emerald-900" rows="4" required></textarea>
            <button type="submit" className="w-full bg-yellow-400 text-emerald-900 p-2 rounded hover:bg-yellow-300 font-semibold">Submit</button>
          </form>
        </section>
      </main>
      <footer className="text-center py-4 text-sm text-yellow-200">© {new Date().getFullYear()} Namaa</footer>
    </div>
  );
}

export default App;
