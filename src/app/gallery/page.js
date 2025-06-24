"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import { galleryimg3 } from "@/Constant/Index";
import { MyContext } from "@/Components/MyContextProvider";
import { request } from "@/services/request";
import api from "@/services/apis";
import Spinner from "@/Components/Spinner";
import ProgramCategorySidebar from "@/Components/ProgramCategorySidebar";

const Gallery = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const getData = async () => {
        setLoading(true);
        setAlbums([]);
        const { data } = await request.get(api.gallery(`?category_id=${selectedCategory?.id}`));
        setAlbums(data);
        setLoading(false);
    }

    const selectAlbum = (album) => {
        setSelectedAlbum(album);
        setCurrentMediaIndex(0);
    }

    const closeModal = () => {
        setSelectedAlbum(null);
    }

    const nextMedia = () => {
        setCurrentMediaIndex(prev =>
            prev < JSON.parse(selectedAlbum.files).length - 1 ? prev + 1 : 0
        );
    }

    const prevMedia = () => {
        setCurrentMediaIndex(prev =>
            prev > 0 ? prev - 1 : JSON.parse(selectedAlbum.files).length - 1
        );
    }

    const goToMedia = (idx) => {
        setCurrentMediaIndex(idx);
    }

    useEffect(() => {
        getData();
    }, [selectedCategory]);

    // Close modal when clicking outside content
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectedAlbum && e.target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [selectedAlbum]);

    return (
        <>
            <PageHeader description="this is description"  pagename="Gallery" />
            <section className="about-one">
                <div className="container">
                    <div className="row mt-5 mb-5 pt-5">
                        <div className="col-lg-8">
                            {loading ? (<Spinner />) : (<div className="row">
                                {albums.length > 0 ? albums.map(({ id, thumbnail, title, description }, key) => (
                                    <div key={id} className="col-lg-6 mt-3">
                                        <div className="position-relative">
                                            <a href="#" onClick={(e) => { e.preventDefault(); selectAlbum(albums[key]); }}>
                                                <Image
                                                    src={thumbnail.file_url}
                                                    className="img-fluid w-100 radius-30"
                                                    alt={title}
                                                    width={200}
                                                    height={200}
                                                />
                                            </a>
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
                                )) : (<p>No Data Found</p>)}
                            </div>)}
                        </div>

                        <div className="col-lg-4">
                            <div className="position-relative radius-20 p-4 bg-17">
                                <ProgramCategorySidebar
                                    program={null}
                                    onCategorySelect={(category) => setSelectedCategory(category)}
                                />
                                {/*<div className="programs-container">*/}
                                {/*    <h3 className="heading">Our Gallery Albums</h3>*/}
                                {/*    <form className="program-form">*/}
                                {/*        {categories.map((program, key) => (*/}
                                {/*            <label key={key} className="program-label">*/}
                                {/*                <input*/}
                                {/*                    type="radio"*/}
                                {/*                    name="program"*/}
                                {/*                    value={program.title}*/}
                                {/*                    checked={selected.id === program.id}*/}
                                {/*                    onChange={() => setSelected(program)}*/}
                                {/*                />*/}
                                {/*                <span className={`program-btn ${selected.id === program.id ? 'active' : 'bg-16'}`}>*/}
                                {/*                    {program.title}*/}
                                {/*                </span>*/}
                                {/*            </label>*/}
                                {/*        ))}*/}
                                {/*    </form>*/}
                                {/*    <button className="donate-btn">Donate Now</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {selectedAlbum && (
                <div className="modal-backdrop">
                    <div className="modal-content overflow-hidden">
                        <button
                            onClick={closeModal}
                            className="modal-close"
                            aria-label="Close"
                        >
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <circle cx="16" cy="16" r="16" fill="#222" opacity="0.7" />
                                <path d="M10 10L22 22M22 10L10 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                        <div className="modal-album">
                            <h2 className="modal-title">{selectedAlbum.title}</h2>
                            {(() => {
                                const files = JSON.parse(selectedAlbum.files);
                                const currentFile = files[currentMediaIndex];
                                if (!files.length) return null;
                                return (
                                    <div className="modal-media-wrapper">
                                        {files.length > 1 && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevMedia(); }}
                                                className="modal-arrow modal-arrow-left"
                                                aria-label="Previous"
                                            >
                                                &#8592;
                                            </button>
                                        )}
                                        <div className="modal-media">
                                            {currentFile.file_type === 'image' ? (
                                                <Image
                                                    src={currentFile.file_url}
                                                    alt={selectedAlbum.title}
                                                    width={800}
                                                    height={600}
                                                    className="modal-img"
                                                />
                                            ) : currentFile.file_type === 'video' ? (
                                                <video
                                                    controls
                                                    className="modal-video"
                                                >
                                                    <source
                                                        src={currentFile.file_url}
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ) : null}
                                        </div>
                                        {files.length > 1 && (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextMedia(); }}
                                                className="modal-arrow modal-arrow-right"
                                                aria-label="Next"
                                            >
                                                &#8594;
                                            </button>
                                        )}
                                    </div>
                                );
                            })()}
                            {/* Thumbnails */}
                            {(() => {
                                const files = JSON.parse(selectedAlbum.files);
                                if (files.length > 1) {
                                    return (
                                        <div className="modal-thumbnails">
                                            {files.map((file, idx) => (
                                                <button
                                                    key={idx}
                                                    className={`modal-thumb-btn${idx === currentMediaIndex ? ' active' : ''}`}
                                                    onClick={() => goToMedia(idx)}
                                                    aria-label={`Go to media ${idx + 1}`}
                                                >
                                                    {file.file_type === 'image' ? (
                                                        <Image
                                                            src={file.file_url}
                                                            alt=""
                                                            width={60}
                                                            height={40}
                                                            className="modal-thumb-img"
                                                        />
                                                    ) : (
                                                        <div className="modal-thumb-video">
                                                            <svg width="32" height="32" viewBox="0 0 32 32">
                                                                <circle cx="16" cy="16" r="16" fill="#222" opacity="0.7" />
                                                                <polygon points="13,10 23,16 13,22" fill="#fff" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    );
                                }
                                return null;
                            })()}
                            <div className="modal-counter">
                                {currentMediaIndex + 1} / {JSON.parse(selectedAlbum.files).length}
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .modal-backdrop {
                            position: fixed;
                            inset: 0;
                            z-index: 1000;
                            background: rgba(20, 20, 30, 0.92);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            animation: fadeIn 0.3s;
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        .modal-content {
                            background: #181824;
                            border-radius: 24px;
                            box-shadow: 0 8px 32px rgba(0,0,0,0.25);
                            padding: 2.5rem 2rem 2rem 2rem;
                            max-width: 1000px;
                            padding:10px 90px;
                            width: 100%;
                            max-height: 90vh;
                            overflow-y: auto;
                            position: relative;
                            animation: modalPop 0.3s;
                        }
                        @keyframes modalPop {
                            from { transform: scale(0.95); opacity: 0; }
                            to { transform: scale(1); opacity: 1; }
                        }
                        .modal-close {
                            position: absolute;
                            top: 18px;
                            right: 18px;
                            background: none;
                            border: none;
                            cursor: pointer;
                            z-index: 10;
                            transition: transform 0.15s;
                        }
                        .modal-close:hover {
                            transform: scale(1.1) rotate(10deg);
                        }
                        .modal-album {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                        .modal-title {
                            color: #fff;
                            font-size: 2rem;
                            font-weight: 700;
                            margin-bottom: 1.5rem;
                            text-align: center;
                        }
                        .modal-media-wrapper {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            margin-bottom: 1.2rem;
                            position: relative;
                        }
                        .modal-media {
                            max-width: 520px;
                            max-height: 60vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 18px;
                            overflow: hidden;
                            background: #222;
                            box-shadow: 0 2px 16px rgba(0,0,0,0.18);
                        }
                        .modal-img {
                            width: 100%;
                            height: auto;
                            max-height: 60vh;
                            object-fit: contain;
                            border-radius: 18px;
                            background: #222;
                        }
                        .modal-video {
                            width: 100%;
                            max-width: 520px;
                            max-height: 60vh;
                            border-radius: 18px;
                            background: #222;
                        }
                        .modal-arrow {
                            background: rgba(40,40,60,0.85);
                            border: none;
                            color: #fff;
                            font-size: 2.2rem;
                            width: 48px;
                            height: 48px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            cursor: pointer;
                            z-index: 2;
                            transition: background 0.2s, transform 0.2s;
                        }
                        .modal-arrow:hover {
                            background: #3b82f6;
                            transform: translateY(-50%) scale(1.08);
                        }
                        .modal-arrow-left {
                            left: -60px;
                        }
                        .modal-arrow-right {
                            right: -60px;
                        }
                        @media (max-width: 900px) {
                            .modal-arrow-left { left: -30px; }
                            .modal-arrow-right { right: -30px; }
                        }
                        @media (max-width: 600px) {
                            .modal-content {
                                padding: 1.2rem 0.5rem 1.5rem 0.5rem;
                                max-width: 98vw;
                            }
                            .modal-arrow-left, .modal-arrow-right {
                                left: 0;
                                right: 0;
                                font-size: 1.5rem;
                                width: 36px;
                                height: 36px;
                            }
                        }
                        .modal-thumbnails {
                            display: flex;
                            gap: 0.5rem;
                            margin: 0.7rem 0 0.7rem 0;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                        .modal-thumb-btn {
                            border: 2px solid transparent;
                            border-radius: 8px;
                            padding: 0;
                            background: none;
                            cursor: pointer;
                            transition: border 0.2s;
                            width: 60px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .modal-thumb-btn.active {
                            border: 2px solid #3b82f6;
                        }
                        .modal-thumb-img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 6px;
                        }
                        .modal-thumb-video {
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            background: #222;
                            border-radius: 6px;
                        }
                        .modal-counter {
                            color: #cbd5e1;
                            font-size: 1rem;
                            margin-bottom: 0.5rem;
                            margin-top: 0.2rem;
                        }
                        .modal-desc {
                            color: #e5e7eb;
                            margin-top: 0.5rem;
                            text-align: center;
                            font-size: 1.1rem;
                            max-width: 90%;
                        }
                    `}</style>
                </div>
            )}

        </>
    );
};

export default Gallery;