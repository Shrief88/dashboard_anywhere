import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers['Content-type'] = 'application/json';

export const getAllAnnouncements = () => axios.get('/announcement');

export const getInstructorById = (id: string) => axios.get(`/instructor/${id}`);

export const getAllQuizzes = () => axios.get('/quiz');
