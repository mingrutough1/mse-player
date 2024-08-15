interface Player{
    src: string,
    element: HTMLVideoElement
}

const player:Player = {
    src: 'https://fd',
    element: document.getElementById('test') as HTMLVideoElement
}

console.log('sdk-init');