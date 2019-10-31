import React, { useState } from "react";
import { SearchDropdown } from "../searchDropdown/SearchDropdown";
import { MobileNav } from "../mobileNav/MobileNav";
import { ProjectPage } from "../pages/projectPage/ProjectPage";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { TrainingPage } from "../pages/trainingPage/TrainingPage";
import { Header } from "../header/Header";
import { GuidesPage } from "../pages/guidesPage/GuidesPage";
import { HomePage } from "../pages/homePage/HomePage";
import { NoMatchPage } from "../pages/noMatchPage/NoMatchPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
export function App() {
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false),
    openSearchDropdown = () => {
      setIsSearchDropdownOpen(true);
    },
    closeSearchDropdown = () => {
      setIsSearchDropdownOpen(false);
    },
    openMobileMenu = () => {
      if (!isMobileMenuOpen) {
        setIsMobileMenuOpen(true);
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
      }
    },
    closeMobileMenu = e => {
      if (isMobileMenuOpen) {
        if (!e.target.closest(".mobile-navigation")) {
          setIsMobileMenuOpen(false);
          document.getElementsByTagName("html")[0].style.overflow = "";
        }
      }
    };
  return (
    <Router>
      <div onClick={closeMobileMenu}>
        <Header
          openSearchDropdown={openSearchDropdown}
          searchFlag={isSearchDropdownOpen}
          closeSearchDropdown={closeSearchDropdown}
        />
        {isSearchDropdownOpen && <SearchDropdown />}
        <MobileNav
          openMobileMenu={openMobileMenu}
          mobileFlag={isMobileMenuOpen}
        />
        <Switch>
          <Route exact path="/" component={ProjectPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/guides" component={GuidesPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/trainingAndCertifation" component={TrainingPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </div>
    </Router>
  );
}
