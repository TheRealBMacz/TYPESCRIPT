

    interface Car{
        hasAirbags():boolean;
        specification():string;
        hasCamera():boolean;

    }

    class BMW implements  Car{     //alt+insert

        private _color :string;
        private _engineCapacity : string;
        private _fuel : string;
        private _seatingCapacity : number;

            //insert constructors
           //getters &setters
        get color(): string {
            return this._color;
        }

        set color(value: string) {
            this._color = value;
        }

        get engineCapacity(): string {
            return this._engineCapacity;
        }

        set engineCapacity(value: string) {
            this._engineCapacity = value;
        }

        get fuel(): string {
            return this._fuel;
        }

        set fuel(value: string) {
            this._fuel = value;
        }

        get seatingCapacity(): number {
            return this._seatingCapacity;
        }

        set seatingCapacity(value: number) {
            this._seatingCapacity = value;
        }

        constructor(color: string, engineCapacity: string, fuel: string, seatingCapacity: number) {
            this._color = color;
            this._engineCapacity = engineCapacity;
            this._fuel = fuel;
            this._seatingCapacity = seatingCapacity;
        }



        hasAirbags(): boolean {
            return true;
        }

        specification(): string {
            let specification:string = `
                                         Color : ${this.color},
                                         EngineCapacity : ${this.engineCapacity},
                                         Fuel : ${this.fuel},
                                         SeatingCapacity : ${this.seatingCapacity},
                                         Has AirBags : ${this.hasAirbags()},
                                         Has Camera : ${this.hasCamera()}
                                         `;

            return specification;
        }

        hasCamera(): boolean {
            return true;
        }

    }

        let car1 = new BMW('white','3000cc','Diesel',4);
        let carSpec = car1.specification();
        console.log(carSpec);
