import React, { useState } from 'react';

export interface SocialCardProps {
    callback: (username:string, message:string)=>void
}

const SocialCardForm = ({callback}:SocialCardProps) => {
  const [socialName, setSocialName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ socialName, message });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mx-10">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">ຕື່ມຂໍ້ໃຫ້ແນ່ ດຽວເອົາໄປແນະນຳຄົນອືຶ່ນໃຫ້🤣🤣</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="socialName" className="block text-sm font-medium text-gray-700">
              ຊື່ແອັກເຄົ້າ social ທີ່ເຈົ້າມັັກຫລີ້ນ
            </label>
            <input
              type="text"
              id="socialName"
              name="socialName"
              value={socialName}
              onChange={(e) => setSocialName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="ຕົວຢ່າງເຊັ່ນ: facebook, instagram, tiktok"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              ຂໍຄຳຄົມຊຽບໆແນ່, ຊິເອົາໄວ້ຍອກ ຜູ້ບາວ / ຜູ້ສາວ
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
              placeholder="ຕົວຢ່່າງ: ຢືືມເງິນແນ່"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={()=>{
                callback(socialName, message)
              }}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialCardForm;