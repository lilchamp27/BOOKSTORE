import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-0 font-quicksand">
      {/* Hero Section */}
   <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 text-center mb-24 py-20 bg-gradient-to-b from-white via-gray-50 to-white">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight tracking-tight">
    Discover <span className="text-blue-700">Book Haven</span>
  </h1>
  
  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
    Your sanctuary for captivating stories, insightful knowledge, and boundless imagination.
    Whether you're escaping into fiction or diving into non-fiction, Book Haven is where your literary journey begins.
  </p>

  <div className="mt-8 flex justify-center gap-4 flex-wrap">
    <button className="px-8 py-3 bg-blue-700 text-white text-base font-medium rounded-full shadow-md hover:bg-blue-800 transition duration-300">
      Browse Collection
    </button>
    <button className="px-8 py-3 bg-white border border-blue-700 text-blue-700 text-base font-medium rounded-full hover:bg-blue-50 transition duration-300">
      Join Community
    </button>
  </div>
</section>


      {/* Image & Quote Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mb-24">
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Cozy library"
          className="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
        />
        <blockquote className="text-xl italic text-gray-700 max-w-xl">
          "A reader lives a thousand lives before he dies . . . The man who never reads lives only one." — George R.R. Martin
        </blockquote>
      </section>

      {/* Mission and Values */}
      <section className="bg-white py-20 px-6 sm:px-10 md:px-16 rounded-3xl shadow-lg mb-24">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
      Our Mission
    </h2>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
      At Book Haven, we believe every book is a doorway. Our mission is to open those doors — to curiosity, imagination, and connection — for readers everywhere.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left mt-10">
      {/* Curation */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-blue-700 text-3xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Curation</h3>
        <p className="text-gray-600 text-sm">
          Handpicked titles across every genre, ensuring that each shelf holds something extraordinary.
        </p>
      </div>

      {/* Experience */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-blue-700 text-3xl mb-4">💫</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
        <p className="text-gray-600 text-sm">
          A seamless browsing journey built for beauty and ease — from discovery to checkout.
        </p>
      </div>

      {/* Community */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-blue-700 text-3xl mb-4">🤝</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
        <p className="text-gray-600 text-sm">
          Dive into a community of passionate readers, share reviews, and join engaging conversations.
        </p>
      </div>

      {/* Events */}
      <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
        <div className="text-blue-700 text-3xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Events</h3>
        <p className="text-gray-600 text-sm">
          Enjoy exclusive access to author meetups, book launches, and interactive challenges.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="text-center max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Begin your next great read today.
        </h3>
        <p className="text-gray-600 mb-8">
          Explore thousands of titles, curated just for you. Find joy, comfort, and excitement—one page at a time.
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition-transform transform hover:scale-105">
          Browse Collection
        </button>
      </section>
    </div>
  );
};

export default About;
