import * as React from 'react';

import { Header } from './components/header';

import './app.less';

export const App: React.FC<{}> = () => {
    return (
        <div>
            <Header />
            <main>
                Hello World!
            </main>
            <footer></footer>
        </div>
    );
};