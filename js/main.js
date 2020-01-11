// CATCH SECENE IN ELEMENT

// in a year = 27
// in a lifetime (80) = 2.160
//€ 39 per jaar per persoon
var sceneEl = document.querySelector('a-marker');
var textEl  = document.querySelector('#msg');
var count = getQueryVariable("size")* 27;

textEl.setAttribute('value', "Gemiddeld gebruiken jullie \n" + count + " rollen wc-papier per jaar!" );

for (x = 0; x < Math.sqrt(count);x++){
    for (z = 0; z < Math.sqrt(count);z++){
    var entityEl = document.createElement('a-gltf-model');
    entityEl.setAttribute('src', '/objects/rol.gltf');
    
    entityEl.object3D.position.set((-Math.sqrt(count)/2+x)/2.5,0, (-Math.sqrt(count)/2+z)/2.5);
        
    sceneEl.appendChild(entityEl);
    }
    
}


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

