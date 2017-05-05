var type: string;
var created: number;
var ownerId: string;
var objectId: string;
var updated: number;
var __meta: string;
var ___class: string;

//	"__meta": "{\"relationRemovalIds\":{},\"selectedProperties\":[\"anno\",\"cognome\",\"created\",\"Lang\",\"ownerId\",\"password\",\"Categoria\",\"Indirizzo\",\"Picture\",\"giorno\",\"___class\",\"mese\",\"Nome\",\"updated\",\"objectId\",\"Lat\",\"email\"],\"relatedObjects\":{}}",

//	"___class": "Azienda",



export class AziendaType {

        constructor(
                public type: string,
                public created: number,
                public ownerId: string,
                public objectId: string,
                public updated: number,
                public __meta: string,
                public ___class: string
        ) { }
}
