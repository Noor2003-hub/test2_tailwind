import { User as BaseUser } from 'payload';

export interface User extends BaseUser {
  role: 'admin' | 'viewer' |'editor';
  
}
//editor(defult): update +read
//admin: create, update,delete +read
//viewer: read only