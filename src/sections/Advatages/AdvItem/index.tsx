import cl from './index.module.scss';

interface AdvItemI {
    title: string;
    imgHref: string;
}

const AdvItem: React.FC<AdvItemI> = ({ title, imgHref }) => {
    return (
        <div className={cl.advItem}>
            <div className={cl.advItem__round}>
                <img src={imgHref} alt="advantages" />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default AdvItem;
