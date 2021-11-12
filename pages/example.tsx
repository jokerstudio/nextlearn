import Head from 'next/head'

export default function Example() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org">
            Example
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/Example.tsx
          </code>
        </p>

        <br />

        <ul className="space-y-4">
          <li>
            <div className="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
          <li>
            <div className="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
          </li>
        </ul>
        <br/>
        <div className="grid grid-cols-2 gap-x-6">
          <button className="btn btn--secondary">Decline</button>
          <button className="btn btn--primary">Accept</button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
