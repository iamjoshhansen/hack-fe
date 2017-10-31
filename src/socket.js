import io from 'socket.io-client';

const socket = io('http://192.168.0.55:2031/');

export default socket;
