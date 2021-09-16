
AFRAME.registerComponent('move', {
    schema: {
      moveY: {type: 'number', default: 0.1}
    },
    tick: function () {
        this.data.moveY += 0.1
        var pos = this.el.getAttribute('position')
        pos.y = this.data.moveY
        
        this.el.setAttribute('position', {x : pos.x, y : pos.y, z : pos.z})
      }
  });

AFRAME.registerComponent('fall', {
  schema: {
    moveY: {type: 'number', default: 0}
  },
  tick: function () {
    window.addEventListener('click', e => {
      this.data.moveY = 0.12
    })
      
      var pos = this.el.getAttribute('position')
      pos.y -= this.data.moveY
      
      this.el.setAttribute('position', {x : pos.x, y : pos.y, z : pos.z})
    }
});

AFRAME.registerComponent('zoom', {
  schema: {
    moveZ: {type: 'number', default: 50}
  },
  tick: function () {
    
      this.data.moveZ += 0.1
    
      
      var pos = this.el.getAttribute('position')
      pos.z = this.data.moveZ
      
      this.el.setAttribute('position', {x : pos.x, y : pos.y, z : pos.z})
    }
});

