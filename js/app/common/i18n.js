define(['service/logger'], function (logger) {

    logger.debug('i18n module has initialized');

    return {
        select_db: "You need to select DB first",
        select_connection: "Select any connection first",
        delete_connection: "Are you sure to delete connection:"
    };
});
