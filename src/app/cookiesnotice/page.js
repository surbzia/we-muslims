// ✅ About Us page: app/aboutus/page.js
"use client";

import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import PageHeader from "@/Components/PageHeader";

const Notices = () => {

    return (
        <>
            <Header />
            <PageHeader description="this is description"  pagename="Cookies Notice" />
            <section className="content-pricavy-cookies pt-4 mt-4 pb-4 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <h2 className="calibri-bold color-6">Cookies Notice</h2>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                            <p className="color-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tenetur excepturi, accusamus provident neque eaque deserunt? Porro, maiores nobis ut sint necessitatibus facilis provident explicabo consequatur nihil perferendis nostrum iste tempore iure eum quod ratione nam. Officia iure ducimus quae fugiat ad voluptatem? Excepturi voluptate in quidem, consequatur deserunt ex!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Notices;
