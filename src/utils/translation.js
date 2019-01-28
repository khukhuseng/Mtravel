let en: any = null;
let zh_cn: any = null;
let zh_tw: any = null;
let jp: any = null;
let kr: any = null;
let th: any = null;

export const translate = (lang: string, key: string) => {
    switch (lang) {
        case "EN":
            if (en === null) {
                en = require("../i18n/en").default;
            }
            return en[key];
        case "ZH-CN":
            if (zh_cn === null) {
                zh_cn = require("../i18n/zh_cn").default;
            }
            return zh_cn[key];
        case "ZH-TW":
            if (zh_tw === null) {
                zh_tw = require("../i18n/zh_tw").default;
            }
            return zh_tw[key];
        case "JP":
            if (jp === null) {
                jp = require("../i18n/jp").default;
            }
            return jp[key];
        case "KR":
            if (kr === null) {
                kr = require("../i18n/kr").default;
            }
            return kr[key];
        case "TH":
            if (th === null) {
                th = require("../i18n/th").default;
            }
            return th[key];
    }
};