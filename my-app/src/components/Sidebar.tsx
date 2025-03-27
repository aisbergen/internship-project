"use client";
import { useState } from "react";
import React from 'react';
import '@/app/globals.css';

import { SidebarContainer } from "./styles";
import { DashboardIcon, SettingsIcon, MenuLogo } from '@/icons/index';

export function SideBar(){
    const [isOpened, setOpened] = useState(false);

    const toggleDrawer = () => {
        setOpened((prev) => !prev);
    };
  
	return (
        
        <SidebarContainer $isOpened={isOpened}>
            <div className="flex items-center justify-between p-4">
                {isOpened && <h1 className="text-lg font-bold">MailGenie</h1>}
                <button onClick={toggleDrawer} aria-label="Toggle Sidebar">☰</button>
            </div>
    $isOpened={!isOpened}
            <div className="flex flex-col items-center justify-center p-4">
                <DashboardIcon />
                <SettingsIcon />
                <MenuLogo />
            </div>
        </SidebarContainer>
        


    );
}