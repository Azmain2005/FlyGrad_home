import React from "react";

const Gallery = () => {
  return (
    <div className="bg-gray-50 py-16" id="gallery">
      <div className="container mx-auto">
        <p className="text-center text-4xl font-bold text-gray-800 tracking-wider mb-8">
          Our Offline Classes and Exams
        </p>
        <div className="w-16 mx-auto border-b-4 border-red-400 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/3R3Rvm05/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/gk12KfLK/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/SKhQBCr2/image.png"
              alt=""
            />
          </div>

          <div className="space-y-4">
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/0Qt8K3qD/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/VNm1G1fX/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/XvLWthqm/image.png"
              alt=""
            />
          </div>

          <div className="space-y-4">
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/h46nFV4D/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/Mp88Hxjg/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/VkBPbTqv/image.png"
              alt=""
            />
          </div>

          <div className="space-y-4">
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/8sQx7BsL/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/cHVdc3rL/image.png"
              alt=""
            />
            <img
              className="w-full h-auto rounded-xl shadow-lg transform transition hover:scale-105 hover:shadow-xl"
              src="https://i.postimg.cc/0218M7Tt/image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
