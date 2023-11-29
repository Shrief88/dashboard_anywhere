import React, { useEffect, useState } from 'react';

import Announcement from '../components/Announcement';
import Quiz from '../components/Quiz';
import { getAllAnnouncements, getInstructorById } from '../data';
import { IAnnouncement, IInstructor } from '../interfaces';

const Dashboard = () => {
  const [announcements, setAnnouncement] = useState<Array<IAnnouncement>>([]);
  const [instructors, setInstructor] = useState<Array<IInstructor>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: Array<IAnnouncement> = (await getAllAnnouncements()).data;
        setAnnouncement(data.data);
        for (const item of data.data) {
          const instructorData = (await getInstructorById(item.instructor)).data;
          setInstructor((prevArray) => [...prevArray, instructorData.data]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  let announcementsList: JSX.Element[] = [];
  if (announcements.length > 0 && instructors.length === announcements.length) {
    announcementsList = announcements.map((item, index) => (
      <Announcement
        key={item.instructor}
        first_name={instructors[index].first_name}
        family_name={instructors[index].family_name}
        Gender={instructors[index].Gender}
        position={instructors[index].position}
        content={item.content}
        photoUrl={instructors[index].photoUrl}
      />
    ));
  }

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

      <div className="grid grid-col-1 xl:grid-cols-4 lg:grid-cols-3  mt-6 gap-12">
        <div className="flex flex-col xl:col-span-3 lg:col-span-2  items-start p-4 bg-white gap-3 rounded-lg shadow-md">
          <h1 className="text-xl">Announcements</h1>
          {announcementsList}
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
