#!js name=pubsublog api_version=1.0

import {redis} from '@redis/gears-api';

const logChannel = 'myLogChannel';

function publog(client, message){
    client.call('publish', logChannel, message);
}

redis.registerFunction('test', (client)=>{
    publog(client, 'Start testFunction');
    return 'test';
});