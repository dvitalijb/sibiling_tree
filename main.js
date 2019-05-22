const tree = document.getElementById('tree');

function hideElementSibling(event) {
    const {target: tagName} = event;

    if (tagName.nodeName === 'SPAN' && tagName.nextElementSibling !== null) {
        tagName.nextElementSibling.classList.toggle('hide');
    }
};

tree.addEventListener('click', hideElementSibling);
