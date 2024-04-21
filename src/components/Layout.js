import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from "react";

import styles from "@/styles/components/Layout.module.css";


const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.layout}>
                <Header />
                <Navbar />
                <Sidebar />
            
                <main className={styles.main}>{children}</main>
            </div>
        </>
    );
};

export default Layout;