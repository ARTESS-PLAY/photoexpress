import Container from '../../compotents/Container';
import Logo from '../../compotents/Logo';

import cl from './index.module.scss';

const About: React.FC = () => {
    return (
        <section className={cl.about}>
            <Container>
                <img src="/assets/about/1.png" alt="team" />
                <div className={cl.about__info}>
                    <div className={cl.title}>
                        <h2>О комании</h2> <Logo size={56} />
                    </div>
                    <p>
                        Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem
                        ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem
                        Impsum
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default About;
