import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector"
import { LOCALS } from "./constants.js";

const resources = {
    [LOCALS.EN]: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next",
            "Lawyer Ranking": "Lawyer Ranking",
            "Service": "Service",
            "Documents": "Documents",
            "Next Hearing": "Next Hearing",
            "Case Details": "Case Details",
            "Case Number": "Case Number",
            "Land Dispute Settlement" : "Land Dispute Settlement",
            "Case Description": " In this Indian land dispute case, Vikram Singh, the plaintiff, and the defendant are entangled in a legal battle over a piece of land situated in a rural area near Jaipur, Rajasthan. The dispute revolves around conflicting claims regarding the ownership and boundaries of the land, adding complexity to the case Vikram Singh asserts his rightful ownership based on ancestral documents and traditional land records, while the defendant challenges these claims, presenting alternative historical evidence. The court aims to navigate through the intricacies of Indian land laws and cultural nuances to arrive at a fair and just resolution that respects the legal rights of both parties involved",
            "Case Hearings": "Case Hearings",
            "Next Meeting Scheduled" : "Next Meeting Scheduled",
            "Recent Notices": "Recent Notices",
            button: {
                counts: "Count is {{click}}"
            }
        }
    },
    [LOCALS.HI]: {
        translation: {
            "Welcome to React": "React और react-i18next में आपका स्वागत है!",
            "Lawyer Ranking": "वकील रैंकिंग",
            "Service": "सेवा",
            "Documents": "दस्तावेज़",
            "Next Hearing": "अगली सुनवाई ",
            "Case Details": "मामले से संबंधित सभी जानकारी",
            "Case Number": "प्रकरण संख्या",
            "Land Dispute Settlement" : "जमीन विवाद निपटान",
            "Case Description":"इस भारतीय भूमि विवाद मामले में, वादी विक्रम सिंह और प्रतिवादी जयपुर, राजस्थान के पास एक ग्रामीण क्षेत्र में स्थित जमीन के टुकड़े पर एक कानूनी लड़ाई में उलझ गए हैं। विवाद भूमि के स्वामित्व और सीमाओं के बारे में परस्पर विरोधी दावों के इर्द-गिर्द घूमता है, जो मामले की जटिलता को बढ़ाता है।विक्रम सिंह अपने पूर्वजों के दस्तावेजों और पारंपरिक भूमि रिकॉर्ड के आधार पर अपने सही स्वामित्व का दावा करते हैं, जबकि प्रतिवादी इन दावों को चुनौती देते हैं और वैकल्पिक ऐतिहासिक साक्ष्य प्रस्तुत करते हैं। अदालत का उद्देश्य भारतीय भूमि कानूनों और सांस्कृतिक बारीकियों की पेचीदगियों के माध्यम से नेविगेट करना है और दोनों पक्षों के कानूनी अधिकारों का सम्मान करते हुए एक निष्पक्ष और न्यायपूर्ण समाधान तक पहुंचना है।",
            "Case Hearings": "मामले की सुनवाई",
            "Next Meeting Scheduled" : "अगली बैठक",
            "Recent Notices": "हालिया नोटिस",
            button: {
                counts: "गिनती {{click}} है।"
            }
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources,
        fallbackLng: 'uk',
        //lng: "uk", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;