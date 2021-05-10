import { Cases } from "./cases";
import { Deaths } from "./deaths";
import { Tests } from "./tests";

export class Pais {
    continent: string;
    country: string;
    population: number;
    cases: Cases;
    deaths: Deaths;
    tests: Tests;
    day: string;
    time: string;
}
