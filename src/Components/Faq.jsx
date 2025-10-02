import React from 'react'

export default function Faq() {
    const [openIndex, setOpenIndex] = React.useState(null)
    const faqsData = [
        {
            question: 'What if I face a technical issue on the website?',
            answer: 'For any technical issues like trouble logging in, uploading files, or accessing a purchased service, please contact our support team immediately at flygradtech@gmail.com. We typically respond within a few business hours.'
        },
        {
            question: 'Is my personal and academic information kept confidential?',
            answer: 'Absolutely. We have a strict privacy policy. All your documents and information are stored on our secure servers and are never shared with any third parties without your explicit consent.'
        },
        {
            question: 'How to get the maximum result from gradwhisper?',
            answer: 'Just make sure you plug in a very good prompt for maximum output. You may follow our page Flygrad on both Facebook and Instagram where we will be posting about such prompts on a weekly basis.'
        },
        {
            question: 'What if I am not satisfied with the feedback I receive?',
            answer: 'At the end of the day, it is an AI which will assist you in being confident about your journey by being with you in every step but it cannot replace your hunch. Prioritise your own intuition over anything at any time.'
        },
        {
            question: 'Is it 100% reliable? ',
            answer: 'We have trained this AI with all the existing up to dated datasets we had for reviews and roadmaps. For the University informations, it surfs existing sites and gives you the exact information you want with sources from it. We have tried our level best to keep it as authentic as possible but it is an AI. So, it is recommended to double check before you make any life changing decisions.'
        },
        {
            question: 'Lightning-Fast Performance',
            answer: 'Built with speed — minimal load times and optimized rendering.'
        },
        {
            question: 'Fully Customizable Components',
            answer: 'Easily adjust styles, structure, and behavior to match your project needs.'
        },
        {
            question: 'Responsive by Default',
            answer: 'Every component are responsive by default — no extra CSS required.'
        },
        {
            question: 'Tailwind CSS Powered',
            answer: 'Built using Tailwind utility classes — no extra CSS or frameworks required.'
        },
        {
            question: 'Dark Mode Support',
            answer: 'All components come ready with light and dark theme support out of the box.'
        }
    ]
  return (
    <div>
      <div id='FAQ' className='flex flex-col items-center text-center text-slate-200 px-3'>
                <p className='text-base font-medium text-slate-100'>FAQ</p>
                <h1 className='text-3xl md:text-4xl font-semibold mt-2'>Frequently Asked Questions</h1>
                <p className='text-sm text-slate-400 mt-4 max-w-sm'>
                    Proactively answering FAQs boosts user confidence and cuts down on support tickets.
                </p>
                <div className='max-w-xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col items-start w-full'>
                            <div className='flex items-center justify-between w-full cursor-pointer bg-gradient-to-r from-purple-200 to-white border border-indigo-100 p-4 rounded' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm text-black'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-200 px-4 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}
