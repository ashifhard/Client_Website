import ShaistaImage from "./Image/Shaista.jpeg"; // Adjust the path as needed

export default function TeamSection() {
    const teamMembers = [
      {
        name: "Shaista Perween",
        role: "Director",
        image: ShaistaImage, 
        linkedin: "#",
      },
    ];
  
    return (
      <div className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900">Our team</h2>
        <p className="text-gray-600 mt-2">
          We’re a dynamic group of individuals who are passionate about what we do
          and dedicated to delivering the best results for our clients.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} className="text-gray-500 hover:text-gray-900">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
