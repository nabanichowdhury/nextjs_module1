import React from 'react';

const DynamicRoute = ({params,searchParams}) => {
    console.log(params) 
    console.log(searchParams)
    return (
        <div>
            <>This is product :{params.id} </>
            <>This is product :{searchParams.catagory} </>
        </div>
    );
};

export default DynamicRoute;