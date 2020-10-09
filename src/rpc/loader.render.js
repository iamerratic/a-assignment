import React from 'react';

import Loader from '../ui/Loader';

function LoaderRenderComponent({ isLoading, children }) {

    return isLoading ? <Loader /> : children;
}


export default LoaderRenderComponent;