import React from 'react';
import { createRoot } from 'react-dom/client';
import { test, expect } from 'vitest'
import App from '../App';

test('renders without crashing', () => {
    const root = createRoot(document.getElementById('root'))
    
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );

    root.unmount();

    expect(document.getElementById('root').innerHTML).toBe('');
});
