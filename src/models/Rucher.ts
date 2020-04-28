import { Visite } from "./Visite";

export class Rucher {
    private _id: string;
    private _nbRuches: number;
    private _description: string;
    private _coordonnees: string;
    private _dateCreation: Date;
    private _visites: Visite[];
    private _frequenceVisites: number;


    
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get nbRuches(): number {
        return this._nbRuches;
    }
    public set nbRuches(value: number) {
        this._nbRuches = value;
    }
public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
public get coordonnees(): string {
        return this._coordonnees;
    }
    public set coordonnees(value: string) {
        this._coordonnees = value;
    }
public get dateCreation(): Date {
        return this._dateCreation;
    }
    public set dateCreation(value: Date) {
        this._dateCreation = value;
    }
public get visites(): Visite[] {
        return this._visites;
    }
    public set visites(value: Visite[]) {
        this._visites = value;
    }
public get frequenceVisites(): number {
        return this._frequenceVisites;
    }
    public set frequenceVisites(value: number) {
        this._frequenceVisites = value;
    }

}
