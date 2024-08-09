import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import React from "react";

import styles from "@/components/Layout/Layout.module.css";
import ContactUsButton from "../contactUsButton/ContactUsButton";


export default function Layout({ children }){
    return (
    <>
            <Header />
            <Navbar />
            <div className={styles.layout}>

            
                <main className={styles.main}>{children}</main>
                <div className={styles.sidebar}><Sidebar /></div>

                <ContactUsButton />
            </div>

            <Footer />
        </>
    );
};