import PropTypes from 'prop-types';
import React from 'react';
import { createClient, Provider } from 'urql';
import { AppProvider } from '@components/common/context/app';
import Area from '@components/common/Area';
import Head from '@components/common/react/Head';
import { Alert } from '@components/common/modal/Alert';
import './Client.scss';
import { AiTwotonePhone } from 'react-icons/ai';
import { SiZalo } from 'react-icons/si';
const client = createClient({
  url: '/api/graphql'
});

export function App({ children }) {
  return (
    <AppProvider value={window.eContext}>
      <Provider value={client}>
        <Alert>
          <Head />
          <Area id="body" className="wrapper" />
        </Alert>
      </Provider>
      <div className="network fixed right-[10px] top-[50%]">
        <a href="tel:098762432" target='_blank'>
          <div className="phone">
            <AiTwotonePhone className="custom-icon"></AiTwotonePhone>
          </div>
        </a>

        <a href="https://zalo.me/0947511666" target='_blank'>
          <div className="mb-[10px]">
            <img
              className="w-[30px]"
              src="https://kinhmatbichngoc.vn/images/icon/zalo_fix.png"
              alt="zalo"
            />
          </div>
        </a>
        <a href="https://www.messenger.com/t/bichngocoptic" target='_blank'>
          <div className="mb-[10px]">
            <img
              className="w-[30px]"
              src="https://kinhmatbichngoc.vn/images/icon/mes_fix.png"
              alt="mess"
            />
          </div>
        </a>
      </div>
      {children}
    </AppProvider>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
