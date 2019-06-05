import React from 'react';
import {formatMoney} from "../../format/priceFormatter";

function CheckoutItems ({item}) {
    const {id,name,total,count} = item;
    return(
        <div className="row">
            <div className="col-md-2">x{count}</div>
            <div className="col-md-6"><p>{name}</p></div>
            <div className="col-md-4">
                <strong>{formatMoney(total)} Đ</strong>
            </div>
        </div>
    )
}

export default CheckoutItems;