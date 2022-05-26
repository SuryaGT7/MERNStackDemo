import {updateDb} from '../../src/server/server';

const test=()=>{
    updateDb({
        name:'test',
        id:'1t',
        isPresent:true
    })
}

test();