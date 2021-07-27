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
import DiscographyList from "components/Blocks/Home/DiscographyList/DiscographyList";
import { useState } from "react";
import Utils from "assets/js/utils";

SwiperCore.use([Navigation]);

function Home(props) {
    const [showDiscographyList, setShowDiscographyList] = useState(false),
        helpers = {
            parseRawGearList(rawList) {
                const parsedList = rawList.split("\n");

                for (let i = 0; i < parsedList.length; i++) {
                    if (parsedList[i] === "") parsedList.splice(i, 1);
                }

                return parsedList;
            },
            getStudioGallery() {
                return props.pageData.galleries.find(gallery => { return gallery.Name === "Studio Gallery" }).gallery;
            },
            getDiscographyGallery() {
                return props.pageData.galleries.find(gallery => { return gallery.Name === "Discography Gallery" }).gallery;
            },
            getDiscographyList() {
                return props.pageData.artists.map(artist => {
                    return {
                        name: artist.Name,
                        tracks: artist.Tracks
                    };
                });
            }
        };

    return (
        <Page>
            <Head>
                <title>Sunsick Studio</title>
            </Head>
            <main id="home">
                <Section id="our-studio">
                    <Container>
                        <Header>OUR STUDIO</Header>
                        <div md="2">
                            <Swiper
                                navigation
                                autoHeight={true}
                                spaceBetween={50}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={swiper => console.log(swiper)}>
                                {helpers.getStudioGallery().map((image, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <img src={Utils.apiUrl(image.url)} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                            <Accordion>
                                {props.pageData.gear_lists.map((list, i) => {
                                    return (
                                        <AccordionItem 
                                            key={i}
                                            title={list.Title}>
                                            <ul>{helpers.parseRawGearList(list.Items).map((item, i) => { return <li key={i}>{item}</li> })}</ul>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        </div>
                    </Container>
                </Section>
                <Section 
                    id="listen"
                    alt={true}>
                    <Container>
                        <Header>LISTEN</Header>
                        <iframe 
                            src="https://open.spotify.com/embed/playlist/2ngJuLSYa49LtYngLiyk6Y" 
                            width="100%" 
                            height="380" 
                            frameBorder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media">
                        </iframe>
                    </Container>
                </Section>
                <Section id="discography">
                    <Container>
                        <Header>DISCOGRAPHY</Header>
                        <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 640: 3, 900: 6}}>
                            <Masonry gutter="10px">
                                {helpers.getDiscographyGallery().map((image, i) => {
                                    return (
                                        <img 
                                            key={i}
                                            style={{width: "100%", display: "block"}}
                                            src={Utils.apiUrl(image.url)} />
                                    );
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                        <a 
                            onClick={e => {
                                e.nativeEvent.preventDefault();
                                setShowDiscographyList(true);
                            }}
                            className="see-full-discography"
                            href="#">
                            SEE FULL DISCOGRAPHY
                        </a>
                    </Container>
                </Section>
                <Section 
                    id="contact-us"
                    fadeBg={true}>
                    <Container>
                        <Header>CONTACT US</Header>
                        <ContactForm></ContactForm>
                    </Container>
                </Section>
            </main>
            {showDiscographyList ? <DiscographyList discography={helpers.getDiscographyList()} onClose={() => setShowDiscographyList(false)} /> : null}
        </Page>
    );
}


export async function getStaticProps() {
    const res = await fetch(process.env.SUNSICK_API_URL + "/home-page"),
        pageData = await res.json();

    return { props: { pageData } };
}

export default Home;