import About from './sections/About';
import Advatages from './sections/Advatages';
import Footer from './sections/Footer';
import Header from './sections/Header';
import MainSection from './sections/MainSection';
import Servic from './sections/Servic';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <MainSection />
            <Advatages />
            <About />
            <Servic />
            <Footer />
        </div>
    );
};

export default App;
