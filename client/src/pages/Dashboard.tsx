import 'react-loading-skeleton/dist/skeleton.css';

import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import requireAuth from '../Auth/requireAuth';
import Announcement from '../components/Announcement';
import Quiz from '../components/Quiz';
import { getAllAnnouncements, getAllQuizzes, getInstructorById } from '../data';
import { IAnnouncement, IInstructor, IQuiz } from '../interfaces';

const Dashboard = () => {
  const [announcements, setAnnouncement] = useState<Array<IAnnouncement>>([]);
  const [instructors, setInstructor] = useState<Array<IInstructor>>([]);
  const [quizzes, setQuiz] = useState<Array<IQuiz>>([]);
  const [quizList, setQuizList] = useState<JSX.Element[]>([]);
  const [announcementsList, setAnnouncementList] = useState<JSX.Element[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const announcementData: Array<IAnnouncement> = (await getAllAnnouncements()).data
        .data;
      const quizData: Array<IQuiz> = (await getAllQuizzes()).data.data;
      const instructorData: Array<IInstructor> = [];
      for (const item of announcementData) {
        const instructor = (await getInstructorById(item.instructor)).data;
        if (instructor) {
          instructorData.push(instructor);
        }
      }
      setInstructor(instructorData);
      setQuiz(quizData);
      setAnnouncement(announcementData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (quizzes.length > 0) {
      const mappedQuizzes = quizzes.map((item) => (
        <Quiz
          key={item.title}
          title={item.title}
          course={item.course}
          topic={item.topic}
          due_to_day={item.due_to_day}
          due_to_hour={item.due_to_hour}
        />
      ));
      setQuizList(mappedQuizzes);
    }
  }, [quizzes]);

  useEffect(() => {
    if (announcements.length > 0 && instructors.length === announcements.length) {
      const mappedAnnouncements = announcements.map((item, index) => (
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
      setAnnouncementList(mappedAnnouncements);
    }
  }, [announcements, instructors]);

  return (
    <div className="p-8">
      <div className="flex flex-col items-start p-8 bg-white gap-3 rounded-lg shadow-md">
        <h1 className="text-6xl">EXAMS TIME</h1>
        <p>
          Here we are, And you ready to fight? Do not worry, we prepared some tips to be
          ready for your exams
        </p>
        <i>"Nothing happens until something moves" - Albert Einstein</i>
        <button className="bg-blue-700 text-white text-lg px-4 py-2 rounded-lg">
          View exams tips
        </button>
      </div>

      <div className="grid grid-col-1 xl:grid-cols-4 lg:grid-cols-3  mt-6 gap-12">
        <div className="xl:col-span-3 lg:col-span-2">
          <div className="flex flex-col p-4 bg-white gap-3 rounded-lg shadow-md">
            <h1 className="text-xl">Announcements</h1>
            {loading ? <Skeleton count={3} /> : announcementsList}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="flex flex-col p-4 bg-white gap-3 rounded-lg shadow-md">
            <h1 className="text-xl">what's due</h1>
            {loading ? <Skeleton count={3} /> : quizList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default requireAuth(Dashboard);
