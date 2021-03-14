export class Task {
    id: number;
    uid: number;
    title: string;
    description: string;
    task_order: number;
    date: string;
    finish: number;
    share: number;

    constructor (uid: number, title: string, desc: string, date: string, taskOredr: number) {
        this.id = 0;
        this.uid = uid;
        this.title = title;
        this.description = desc;
        this.task_order = taskOredr;
        this.date = date;
        this.finish = 0;
        this.share = 0;
    }

}
