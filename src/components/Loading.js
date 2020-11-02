import React from 'react';

function Loading(Component) {
  return function Loading({ isLoading, ...props }) {
    if (!isLoading)
	{
		return <Component {...props} />;
	}
    return (
		<i className="pi pi-spin pi-spinner" style={{'fontSize': '4em', color: 'white', margin: '50px'}}></i>
    );
  };
}

export default Loading;
