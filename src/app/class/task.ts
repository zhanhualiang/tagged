export class Task {
    name: string;
    date: string;
    finish: boolean;

    constructor (name: string, date: string) {
        this.name = name;
        this.date = date;
        this.finish = false;
    }
}
