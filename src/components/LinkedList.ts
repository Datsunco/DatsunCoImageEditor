interface data {
    image: any,
    brightness: number,
    grayscale: number,
    sepia: number,
    saturate: number,
    contrast: number,
    hueRotate: number,
    rotate: number,
    vartical: number,
    horizental: number,
}

class node {
    data: data
    next: node | null
    pre: node | null
    constructor(data: data) {
        this.data = data
        this.next = null
        this.pre = null
    }
}
class linkedList {
    head: node | null
    current: node | null
    constructor() {
        this.head = null
        this.current = null
    }

    insert(data: data) {
        let newNode = new node(data)
        if (this.head === null) {
            this.head = newNode
            this.current = newNode
        } else {
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next
            }
            temp.next = newNode
            newNode.pre = temp
            this.current = newNode
        }
    }
    undoEdit = () => {
        const preData = ( <node>this.current ).pre
        if (preData) {
            this.current = preData
            return preData.data
        } else {
            return null
        }
    }
    redoEdit = () => {
        const nextData = (<node>this.current).next
        if (nextData) {
            this.current = nextData
            return nextData.data
        } else {
            return null
        }
    }
}

const storeData = new linkedList()

export default storeData;