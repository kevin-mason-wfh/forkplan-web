import { SUPPORT_EMAIL } from '../utils/constants'

const categories = [
  { title: 'Getting Started', items: [
    ['How do I get started?', 'Once the app is available, download it from the App Store and follow the on-screen introduction. Replace this answer with the actual onboarding steps.'],
    ['Where can I find my meal plan?', 'Look for the meal planning area in the app. Update this guide to match the final navigation.'],
  ] },
  { title: 'Features', items: [
    ['How do I plan meals for the week?', 'Choose the days you want to plan, then add meals that work for you. Update these steps to match the released app.'],
    ['How do I manage my pantry?', 'Use the pantry area to review or update what you have on hand. Add detailed instructions when the feature is available.'],
  ] },
  { title: 'Troubleshooting', items: [
    ['What if my information is not syncing?', 'If syncing is supported, check your internet connection and reopen the app. Contact support if the issue persists.'],
    ['What if I cannot navigate or sign in?', 'Close and reopen the app, check for updates, and confirm your sign-in details if accounts are supported. Contact support for further help.'],
  ] },
  { title: 'Account Management', items: [
    ['How can I manage or delete my data?', 'If the app supports accounts or data storage, add the actual management and deletion instructions here. Contact support for assistance.'],
  ] },
]

export default function HelpSupport() {
  return (
    <>
      <section className="bg-[#eaf0df] py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow">We’re here to help</p>
          <h1 className="page-title mt-4">Help & support</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-forest/75">Find your way around ForkPlan, one question at a time.</p>
          <p className="mt-4 text-sm text-forest/75">These are example guides and answers; they will be updated to reflect the released app.</p>
        </div>
      </section>
      <section className="container-page grid gap-12 py-16 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-serif text-3xl">Frequently asked questions</h2>
          <p className="mt-4 leading-7 text-forest/75">Can’t find what you’re looking for? Send us a message.</p>
          <a className="text-link mt-5 inline-block" href={`mailto:${SUPPORT_EMAIL}`}>Email support ↗</a>
          {SUPPORT_EMAIL === 'support@example.com' && <p className="mt-2 text-sm text-forest/70">The support address is a placeholder.</p>}
        </div>
        <div className="space-y-10">
          {categories.map((category) => <section key={category.title}>
            <h2 className="font-serif text-2xl">{category.title}</h2>
            <div className="mt-4 divide-y divide-forest/10 rounded-2xl bg-white px-5">
              {category.items.map(([question, answer]) => <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">{question}<span aria-hidden="true" className="text-xl text-leaf group-open:rotate-45">+</span></summary>
                <p className="mt-3 pr-7 leading-7 text-forest/75">{answer}</p>
              </details>)}
            </div>
          </section>)}
        </div>
      </section>
    </>
  )
}
