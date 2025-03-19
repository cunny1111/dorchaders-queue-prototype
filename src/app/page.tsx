import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20 flex flex-col items-center text-center">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dorchaders Modding Queue
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Get your osu! maps reviewed by experienced modders to improve quality and gameplay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/information"
              className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors font-medium"
            >
              Learn More
            </Link>
            <Link
              href="/request"
              className="px-6 py-3 rounded-full border border-purple-300 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/50 transition-colors font-medium text-purple-600 dark:text-purple-400"
            >
              Submit a Map
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Submit Your Map</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Login with your osu! account and fill out a simple form with your map link and any specific feedback requests.
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Modder Review</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              One of our experienced modders will review your submission and provide detailed feedback on your map.
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-bold text-purple-600 dark:text-purple-400">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Improve Your Map</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Apply the suggestions to enhance your map's quality, gameplay, and ranking potential.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/queue" 
            className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:underline group"
          >
            Check current queue status
            <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
