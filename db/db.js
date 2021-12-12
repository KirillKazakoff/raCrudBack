class Db {
    constructor() {
        this.notes = [
            {
                note: 'Hello There is some content1',
                id: '1',
            },
            {
                note: 'Hello There is some content2',
                id: '2',
            },
        ];
    }

    add(note) {
        this.notes.push(note);
    }

    delete(id) {
        const index = this.notes.findIndex((dbItem) => dbItem.id === id);

        if (index === -1) return;

        this.notes.splice(index, 1);
    }
}

const db = new Db();
export default db;
