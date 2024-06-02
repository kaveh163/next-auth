import connection from "./db";
import type { User } from "./definitions"
import { unstable_noStore as noStore } from 'next/cache';
export function storeUser(userid: string, hashedPassword: string) {
    const user: Omit<User, 'id'> = {
        userid: userid,
        password: hashedPassword
    }
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users SET ?', user, function (error, results, fields) {
            if (error) {
                
                return reject(error);
            }
            // Neat!
            
            return resolve(results[0]);
        });
    })

}
export function getUser(userid: string) {
    //noStore();
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE userid= ?', [userid], function (error, results, fields) {
            if (error) {
                
                return reject(error);
            }
            
            return resolve(results[0]);
        });

    })
}