"use client";
// components/GoogleTranslate.js
import { useEffect } from 'react';

export default function GoogleTranslate() {
    useEffect(() => {
        const addScript = () => {
            if (document.getElementById('google-translate-script')) return;

            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        //    includedLanguages: 'en,es',
                    },
                    'google_translate_element'
                );
            };
        };

        addScript();

        // Wait for the Google Translate widget to be rendered before accessing it
        const interval = setInterval(() => {
            const elements = document.querySelector('.goog-te-gadget');
            if (elements) {
                console.log(elements.children);
                clearInterval(interval);
            }
        }, 500);


    }, []);

    return <div id="google_translate_element"></div>;
}
