'use strict'
$(document).ready(function () {
  var e = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown']

  $('.dream-tags > .ui.label').each(function () {
    var o, t
    $(this).addClass(
      e[((o = 0), (t = e.length), (o = Math.ceil(o)), (t = Math.floor(t)), Math.floor(Math.random() * (t - o) + o))]
    )
  }),
    window.maxTags &&
      ($('.ui.accordion').accordion({ selector: { trigger: '.title .dropdown' } }),
      $('.tags-with-dropdown .dropdown').click(function () {
        $(this).children(':first').toggleClass('rotated')
      }))
})
