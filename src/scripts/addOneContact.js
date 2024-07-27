import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    await fs.readFile(PATH_DB, 'utf-8')
        .then((data) => {
            const parsedData = JSON.parse(data)
            const newData = [...parsedData, createFakeContact()]
            fs.writeFile(PATH_DB, JSON.stringify(newData, undefined, 2))
        })
        .catch((error) => console.error(error))
};

addOneContact();
