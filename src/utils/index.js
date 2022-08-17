
export function getc3Data(data) {
   const atom = {}
   data.atom.forEach(it => {
      const { id, symbol, cartCoords, opacity } = it
      const { x, y, z } = AFRAME.utils.coordinates.parse(cartCoords)
      atom[id] = { symbol, x, y, z, opacity }
   });
   return { atom, bond: data.bond, center: data.center,rotation: data.rotation }
}

export function getRotation([x, y, z], [x1, y1, z1]) {
   const length = Math.pow(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2) + Math.pow((z1 - z), 2), 0.5)
   const roll = Math.asin((y1 - y) / length) * 180 / Math.PI + 90
   const length2 = Math.pow(Math.pow((x1 - x), 2) + Math.pow((z1 - z), 2), 0.5)
   let yaw = length2===0? 0: Math.asin((z - z1) / length2) * 180 / Math.PI
   if (x >= x1) {
      yaw = 180 - yaw
   }
   return `0 ${yaw} ${roll}`
}