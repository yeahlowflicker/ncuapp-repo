function multiply(a: number, b: number) { return a*b }

function echo(msg: string) { return msg }

function getlist() { return Array.from(Array(10), (_, i) => i) }

class TestObj {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

function getobj() { return new TestObj(100, "Hello") }


export {
    multiply, echo, getlist, getobj, TestObj
}
