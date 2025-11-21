import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What is Quotestack?', a: 'Quotestack is a quoting and automation platform built for HVAC contractors to generate instant quotes, automate follow-ups, and track analytics.' },
  { q: 'Can I embed instant quotes on my website?', a: 'Yes. Add our widget to your website to capture leads and deliver branded quotes automatically.' },
  { q: 'Do you integrate with my tools?', a: 'We integrate with popular CRMs, email, and messaging providers. Let us know which ones you need.' },
  { q: 'Is there a free plan?', a: 'Start with Starter for free, then upgrade to Pro or Scale when ready.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Everything you need to know about getting started.</p>
        </div>

        <div className="mt-10 divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 focus:outline-none bg-white hover:bg-slate-50">
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-900">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0' }`}>
                <div className="overflow-hidden">
                  <p className="text-slate-600 pr-8">{f.a}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
