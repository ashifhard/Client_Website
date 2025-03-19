// Import images
import isoLogo from "./Image/ISO9001.jpg";
import foundationLogo from "./Image/NiitujaLogo.jpg";

export default function Header() {
  // Function to handle login button click
  const handleLoginClick = () => {
    window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <header className="bg-blue-600 text-white py-6 px-4 lg:px-6">
      <div className="flex flex-col space-y-6">
        {/* Logo Section */}
        <div className="flex justify-between items-center">
          <img
            src={isoLogo}
            alt="ISO Logo"
            className="w-20 h-20 object-contain"
          />
          <img
            src={foundationLogo}
            alt="Foundation Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Title and Tagline Section */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-2">
            NIITUJA EDUCATIONAL & WELFARE FOUNDATION
          </h1>
          <p className="text-lg lg:text-xl">
            Helping the underprivileged and building a brighter future with education.
          </p>
        </div>
      </div>

      {/* Registration and Login Section */}
      <div className="flex flex-row justify-between items-end pt-6">
        <p className="text-sm">Registration No: U85499JH2024NPL023540</p>
        <button
          onClick={handleLoginClick}
          className="bg-white text-blue-600 px-4 py-2 font-semibold rounded-lg hover:bg-gray-100"
        >
          Login
        </button>
      </div>
    </header>
  );
}