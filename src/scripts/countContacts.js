import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    return fs.readFile(PATH_DB, 'utf-8')
        .then((data)=> {
            const parsedData = JSON.parse(data);
            return parsedData.length
        })
        .catch((error) => console.error(error))
};

console.log(await countContacts());
