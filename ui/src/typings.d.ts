// JQuery
interface JQuery {

    select2(opt?: any);

    tooltip();

    popover();

    modal(opt?: any);

    daterangepicker(opt?: any);

    alert(opt?: any);
}

// Webpack
declare function require(path: string);

declare const webpack: {
    ENV: string
};
