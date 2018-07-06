function fixPhpNetTitles() {
    const phpNetAnchors = document.querySelectorAll('a[href*="php.net/manual/"]');

    phpNetAnchors.forEach((node) => {
        let functionName = (/function\.(.+)\.php/).exec(node.href);
        if (functionName) {
            functionName = functionName[1].replace(/-/g, '_');
            node.textContent = `${functionName}() | ${node.textContent}`;
        }
    });
}

fixPhpNetTitles();
