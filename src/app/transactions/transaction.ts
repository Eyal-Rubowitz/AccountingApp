import {Participant} from '../participant/participant';

export class Transaction{
    constructor(public itemName?: string,
                public paymentDescription?: string,
                public amount?: number,
                public whosPaying?: Participant,
                public whosReciving?: Participant,
                public date?: Date,
                public ExecuteStatus?: boolean,
                public billPicture?: string
                ){}
}