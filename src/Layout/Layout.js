import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {Title} from "../component";


const Layout = () => {

    return (
        <div className={'layout width'}>
            <div className={'layout-title width'}>
                <Title/>
            </div>

            <div className={'layout-outlet width flex'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;