import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    
<section className="grid md:grid-cols-2 my-10 lg:px-24 md:my-6 py-10 gap-4 relative">
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -let-4 transform -translate-x-1/2"></div>
     <div className="z-100">
      <h5 className="text-4xl font-bold text-white my-4">Lets Contact</h5>
      <p className="text-[#ADB7BE] mb-4 max-w-md">        
        I am currently looking for opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I will try my best
        to get back to you!
      </p>
      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/NaziaImran786">
          <Image src={"/images/github.png"} alt="github" width={40} height={40} />
        </Link>

        <Link href="https://www.linkedin.com/">
          <Image src={"/images/linkedin-contact.png"} alt="linkedin" width={40} height={40} />
        </Link>
      </div>
    </div>
    <div>
      <form className="flex flex-col ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            placeholder="abc@google.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            placeholder="Just saying Hi!"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block mb-2 text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]mb-2 text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk acout..."
          />
          <br />
             
         <button className="bg-purple-500 hover:purple-600 text-white font-medium py-4.5 px-5 rounded-lg w-full">
          Send Message
         </button>
        </div>
      </form>
    </div>
</section>

  )
}

export default page
