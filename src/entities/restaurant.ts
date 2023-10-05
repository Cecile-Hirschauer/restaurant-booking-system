export class Restaurant {
    private _name: string;
    private _capacity: number;

    constructor(name: string, capacity: number) {
        this.name = name;
        this.capacity = capacity;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get capacity(): number {
        return this._capacity;
    }

    set capacity(value: number) {
        if (value <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        this._capacity = value;
    }
}
