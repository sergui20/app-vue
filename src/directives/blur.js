const blur = {}

/*
    function setBlur(el. binding, newNode, oldNode)
*/

function setBlur(el, binding) {
    el.style.filter = !binding.value ? 'blur(3px)' : 'none'
    el.style.cursor = !binding.value ? 'not-allowed' : 'inherit'
    el.querySelectorAll('button').forEach(btn => {
        if(!binding.value) {
            btn.setAttribute('disabled', true)
        } else {
            btn.removeAttribute('disabled')
        }
    })
}

blur.install = function(Vue) {
    Vue.directive('blur', {
        bind(el, binding) { // Cuando la directiva se enlaza con el html
            setBlur(el, binding) // Simplemente estamos separando el codigo para no escribirlo ahi
        }
    })
}

export default blur;