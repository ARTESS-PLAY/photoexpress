import About from './sections/About';
import Advatages from './sections/Advatages';
import Footer from './sections/Footer';
import Header from './sections/Header';
import How from './sections/How';
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
            <How />
            <Footer />
        </div>
    );
};

export default App;
