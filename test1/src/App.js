import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentCard from './components/ContentCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentPage from './components/ContentPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <ContentCard title="컨텐츠1" link="/content1" />
                    <ContentCard title="컨텐츠2" link="/content2" />
                    <ContentCard title="컨텐츠3" link="/content3" />
                    <ContentCard title="컨텐츠4" link="/content4" />
                    <ContentCard title="컨텐츠5" link="/content5" />
                    <ContentCard title="컨텐츠6" link="/content6" />
                    <ContentCard title="컨텐츠7" link="/content7" />
                    <ContentCard title="컨텐츠8" link="/content8" />
                    <ContentCard title="컨텐츠9" link="/content9" />
                    <ContentCard title="컨텐츠10" link="/content10" />
                  </>
                }
              />
              <Route path="/content1" element={<ContentPage title="컨텐츠1" />} />
              <Route path="/content2" element={<ContentPage title="컨텐츠2" />} />
              <Route path="/content3" element={<ContentPage title="컨텐츠3" />} />
              <Route path="/content4" element={<ContentPage title="컨텐츠4" />} />
              <Route path="/content5" element={<ContentPage title="컨텐츠5" />} />
              <Route path="/content6" element={<ContentPage title="컨텐츠6" />} />
              <Route path="/content7" element={<ContentPage title="컨텐츠7" />} />
              <Route path="/content8" element={<ContentPage title="컨텐츠8" />} />
              <Route path="/content9" element={<ContentPage title="컨텐츠9" />} />
              <Route path="/content10" element={<ContentPage title="컨텐츠10" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
