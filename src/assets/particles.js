const particles = {
  // canvas: {
  //   el: canvas_el,
  //   w: canvas_el.offsetWidth,
  //   h: canvas_el.offsetHeight
  // },
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#ff0000'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: '',
        width: 1,
        height: 1
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: '#fff',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.15,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000
      }
    },
    array: []
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab:{
        distance: 100,
        line_linked:{
          opacity: 1
        }
      },
      bubble:{
        distance: 200,
        size: 80,
        duration: 0.4
      },
      repulse:{
        distance: 200,
        duration: 0.4
      },
      push:{
        particles_nb: 4
      },
      remove:{
        particles_nb: 2
      }
    },
    mouse:{}
  },
  retina_detect: false,
  fn: {
    interact: {},
    modes: {},
    vendors:{}
  },
  tmp: {}
};

export default particles;