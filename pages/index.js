import Head from "next/head";
import Page from "layouts/Page/Page.js";
import Section from "components/UI/Section/Section";
import Header from "components/UI/Header/Header";
import Container from "components/UI/Container/Container";
import SwiperCore, { Navigation } from 'swiper';
import Accordion from "components/Widgets/Accordion/Accordion";
import AccordionItem from "components/Widgets/Accordion/AccordionItem/AccordionItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ContactForm from "components/Blocks/Home/ContactForm/ContactForm";

SwiperCore.use([Navigation]);

export default function Home() {
    const discographyImages = [
            "/assets/pages/home/discography/ex-1.jpg",
            "/assets/pages/home/discography/ex-2.jpg",
            "/assets/pages/home/discography/ex-3.jpg",
            "/assets/pages/home/discography/ex-4.jpg",
            "/assets/pages/home/discography/ex-5.jpg",
            "/assets/pages/home/discography/ex-9.jpg"
        ],
        handlers = {
            onContactFormComplete() {

            }
        };

    return (
        <Page>
            <Head>
                <title>Sunsick Studio</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <main id="home">
                <Section>
                    <Container>
                        <Header>OUR STUDIO</Header>
                        <div md="2">
                            <Swiper
                                navigation
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}>
                                <SwiperSlide>
                                    <img src="/assets/pages/home/sunsick-.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assets/pages/home/sunsick-.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assets/pages/home/sunsick-.jpg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assets/pages/home/sunsick-.jpg" />
                                </SwiperSlide>
                            </Swiper>
                            <Accordion>
                            <AccordionItem title="GEAR LIST 1">
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                    <li>Item 5</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="GEAR LIST 2">
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                    <li>Item 5</li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem title="GEAR LIST 3">
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                    <li>Item 4</li>
                                    <li>Item 5</li>
                                </ul>
                            </AccordionItem>
                        </Accordion>
                        </div>
                    </Container>
                </Section>
                <Section alt={true}>
                    <Container>
                        <Header>LISTEN</Header>
                        <iframe 
                            style={{height: "362px"}}
                            height="362px"
                            src="https://bandcamp.com/EmbeddedPlayer/album=2882544774/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" 
                            seamless>
                                <a href="https://overself.bandcamp.com/album/ingress">Ingress by Overself</a>
                        </iframe>
                    </Container>
                </Section>
                <Section>
                    <Container>
                        <Header>DISCOGRAPHY</Header>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 1, 900: 1}}>
                            <Masonry gutter="10px">
                                {discographyImages.map((image, i) => {
                                    return (
                                        <img 
                                            key={i}
                                            style={{width: "100%", display: "block"}}
                                            src={image} />
                                    );
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                        <a 
                            className="see-full-discography"
                            href="#">
                            SEE FULL DISCOGRAPHY
                        </a>
                    </Container>
                </Section>
                <Section fadeBg={true}>
                    <Container>
                        <Header>CONTACT US</Header>
                        <ContactForm onCompleteHandler={handlers.onContactFormComplete}></ContactForm>
                    </Container>
                </Section>
            </main>
        </Page>
    );
}
