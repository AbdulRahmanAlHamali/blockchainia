
import {Injectable} from "@angular/core";
import {Client, Room} from "colyseus.js";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class ColyseusWrapperService {
    private _host: string = 'localhost';
    private _port: string = '2657';
    private _colyseusClient: Client;
    private _room: Room;

    private static readonly BLOCKCHAINIA_ROOM = 'blockchainia';

    constructor() {

    }

    private _initClient() {
        if (!this._colyseusClient) {
            this._colyseusClient = new Client('ws://' + this._host + ':' + this._port);
        }
    }

    joinRoom() {
        let joinSubject: ReplaySubject<any> = new ReplaySubject();

        this._initClient();
        this._room = this._colyseusClient.join(ColyseusWrapperService.BLOCKCHAINIA_ROOM);

        this._room.onJoin.addOnce(() => {
            joinSubject.next(true);
            joinSubject.complete();
        });

        return joinSubject.asObservable();
    }

    getMessageReceivedObservable(path: string) {
        let messageSubject: Subject<any> = new Subject();

        this._room.listen(path, (data) => {
            messageSubject.next(data.value);
        });

        return messageSubject.asObservable();
    }

    isThereRoom() {
        return this._room !== undefined;
    }
}