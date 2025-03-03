import React from "react";

const BusinessSection = () => {
  return (
    <div className="bg-[#42484F] text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12 leading-snug">
        Empowering Businesses to <br /> Thrive with Efficient Workforce
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {[ 
          {
            title: "Our App",
            description: "Streamline your hiring process and optimize your workforce with our powerful job application platform.",
            icon: "https://cdn-imgs.dora.run/design/G9VDKTFS96rIFE50gRshx9.webp/w/4096/h/4096/format/webp?"
          },
          {
            title: "Discover the Power of Our App",
            description: "Experience the seamless integration of our workforce management tools.",
            icon: "https://cdn-imgs.dora.run/design/IZUVt2xqGlbIQe92kaRzsP.webp/w/4096/h/4096/format/webp?"
          },
          {
            title: "About Us",
            description: "Unlocking the Potential of Your Team: Innovative Workforce Management Solutions for Business Growth.",
            icon: "https://cdn-imgs.dora.run/design/D0eq8be1ZXtHFniA773Bs0.webp/w/4096/h/4096/format/webp?"
          },
          {
            title: "Explore Now",
            description: "Revolutionize your hiring process with our intuitive and user-friendly platform.",
            icon: "https://cdn-imgs.dora.run/design/D0eq8be1ZXtHFniA773Bs0.webp/w/4096/h/4096/format/webp?"
          },
          {
            title: "Our Services",
            description: "Providing comprehensive hiring solutions to help you build a strong and productive team.",
            icon: "https://cdn-imgs.dora.run/design/aanPsiqAJWIDM281wCm5k.webp/w/4096/h/4096/format/webp?"
          },
          {
            title: "Optimize Your Workforce",
            description: "Unlock the full potential of your team and drive business success with our innovative solutions.",
            icon: "https://cdn-imgs.dora.run/design/JvHL7F5LN87KFqAjgPXNV4.webp/w/4096/h/4096/format/webp?"
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4">
            <div className="bg-[#42484F] p-4 rounded-full transition-all duration-300 hover:scale-105">
              <img src={item.icon} alt={`${item.title} Icon`} className="w-12" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSection;
