import React from 'react'

const SignIn = () => {
  return (
    <div className='text-[var(--primary-light-100)] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
      <section className='bg-[var(--primary-dark-100)] rounded-2xl p-6 shadow-lg'>
        <h2 className='text-lg font-semibold text-white mb-4'>Sign In</h2>
        <form action="" className="space-y-4" id="sign-in-form">
          <div>
            <label htmlFor="fullName" className="text-sm block mb-2">Full name</label>
            <input name="fullName" type="text" id="full-name-input" required className='w-full px-4 py-3 bg-[#171717] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#F8B607]'/>
            <p className='mt-1 text-xs text-[var(--primay-light-500)]'>
              Please enter your full name.
            </p>
          </div>
           <div>
            <label htmlFor="email" className="text-sm block mb-2">Email</label>
            <input name="email" type="email" id="email-input" required className='w-full px-4 py-3 bg-[#171717] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#F8B607]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please enter your email.
            </p>
          </div>
          <div>
            <label htmlFor="pasword" className="text-sm block mb-2">Password</label>
            <input name="password" type="password" id="password-input" required className='w-full px-4 py-3 bg-[#171717] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#F8B607]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please enter your password.
            </p>
          </div>
          <div>
            <label htmlFor="password" className="text-sm block mb-2">Password</label>
            <input name="password" type="password" id="password-input" required className='w-full px-4 py-3 bg-[#171717] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#F8B607]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please enter your password.
            </p>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-sm block mb-2">Confirm Password</label>
            <input name="confirmPassword" type="password" id="confirm-password-input" required className='w-full px-4 py-3 bg-[#171717] border border-[#333] rounded-lg text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[#F8B607]'/>
            <p className='mt-1 text-xs text-[var(--primary-light-500)]'>
              Please confirm your password.
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}

export default SignIn