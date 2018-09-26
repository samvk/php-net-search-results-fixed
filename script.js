function fixPhpNetTitles() {
    const phpNetAnchors = document.querySelectorAll(':not(li) > [href*="php.net/manual/"]'); // ignore 'action-menu-item' dropdowns

    phpNetAnchors.forEach((node) => {
        let functionName = (/function\.(.+)\.php/).exec(node.href);
        if (functionName) {
            functionName = functionName[1].replace(/-/g, '_');
            node.insertAdjacentHTML('afterbegin', `<span>${functionName}() | </span>`);
        }
    });
}

fixPhpNetTitles();
