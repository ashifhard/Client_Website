import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function Dashboard() {
  const navigate = useNavigate(); 

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
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
  ]);

  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "CEO",
      image: "./Image/team1.jpeg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "CTO",
      image: "./Image/team2.jpeg",
    },
  ]);

  const [editingPost, setEditingPost] = useState(null);
  const [editingTeamMember, setEditingTeamMember] = useState(null);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isAddTeamFormVisible, setIsAddTeamFormVisible] = useState(false);

  // Add a new blog post
  const addBlogPost = (newPost) => {
    setBlogPosts([...blogPosts, { ...newPost, id: blogPosts.length + 1 }]);
    setIsAddFormVisible(false);
  };

  // Edit a blog post
  const editBlogPost = (updatedPost) => {
    setBlogPosts(
      blogPosts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      )
    );
    setEditingPost(null);
  };

  // Delete a blog post
  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id));
  };

  // Add a new team member
  const addTeamMember = (newMember) => {
    setTeamMembers([...teamMembers, { ...newMember, id: teamMembers.length + 1 }]);
    setIsAddTeamFormVisible(false);
  };

  // Edit a team member
  const editTeamMember = (updatedMember) => {
    setTeamMembers(
      teamMembers.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setEditingTeamMember(null);
  };

  // Delete a team member
  const deleteTeamMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  // Logout function
  const handleLogout = () => {
    
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="bg-white shadow rounded-lg p-4 mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          NIITUJA EDUCATIONAL & WELFARE FOUNDATION
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </header>

      {/* Blog Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Management</h2>
        <button
          onClick={() => setIsAddFormVisible(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-8 hover:bg-blue-700"
        >
          Add New Blog
        </button>

        {/* Add Blog Form */}
        {isAddFormVisible && (
          <BlogForm
            onSubmit={addBlogPost}
            onCancel={() => setIsAddFormVisible(false)}
          />
        )}

        {/* Edit Blog Form */}
        {editingPost && (
          <BlogForm
            initialData={editingPost}
            onSubmit={editBlogPost}
            onCancel={() => setEditingPost(null)}
          />
        )}

        {/* Blog List */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={post.postImage}
                alt={post.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="mt-4 text-gray-500 flex items-center space-x-2">
                <span>{post.date}</span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {post.title}
              </h3>
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
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setEditingPost(post)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBlogPost(post.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Management</h2>
        <button
          onClick={() => setIsAddTeamFormVisible(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-8 hover:bg-blue-700"
        >
          Add New Team Member
        </button>

        {/* Add Team Member Form */}
        {isAddTeamFormVisible && (
          <TeamForm
            onSubmit={addTeamMember}
            onCancel={() => setIsAddTeamFormVisible(false)}
          />
        )}

        {/* Edit Team Member Form */}
        {editingTeamMember && (
          <TeamForm
            initialData={editingTeamMember}
            onSubmit={editTeamMember}
            onCancel={() => setEditingTeamMember(null)}
          />
        )}

        {/* Team List */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 mt-1">{member.role}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => setEditingTeamMember(member)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTeamMember(member.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Blog Form Component
function BlogForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    initialData || {
      date: "",
      category: "",
      title: "",
      description: "",
      author: "",
      role: "",
      authorImage: "",
      postImage: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Blog Post" : "Add New Blog Post"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="date"
            placeholder="Date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="authorImage"
            placeholder="Author Image URL"
            value={formData.authorImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="postImage"
            placeholder="Post Image URL"
            value={formData.postImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {initialData ? "Save Changes" : "Add Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Team Form Component
function TeamForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      role: "",
      image: "",
    }
  );

  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Team Member" : "Add New Team Member"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          />
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Team Member Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Team Member Preview"
                className="mt-2 w-20 h-20 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              {initialData ? "Save Changes" : "Add Member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}