import io from 'socket.io-client';
import {
    WS_URL
} from "../constants/"

const socket = io(WS_URL);


export const connect = () => socket.connect();

export const event = (cb) => socket.on('event', cb);

export const onError = (cb) => socket.on('error', (err) => cb(err));

export const onData = (cb) => socket.on('data', (data) => cb(data));

export const onPing = (cb) => socket.on('ping', (data) => cb(data));

export const emitPing = (cb) => socket.emit('ping', {});

export const onSub = (cb) => socket.on('sub', (data) => cb(data));

export const emitSub = () => socket.emit('sub', {
    state: !0
})

export const emitUnSub = () => socket.emit('unsub', {
    state: !1
})

