import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-black">John Galvin</Link>
            <div className="hidden md:flex gap-6 text-base font-medium text-black">
              <Link href="/" className="hover:text-gray-600 transition">Home</Link>
              <Link href="/original-art" className="hover:text-gray-600 transition">Original Art For Sale</Link>
              <Link href="/prints" className="hover:text-gray-600 transition">Prints</Link>
              <Link href="/stockists" className="hover:text-gray-600 transition">Print Stockists</Link>
              <Link href="/catalogue" className="hover:text-gray-600 transition">Art Catalogue</Link>
              <Link href="/about" className="hover:text-gray-600 transition">About John</Link>
              <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/fc5d638d-1c04-44b8-94c8-95d85d971a38/IMG-20230601-WA0015.jpg?format=2500w"
          alt="John Galvin Fine Art Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif mb-4 sm:mb-6 animate-fadeInUp text-white">
            John Galvin Fine Art
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 animate-fadeInUp [animation-delay:200ms] opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
            Irish Artist | Oil Paintings | Still Life & Landscape
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center flex-wrap animate-fadeInUp [animation-delay:400ms] opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            <Link href="/original-art" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Original Art
            </Link>
            <Link href="/prints" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Prints
            </Link>
            <Link href="/gallery" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 hover:shadow-lg">
              Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1920px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 sm:mb-12 animate-fadeIn">Featured Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {[
            { title: "Farmleigh House Conservatory", category: "Original" },
            { title: "Make Hay When the Sun Shines", category: "Original" },
            { title: "Blue Elegance", category: "Original" },
            { title: "Sunrise Skerries", category: "Original" },
            { title: "Better Together", category: "Original" },
            { title: "Nature's Way", category: "Print" },
          ].map((work, i) => (
            <div key={i} className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-4 hover:scale-105">
              <div className="aspect-square bg-gray-200 mb-4 overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-serif text-base sm:text-lg group-hover:text-gray-600 transition-colors duration-300">{work.title}</h3>
              <p className="text-gray-600 text-sm">{work.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-8 sm:mb-12 animate-slideInLeft">About John Galvin</h2>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/5aae685be2ccd1747b5a523b/1522524354028-KSUMDKS8UCBDQM1TJB6N/johnggalvin.jpg?format=1500w" 
                alt="John Galvin"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                John is an Irish visual artist who lives in the Lake County of Westmeath which is situated in the heartland of Ireland.
              </p>
              <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 italic border-l-4 border-gray-400 pl-4 my-6">
                "I want my paintings to capture and portray the extraordinary, which lies hidden in the ordinary, to open our eyes and our minds to appreciate the beauty that surrounds us in everyday life."
              </blockquote>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Drawing his inspiration from his environs John paints in the traditional medium of oils and his work covers a vast range of subjects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 animate-fadeIn">Visit the Gallery</h2>
          <div className="space-y-2 text-base sm:text-lg animate-fadeInUp [animation-delay:200ms] opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
            <p>Main Street</p>
            <p>Moate, Co Westmeath</p>
            <p>Ireland N37C5F6</p>
            <p className="pt-4">Phone: 0906481286</p>
          </div>
          <Link href="/stockists" className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-black hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 hover:shadow-lg animate-fadeInUp [animation-delay:400ms] opacity-0" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
            Print Stockists in Ireland
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-sm sm:text-base">© John Galvin 2024 All Rights Reserved</p>
            <div className="flex gap-4 sm:gap-6 text-sm sm:text-base">
              <a href="mailto:johnggalvin@gmail.com" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Email</a>
              <a href="http://instagram.com/johngalvinfineart" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Instagram</a>
              <a href="https://www.facebook.com/johngalvinfineart/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:scale-110 transition-all duration-300">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
