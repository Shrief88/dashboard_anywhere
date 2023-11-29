import { render } from '@testing-library/react';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';

import App from '../App';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

test('Renders the Dashboard page when token in localStorage', () => {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.setItem('token', 'token');
  }
  const { getByText } = render(<App />);
  const homePageText = getByText('EXAMS TIME');
  expect(homePageText).toBeTruthy();
});

test('Renders the Home page when no token in localStorage', () => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
  }
  const { getByText } = render(<App />);
  const homePageText = getByText('Login to Coligo');
  expect(homePageText).toBeTruthy();
});

test('Renders the home page in /login route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

  const homePageText = getByText('Login to Coligo');
  expect(homePageText).toBeTruthy();
});

test('Renders the Dashboard page in /dashboard route when token in localStorage', () => {
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.setItem('token', 'token');
  }
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

  const homePageText = getByText('EXAMS TIME');
  expect(homePageText).toBeTruthy();
});

test('Renders the Home page in /dashboard route when no token in localStorage', () => {
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
  }
  const { getByText } = render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

  const homePageText = getByText('Login to Coligo');
  expect(homePageText).toBeTruthy();
});
