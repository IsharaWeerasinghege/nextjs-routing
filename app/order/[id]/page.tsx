import React from 'react';

function OrderItem({params}:{params:{id:string}}) {
    return (
        <div>
            order {params.id}
        </div>
    );
}

export default OrderItem;