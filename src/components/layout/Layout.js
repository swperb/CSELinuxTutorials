import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import React from "react";

import styles from "@/components/layout/Layout.module.css";


const Layout = ({ children }) => {
    return (
    <>
            <Header />
            <Navbar />
            <div className={styles.layout}>

            
                <main className={styles.main}>{children}</main>
                <div className={styles.sidebar}><Sidebar /></div>
            </div>
        </>
    );
};

export default Layout;