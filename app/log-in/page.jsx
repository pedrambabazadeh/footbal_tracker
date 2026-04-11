import React from 'react'
import { FaStar, FaBolt,FaCheck, FaVolleyball } from 'react-icons/fa6'

const SignIn = () => {
  return (
    <div className='w-full max-w-3xl mx-auto text-[var(--primary-light-100)] grid grid-cols-1 lg:grid-cols-2 gap-8 '>
      <section className="px-6 py-8 rounded-2xl bg-gradient-to-b from-[#1F1F1F] to-[#171717] shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <FaVolleyball className="text-[var(--primary-yellow-500)] text-3xl" />
          <div>
            <div className="text-xl font-bold text-[#F8B607]">Football Tracker</div>
            <div className="text-sm text-[var(--muted)]">Data-first match insights • predictions • visualizations</div>
          </div>
        </div>
        <h1 id="signup-title" className="text-2xl font-semibold mb-3">
          Create your account
        </h1>
        <p className="text-sm text-[var(--muted)] mb-6">
          Join the community to save favourites, receive match alerts and use predictions.
        </p>
        {/* Features list*/}
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#F8B60710] text-[#F8B607]"><FaCheck /></span>
            <span className="text-[var(--muted)]">Personalized team tracker & notifications</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#00FF9D12] text-[#00FF9D]"><FaStar /></span>
            <span className="text-[var(--muted)]">Match predictions powered by ML</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[#F8B60710] text-[#F8B607]"><FaBolt /></span>
            <span className="text-[var(--muted)]">Fast, dark-first UI built for focus</span>
          </li>
        </ul>
        <p className="text-xs text-[var(--muted)] mt-6">
          By signing up you agree to our  <a href='#' className="text-[#F8B607] underline">Privacy Policy</a> and <a href="#" className="text-[#F8B607] underline">Terms of Service</a>.
        </p>
      </section>
      <section className='bg-[var(--primary-dark-100)] rounded-2xl p-6 shadow-lg'>
        <h2 className='text-lg font-semibold text-white mb-4'>Sign In</h2>
        <form action="" className="space-y-4 max-w-[95%]" id="sign-in-form">
          <div>
            <label htmlFor="fullName" className="text-sm block mb-2">Full name</label>
            <input name="fullName" type="text" id="full-name-input" required className='w-full px-4 py-3 bg-[var(--primary-dark-500)] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow-500)]'/>
            <p className='mt-1 text-xs text-[var(--primay-light-500)]'>
              Please enter your full name.
            </p>
          </div>
           <div>
            <label htmlFor="email" className="text-sm block mb-2">Email</label>
            <input name="email" type="email" id="email-input" required className='w-full px-4 py-3 bg-[var(--primary-dark-500)] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow-500)]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please enter your email.
            </p>
          </div>
          <div>
            <label htmlFor="pasword" className="text-sm block mb-2">Password</label>
            <input name="password" type="password" id="password-input" required className='w-full px-4 py-3 bg-[var(--primary-dark-500)] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow-500)]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please enter your password.
            </p>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm block mb-2">Confirm Password</label>
            <input name="confirmPassword" type="password" id="confirm-password-input" required className='w-full px-4 py-3 bg-[var(--primary-dark-500)] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow-500)]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please confirm your password.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <button type="submit" className="flex-1 px-4 py-3 bg-[var(--primary-yellow-500)] text-[var(--primary-dark-500)] rounded-lg font-semibold shadow-sm hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow-500)]">Register</button>
            <a href="#" className="px-4 py-3 border border-[#333] rounded-lg text-sm text-[var(--text)] hover:border-[var(--primary-yellow-500)]">Sign In</a>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SignIn