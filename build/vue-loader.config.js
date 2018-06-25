module.exports = (isDev) => {
    return {
        preserveWhiteSpace: true,
        extractCSS: !isDev,
        cssModules: {}
    }
};