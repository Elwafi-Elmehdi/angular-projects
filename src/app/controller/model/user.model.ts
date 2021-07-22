export class User {
  _id : string | undefined;
  age: number | undefined;
  // @ts-ignore
  email : string;
  // @ts-ignore
  password : string;
  createdAt: Date | undefined;
  bio: string| undefined;
  firstname:string|undefined;
  lastname: string|undefined;
  profileImageURL:string|undefined;
}
