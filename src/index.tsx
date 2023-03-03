import React from 'react';
import './index.css';
import {state} from "./Redux/State";
import {renderEntireTree} from "./render";



renderEntireTree(state);