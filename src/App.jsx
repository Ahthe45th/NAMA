import React from 'react';

const questions = [
  {
    q: '1. What is the main goal of the OWASP Top 10?',
    options: [
      'A) To list the fastest programming languages for APIs',
      'B) To standardize web API naming conventions',
      '[✔] C) To identify the most critical web application security risks',
      'D) To provide cloud provider-specific compliance policies',
    ],
  },
  {
    q: '2. During a code audit for a web app, what would be the biggest red flag?',
    options: [
      'A) Use of Bootstrap for frontend styling',
      'B) API responses with 200 OK status',
      'C) Usage of asynchronous requests in JavaScript',
      '[✔] D) SQL statements with unsanitized user inputs',
    ],
  },
  {
    q: '3. What is the purpose of a penetration test?',
    options: [
      'A) To simulate user traffic under high load',
      'B) To evaluate UI/UX under production',
      '[✔] C) To identify exploitable vulnerabilities in systems or apps',
      'D) To test compatibility with different web browsers',
    ],
  },
  {
    q: '4. What does the Secure Software Development Lifecycle (SSDLC) include that traditional SDLC does not?',
    options: [
      '[✔] A) Security checks and threat modeling at every development phase',
      'B) Mandatory UI reviews by QA',
      'C) Faster deployment through CI/CD',
      'D) Integration of design thinking methodology',
    ],
  },
  {
    q: '5. Which is a core function of a firewall in network security?',
    options: [
      'A) Encrypting traffic end-to-end',
      '[✔] B) Filtering incoming and outgoing traffic based on rules',
      'C) Providing two-factor authentication',
      'D) Monitoring user session activity',
    ],
  },
  {
    q: '6. In cloud security, what does AWS IAM primarily control?',
    options: [
      'A) Data migration to EC2',
      '[✔] B) Identity-based access to AWS services and resources',
      'C) IP-level firewall rules for RDS',
      'D) File encryption policies for EBS volumes',
    ],
  },
  {
    q: '7. What does “encryption in transit” refer to?',
    options: [
      'A) Encrypting backups on physical storage',
      'B) Hashing passwords at login',
      '[✔] C) Securing data as it moves between systems or users',
      'D) Encrypting cached data on a client device',
    ],
  },
  {
    q: '8. Which tool is commonly used for intrusion detection in a network?',
    options: ['A) Git', '[✔] B) Snort', 'C) Postman', 'D) Terraform'],
  },
  {
    q: '9. What is the role of Wazuh in a cybersecurity stack?',
    options: [
      'A) Container orchestration',
      '[✔] B) Host-based intrusion detection and log analysis',
      'C) Frontend security token management',
      'D) VPN tunneling',
    ],
  },
  {
    q: '10. Which of the following best defines an incident response plan?',
    options: [
      'A) A backup schedule for weekly system snapshots',
      '[✔] B) A structured approach for identifying and mitigating security breaches',
      'C) A guideline for writing secure code in Python',
      'D) A deployment script for redeploying compromised servers',
    ],
  },
  {
    q: '11. What’s a realistic first step during a cybersecurity incident?',
    options: [
      '[✔] A) Contain the breach to prevent further damage',
      'B) Notify marketing teams',
      'C) Shut down the entire infrastructure',
      'D) Roll back to a previous version immediately',
    ],
  },
  {
    q: '12. Which regulation specifically mandates data protection for health-related data in the US?',
    options: ['[✔] A) HIPAA', 'B) GDPR', 'C) SOC 2', 'D) NIST 800-171'],
  },
  {
    q: '13. What’s the purpose of GDPR in the context of cybersecurity?',
    options: [
      'A) To enable faster app deployment in the EU',
      '[✔] B) To regulate personal data handling and protection for EU citizens',
      'C) To enforce end-to-end encryption for all internet traffic',
      'D) To audit software vendors in regulated industries',
    ],
  },
  {
    q: '14. What is Nessus primarily used for?',
    options: [
      '[✔] A) Vulnerability scanning',
      'B) Web page optimization',
      'C) Application performance monitoring',
      'D) DNS configuration',
    ],
  },
  {
    q: '15. Which of the following is a Security Information and Event Management (SIEM) platform?',
    options: ['A) Postfix', '[✔] B) Splunk', 'C) Redis', 'D) Apache Kafka'],
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-600 text-white font-sans">
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300">Namaa <span className="text-yellow-500">نَمَاء</span></h1>
      </header>
      <main className="flex-1 space-y-12 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1,2,3].map((idx) => (
            <div
              key={idx}
              className="aspect-[9/16] max-h-[80vh] bg-black/20 flex items-center justify-center"
            >
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

        <section id="cyber-questionnaire" className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">
            CYBERSECURITY EXPERT SCREENING QUESTIONNAIRE
          </h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {questions.map((q, idx) => (
              <fieldset key={idx} className="space-y-2">
                <legend className="font-semibold">{q.q}</legend>
                {q.options.map((opt, oIdx) => (
                  <label key={oIdx} className="block">
                    <input type="radio" name={`q${idx}`} className="mr-2" />
                    {opt}
                  </label>
                ))}
              </fieldset>
            ))}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-emerald-900 p-2 rounded hover:bg-yellow-300 font-semibold"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer className="text-center py-4 text-sm text-yellow-200">© {new Date().getFullYear()} Namaa</footer>
    </div>
  );
}

export default App;
