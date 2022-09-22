
import React, {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PortfolioContainer from "./Components/PortfolioContainer";
import About from './Components/pages/About';
import Portfolio from './Components/pages/Portfolio';
import Contact from './Components/pages/Contact';
import Resume from './Components/pages/Resume';

function App () {

    const [currentPage, setCurrentPage]= useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return<About/>;
        }
        if(currentPage === 'Portfolio') {
            return<Portfolio/>
        }
        if(currentPage === 'Contact') {
            return<Contact/>
        }
        return<Resume/>
    };

    const handlePageChange = (page) => setCurrentPage(page);

        return <div>
            <Header handlePageChange={handlePageChange} currentPage={currentPage}/>
            <PortfolioContainer renderPage={renderPage}/>
            <Footer/>
        </div>



}

export default App;
