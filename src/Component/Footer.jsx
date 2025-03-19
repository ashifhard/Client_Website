export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white text-center py-6 px-4">
        <div className="flex flex-wrap justify-center gap-4 lg:space-x-6 mb-4">
          <a href="https://www.facebook.com/Niitujagroup07" target="_blank" className="text-white hover:text-blue-300">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" className="text-white hover:text-blue-300">
            Twitter
          </a>
          <a href="https://www.instagram.com/niituja_group_07/" target="_blank" className="text-white hover:text-blue-300">
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/niituja-educational-and-welfare-foundation-2a7b3a33a/"
            target="_blank"
            className="text-white hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a href="https://youtube.com/@niitujagroup07?si=pYeGRssqOPu_6O-K" target="_blank" className="text-white hover:text-blue-300">
            YouTube
          </a>
        </div>
        <div className="mt-4 text-base lg:text-lg">
          <p>
            Contact Us: <a href="tel:918809922772" className="text-white hover:text-blue-400">918809922772</a>
          </p>
        </div>
        <p className="text-sm lg:text-base">&copy; 25 NOV 2024 NIITUJA EDUCATIONAL & WELFARE FOUNDATION. All rights reserved.</p>
      </footer>
    );
  }