// ✅ About Us page: app/aboutus/page.js
"use client";

import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { getimg, getimg1, getimg2, getimg3, getimg4 } from "@/Constant/Index";
import SignupFormModal from "@/Components/SignupFormModal";

const Getinvolved = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Header />
            <PageHeader pagename="Get Involved" />
            <section className="getinvolved-sec">
                <div className="container">
                    <div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
                        <div className="col-lg-6">
                            <Image
                                src={getimg}
                                className="img-fluid w-100 radius-30"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="content">
                                <h2 className="calibri-bold color-6 level-2">Register to Get Started</h2>
                                <p className="color-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p></div>
                            <button
                                className="btn btn-primary"
                                onClick={() => setModalOpen(true)}
                            >
                                Open Signup Modal
                            </button>

                            <SignupFormModal
                                isOpen={modalOpen}
                                onClose={() => setModalOpen(false)}
                            />

                        </div>
                    </div>
                </div>
            </section>
            <section className=" sec-get ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="content"><h2 className="calibri-bold color-6 level-2">Register to Volunteer</h2><p className="color-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p></div>
                            <Link href="">
                                <button className="btn-wrapper calibri-bold mt-3 view">Register Now</button>
                            </Link>
                        </div>
                        <div className="col-lg-5">
                            <Image
                                src={getimg1}
                                className="img-fluid w-100 radius-30"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section >
            <section className="getinvolved-sec pt-3 pb-3">
                <div className="container">
                    <div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
                        <div className="col-lg-6">
                            <Image
                                src={getimg2}
                                className="img-fluid w-100 radius-30"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="content ps-4"><h2 className="calibri-bold color-6 level-2">Careers</h2><p className="color-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                <Link href="">
                                    <button className="btn-wrapper calibri-bold mt-3 view">Join Team</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="join-mailling">
                <div className="container">
                    <div className="row bg-mailling align-items-center">
                        <div className="col-lg-6">
                            <div className="content ps-4"><h2 className="calibri-bold text-white level-2">Careers</h2><p className="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                <Link href="">
                                    <button className="btn-wrapper mt-3 text-white border-white view">Join Team</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Image
                                src={getimg3}
                                className="img-fluid w-100 radius-30"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="getinvolved-sec pt-3 pb-3">
                <div className="container">
                    <div className="row align-items-center mt-4 mb-4 pt-4 pb-4">
                        <div className="col-lg-6">
                            <Image
                                src={getimg4}
                                className="img-fluid w-100 radius-30"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="content ps-4"><h2 className="calibri-bold color-6 level-2">Partner With Us</h2><p className="color-16 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat</p>
                                <Link href="">
                                    <button className="btn-wrapper calibri-bold mt-3 view">Get Partnership</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Getinvolved;
