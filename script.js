function fixPhpNetTitles() {
    const phpNetAnchors = document.querySelectorAll(':not(li) > [href*="php.net/manual/"]'); // ignore 'action-menu-item' dropdowns

    phpNetAnchors.forEach((node) => {
        let functionName = (/function\.(.+)\.php/).exec(node.href);
        if (functionName) {
            functionName = functionName[1].replace(/-/g, '_');

            titleNode = node.querySelector('h3') || node; // some browsers wrap <a> around the <h3> (instead of the reverse)
            titleNode.insertAdjacentHTML('afterbegin', `<span>${functionName}() | </span>`);
        }
    });
}

fixPhpNetTitles();
