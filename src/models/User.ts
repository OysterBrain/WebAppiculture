import { Rucher } from "./Rucher";

export class User {
    private _email: string;
    private _password: string;
    private _ruchers: Rucher[];
    

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get ruchers(): Rucher[] {
        return this._ruchers;
    }
    public set ruchers(value: Rucher[]) {
        this._ruchers = value;
    }

}
