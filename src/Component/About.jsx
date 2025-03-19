import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Barcode from "./Image/Qr.png";

// Import images directly from the components folder
import EducationImg from "./Image/school1.jpeg";
import HealthcareImg from "./Image/Healthimg.jpg";
import SkillsImg from "./Image/Skills.jpg";
import CommunityImg from "./Image/Commuity.jpg";
import FoodImg from "./Image/Foodimg.jpg";

const slides = [
  { img: EducationImg, title: "Education for All", desc: "Ensuring quality education for every child." },
  { img: HealthcareImg, title: "Healthcare Support", desc: "Providing medical aid to the needy." },
  { img: SkillsImg, title: "Skill Development", desc: "Empowering youth with valuable skills." },
  { img: CommunityImg, title: "Community Welfare", desc: "Uplifting communities through various initiatives." },
  { img: FoodImg, title: "Community Welfare", desc: "Providing Fresh food to the needy." },

];

export default function About() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section id="about" className="px-4 lg:px-6 py-12 lg:py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">About Us</h2>
        <p className="text-base lg:text-lg text-gray-700 mb-6">
        We are a passionate organization dedicated to transforming lives through education and welfare initiatives for underprivileged communities. Our mission is to ensure that every child, regardless of their background, has access to quality education and the resources needed to learn, grow, and thrive. We believe that education is the cornerstone of empowerment and a brighter future.

        In collaboration with government bodies, local communities, and like-minded partners, we establish schools, provide essential learning materials, and create safe, nurturing environments for children in areas where these resources are needed the most. Our efforts extend beyond academics, as we also focus on holistic development, including health, nutrition, and emotional well-being.

        Driven by the belief that no child should be left behind, we strive to break the cycle of poverty through education. Together, we are building a world where every child has the opportunity to dream, achieve, and contribute to society. Join us in our journey to create lasting change.
        </p>
      </div>

      {/* Image Slideshow with Rectangular Cards */}
      <div className="mt-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">Our Initiatives</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="w-full max-w-5xl mx-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full max-w-4xl mx-auto">
                <div className="w-full h-80 overflow-hidden">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-blue-600">{slide.title}</h3>
                  <p className="text-gray-700 mt-2">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Donation Section with Quote */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-4">Make a Difference</h2>
        <p className="text-lg lg:text-xl italic text-gray-700 mb-6">
          "Your small act of kindness can change someone’s world. Give with love, and make a lasting impact."
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Donate Now
        </button>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Donation Details</h3>
            <p className="text-gray-700"><strong>Account Name:</strong> NIITUJA Educational & Welfare Foundation</p>
            <p className="text-gray-700"><strong>Account Number:</strong> 1234567890</p>
            <p className="text-gray-700"><strong>Bank Name:</strong> Example Bank</p>
            <p className="text-gray-700"><strong>IFSC Code:</strong> EXMP0123456</p>
            <div className="flex justify-center my-6">
              <img src={Barcode} alt="QR Code" className="w-48 h-48" />
            </div>
            <button onClick={() => setIsPopupOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
