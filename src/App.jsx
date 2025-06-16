import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold">Namaa <span className="text-gray-500">نَمَاء</span></h1>
      </header>
      <main className="flex-1 space-y-12 px-4">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['video1.mp4','video2.mp4','video3.mp4'].map((src,idx)=>(
            <div key={idx} className="aspect-[9/16] bg-gray-200 flex items-center justify-center">
              <video src={src} controls className="h-full w-full object-cover" />
            </div>
          ))}
        </section>

        <section id="tiers" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {level:'Basic',benefits:['Access to updates']},
              {level:'Premium',benefits:['Updates','Community access']},
              {level:'Elite',benefits:['All benefits','1-on-1 mentoring']},
            ].map((tier)=>(
              <div key={tier.level} className="border rounded-lg p-4 shadow-sm bg-white">
                <h3 className="text-xl font-bold mb-2 text-center">{tier.level}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {tier.benefits.map((b)=>(<li key={b}>{b}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="join" className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Join Namaa</h2>
          <form className="space-y-4" onSubmit={e=>{e.preventDefault(); fetch('/api/placeholder',{method:'POST'});}}>
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" required />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" required />
            <input type="tel" placeholder="Phone" className="w-full border p-2 rounded" required />
            <textarea placeholder="Why do you want to join Namaa?" className="w-full border p-2 rounded" rows="4" required></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
          </form>
        </section>
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">© {new Date().getFullYear()} Namaa</footer>
    </div>
  );
}

export default App;
