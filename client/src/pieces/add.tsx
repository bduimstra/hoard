import * as React from 'react';
import { useEffect, useState } from 'react';

import { Types } from '../defs/types';

import './add.less';


export const Add: React.FC<{}> = () => {
    const [showSelection, toggleSelection] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            console.log(event)
            if (event.code === 'KeyN') {
                toggleSelection(true);
            }
        });

        return document.removeEventListener('keydown', () => console.log('removed'));
    }, []);

    return(
        <div className='add'>
            <button onClick={ () => toggleSelection(!showSelection) }>+</button>
            {
                showSelection &&
                <ul>
                    <li>Link</li>
                    <li>Image</li>
                    <li>Color</li>
                    <li>Note</li>
                </ul>
            }
        </div>
    );
};