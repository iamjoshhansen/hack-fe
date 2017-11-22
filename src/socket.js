import io from 'socket.io-client';

const ip = '192.168.0.55';
const port = 2031;
const socket = io(`http://${ip}:${port}`);

// fetch('http://iamjoshhansen.com/pi-ip/')
//   .then(response => response.json())
//   .then((json) => {
//     socket.io.opts.hostname = `http://${json.ip}:${json.port}`;
//  });

export default socket;
