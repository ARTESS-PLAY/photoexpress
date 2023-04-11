import cl from './index.module.scss';

interface HowTabI {
    img: {
        src: string;
        alt: string;
    };
    description: {
        title: string;
        text: string;
    };
}

const HowTab: React.FC<HowTabI> = ({ img, description }) => {
    return (
        <div className={cl.tabItem}>
            <div className={cl.img_wrap}>
                <img src={img.src} alt={img.alt} />
            </div>
            <div className={cl.description}>
                <h3>{description.title}</h3>
                <p>{description.text}</p>
            </div>
        </div>
    );
};

export default HowTab;
