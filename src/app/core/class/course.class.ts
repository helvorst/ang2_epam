export class Course {
    constructor(
    public id: string | number,
    public title: string,
    public created: string,
    public duration: number,
    public description: string,
    public deleted?: boolean){}
}