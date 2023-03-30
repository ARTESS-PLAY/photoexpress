import cl from './index.module.scss';

interface CartInfoI {
    text: string;
    img: {
        src: string;
        alt: string;
    };
}

const CartInfo: React.FC<CartInfoI> = ({ text, img }) => {
    return (
        <div className={cl.cart__info}>
            <img src={img.src} alt={img.src} />
            <p>{text}</p>
            <div className={cl.shadow__block}></div>
        </div>
    );
};

export default CartInfo;
