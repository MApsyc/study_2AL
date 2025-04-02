define(['pipAPI' ,'./parent_biat.js'], function(APIConstructor, iatExtension) {var API = new APIConstructor(); return iatExtension({
    "categories": [
        {
            "name": "Fiori",
            "title": {
                "media": {
                    "word": "Fiori"
                },
                "css": {
                    "color": "#31b404",
                    "font-size": "1.8em"
                },
                "height": 4,
                "startStimulus": {
                    "media": {
                        "word": "Orchidea, Margherita, Rosa, Tulipano"
                    },
                    "css": {
                        "color": "#31b404",
                        "font-size": "1em"
                    },
                    "height": 2
                }
            },
            "stimulusMedia": [
                {
                    "word": "Orchidea"
                },
                {
                    "word": "Margherita"
                },
                {
                    "word": "Rosa"
                },
                {
                    "word": "Tulipano"
                }
            ],
            "stimulusCss": {
                "color": "#31b404",
                "font-size": "2em"
            }
        },
        {
            "name": "Insetti",
            "title": {
                "media": {
                    "word": "Insetti"
                },
                "css": {
                    "color": "#31b404",
                    "font-size": "1.8em"
                },
                "height": 4,
                "startStimulus": {
                    "media": {
                        "word": "Pulce, Millepiedi, Moscerino, Vespa"
                    },
                    "css": {
                        "color": "#31b404",
                        "font-size": "1em"
                    },
                    "height": 2
                }
            },
            "stimulusMedia": [
                {
                    "word": "Pulce"
                },
                {
                    "word": "Millepiedi"
                },
                {
                    "word": "Moscerino"
                },
                {
                    "word": "Vespa"
                }
            ],
            "stimulusCss": {
                "color": "#31b404",
                "font-size": "2em"
            }
        }
    ],
    "attribute1": {
        "name": "Buono",
        "title": {
            "media": {
                "word": "Buono"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Amore, Piacevole, Fantastico, Meraviglioso"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "1em"
                },
                "height": 2
            }
        },
        "stimulusMedia": [
            {
                "word": "Amore"
            },
            {
                "word": "Piacevole"
            },
            {
                "word": "Fantastico"
            },
            {
                "word": "Meraviglioso"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "attribute2": {
        "name": "Cattivo",
        "title": {
            "media": {
                "word": "Cattivo"
            },
            "css": {
                "color": "#0000FF",
                "font-size": "1.8em"
            },
            "height": 4,
            "startStimulus": {
                "media": {
                    "word": "Odio, Spiacevole, Terribile, Orribile"
                },
                "css": {
                    "color": "#0000FF",
                    "font-size": "1em"
                },
                "height": 2
            }
        },
        "stimulusMedia": [
            {
                "word": "Odio"
            },
            {
                "word": "Spiacevole"
            },
            {
                "word": "Terribile"
            },
            {
                "word": "Orribile"
            }
        ],
        "stimulusCss": {
            "color": "#0000FF",
            "font-size": "2em"
        }
    },
    "isTouch": false,
    "practiceBlock": false,
    "showStimuliWithInst": true,
    "remindError": true,
    "base_url": {
        "image": "https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/docs/images/"
    },
    "nMiniBlocks": 1,
    "nTrialsPerMiniBlock": 16,
    "nPracticeBlockTrials": 0,
    "nCategoryAttributeBlocks": 1,
    "focalAttribute": "attribute1",
    "firstFocalAttribute": "random",
    "focalCategoryOrder": "random",
    "leftKeyText": "\"E\" per tutto il resto",
    "rightKeyText": "\"I\" se la parola appartiene",
    "remindErrorText": "<p style=\"font-size:1em; text-align:center;\">Se commetti un errore, una <span style=\"color:#ff0000;\"><b>X</b></span> rossa apparirà. Premi l'altro tasto per continuare.</p>",
    "finalText": "Premi la barra spaziatrice per continuare.",
    "instTemplate": "<div><p style=\"font-size:20px; text-align:center;\"><br/><span style=\"color:#000000;\"><u>Parte blockNum di nBlocks</u><br/><br/></span></p><p style=\"font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px;\">Premi con l'indice destro il tasto <b>I</b> per le parole che appartengono alla categoria <span style=\"color:#0000FF; font-family:Arial, sans-serif !important;\">focalAtt</span>, e per le parole che appartengono alla categoria <span style=\"color:#31b404;\">focalCat</span>.<br/>Premi con l'indice sinistro il tasto <b>E</b> per le parole che non appartengono a queste categorie.<br/><br/>Se commetti un errore, una <span style=\"color:#ff0000; font-family:Arial, sans-serif !important;\"><b>X</b></span> rossa apparirà. Premi l'altro tasto per continuare.<br/><br/><p style=\"text-align:center;\">Premi la <b>barra spaziatrice</b> quando sei pronta/o per iniziare.</p></div>"
});});
