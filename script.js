function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

var value = getURLParameter('value');
var imageElement = document.getElementById('dynamic-image');
var imageSources = {
    'value1': 'mighty-knight-15904f55f.swf',
    'value2': 'the-worlds-hardest-g-1043817f.swf',
    'value3': 'the-worlds-hardest-g-1982817f.swf',
    'value5': 'doodle-god-2-11411ec92.swf',
    'value6': 'bloxors.swf',
    'value8': 'bloons_tower_defense_1.swf',
    'value9': 'ducklife1.swf',
    'value10': 'ducklife2.swf',
    'value11': 'ducklife3.swf',
    'value12': 'ducklife4.swf',
    'vaule13': 'ducklife5.swf',
    'value14': 'impossiblequiz1.swf',
};

if(imageSources.hasOwnProperty(value)) {
    imageElement.src = imageSources[value];

} else {
    console.error('Invalid value: ' + value);
}