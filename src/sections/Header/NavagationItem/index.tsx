import * as React from 'react';
import cl from './index.module.scss';

type NavigationItemT = {
    text: string;
    href: string;
    children?: NavigationItemT[];
};

interface NavigationItemI {
    item: NavigationItemT;
}

const NavigationItem: React.FC<NavigationItemI> = ({ item }) => {
    const [subActive, setsubActive] = React.useState<boolean>(false);
    return (
        <>
            {item.children ? (
                <div className={cl.has_sub} onClick={() => setsubActive((prev) => !prev)}>
                    {item.text}
                    <span>&gt;</span>
                    <ul className={cl.sub_menu} style={{ display: `${subActive ? '' : 'none'}` }}>
                        {item.children.map((el) => (
                            <li>
                                <a href={el.href} className="">
                                    {el.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <a href={item.href} className="">
                    {item.text}
                </a>
            )}
        </>
    );
};

export default NavigationItem;
