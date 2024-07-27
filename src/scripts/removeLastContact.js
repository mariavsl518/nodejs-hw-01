import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    await fs.readFile(PATH_DB, 'utf-8')
        .then((data)=>{
            const newData = JSON.parse(data).slice(0, -1)
            fs.writeFile(PATH_DB, JSON.stringify(newData, undefined, 2), 'utf-8')
        })
        .catch((error) => console.error(error))
};

removeLastContact();
