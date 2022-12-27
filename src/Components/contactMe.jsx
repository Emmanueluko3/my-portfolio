
export default function ContactMe() {
  return (
    <div id="contact">
      <section className="text-white body-font relative bg-gray-700">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            If interested in working with me or hiring me see my details below or send me a message on the contact form
            </p>
          </div>
          <div className="lg:w-full md:w-2/3 mx-auto lg:flex md:block justify-between items-center bg-gray-800 rounded">
            <form className="flex flex-wrap m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-customPink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-customPink text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-customPink h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-customPink border-0 py-2 px-8 focus:outline-none hover:opacity-75 rounded text-lg">
                  Send
                </button>
              </div>
            </form>

            <div className="p-2 w-full pt-8 mt-8 text-center">
                <a className="text-indigo-500">emmanueluko90@gmail.com</a>
                <p className="leading-normal my-5">
                  No.6 Girls High School close.
                  <br />
                  Eket, Akwa Ibom state, Nigeria
                </p>
                <span className="inline-flex">
                  <a className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <h2>+2347031982590</h2>
                  </a>
                </span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
