// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DaskParallel title', () => {
    render(<App />);
    const titleElement = screen.getByText(/DaskParallel/i);
    expect(titleElement).toBeInTheDocument();
});
