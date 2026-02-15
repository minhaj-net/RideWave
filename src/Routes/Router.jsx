import React from "react";
import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import OceanFreight from "../Pages/OceanFreight/OceanFreight";
import AirFreight from "../Pages/AirFreight/AirFreight";
import RootLayout from "../Layout/RootLayout";
import RailFreight from "../Pages/RailFreight/RailFreight";
import Warehousing from "../Pages/Warehousing/Warehousing";
import Logistics from "../Pages/Logistics/Logistics";
import Project from "../Pages/Project/Project";
import Projectdetails from "../Pages/Project/Projectdetails";
import ServiceDetails from "../Pages/Service/ServiceDetails";
import Blogs from "../Pages/Blogs/Blogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/PagesDropdown/AboutUs/AboutUs";
import RequestQuote from "../Pages/PagesDropdown/RequestQuote/RequestQuote";
import Tracking from "../Pages/PagesDropdown/Tracking/Tracking";
import Team from "../Pages/PagesDropdown/Team/Team";
import TeamDetails from "../Pages/PagesDropdown/Team/TeamDetails";
import Pricing from "../Pages/PagesDropdown/Pricing/Pricing";
import FAQ from "../Pages/PagesDropdown/FAQ/FAQ";
import PrivacyPolicy from "../Pages/Policies/PrivacyPolicy";
import TermsConditions from "../Pages/Policies/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "service",
        Component: Service,
      },
      {
        path: "service/:id",
        Component: ServiceDetails,
      },
      {
        path: "oceanFreight",
        Component: OceanFreight,
      },
      {
        path: "airFreight",
        Component: AirFreight,
      },
      {
        path: "railFreight",
        Component: RailFreight,
      },
      {
        path: "warehousing",
        Component: Warehousing,
      },
      {
        path: "logistics",
        Component: Logistics,
      },
      {
        path: "project",
        Component: Project,
      },
      {
        path: "project/:id",
        Component: Projectdetails,
      },
      {
        path: "blog",
        Component: Blogs,
      },
      {
        path: "blog/details/:id",
        Component: BlogDetails,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "requestQuote",
        Component: RequestQuote,
      },
      {
        path: "tracking",
        Component: Tracking,
      },
      {
        path: "team",
        Component: Team,
      },
      {
        path: "team/details/:id",
        Component: TeamDetails,
      },
      {
        path:"pricing",
        Component:Pricing
      },
      {
        path:"faq",
        Component:FAQ
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy
      },
      {
      path: "terms-conditions",
        Component: TermsConditions
      }

    ],
  },
]);
