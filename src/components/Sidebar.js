import React, { Component } from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData'
export default function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname == val.Link ? "active" : ""}
                            onclick={() => {
                                window.location.pathname = val.Link;
                            }}
                        >
                            <div id="icon"> {val.icon} </div>
                            <div id="title"> {val.title} </div>
                        </li>
                    );


                })}
            </ul>
        </div>
    )
};

