import React from 'react';
import { render, cleanup, findByTestId, act } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';
import { Provider } from 'react-redux';
import store from '../../store';
import { MemoryRouter } from 'react-router-dom';
import AuthProvider from '../auth/AuthProvider';
import { mockAllIsIntersecting } from 'react-intersection-observer';
import { ParallaxProvider } from 'react-scroll-parallax';

const server = setupServer(
  rest.get(`${process.env.AUTH_API_URL}/verify`, (req, res, ctx) => {
    return res(ctx.json({ 
      status: 500, 
      message: 'jwt must be provided' 
    }));
  })
);

describe('App component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => cleanup());

  it('renders App', async() => {
    act(() => {
      render(
        <Provider store={store}>
          <AuthProvider>
            <ParallaxProvider>
              <MemoryRouter>
                <App />
              </MemoryRouter>
            </ParallaxProvider>
          </AuthProvider>
        </Provider>
      );
    });
    
    mockAllIsIntersecting(true);

    const amphead = findByTestId('ampheadComponent');
    // expect(amphead).toMatchSnapshot();
    expect(amphead).toBeInTheDocument();
    await act();
  });
});
