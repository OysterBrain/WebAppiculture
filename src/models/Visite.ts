export class Visite {

    private _dynamique: string;
    private _nourriture: string;
    private _nbHaussesRecoltees: number;
    private _observations: string;
    

    public get dynamique(): string {
        return this._dynamique;
    }
    public set dynamique(value: string) {
        this._dynamique = value;
    }
    public get nourriture(): string {
        return this._nourriture;
    }
    public set nourriture(value: string) {
        this._nourriture = value;
    }
    public get nbHaussesRecoltees(): number {
        return this._nbHaussesRecoltees;
    }
    public set nbHaussesRecoltees(value: number) {
        this._nbHaussesRecoltees = value;
    }
    public get observations(): string {
        return this._observations;
    }
    public set observations(value: string) {
        this._observations = value;
    }
}
