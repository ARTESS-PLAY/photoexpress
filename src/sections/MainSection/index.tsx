import Container from '../../compotents/Container';
import cl from './index.module.scss';

const MainSection: React.FC = () => {
    return (
        <section className={cl.main}>
            <main>
                <Container>a</Container>
            </main>
        </section>
    );
};

export default MainSection;
