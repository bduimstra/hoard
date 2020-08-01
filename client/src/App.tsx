import * as React from 'react';

import { Add } from './pieces/add';
import { Header } from './components/header';

import './app.less';

export const App: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <main>
                <Add />
            </main>
            <footer></footer>
        </div>
    );
};