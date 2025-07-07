import React, { useState, useEffect, useRef } from 'react';
import brandAmbassadorApplicantVideo from './media/BRANDAMBASSADORAPPLICANT.mp4';
import introVideo from './media/OTHERVIDEO.mp4';

function LocalVideo({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full"
        controls={playing}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/50 text-white hover:bg-black/60"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-12 h-12 fill-current"
          >
            <path d="M16 10v28l22-14z" />
          </svg>
        </button>
      )}
    </div>
  );
}

const questions = [
  {
    q: '1. What is the main goal of the OWASP Top 10?',
    options: [
      'A) To list the fastest programming languages for APIs',
      'B) To standardize web API naming conventions',
      'C) To identify the most critical web application security risks',
      'D) To provide cloud provider-specific compliance policies',
    ],
  },
  {
    q: '2. During a code audit for a web app, what would be the biggest red flag?',
    options: [
      'A) Use of Bootstrap for frontend styling',
      'B) API responses with 200 OK status',
      'C) Usage of asynchronous requests in JavaScript',
      'D) SQL statements with unsanitized user inputs',
    ],
  },
  {
    q: '3. What is the purpose of a penetration test?',
    options: [
      'A) To simulate user traffic under high load',
      'B) To evaluate UI/UX under production',
      'C) To identify exploitable vulnerabilities in systems or apps',
      'D) To test compatibility with different web browsers',
    ],
  },
  {
    q: '4. What does the Secure Software Development Lifecycle (SSDLC) include that traditional SDLC does not?',
    options: [
      'A) Security checks and threat modeling at every development phase',
      'B) Mandatory UI reviews by QA',
      'C) Faster deployment through CI/CD',
      'D) Integration of design thinking methodology',
    ],
  },
  {
    q: '5. Which is a core function of a firewall in network security?',
    options: [
      'A) Encrypting traffic end-to-end',
      'B) Filtering incoming and outgoing traffic based on rules',
      'C) Providing two-factor authentication',
      'D) Monitoring user session activity',
    ],
  },
  {
    q: '6. In cloud security, what does AWS IAM primarily control?',
    options: [
      'A) Data migration to EC2',
      'B) Identity-based access to AWS services and resources',
      'C) IP-level firewall rules for RDS',
      'D) File encryption policies for EBS volumes',
    ],
  },
  {
    q: '7. What does “encryption in transit” refer to?',
    options: [
      'A) Encrypting backups on physical storage',
      'B) Hashing passwords at login',
      'C) Securing data as it moves between systems or users',
      'D) Encrypting cached data on a client device',
    ],
  },
  {
    q: '8. Which tool is commonly used for intrusion detection in a network?',
    options: ['A) Git', 'B) Snort', 'C) Postman', 'D) Terraform'],
  },
  {
    q: '9. What is the role of Wazuh in a cybersecurity stack?',
    options: [
      'A) Container orchestration',
      'B) Host-based intrusion detection and log analysis',
      'C) Frontend security token management',
      'D) VPN tunneling',
    ],
  },
  {
    q: '10. Which of the following best defines an incident response plan?',
    options: [
      'A) A backup schedule for weekly system snapshots',
      'B) A structured approach for identifying and mitigating security breaches',
      'C) A guideline for writing secure code in Python',
      'D) A deployment script for redeploying compromised servers',
    ],
  },
  {
    q: '11. What’s a realistic first step during a cybersecurity incident?',
    options: [
      'A) Contain the breach to prevent further damage',
      'B) Notify marketing teams',
      'C) Shut down the entire infrastructure',
      'D) Roll back to a previous version immediately',
    ],
  },
  {
    q: '12. Which regulation specifically mandates data protection for health-related data in the US?',
    options: ['A) HIPAA', 'B) GDPR', 'C) SOC 2', 'D) NIST 800-171'],
  },
  {
    q: '13. What’s the purpose of GDPR in the context of cybersecurity?',
    options: [
      'A) To enable faster app deployment in the EU',
      'B) To regulate personal data handling and protection for EU citizens',
      'C) To enforce end-to-end encryption for all internet traffic',
      'D) To audit software vendors in regulated industries',
    ],
  },
  {
    q: '14. What is Nessus primarily used for?',
    options: [
      'A) Vulnerability scanning',
      'B) Web page optimization',
      'C) Application performance monitoring',
      'D) DNS configuration',
    ],
  },
  {
    q: '15. Which of the following is a Security Information and Event Management (SIEM) platform?',
    options: ['A) Postfix', 'B) Splunk', 'C) Redis', 'D) Apache Kafka'],
  },
];

const fullstackQuestions = [
  {
    q: '1. Which of the following best describes the use of git rebase in a collaborative workflow?',
    options: [
      'A) It deletes commit history and merges remote branches directly',
      'B) It syncs your branch by replaying commits on top of another base',
      'C) It resets the remote to match your local history',
      'D) It pushes feature branches to production after pull requests',
    ],
  },
  {
    q: "2. You're in a team project and encounter merge conflicts during a pull request. What's the correct approach?",
    options: [
      'A) Force push your changes and override the branch',
      'B) Delete the conflicting branch and start fresh',
      'C) Pull latest changes, resolve conflicts locally, then commit',
      'D) Use git stash to bypass the conflicts and push',
    ],
  },
  {
    q: "3. What's a good Git commit message?",
    options: [
      'A) updated stuff',
      'B) Final push - works on my machine',
      'C) feat(auth): add JWT authentication middleware',
      'D) Some fixes and changes',
    ],
  },
  {
    q: '4. What is the key benefit of using a component-based architecture in React, Vue, or Angular?',
    options: [
      'A) It minimizes the need for version control',
      'B) It allows direct DOM manipulation for speed',
      'C) It improves code reusability and separation of concerns',
      'D) It eliminates state management issues entirely',
    ],
  },
  {
    q: '5. How does Tailwind CSS differ from Bootstrap?',
    options: [
      'A) Tailwind uses utility-first classes; Bootstrap is component-first',
      'B) Bootstrap supports JSX; Tailwind does not',
      'C) Bootstrap requires PostCSS while Tailwind doesn\'t',
      'D) Tailwind is primarily for mobile-only applications',
    ],
  },
  {
    q: '6. Which combination best ensures both responsiveness and accessibility in a navigation bar?',
    options: [
      'A) Use <div> tags with inline styles and onClick handlers',
      'B) Use ARIA roles, semantic HTML, media queries, and keyboard nav',
      'C) Disable pointer events and rely on tab index only',
      'D) Add media queries and use non-semantic tags with tabIndex',
    ],
  },
  {
    q: '7. In React, what does useEffect with an empty dependency array do?',
    options: [
      'A) It updates only on every re-render',
      'B) It runs after every DOM update',
      'C) It runs once after the first render',
      'D) It continuously polls the component for changes',
    ],
  },
  {
    q: '8. Which option best describes FastAPI?',
    options: [
      'A) A JavaScript library for real-time event handling',
      'B) A Go-based CLI deployment tool',
      'C) A modern Python web framework for fast APIs using type hints',
      'D) A templating engine for Python web apps',
    ],
  },
  {
    q: "9. In a secure login API using JWT, what's the correct flow?",
    options: [
      'A) Encrypt user password with base64 and pass to frontend',
      'B) Send JWT to frontend, store in localStorage, validate on requests',
      'C) Store password in JWT and check it on client',
      'D) Use session storage to persist tokens and block expiration',
    ],
  },
  {
    q: '10. When would you pick PostgreSQL over MongoDB?',
    options: [
      'A) When you have fixed schemas and need strong ACID compliance',
      'B) When you don\'t need any indexing',
      'C) When you want schema-less, document-oriented storage',
      'D) When you want to avoid joins and use embedded arrays',
    ],
  },
  {
    q: '11. Which of the following is the best practice for handling user passwords?',
    options: [
      'A) Store them in plain text for quick access',
      'B) Encrypt them with MD5 and store in local files',
      'C) Hash with bcrypt and use per-user salt',
      'D) Base64 encode and verify on login',
    ],
  },
  {
    q: '12. What\'s the purpose of using try/except in backend API design?',
    options: [
      'A) To run code only after a delay',
      'B) To crash the app gracefully',
      'C) To catch and handle unexpected errors',
      'D) To auto-restart the backend service',
    ],
  },
  {
    q: '13. In CI/CD with GitHub Actions, what triggers a deployment pipeline?',
    options: [
      'A) A frontend change on the local server',
      'B) Manually clicking a "deploy" button in GitHub UI',
      'C) Push to a specific branch like main or production',
      'D) Adding an environment variable via .env file',
    ],
  },
  {
    q: '14. What\'s a correct Docker use-case in fullstack apps?',
    options: [
      'A) Use it to store frontend assets securely',
      'B) Use it to containerize backend services for consistent environments',
      'C) Use it as a browser alternative for cloud deployment',
      'D) Use it to minify frontend code and serve HTML',
    ],
  },
  {
    q: '15. Which of the following is a Platform-as-a-Service (PaaS) suitable for small fullstack app deployment?',
    options: [
      'A) AWS S3',
      'B) Vercel',
      'C) Kubernetes',
      'D) Git CLI',
    ],
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);
  const [applyBrandAmbassador, setApplyBrandAmbassador] = useState(false);
  const [applyCybersecurity, setApplyCybersecurity] = useState(false);
  const [applyFullstack, setApplyFullstack] = useState(false);
  const [showBrandAmbassadorForm, setShowBrandAmbassadorForm] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem('visited', 'true');
  };

  return (
    <div className="min-h-screen flex flex-col text-white font-inter gradient-shift">
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-emerald-900 rounded-lg p-4 max-w-xl w-full shadow-xl transition-all">
            <div className="aspect-video mb-4">
              <LocalVideo src={introVideo} />
            </div>
            <button onClick={closeModal} className="w-full bg-yellow-400 hover:bg-yellow-300 p-2 rounded font-semibold">
              Close
            </button>
          </div>
        </div>
      )}
      {applyBrandAmbassador && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white text-emerald-900 rounded-lg p-4 max-w-md w-full space-y-4 shadow-xl transition-all">
            <div className="aspect-video mb-4">
              <LocalVideo src={brandAmbassadorApplicantVideo} />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setApplyBrandAmbassador(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Exit
              </button>
              <button
                onClick={() => {
                  setShowBrandAmbassadorForm(true);
                  setApplyBrandAmbassador(false);
                }}
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-emerald-900 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="text-center py-8 space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-300">
          Namaa <span className="text-yellow-500">نَمَاء</span>
        </h1>
        <p className="text-yellow-200 text-lg">
          Building community wealth together
        </p>
      </header>
      <main className="flex-1 space-y-12 px-4">
        <section className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="aspect-[9/16] max-h-[80vh] bg-black/20 flex items-center justify-center"
            >
              <LocalVideo src={introVideo} />
            </div>
          ))}
        </section>

        <section id="tiers" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                level: 'الصغير (The Small)',
                benefits: [
                  'Must apply to join and members must approve',
                  'Joining fee US$ 20/Kshs 2,500',
                  'Monthly US$ 20/Kshs 2,500',
                  'Investments in investments approved by The Thinking and The Bossladys groups',
                  'Each month investments go into specific companies by either the acquisition of equity or the creation of new companies',
                  'Failure to contribute causes one to leave the group with a new entry fee required for reentry.',
                ],
              },
              {
                level: 'التفكير (The Thinking)',
                benefits: [
                  'Joins by virtue of being a member of The Small for a minimum 3 months.',
                  'Joining fee US$40/ Kshs 5,000',
                  'Monthly fee US$40/ Kshs 5,000',
                  'Equity Investment US$ 20/Kshs 2,500',
                  'Diversified investment US$ 20/Kshs 2,500',
                  'Gets to preview investments and vote with other members',
                  'Can seek to be employed in an investment invested in',
                  'Failure to contribute causes one to leave the group with a new entry fee required for reentry.',
                ],
              },
              {
                level: 'السيدات الرئيسات (The Bossladys)',
                benefits: [
                  'Joins by virtue of being a member of The Thinking for a minimum 3 months.',
                  'Joining fee US$ 80/Kshs 10,000',
                  'Monthly fee US$ 80/Kshs 10,000',
                  'Equity Investment US$ 40/ Kshs 5,000',
                  'Diversified investment US$ 20/Kshs 2,500',
                  'Finance portfolio US$ 20/Kshs 2,500',
                  'Gets to preview investments and vote with other members',
                  'Can seek to be employed in an investment invested in',
                  'Can invest more than the minimum in the diversified portfolio',
                  'Failure to contribute causes one to leave the group with a new entry fee required for reentry.',
                ],
              },
            ].map((tier) => (
              <div
                key={tier.level}
                className="rounded-lg p-6 bg-white/10 backdrop-blur-md border border-yellow-300/40 shadow-lg space-y-2"
              >
                <h3 className="text-xl font-bold text-center text-yellow-200">
                  {tier.level}
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-white">
                  {tier.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="apply" className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">Opportunities</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => setApplyBrandAmbassador(!applyBrandAmbassador)}
              className={`px-4 py-2 rounded font-semibold border border-yellow-400 transition-colors ${applyBrandAmbassador ? 'bg-yellow-400 text-emerald-900' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Apply for Brand Ambassador position
            </button>
            <button
              type="button"
              onClick={() => setApplyCybersecurity(!applyCybersecurity)}
              className={`px-4 py-2 rounded font-semibold border border-yellow-400 transition-colors ${applyCybersecurity ? 'bg-yellow-400 text-emerald-900' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Apply for Cybersecurity Expert position
            </button>
            <button
              type="button"
              onClick={() => setApplyFullstack(!applyFullstack)}
              className={`px-4 py-2 rounded font-semibold border border-yellow-400 transition-colors ${applyFullstack ? 'bg-yellow-400 text-emerald-900' : 'bg-white/20 text-white hover:bg-white/30'}`}
            >
              Apply for Fullstack Engineer position
            </button>
          </div>
        </section>

        {showBrandAmbassadorForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-y-auto p-4">
            <div className="bg-white text-emerald-900 rounded-lg p-4 max-w-lg w-full space-y-4 max-h-screen overflow-y-auto shadow-xl transition-all">
              <h2 className="text-xl font-semibold text-center">BA Questionnaire Part A</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Ethnically What Are You*</legend>
                  {['Somali Somali','Arab','Swahili','Ethiopian Somali/Oromo','Ethiopian','Kenyan Somali','Tanzanian Somali'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="ethnicity" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="flex flex-col text-sm">
                    <span>Last Name*</span>
                    <input type="text" required className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>Middle Name</span>
                    <input type="text" className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>First Name*</span>
                    <input type="text" required className="border p-1 rounded" />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex flex-col text-sm">
                    <span>D.O.B* (DD/MM/YY)</span>
                    <input type="date" required className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>Age*</span>
                    <input type="number" required className="border p-1 rounded" />
                  </label>
                </div>
                <label className="flex flex-col text-sm">
                  <span>Email Address*</span>
                  <input type="email" required className="border p-1 rounded" />
                </label>
                <label className="flex flex-col text-sm">
                  <span>Instagram Handle*</span>
                  <input type="text" required className="border p-1 rounded" />
                </label>
                <label className="flex flex-col text-sm">
                  <span>WhatsApp Phone Number* (Country Code/Number - Minus "0")</span>
                  <input type="text" required className="border p-1 rounded" />
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="flex flex-col text-sm">
                    <span>Photo A*</span>
                    <input type="file" required className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>Photo B*</span>
                    <input type="file" required className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>Photo C*</span>
                    <input type="file" required className="border p-1 rounded" />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex flex-col text-sm">
                    <span>Height* (Feet and Inches)</span>
                    <input type="text" required className="border p-1 rounded" />
                  </label>
                  <label className="flex flex-col text-sm">
                    <span>Weight* (In Kilograms)</span>
                    <input type="number" required className="border p-1 rounded" />
                  </label>
                </div>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Highest Educational Qualification*</legend>
                  {['High School Certificate','Diploma','Higher Diploma','Bachelor\'s Degree','Master\'s Degree'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="education" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Spoken Languages* (Mark All Applicable)</legend>
                  {['Arabic','Somali','Borana','English','Swahili','French','Amharic'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 accent-yellow-400" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Languages Understood* (Mark All Applicable)</legend>
                  {['Arabic','Somali','Borana','English','Swahili','French','Amharic'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 accent-yellow-400" />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Relationship Status*</legend>
                  {['Single','Married','Divorced','Widowed','Engaged','In A Relationship'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="relationship" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Child Status*</legend>
                  {['Currently Mother','Pregnant With Child','No children, not expecting any'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="child" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Current Country Of Residence*</legend>
                  {['Somalia','Somaliland','Djibouti','Ethiopia','Kenya','Tanzania'].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="country" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <fieldset className="space-y-2">
                  <legend className="font-semibold">Renunciation Options*</legend>
                  {[
                    'I would like a simple arrangement where I am paid US$1,000 per month to be a brand ambassador.',
                    'I would like an arrangement where I own 25% of the Namaa brand which potentially pays me US$2,500 in commissions and through which I gain a portion of ownership in Namaa investments.'
                  ].map((opt) => (
                    <label key={opt} className="flex items-center space-x-2">
                      <input type="radio" name="renunciation" className="h-4 w-4 accent-yellow-400" required />
                      <span>{opt}</span>
                    </label>
                  ))}
                </fieldset>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowBrandAmbassadorForm(false)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    Close
                  </button>
                  <button type="submit" className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-emerald-900 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {applyCybersecurity && (
          <section id="cyber-questionnaire" className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">
                CYBERSECURITY EXPERT SCREENING QUESTIONNAIRE
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {questions.map((q, idx) => (
                  <fieldset key={idx} className="space-y-2">
                    <legend className="font-semibold">{q.q}</legend>
                    {q.options.map((opt, oIdx) => (
                      <label key={oIdx} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`q${idx}`}
                          className="h-4 w-4 accent-yellow-400"
                        />
                        <span>{opt}</span>
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
        )}

        {applyFullstack && (
          <section id="fullstack-questionnaire" className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-4 text-yellow-300">
                FULLSTACK ENGINEER SCREENING QUESTIONNAIRE
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {fullstackQuestions.map((q, idx) => (
                  <fieldset key={idx} className="space-y-2">
                    <legend className="font-semibold">{q.q}</legend>
                    {q.options.map((opt, oIdx) => (
                      <label key={oIdx} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`fs${idx}`}
                          className="h-4 w-4 accent-yellow-400"
                        />
                        <span>{opt}</span>
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
        )}
      </main>
      <footer className="text-center py-4 text-sm text-yellow-200">© {new Date().getFullYear()} Namaa</footer>
    </div>
  );
}

export default App;
