import cl from './index.module.scss';

interface ButtonBlue {
    children: string;
    height: string;
    width: string;
    callback: () => void;
}

const ButtonBlue: React.FC<ButtonBlue> = ({ children, height, width, callback }) => {
    return (
        <button
            className={cl.button__blue}
            onClick={() => callback}
            style={{ height: height, width: width }}>
            {children}
        </button>
    );
};

export default ButtonBlue;
