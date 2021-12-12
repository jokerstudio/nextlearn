import Image from 'next/image'
import MetaMaskLogo from './../public/metamask-fox.svg'

export default function Home() {
  return (
    <div>
      <main className="mt-24 px-4 sm:mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Beautiful digital design assets</h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Take your digital products to another level with our collection of UI kits, templates and icon sets. All our assets were carefully designed to work together beautifully. We have obsessed over every little detail, and we really believe it shows.</p>
          <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
            <div className="rounded-md shadow"><a href="#" className="w-full flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 divide-x divide-gray-600 hover:bg-gray-700 md:text-lg"><span className="pr-6">Get the tattoo</span><span className="pl-6"><Image src={MetaMaskLogo} alt="Picture of the author" height={30} width={30} /></span></a></div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
            <a className="group" href="/products/annuals">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-01.png?v=1630298786" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Annuals</h3>
                <p>39 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">UI Kit</p>
            </a>
            <a className="group" href="/products/paykit">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-02.png?v=1630298765" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Paykit</h3>
                <p>59 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">Template</p>
            </a>
            <a className="group" href="/products/tiers">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-03.png?v=1630298819" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Tiers</h3>
                <p>39 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">UI Kit</p>
            </a>
            <a className="group" href="/products/format">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-04.png?v=1630298909" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Format</h3>
                <p>19 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">UI Kit</p>
            </a>
            <a className="group" href="/products/unicons">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-05.png?v=1630629878" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Unicons</h3>
                <p>29 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">Icon Set</p>
            </a>
            <a className="group" href="/products/inbound">
              <div className="w-full aspect-w-4 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-4 sm:aspect-h-3"><img src="https://cdn.shopify.com/s/files/1/0596/5516/0014/products/product-06.png?v=1630629839" className="w-full h-full object-center object-cover group-hover:opacity-75" /></div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>Inbound</h3>
                <p>39 ETH</p>
              </div>
              <p className="mt-1 text-sm italic text-gray-500">Template</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
