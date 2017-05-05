var Categoria: string;
var Indirizzo: string;
var Picture: string;
var Nome: string;
var Lat: number;
var Lang: number;
var anno: string;
var mese: string;
var giorno: string;
var cognome: string;
var created: number;
var ownerId: string;
var password: string;
var objectId: string;
var objecemailtId: string;
var updated: number;
var __meta: string;
var ___class: string;

//	"__meta": "{\"relationRemovalIds\":{},\"selectedProperties\":[\"anno\",\"cognome\",\"created\",\"Lang\",\"ownerId\",\"password\",\"Categoria\",\"Indirizzo\",\"Picture\",\"giorno\",\"___class\",\"mese\",\"Nome\",\"updated\",\"objectId\",\"Lat\",\"email\"],\"relatedObjects\":{}}",

//	"___class": "Azienda",



export class Azienda {

        constructor(
                public Categoria: string,
                public Picture: string,
                public Indirizzo: string,
                public Nome: string,
                public Lat: number,
                public Lang: number,
                public anno: string,
                public mese: string,
                public giorno: string,
                public cognome: string,
                public created: number,
                public ownerId: string,
                public password: string,
                public objectId: string,
                public objecemailtId: string,
                public updated: number,
                public __meta: string,
                public ___class: string
        ) { }
}
