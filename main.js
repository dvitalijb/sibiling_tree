const tree = document.getElementById('tree');

function hideElementChildren(event) {
    const htmlTeg = event.target;
    if (htmlTeg.nodeName === 'SPAN' && htmlTeg.nextElementSibling !== null) {
        htmlTeg.nextElementSibling.classList.toggle('hide');
    }
};

function textBold(event) {
    const htmlTeg = event.target;
    if (htmlTeg.nodeName === 'SPAN') {
        htmlTeg.classList.add('bold');
    }

}

function textNorm(event) {
    const htmlTeg = event.target;
    if (htmlTeg.nodeName === 'SPAN') {
        htmlTeg.classList.remove('bold');
    }
}

tree.addEventListener('click', hideElementChildren);
tree.addEventListener('mouseover', textBold);
tree.addEventListener('mouseout', textNorm);
