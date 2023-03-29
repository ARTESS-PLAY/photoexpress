import NavigationItem from '../NavagationItem';
import cl from './index.module.scss';

const routing = [
    { text: 'ПРЕИМУЩЕСТВА', href: '#' },
    { text: 'О КОМПАНИИ', href: '#' },
    {
        text: 'УСЛУГИ',
        href: '#',
        children: [
            { text: 'Ксерокопия фото и документов', href: '#' },
            { text: 'срочное фото на документы', href: '#' },
            { text: 'реставрация, цветкор', href: '#' },
            { text: 'Печать на кружках, футболка', href: '#' },
            { text: 'Продожа фототоваров: рамки, часы', href: '#' },
        ],
    },
    { text: 'ЗАКАЗАТЬ', href: '#' },
    { text: 'КОНТАКТЫ', href: '#' },
];

const Navigation: React.FC = () => {
    return (
        <nav className={cl.nav}>
            <ul className={cl.nav_ul}>
                {routing.map((el) => (
                    <li>
                        <NavigationItem item={el} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
