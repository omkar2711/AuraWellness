import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import blogsData from '../lib/content';

// Function to parse content and display images
const parseContent = (content) => {
  const parts = content.split(/!\[Image\]\((.*?)\)/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Image URL detected
      return (
        <img
          key={index}
          src={part}
          alt="Blog Visual"
          className="w-full rounded-2xl my-4 shadow-lg"
        />
      );
    }
    return <p key={index} className="text-gray-700 mb-4">{part}</p>;
  });
};

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-[#A76192] mb-8">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="bg-[#A76192] text-white px-4 py-2 rounded-xl hover:bg-[#8A4B76] transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <Transition appear show={selectedBlog !== null} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setSelectedBlog(null)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white rounded-2xl p-8 max-w-6xl w-full shadow-xl overflow-y-auto max-h-[85vh]">
                <Dialog.Title className="text-4xl font-bold text-[#A76192] mb-6">
                  {selectedBlog?.title}
                </Dialog.Title>
                <div className="prose max-w-none">
                  {selectedBlog && parseContent(selectedBlog.content)}
                </div>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="mt-6 bg-[#A76192] text-white px-6 py-3 rounded-xl hover:bg-[#8A4B76] transition-colors"
                >
                  Close
                </button>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Blogs;
