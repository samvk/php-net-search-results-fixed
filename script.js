function fixPhpNetTitles() {
    const phpNetAnchors = document.querySelectorAll('[href*="php.net/manual/"]');

    phpNetAnchors.forEach((node) => {
        let functionName = (/function\.(.+)\.php/).exec(node.href);
        if (functionName) {
            functionName = functionName[1].replace(/-/g, '_');
            node.insertAdjacentHTML('afterbegin', `<span>${functionName}() | </span>`);
        }
    });
}

fixPhpNetTitles();
