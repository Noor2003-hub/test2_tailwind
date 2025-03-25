import { User as BaseUser } from 'payload';

export interface User extends BaseUser {
  role: 'admin' | 'viewer' |'editor';
  
}