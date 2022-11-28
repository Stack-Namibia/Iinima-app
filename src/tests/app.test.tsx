import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('Loads home', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
