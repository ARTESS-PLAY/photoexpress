import Advatages from './sections/Advatages';
import Header from './sections/Header';
import MainSection from './sections/MainSection';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <MainSection />
            <Advatages />
        </div>
    );
};

export default App;
