import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';

const div=document.createElement('div');
div.setAttribute('id','root');
document.body.appendChild(div);

render(
   <AppContainer>
       <div>test</div>
   </AppContainer>,
    div
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}