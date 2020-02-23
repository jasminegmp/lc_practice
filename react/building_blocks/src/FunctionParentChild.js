import React from 'react';

function Parent2(){
    const data = 'Data from parent';
    return(
        <div>
            <Child dataParentToChild = {data}/>
        </div>
    )
}

function Child ({data}){
    return(
        <div>
            {data}
        </div>
    )
}

export default Parent2;