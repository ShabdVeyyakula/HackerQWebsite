

var el = document.querySelector('.odometer-theme-default');

od = new Odometer({
  el: el,
  value: 333555,

  // Any option (other than auto and selector) can be passed in here
  format: '',
  theme: 'digital'
});

od.update(555)
// or
el.innerHTML = 555