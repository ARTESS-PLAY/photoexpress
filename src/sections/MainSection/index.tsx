import Container from '../../compotents/Container';
import cl from './index.module.scss';

import ButtonBlue from '../../compotents/UI/ButtonBlue';
import Carousel from './Carousel';

const MainSection: React.FC = () => {
    return (
        <section className={cl.main}>
            <Container>
                <main className={cl.main__content}>
                    <div className={cl.main__info}>
                        <h1>Заказать фото-услуг в один клик</h1>
                        <p className="">
                            LoremsumLoremsumLoremsumLoremsumLoremsumLoremsumLoremsumLo
                            remsumLoremsumLoremsumLoremsumLoremsumLoremsumLoremsumLoremsumLoremsumL
                            oremsumLoremsumLorems umLoremsumLoremsumLo remsumLoremsumLoremsumLoremsu
                            LoremsumLore msumLoremsumLoremsumLoremsum
                        </p>
                        <ButtonBlue height="60px" width="270px" callback={() => console.log(12)}>
                            Подробнее
                        </ButtonBlue>
                    </div>
                    <Carousel></Carousel>
                </main>
            </Container>
        </section>
    );
};

export default MainSection;
