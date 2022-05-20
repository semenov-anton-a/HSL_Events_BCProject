import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    constructor() { }

    translate(value: string, langPrefix: string) {

        if (this.tr.hasOwnProperty(langPrefix)) {
            return (this.tr[langPrefix][value]) ?? value;
        }

        return value;
    }





    private tr: any = {


        // This Array[0] is a etalon for each
        'fi': {
            // CategoryListComponent
            "Home"              : "Koti",
            "Show favorites"    : "Näytä suosikkeja",
            "Activities"        : "Toiminto",
            "Events"            : "Tapahtumat",
            "Places"            : "Paikat",

            // Cards
            "Remove": "Poista",
            "Details": "Avata",
            "Favorite": "Suosikkiin",

            //Cards Details
            "Link": "Tapahtuman Linkki",
            "Starts": "Alkain",

            //Cards Details of category as http:/<damain>/<activity>/.*             
            "Opening hours": "Aukioloajat",
            "Available months": "Saatavilla kuukausia",
            "Contact info": "Yhteystiedot",

            // Button load more cards
            "Scroll top" : "Ylös",
            "ADD" : "Lisää",
            "Empty" : "qweqwe",
            
            // Button >  Tags
            "Reset" : "Nollaa",

            //Contact FORM
            "First name" : "Etunimi",
            "Last name"  : "Sukunimi",
            "Email"        :"S-posti",
            "Company"  :  "Yritys",
            "Message"   : "Viesti",
            "SEND"  : "Lähettä",



            "Welcome to Atmospheric Helsinki" : "Tervetuloa Atmospheric Helsinkiin",
            "With this application you can get acquainted with various events, activities and places close to you in the Helsinki metropolitan area!" : "Tällä sovelluksella pääset tutustumaan erilaisiin tapahtumiin, aktiviteetteihin ja paikkoihin lähelläsi pääkaupunkiseudulla!t",

        },
        'sv': {
            // CategoryListComponent
            "Home"              : "Hem",
            "Show favorites"    : "Visa favoriter",
            "Activities"        : "Aktiviteter",
            "Events"            : "Evenemang",
            "Places"            : "Ställen",

            // Cards
            "Remove"            : "Ta bort",
            "Details"           : "Detaljer",
            "Favorite"          : "Favorit",

            //Cards Details
            "Link": "Evenemangslänk",
            "Starts": "Startar",

            //Cards Details of category as http:/<damain>/<activity>/.*             
            "Opening hours"     : "Öppettider",
            "Available months"  : "Tillgängliga månader",
            "Contact info"      : "Kontaktinformation",

            // Button load more cards
            "Scroll top" : "Bläddra överst",
            "ADD" : "LÄGG TILL",
            
            // Button >  Tags
            "Reset" : "Återställa",

            //Contact FORM
            "First name" : "Förnamn",
            "Last name"  : "Efternamn",
            "Email"      : "E-post",
            "Company"    : "Företag",
            "Message"    : "Meddelande",
            "SEND"       : "SKICKA",
        },
        'ru': {
            // CategoryListComponent
            "Home"              : "Главная",
            "Show favorites"    : "Избранное",
            "Activities"        : "Мероприятия",
            "Events"            : "События",
            "Places"            : "Места",

            // Cards
            "Remove"            : "Удалять",
            "Details"           : "Читать",
            "Favorite"          : "В Избранное",

            //Cards Details
            "Link": "Cсылка",
            "Starts": "Начиная",

            //Cards Details of category as http:/<damain>/<activity>/.*             
            "Opening hours"     : "Часы работы",
            "Available months"  : "Доступные месяцы",
            "Contact info"      : "Контакы",

            "Scroll top" : "Вверх",
            "ADD" : "Ещё",
            "Empty" : "Пусто",
            
            // Button >  Tags
            "Reset" : "Сброс",

            //Contact FORM
            "First name" : "Имя",
            "Last name"  : "Фамилия",
            "Email"      : "Эл. адрес",
            "Company"    : "Компания",
            "Message"    : "Сообщение",
            "SEND"       : "ОТПРАВИТЬ",
            
        },
        'de': {
            // CategoryListComponent
            "Home"              : "Heim",
            "Show favorites"    : "Favoriten anzeigen",
            "Activities"        : "Aktivitäten",
            "Events"            : "Veranstaltungen",
            "Places"            : "Setzt",

            // Cards
            "Remove"            : "Entfernen",
            "Details"           : "Einzelheiten",
            "Favorite"          : "Favorit",

            //Cards Details
            "Link"              : "Verknüpfung",
            "Starts"            : "Beginnt",

            //Cards Details of category as http:/<damain>/<activity>/.*             
            "Opening hours"     : "Öffnungszeiten",
            "Available months"  : "Verfügbare Monate",
            "Contact info"      : "Kontaktinformation",


            "Scroll top" : "Nach oben scrollen",
            "ADD" : "Hinzufügen",
            "Empty" : "Leer",
            
            // Button >  Tags
            "Reset" : "Zurücksetzen",

            //Contact FORM
            "First name" : "Vorname",
            "Last name"  : "Nachname",
            "Email"      : "Email",
            "Company"    : "Unternehmen",
            "Message"    : "Nachricht",
            "SEND"       : "SCHICKEN",
        },
    }
}
