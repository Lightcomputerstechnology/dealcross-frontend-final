import React from "react";
import AppRoutes from "./AppRoutes";

import Navbar            from "./components/Navbar";
import Footer            from "./components/Footer";
import ThemeToggle       from "./components/ThemeToggle";
import LanguageSwitcher  from "./components/LanguageSwitcher";
import NotificationToast from "./components/NotificationToast";

export default function App () {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <LanguageSwitcher />
      <ThemeToggle />
      <NotificationToast />
      <Footer />
    </>
  );
}
