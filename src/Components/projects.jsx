import Varena from "../Images/Varena.png"
import Metabnb from "../Images/Metabnb.png"
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
    {
      name: 'VArena',
      description: 'An NFTs Gaming app',
      imageSrc: Varena,
      imageAlt: 'Image of an Nfts gaming application.',
      href: 'https://varena.app/',
    },
    {
      name: 'MetaBNB',
      description: 'NFTs website',
      imageSrc: Metabnb,
      imageAlt: 'Image of an Nfts website.',
      href: 'https://metabnb-plum.vercel.app/',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
      {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
      },
  ]
  
  export default function Projects() {
    return (
      <div className="container bg-gray-700" id="projects">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:max-w-none lg:py-28">
            <h2 className="lg:text-5xl text-3xl text-center font-bold text-white">Projects</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout, key) => (
                <div key={key} className="group relative py-3">
                  <div className="relative h-80  w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-60 lg:aspect-w-3 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-center"
                      // object-cover
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-300 font-bold">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
