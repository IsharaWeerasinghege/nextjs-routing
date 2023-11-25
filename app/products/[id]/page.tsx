import React from 'react';

function Page({params}:{params:{id:string}}) {
    const {id} = params;
    return (
        <div>
            Product {id}
        </div>
    );
}

export default Page;