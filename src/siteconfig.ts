import { dev } from "$app/environment";

//consider this code exposed to clients
export const siteconfig = {
    language: "en",
    legalEntityName: "Henk Bosch",
    legalEntityType: "Person",
    legalEntityAddress: "Plettenberg Bay, ZA",
    legalEntityAddressShort: "Plettenberg Bay, South Africa",
    privacyPolicyUpdatedOn: "October 9, 2023",
    gtag4id: "",
    hostname:"demo.mergedcash.com",
    email:"demo@demo.xyz",
    brandName: "MergedCash",
    imgURL:"https://demo.mergedcash.com/images/favicon.webp",
    logoSrc: '/images/logo.webp',
    altLogo: '/images/logo.webp',
    favicon: '/images/favicon.webp',
    shortname: "MergedCash",
    appName: "MergedCash",
    slogan: "",
    description: "",
    devLink: {
        name: "MergedCash",
        href: "https://mergedcash.com"
    },
    dashboardURL: "/",
    theme: {
        themeColor: "#97b1c7",
        fonts: `https://fonts.googleapis.com/css2?family=Domine&family=Montserrat&family=Bitter&family=Source+Sans+Pro&display=swap`
    },
    navLinks:  {
        
    }
} as const;