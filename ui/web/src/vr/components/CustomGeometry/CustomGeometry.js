import * as AFRAME from 'aframe'
const THREE = window.THREE

AFRAME.registerGeometry('custom', {
  schema: {
    vertices: {
      default: ['-1 1 0', '-1 -1 0', '1 -1 0'],
    }
  },

  init: function (data) {
    var geometry = new THREE.Geometry();
    geometry.vertices = data.vertices.map(function (vertex) {
        var points = vertex.split(' ').map(function(x){return parseInt(x);});
        return new THREE.Vector3(points[0], points[1], points[2]);
    });
    geometry.computeBoundingBox();
    for(let i = 0; i < geometry.vertices.length; i += 3) {
      geometry.faces.push(new THREE.Face3(i, i+1, i+2));
    }
    geometry.mergeVertices();
    geometry.computeFaceNormals();
    geometry.computeVertexNormals();
    this.geometry = geometry;
  }
});