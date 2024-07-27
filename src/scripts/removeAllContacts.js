import * as fs from 'node:fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8')
};

removeAllContacts();
