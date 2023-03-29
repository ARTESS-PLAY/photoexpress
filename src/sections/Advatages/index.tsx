import Container from '../../compotents/Container';
import Logo from '../../compotents/Logo';
import AdvItem from './AdvItem';
import cl from './index.module.scss';

const advs = [
    { title: 'Быстро', imgHref: '../../../../assets/advantages/1.svg' },
    { title: 'Качественно', imgHref: '../../../../assets/advantages/2.svg' },
    { title: 'Недорого', imgHref: '../../../../assets/advantages/3.svg' },
];

const Advatages: React.FC = () => {
    return (
        <section className={cl.advantages}>
            <div className={cl.box__shadow}></div>
            <Container>
                <div className={cl.title}>
                    <h2>Преимущества</h2> <Logo size={45} />
                </div>
                <p className={cl.slogan}>Идельно подходит для Вас</p>
                <div className={cl.advantages__items}>
                    {advs.map((el) => (
                        <AdvItem title={el.title} imgHref={el.imgHref} />
                    ))}
                </div>
            </Container>
            <div className={cl.line}></div>
            <div className={cl.cuteLine}></div>
            <div className={cl.cuteLine}></div>
            <div className={cl.cuteLine}></div>
            <div className={cl.cuteLine}></div>
            <div className={cl.cuteLine}></div>
            <div className={cl.cuteLine}></div>
        </section>
    );
};

export default Advatages;
