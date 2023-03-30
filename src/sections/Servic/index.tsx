import Container from '../../compotents/Container';
import CartInfo from './CartInfo';

import cl from './index.module.scss';

const items = [
    {
        text: 'Ксерокопия фото и документов',
        img: { src: '/assets/services/1.jpg', alt: 'Ксерокопия фото и документов' },
    },
    {
        text: 'срочное фото на документы',
        img: { src: '/assets/services/2.jpg', alt: 'срочное фото на документы' },
    },
    {
        text: 'реставрация, цветкор',
        img: { src: '/assets/services/3.jpg', alt: 'реставрация, цветкор' },
    },
    {
        text: 'Печать на кружках, футболка',
        img: { src: '/assets/services/4.jpg', alt: 'Печать на кружках, футболка' },
    },
    {
        text: 'Продожа фототоваров: рамки, часы',
        img: { src: '/assets/services/5.jpg', alt: 'Продожа фототоваров: рамки, часы' },
    },
];

const Servic: React.FC = () => {
    return (
        <section className={cl.services}>
            <Container>
                <h2>Выберите услугу, чтобы узнать про нас</h2>
                <div className={cl.services__carts}>
                    {items.map((el) => (
                        <CartInfo text={el.text} img={el.img} />
                    ))}
                </div>
            </Container>
            <div className={cl.cute__lines}>
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

export default Servic;
