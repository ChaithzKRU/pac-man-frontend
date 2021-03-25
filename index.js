const squares = Array.from(document.querySelectorAll('.grid div'))

const layout = [
    1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,
    1,2,3,3,3,3,9,9,9,9,9,9,3,3,3,3,2,1,
    1,3,9,9,9,3,9,3,3,3,3,9,3,9,9,9,3,1,
    1,3,9,5,9,3,3,3,10,10,3,3,3,9,5,9,3,1,
    1,3,9,9,9,3,10,3,3,3,3,10,3,9,9,9,3,1,
    1,3,3,3,3,3,10,10,10,10,10,10,3,3,3,3,3,1,
    1,1,1,3,10,6,5,4,3,3,3,3,3,10,3,1,1,1,
    1,1,3,3,10,5,10,10,5,5,10,10,3,10,3,3,1,1,
    3,3,3,10,10,8,10,5,5,5,5,10,3,10,10,3,3,3,
    3,3,3,10,10,5,10,5,5,5,7,10,3,10,10,3,3,3,
    1,1,3,3,10,5,10,10,10,10,10,10,3,10,3,3,1,1,
    1,1,1,3,10,5,5,5,3,3,3,3,3,10,3,1,1,1,
    1,3,3,3,3,3,9,5,10,10,3,9,5,5,5,5,5,1,
    1,3,9,9,9,3,9,5,10,10,3,9,5,9,9,9,5,1,
    1,3,9,5,9,3,9,5,5,5,5,9,5,9,5,9,5,1,
    1,3,9,9,9,3,9,3,9,9,5,9,5,9,9,9,5,1,
    1,2,3,3,3,3,9,3,9,9,5,9,5,5,5,5,5,1,
    1,1,1,3,3,3,3,3,3,3,5,5,5,5,5,1,1,1
]

for (let i = 0; i < squares.length; i ++) {
    if (layout[i] === 1 ) {
        squares[i].classList.add('wall') 
    } else if (layout[i] === 3 ) {
        squares[i].classList.add('dots')
    } else if (layout[i] === 2 ) {
        squares[i].classList.add('power-pellets')
    } else if (layout[i] === 4 ) {
        squares[i].classList.add('pac-man')
    } else if (layout[i] === 6 ) {
        squares[i].classList.add('red-ghost')
    } else if (layout[i] === 7 ) {
        squares[i].classList.add('blue-ghost')
    } else if (layout[i] === 8 ) {
        squares[i].classList.add('orange-ghost')
    } else if (layout[i] === 9 ) {
        squares[i].classList.add('wall')
    } else if (layout[i] === 10 ) {
        squares[i].classList.add('wall')
    }     
}