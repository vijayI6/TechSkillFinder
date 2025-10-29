import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentSearch from './components/StudentSearch';
import Academics from './components/academics';
import WebDev from "./components/WebDev";
import OtherTech from './components/otherTech';
import ProLang from './components/ProLang';
import Menu from './components/menu';
import HeaderandFooter from './components/HeaderandFooter';
import Demo from './components/Demo';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<HeaderandFooter />}>
                    <Route index element={<StudentSearch />} />
                    <Route path="dashboard" element={<Menu />}>
                        <Route index element={<Academics />} />
                        <Route path="academics" element={<Academics />} />
                        <Route path="academics/:studentId" element={<Academics />} />
                        <Route path="web-development/:studentId" element={<WebDev />} />
                        <Route path="pro-lang/:studentId" element={<ProLang />} />
                        <Route path="other-tech/:studentId" element={<OtherTech />} />
                        <Route path="demo" element={<Demo />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
