import React from 'react';
import { render } from 'react-dom';

//Third Parties
import 'normalize.css/normalize.css';

// Local Components
import { CatalogueApp } from './components/Main/AppRoute';
import './styles/styles.scss';

render(<CatalogueApp />, document.getElementById('app'));
