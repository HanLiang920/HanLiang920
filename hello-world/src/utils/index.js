
export function getc3Data(data) {
   const atom = {}
   let minY = 0
   data.atom.forEach(it => {
      const { id, symbol, cartCoords } = it
      const [x, y, z] = cartCoords.split(" ").map(it => Number(it))
      if (symbol) {
         const min = y - window.atomInfos[symbol].radius
         if (min < minY) minY = min
      }
      atom[id] = { symbol, x, y, z }
   });
   Object.values(atom).forEach(it => {
      it.y = it.y - minY
   })
   return { atom, bond: data.bond }
}

export function getRotation([x, y, z], [x1, y1, z1]) {
   const length = Math.pow(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2) + Math.pow((z1 - z), 2), 0.5)
   const roll = Math.asin((y1 - y) / length) * 180 / Math.PI + 90
   const length2 = Math.pow(Math.pow((x1 - x), 2) + Math.pow((z1 - z), 2), 0.5)
   let yaw = Math.asin((z - z1) / length2) * 180 / Math.PI
   if (x >= x1) {
      yaw = 180 - yaw
   }
   return `0 ${yaw} ${roll}`
}