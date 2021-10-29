import type {IncomingMessage, ServerResponse} from 'http';
import * as url from 'url';

export default async (req: IncomingMessage, res: ServerResponse) => {
    // search?query=123
    const queryObject = url.parse(req.url as string, true).query;
    let data = {data: [{data: ''}]};
    
    const {query} = queryObject;

    if (query) {
        data = await $fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
};