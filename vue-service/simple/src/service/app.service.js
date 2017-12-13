
class appService {
    constructor() {
        this.num = 0;
        console.log("service init");
    }
    add() {
        this.num = this.num + 1
    }
    minus() {
        this.num = this.num - 1
    }
}

export default new appService()