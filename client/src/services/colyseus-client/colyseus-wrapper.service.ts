import {Injectable} from "@angular/core";
import {Client, Room} from "colyseus.js";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ColyseusWrapperService {
    private _host: string = 'localhost';
    private _port: string = '2657';
    private _colyseusClient: Client;
    private _room: Room;

    private _dataReplaySubject: ReplaySubject<any>;

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
            // Prepare listeners
            this._dataReplaySubject = new ReplaySubject<any>();
            this._room.onData.add((data) => {
                this._dataReplaySubject.next(data);
            });


            this._room.send({ready: true});
            joinSubject.next(true);
            joinSubject.complete();
        });

        return joinSubject.asObservable();
    }

    getMessageReceivedObservable(path: string) {
        let messageSubject: ReplaySubject<any> = new ReplaySubject();

        this._room.listen(path, (data) => {
            messageSubject.next(data.value);
        });

        return messageSubject.asObservable();
    }

    isThereRoom() {
        return this._room !== undefined;
    }

    askQuestion(method: string, params: any) {
        // Generate a random id between 0 and 999
        let randomId = Math.floor(Math.random() * 999);

        let subject = new Subject<any>();

        let signalBinding = this._room.onData.add((data) => {
            if (data.id === randomId) {
                subject.next(data.result);
                subject.complete();
                signalBinding.remove();
            }
        });

        this._room.send({
            id: randomId,
            method: method,
            params: params
        });

        return subject.asObservable();
    }

    getState() {
        return this._room.data;
    }

    getDataObservable() {
        return this._dataReplaySubject.asObservable();
    }

    send(data) {
        this._room.send(data);
    }
}