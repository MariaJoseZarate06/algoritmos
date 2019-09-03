let points = [
    {x: 200, y: 300},
    {x: 100, y: 400},
    {x: 50, y: 120}
]
    


function setup() {
    createCanvas(500, 500)



}

function draw() {
    background('blue')
    fill('yellow')
   circle(mouseX, mouseY, 30)

    for (let i = 0; i < points.length; i++){
        let p = points[i]
        fill('red')
        circle(p.x, p.y, 30)
        line(p.x, p.y, 
            mouseX, mouseY)
    }
}