import cl from './index.module.scss';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={cl.container}>{children}</div>;
};

export default Container;
