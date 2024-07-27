import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    let contacts = []
    for (let i=0; i<number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact);
    }

    await fs.readFile(PATH_DB, {encoding: 'UTF-8'})
            .then((data) => {
                const parsedData = JSON.parse(data);
                const newData = [...parsedData, ...contacts]
                fs.writeFile(PATH_DB, JSON.stringify(newData, undefined, 2))
            })
            .catch((error) => console.error(error))
    
};

generateContacts(5);
