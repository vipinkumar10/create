import { Icon } from '@material-ui/core'
import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import DriveEtaSharpIcon from '@material-ui/icons/DriveEtaSharp';
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import BugReportSharpIcon from '@material-ui/icons/BugReportSharp';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import CameraAltSharpIcon from '@material-ui/icons/CameraAltSharp';
export const SidebarData = [

    {
        title: "Wildanimal Photography",
        icon: <BugReportSharpIcon />,
        Link: '/wildanimal'
    },
    {
        title: "Petanimal Photography",
        icon: <PetsSharpIcon />,
        Link: '/petanimal'
    },
    {
        title: "Travel Photography",
        icon: <DriveEtaSharpIcon  />,
        Link: '/travel'
    },
    {
        title: "Business Photography",
        icon: <BusinessCenterSharpIcon />,
        Link: '/businnes'
    },
    {
        title: "Food Photography",
        icon: <FastfoodSharpIcon />,
        Link: '/food'
    },
    {
        title: "Prewedding Photography",
        icon: <CameraAltSharpIcon />,
        Link: '/prewedding'
    },
]

