import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connection', (socket: any) => {
  console.log(socket)
})

socket.on('connect', () => {
  console.log('connected')
})

socket.on('message-saved', (message: any) => {
  console.log(message)
})

socket.on('message-update', (message: any) => {
  console.log(message)
})

export default socket
