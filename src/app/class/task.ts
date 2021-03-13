export class Task {
    id: number;
    uid: number;
    title: string;
    desc: string;
    taskOrder: number;
    date: string;
    finish: number;
    share: number;

    constructor (title: string, desc: string, date: string, taskOredr: number) {
        this.id = 0;
        this.uid = 0;
        this.title = title;
        this.desc = desc;
        this.taskOrder = taskOredr;
        this.date = date;
        this.finish = 0;
        this.share = 0;
    }

}
