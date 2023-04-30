function cone(radius, heigth) {
    let volume = 0;
    let surface = 0;
    volume = (1 / 3) * Math.PI * radius*radius*heigth;
    console.log(`volume = ${volume.toFixed(4)}`);
    slantHeight = Math.sqrt(radius*radius + heigth*heigth)
    surface = Math.PI*radius*(radius + slantHeight);
    console.log(`area = ${surface.toFixed(4)}`);
}
cone (3, 5)