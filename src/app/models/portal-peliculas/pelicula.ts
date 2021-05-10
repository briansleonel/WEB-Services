import { Actor } from "./actor";
import { Trailer } from "./trailer";

export class Pelicula {

    id: string;
    title: string;
    year: string;
    length: string;
    rating: string;
    rating_votes: string;
    poster: string;
    plot: string;
    trailer: Trailer;
    cast: Array<Actor>;
    technical_specs: any
}
