import * as React from 'react';

import './header.less';

export interface HeaderProps {
}

export const Header: React.FC<{}> = () => {
    return (
        <header>Hoard</header>
    );
};