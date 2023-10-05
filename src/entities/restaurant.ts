export class Restaurant {
    private _name: string | undefined;
    private _capacity: number | undefined;

    constructor(name: string, capacity: number) {
        this.name = name;
        this.capacity = capacity;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get capacity(): number | undefined {
        return this._capacity;
    }

    set capacity(value: number) {
        if (value <= 0) {
            throw new Error('Capacity must be greater than 0');
        }
        this._capacity = value;
    }
}
