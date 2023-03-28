import Container from '../../compotents/Container';
import Logo from '../../compotents/Logo';
import cl from './index.module.scss';

const Header: React.FC = () => {
    return (
        <header className={cl.header}>
            <Container>
                <div className={cl.header__content}>
                    <Logo size={24} />
                    <div className={cl.header__contacts}>
                        <p>Адрес: 2323</p>
                        <p>8952489242</p>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
