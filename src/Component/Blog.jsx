export default function BlogSection() {
  const blogPosts = [
    {
      date: "Mar 16, 2020",
      category: "Helping",
      title: "Change the World",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
      author: "Michael Foster",
      role: "Co-Founder / CTO",
      authorImage: "./Image/Md Imran.jpeg", 
      postImage: "./Image/school2.jpeg",    
    },
    {
      date: "Mar 10, 2020",
      category: "Sales",
      title: "How to use search engine optimization to drive sales",
      description:
        "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
      author: "Lindsay Walton",
      role: "Front-end Developer",
      authorImage: "/images/lindsay.jpg", 
      postImage: "/images/blog2.jpg",
    },
    {
      date: "Feb 12, 2020",
      category: "Business",
      title: "Improve your customer experience",
      description:
        "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.",
      author: "Tom Cook",
      role: "Director of Product",
      authorImage: "/images/tom.jpg",   
      postImage: "/images/blog3.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center">From the blog</h2>
      <p className="text-gray-600 text-center mt-2">
        Learn how to grow your business with our expert advice.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            <img
              src={post.postImage}
              alt={post.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div className="mt-4 text-gray-500 flex items-center space-x-2">
              <span>{post.date}</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">{post.title}</h3>
            <p className="text-gray-500 mt-1">{post.description}</p>
            <div className="flex items-center mt-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-gray-900 font-semibold">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
