import { Link } from 'react-router-dom'
import { SUPPORT_EMAIL } from '../utils/constants'

const sections = [
  { id: 'data-collection', title: 'Data Collection', text: 'Describe the information ForkPlan collects, including any account information, app usage data, and information stored on a device. If a category is not collected, state that explicitly after verifying the app’s behavior.' },
  { id: 'data-usage', title: 'Data Usage', text: 'Explain how each type of information is used, such as providing app features, supporting users, or improving the service. Remove any examples that do not apply.' },
  { id: 'data-sharing', title: 'Data Sharing', text: 'Identify any service providers or other third parties that receive data, why they receive it, and whether data is sold or shared. Verify these details against all SDKs and services used by the app.' },
  { id: 'user-controls', title: 'User Controls', text: 'Explain how users can access, correct, export, or delete their information, including any in-app and account deletion steps, retention periods, and how to make a request.' },
  { id: 'security', title: 'Security', text: 'Describe the safeguards used to protect information accurately. No method of storage or transmission is completely secure.' },
  { id: 'children', title: 'Children’s Privacy', text: 'Describe the app’s intended audience and practices relating to children’s information. Review applicable children’s privacy laws, including COPPA where relevant, before publishing.' },
  { id: 'contact', title: 'Contact', text: 'For privacy questions or requests, contact the support address below.' },
]

export default function PrivacyPolicy() {
  return (
    <div className="container-page py-16 sm:py-20">
      <p className="eyebrow">The important details</p>
      <h1 className="page-title mt-4">Privacy policy</h1>
      <p className="mt-4 text-sm text-forest/70">Last updated: [add date before publishing]</p>
      <div className="mt-6 rounded-2xl border border-leaf/30 bg-[#eaf0df] p-5 leading-7"><strong>Template only.</strong> This policy does not describe verified ForkPlan practices and is not legal advice. Review and complete it with accurate app-specific details and appropriate legal advice before publishing.</div>
      <div className="mt-12 grid gap-12 md:grid-cols-[14rem_1fr]">
        <nav aria-label="Privacy policy contents">
          <h2 className="font-semibold">On this page</h2>
          <ul className="mt-4 space-y-3">{sections.map((section) => <li key={section.id}><Link className="text-link text-sm" to={{ pathname: '/privacy', hash: `#${section.id}` }}>{section.title}</Link></li>)}</ul>
        </nav>
        <div className="max-w-3xl space-y-10">
          {sections.map((section) => <section key={section.id} id={section.id} className="scroll-mt-6">
            <h2 className="font-serif text-3xl">{section.title}</h2>
            <p className="mt-4 leading-8 text-forest/80">{section.text}</p>
            {section.id === 'contact' && <a className="text-link mt-3 inline-block" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}{SUPPORT_EMAIL === 'support@example.com' && ' (placeholder)'}</a>}
          </section>)}
        </div>
      </div>
    </div>
  )
}
