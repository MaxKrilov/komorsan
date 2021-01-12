import L from 'leaflet';

L.VertexPolyline = L.Polyline.extend({

  options: {
    clickable: false,
    opacity: 0
  },

  __onAdd: L.Polyline.prototype.onAdd,

  onAdd: function (map) {
    this.__onAdd.call(this, map)
    map.on('moveend', this.addVertices.bind(this));
  },

  __onRemove: L.Polyline.prototype.onRemove,

  onRemove: function (map) {
    this.__onRemove.call(this, map)
    map.off('moveend', this.addVertices)
  },

  addVertices: function () {

    if (this._vertices) this._path.parentElement.removeChild(this._vertices)

    setTimeout(function () {

      // SVG namespace needed when creating elements
      let namespace = 'http://www.w3.org/2000/svg'

      // Create SVG group to contain vertices
      this._vertices = document.createElementNS(namespace, 'g')

      // Append group to container
      this._path.parentElement.appendChild(this._vertices)

      // Get segments of path element
      let list = this._parts[0];

     /*  console.log('-list--error');
         console.log( list);
     */
      // Iterate segments
      if (list) for (let i = 0; i < list.length; i++) {

        // Create SVG rectangle element
        let circleSmall = document.createElementNS(namespace, 'rect')

        /*
          -----------    Base point display at nodes and vertices   -----------
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" fill="#E32828" stroke="white"/>
          </svg>
         ----------- END -- Base point display at nodes and vertices -----------
         */

        // Set rectangle size attributes
        circleSmall.setAttributeNS(null, 'height', this.options.weight)
        circleSmall.setAttributeNS(null, 'width', this.options.weight)

        // Set position attributes, compensate for size
        circleSmall.setAttributeNS(null, 'x', list[i].x - this.options.weight / 2)
        circleSmall.setAttributeNS(null, 'y', list[i].y - this.options.weight / 2)
        circleSmall.setAttributeNS(null, 'rx',  this.options.rx)
        circleSmall.setAttributeNS(null, 'stroke-width',  this.options.stroke)
        // Set rectangle color
        circleSmall.setAttributeNS(null, 'fill', this.options.color)
        circleSmall.setAttributeNS(null, 'stroke', this.options.colorSmall)


        // Append rectangle to group element
        this._vertices.appendChild(circleSmall)

      }
    }.bind(this), 0)
  }
})


export function vertexPolyline(latlngs, options) {
  return new L.VertexPolyline(latlngs, options);
}
