import cl from './index.module.scss';

const Logo: React.FC<{ size: number }> = ({ size }) => {
    return (
        <p className={cl.logo} style={{ fontSize: size + 'px' }}>
            ФОТОЭКПЕСС
        </p>
    );
};

export default Logo;
