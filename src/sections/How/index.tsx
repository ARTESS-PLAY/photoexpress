import { useState } from 'react';
import Container from '../../compotents/Container';
import HowTab from './HowTab';
import cl from './index.module.scss';

const tabInfos = [
    {
        img: {
            src: '/assets/how/shop.jpg',
            alt: 'shop',
        },
        description: {
            title: 'Как заказать в магазине',
            text: 'В магазине заказать можно всё! Главное прийти по адресу волшебному. Там вас встретят и накормят и напоят',
        },
    },
    {
        img: {
            src: '/assets/how/site.jpg',
            alt: 'site',
        },
        description: {
            title: 'Как заказать на сайте',
            text: 'На сайте можно заказать только некоторые шткучки. В Дальнейшем будут крутые доработки!',
        },
    },
];

const How: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <section className={cl.how}>
            <h2>Как заказать?</h2>
            <div className={cl.tabs__titiles}>
                <Container>
                    <p onClick={() => setActiveTab(0)}>В магазине</p>
                    <p onClick={() => setActiveTab(1)}>На сайте</p>
                </Container>
            </div>
            <div className={cl.line}>
                <Container>
                    <span
                        className={`${cl.line__shop} ${
                            activeTab == 0 ? cl['line--active'] : ''
                        }`}></span>
                    <span
                        className={`${cl.line__shop} ${
                            activeTab == 1 ? cl['line--active'] : ''
                        }`}></span>
                </Container>
            </div>
            <Container>
                <HowTab
                    img={tabInfos[activeTab].img}
                    description={tabInfos[activeTab].description}
                />
            </Container>

            <div className={cl.cute__lines2}>
                <div className={cl.cute__line}></div>
                <div className={cl.cute__line}></div>
                <div className={cl.cute__line}></div>
                <div className={cl.cute__line}></div>
                <div className={cl.cute__line}></div>
                <div className={cl.cute__line}></div>
            </div>
        </section>
    );
};

export default How;
