/** a JS file that shall be included */

function translate(messageKey, dictionarySpec, market = 'hq', replaceVariables = null) {
    const _i18n = window.parent.Granite.I18n,
        translationRoot = '/content/apps/',
        defaultUrlPrefix = '/libs/cq/i18n/dict.',
        scopeUrlPrefix = `${translationRoot}${dictionarySpec}/${market}/`,
        locale = _i18n.getLocale();

    _i18n.init({
        locale,
        urlPrefix: scopeUrlPrefix,
    });

    let result = _i18n.get(messageKey, replaceVariables);

    _i18n.init({
        locale,
        urlPrefix: defaultUrlPrefix,
    });

    return result;
}
console.log("Test1", translate('loginChecks.ll.global.message.market.redirect', 'spa-translations/loginChecks', 'hq', null),)
console.log("Test2", translate('forms.vehicle.selector.open.vcas.overlay', 'component-translations/vehicle-form', 'hq', null),)

