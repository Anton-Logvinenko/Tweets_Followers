import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { NotFound } from './NotFound/NotFound';

const HomePage = lazy(()=> import('../Pages/HomePage/HomePage'));
const Tweets = lazy(()=> import('../Pages/Tweets/Tweets'));
const  Layout  = lazy(()=> import('../components/Layout/Layout'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
