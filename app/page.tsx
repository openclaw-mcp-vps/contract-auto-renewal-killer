export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Finance &amp; Procurement Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Cancel subscriptions<br />
          <span className="text-[#58a6ff]">before auto-renewal</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Stop losing money to forgotten contracts. Track every renewal date, get automated alerts, and trigger cancellation workflows before you're charged again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-base"
        >
          Start for $18/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📅</div>
            <h3 className="font-semibold text-white mb-1">Renewal Tracking</h3>
            <p className="text-sm text-[#8b949e]">Centralize all contract dates in one dashboard. Never miss a renewal window again.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Automated Alerts</h3>
            <p className="text-sm text-[#8b949e]">Daily cron jobs send email reminders 30, 14, and 7 days before each renewal date.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✂️</div>
            <h3 className="font-semibold text-white mb-1">Cancellation Workflows</h3>
            <p className="text-sm text-[#8b949e]">One-click cancellation requests with audit trails for compliance and legal teams.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited contracts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Automated email alerts</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Cancellation workflows</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Audit trail &amp; compliance logs</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Team collaboration</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does renewal tracking work?</h3>
            <p className="text-sm text-[#8b949e]">You import or manually add contracts with their renewal dates. Our daily cron job checks upcoming renewals and sends automated email alerts to your team at 30, 14, and 7-day intervals.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel a contract directly from the app?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Each contract has a cancellation workflow that generates a cancellation request email, logs the action with a timestamp, and notifies relevant stakeholders — all with one click.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this suitable for legal compliance?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Every action is logged in an immutable audit trail, making it easy to demonstrate due diligence during audits or legal reviews.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        © {new Date().getFullYear()} Contract Auto-Renewal Killer. All rights reserved.
      </footer>
    </main>
  )
}
