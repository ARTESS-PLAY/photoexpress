import * as React from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { useOutSideClick } from '../../../hooks/useOutSideClick';
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
    const subMenuRef = useRef<HTMLDivElement>(null);

    const outsideClick = useCallback(() => {
        setsubActive(false);
    }, []);

    useOutSideClick(subMenuRef, outsideClick);

    return (
        <>
            {item.children ? (
                <div
                    className={cl.has_sub}
                    ref={subMenuRef}
                    onClick={() => setsubActive((prev) => !prev)}>
                    {item.text}
                    <span className={`${cl.arrow} ${subActive ? cl['arrow--active'] : ''}`}>
                        &nbsp;&gt;
                    </span>
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
