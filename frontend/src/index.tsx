import React from "react";
import {render} from 'react-dom';

import {Pages} from "./pages";

import {GlobalStyles} from './global-styles';
import 'normalize.css';

render(
    <>
        <GlobalStyles/>
        <Pages/>
    </>
    , document.getElementById('root'));