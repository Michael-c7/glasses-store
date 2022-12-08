import { v4 as uuidv4 } from 'uuid';


/*
put miscellaneous function that have
no specific place here
eg: calculating a season, creating a date, ect...
*/


export const generateUniqueId = _ => uuidv4()



export function getNotUnique(array) {
    var map = new Map();
    array.forEach(a => map.set(a, (map.get(a) || 0) + 1));
    return array.filter(a => map.get(a) > 1);
}