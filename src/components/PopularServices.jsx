import React from 'react';
import { Link } from 'react-router-dom';

const PopularServices = () => {
  const services = [
    { name: 'Website Development', image: 'https://2.bp.blogspot.com/-U5UbLbjuQvM/Wp-Pb-34TnI/AAAAAAAAAJg/bwLpWnM_L0E90DkN8OpzIm5ol8axYtcugCLcBGAs/s1600/7%2B1webdevelopment_1600x1200_021014.jpg', color: 'bg-green-900' },
    { name: 'Logo Design', image: 'https://www.buttercup.in/case-studies/wp-content/uploads/2019/02/logo-design-1.jpg', color: 'bg-orange-500' },
    { name: 'SEO', image: 'https://thesocialmediamonthly.com/wp-content/uploads/2020/09/search-engine-optimisation-scaled-1.jpg', color: 'bg-green-700' },
    { name: 'Social Media Marketing', image: 'https://th.bing.com/th/id/OIP.XoNw7GHjzGxUeOsqIaA4DwHaE8?rs=1&pid=ImgDetMain', color: 'bg-red-400' },
    { name: 'Voice Over', image: 'https://ak7.picdn.net/shutterstock/videos/13598567/thumb/1.jpg', color: 'bg-amber-400' },
    { name: 'Software Development', image: 'https://images.yourstory.com/cs/1/b3c9ea44-ab5e-11e8-8691-f70342131e20/Top6%20Software%20Development%20Functions%20Crucial%20to%20your%20Business%20in%2020191542795654826.jpg?fm=png&auto=format', color: 'bg-teal-400' },
  ];

  return (
    <div className="py-12 px-6">
    <h2 className="text-3xl font-bold mb-8">Popular services</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {services.map((service, index) => (
        <Link to="/ExploreProjects" key={index}>
          <div
            className={`${service.color} w-full h-72 rounded-lg shadow-lg flex flex-col items-center justify-between p-4`}
          >
            <h3 className="text-white font-semibold text-lg text-center">
              {service.name}
            </h3>
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </Link>
      ))}
    </div>
  </div>
  
  );
};

export default PopularServices;
