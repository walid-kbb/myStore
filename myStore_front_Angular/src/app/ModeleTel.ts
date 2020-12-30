import {Caracteristiques} from './Caracteristiques';
import {MarqueTel} from './MarqueTel';

export class ModeleTel{

    id : number;
    modele: string;
    marque: MarqueTel;
    marqueName: string;
    prix : number;
    description: string;
    caracteristiques : Caracteristiques;

}