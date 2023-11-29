import React from 'react';

import Announcement from '../components/Announcement';
import Quiz from '../components/Quiz';

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="flex flex-col items-start p-8 bg-white gap-3 rounded-lg shadow-md">
        <h1 className="text-6xl">EXAMS TIME</h1>
        <p>
          Here we are, And you ready to fight? Do not worry, we prepared some tips to be
          ready for your exams
        </p>
        <i>"Nothing happens until something moves" -Albert Einstein</i>
        <button className="bg-blue-500 text-white text-lg px-4 py-2 rounded-lg">
          View exams tips
        </button>
      </div>

      <div className="grid grid-col-1 lg:grid-cols-4 mt-6 gap-12">
        <div className="flex flex-col lg:col-span-3 items-start p-4 bg-white gap-3 rounded-lg shadow-md">
          <h1 className="text-xl">Announcements</h1>
          <Announcement />
        </div>

        <div className="flex flex-col lg:col-span-1 items-start p-4 bg-white gap-3 rounded-lg shadow-md">
          <h1 className="text-xl">what's due</h1>
          <Quiz />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;