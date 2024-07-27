import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { error } from 'node:console';


export const getAllContacts = async () => {
    return fs.readFile(PATH_DB, 'utf-8')
        .then((data)=> 
            JSON.parse(data)
        )
        .catch((error)=>console.error(error))
};

console.log(await getAllContacts());
