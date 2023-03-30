import Container from '../../compotents/Container';

import cl from './index.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={cl.footer}>
            <Container>
                <ul>
                    <li>Адрес: ул. Уууу</li>
                    <li>Телефон: 313131313</li>
                </ul>
                <ul>
                    <li>ИНН: 32132323</li>
                    <li>pontae@mail.ru</li>
                </ul>
            </Container>
        </footer>
    );
};

export default Footer;
