"use client";

import React, {useContext, useEffect, useState} from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import {
    galleryimg3,
} from "@/Constant/Index";
import {MyContext} from "@/Components/MyContextProvider";
import {request} from "@/services/request";
import api from "@/services/apis";
const Gallery = () => {
    const { categories } = useContext(MyContext);
    const [selected, setSelected] = useState(categories[0]);
    const [albums, setAlbums] = useState([]);

    const getData = async ()=>{
        setAlbums([]);
        const {data} = await request.get(api.gallery(`?category_id=${selected.id}`));
        setAlbums(data);
    }

    useEffect(() => {
        getData();
    }, [selected]);

    return (
        <>
            <Header />
            <PageHeader pagename="Gallery" />
            <section className="about-one">
                <div className="container">
                    <div className="row mt-5 mb-5 pt-5">
                        <div className="col-lg-8">
                            <div className="row">
                                {albums.map(({ id, thumbnail, title, description }) => (
                                    <div key={id} className="col-lg-6 mt-3">
                                        <div className="position-relative">
                                            <Image
                                                src={thumbnail.file_url}
                                                className="img-fluid w-100 radius-30"
                                                alt={title}
                                                width={200}
                                                height={200}
                                            />
                                            <div className="share position-absolute bottom-0 right-0 p-4">
                                                <button className="wrapper-share">
                                                    <Image
                                                        src={galleryimg3}
                                                        className="img-fluid w-100 radius-30"
                                                        alt="Share Icon"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <h4 className="calibri-bold dark-color mt-3 level-5">{title}</h4>
                                        <p className="color-16">{description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="position-relative radius-20 p-4 bg-17">
                                <div className="programs-container">
                                    <h3 className="heading">Our Gallery Albums</h3>
                                    <form className="program-form">
                                        {categories.map((program, key) => (
                                            <label key={key} className="program-label">
                                                <input
                                                    type="radio"
                                                    name="program"
                                                    value={program.title}
                                                    checked={selected.id === program.id}
                                                    onChange={() => setSelected(program)}
                                                />
                                                <span className={`program-btn ${selected.id === program.id ? 'active' : 'bg-16'}`}>
                                                    {program.title}
                                                </span>
                                            </label>
                                        ))}
                                    </form>
                                    <button className="donate-btn">Donate Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Gallery;
