AFRAME.registerComponent('markerhandler', {

    init: function() {
        const imageMarker = document.querySelector("#boone-marker");
        const aEntity = document.querySelector("boone-pic");

        // every click, we make our model grow in size :)
        imageMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const scale = aEntity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                aEntity.setAttribute('scale', scale);
            }
        });
}});
