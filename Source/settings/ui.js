/// <reference path="../FullScreenMario.ts" />
var FullScreenMario;
(function (FullScreenMario) {
    "use strict";
    FullScreenMario.FullScreenMario.settings.ui = {
        "globalName": "FSM",
        "styleSheet": {
            ".FullScreenMario": {
                "color": "white"
            },
            "@font-face": {
                "font-family": "'Press Start'",
                "src": [
                    "url('Fonts/pressstart2p-webfont.eot')",
                    "url('Fonts/pressstart2p-webfont.eot?#iefix') format('embedded-opentype')",
                    "url('Fonts/pressstart2p-webfont.woff') format('woff')",
                    "url('Fonts/pressstart2p-webfont.ttf') format('truetype')",
                    "url('Fonts/pressstart2p-webfont.svg') format('svg')"
                ].join(", "),
                "font-weight": "normal",
                "font-style": "normal"
            }
        },
        "helpSettings": {
            "globalNameAlias": "{GAME}",
            "openings": [
                ["%cHi, thanks for playing FullScreenMario!%c :)", "head"],
                ["If you'd like to know the common cheats, enter %c{GAME}.UserWrapper.displayHelpOptions();%c here.", "code"],
                "http://www.github.com/FullScreenShenanigans/FullScreenMario"
            ],
            "options": {
                "Map": [
                    {
                        "title": "{GAME}.setMap",
                        "description": "Go to a specified map and location.",
                        "usage": "{GAME}.setMap(<map>[, <location>]);",
                        "examples": [
                            {
                                "code": "{GAME}.setMap(\"1-1\");",
                                "comment": "Starts map 1-1."
                            }, {
                                "code": "{GAME}.setMap(\"1-2\", 1);",
                                "comment": "Starts map 1-2, at the second location."
                            }, {
                                "code": "{GAME}.setMap(\"Random\");",
                                "comment": "Starts the random map."
                            }, {
                                "code": "{GAME}.setMap(\"Random\", \"Underworld\");",
                                "comment": "Starts the random map in the Underworld."
                            }]
                    }],
                "Things": [
                    {
                        "title": "{GAME}.addThing",
                        "description": "Adds a new Thing to the game.",
                        "usage": "{GAME}.addThing(<thing>, left, top);",
                        "examples": [
                            {
                                "code": "{GAME}.addThing(\"Goomba\", 256, 384);",
                                "comment": "Adds a Goomba to the game."
                            }, {
                                "code": "{GAME}.addThing(\"Mushroom\", {GAME}.player.right + 80, {GAME}.player.top);",
                                "comment": "Adds a Mushroom to the right of the player."
                            }, {
                                "code": "{GAME}.addThing([\"Koopa\", { \"smart\": true }], 256, 368);",
                                "comment": "Adds a smart Koopa to the game."
                            }, {
                                "code": "{GAME}.addThing({GAME}.ObjectMaker.make(\"Koopa\", { \"smart\": true, \"jumping\": true }), 256, 368);",
                                "comment": "Adds a smart jumping Koopa to the game."
                            }]
                    }, {
                        "title": "{GAME}.GroupHolder.getGroups",
                        "description": "Gets the groups of in-game Things.",
                        "usage": "{GAME}.GroupHolder.getGroups();"
                    }, {
                        "title": "{GAME}.GroupHolder.get*******Group",
                        "description": "Retrieves the group of in-game Things under that name.",
                        "usage": "{GAME}.GroupHolder.get*******Group();",
                        "examples": [
                            {
                                "code": "{GAME}.GroupHolder.getCharacterGroup();",
                                "comment": "Retrieves the currently playing Characters."
                            }]
                    }, {
                        "title": "{GAME}.GroupHolder.get*******",
                        "description": "Retrieves the numbered Thing from its group.",
                        "usage": "{GAME}.GroupHolder.get*******(<index>);",
                        "examples": [
                            {
                                "code": "{GAME}.GroupHolder.getCharacter(0);",
                                "comment": "Retrieves the first playing Character."
                            }]
                    }],
                "Physics": [
                    {
                        "title": "{GAME}.shiftBoth",
                        "description": "Shifts a Thing horizontally and/or vertically.",
                        "usage": "{GAME}.shiftBoth(<thing>, <dx>[, <dy>]);",
                        "examples": [
                            {
                                "code": "{GAME}.shiftBoth({GAME}.player, 700);",
                                "comment": "Shifts the player 700 spaces to the right"
                            }, {
                                "code": "{GAME}.player.resting = undefined;\r\n{GAME}.shiftBoth({GAME}.player, 0, -{GAME}.player.top);",
                                "comment": "Shifts the player to the top of the screen."
                            }]
                    }, {
                        "title": "{GAME}.killNormal",
                        "description": "Kills a specified Character with animation.",
                        "usage": "{GAME}.killNormal(<thing>);",
                        "examples": [
                            {
                                "code": "{GAME}.killNormal({GAME}.GroupHolder.getCharacter(0));",
                                "comment": "Kills the first playing Character."
                            }, {
                                "code": "{GAME}.GroupHolder.getSceneryGroup().forEach({GAME}.killNormal.bind(FSM));",
                                "comment": "Kills all playing Scenery."
                            }]
                    }, {
                        "title": "{GAME}.player.gravity",
                        "description": "Sets the current Player's gravity.",
                        "usage": "{GAME}.player.gravity = <number>;",
                        "examples": [
                            {
                                "code": "{GAME}.player.gravity = {GAME}.MapScreener.gravity / 2;",
                                "comment": "Sets the player's gravity to half the default."
                            }]
                    }],
                "Powerups": [
                    {
                        "title": "{GAME}.playerShroom",
                        "description": "Simulates the player hitting a Mushroom.",
                        "usage": "{GAME}.playerShroom({GAME}.player);"
                    }, {
                        "title": "{GAME}.playerStarUp",
                        "description": "Simulates the player hitting a Star.",
                        "usage": "{GAME}.playerStarUp({GAME}.player);"
                    }],
                "Statistics": [
                    {
                        "title": "{GAME}.ItemsHolder.getKeys",
                        "description": "Gets the keys you can manipulate.",
                        "usage": "{GAME}.ItemsHolder.getKeys();"
                    }, {
                        "title": "{GAME}.ItemsHolder.setItem",
                        "description": "Sets a stored statitistic to a value.",
                        "usage": "{GAME}.ItemsHolder.setItem(\"<key>\", <number>);",
                        "examples": [
                            {
                                "code": "{GAME}.ItemsHolder.setItem(\"coins\", 77);",
                                "comment": "Sets the number of coins to 77."
                            }, {
                                "code": "{GAME}.ItemsHolder.setItem(\"lives\", 7);",
                                "comment": "Sets the number of lives to seven."
                            }, {
                                "code": "{GAME}.ItemsHolder.setItem(\"lives\", Infinity);",
                                "comment": "Sets the number of lives to Infinity and beyond."
                            }]
                    }, {
                        "title": "{GAME}.ItemsHolder.increase",
                        "description": "Increases the number of coins you have.",
                        "usage": "{GAME}.ItemsHolder.increase(\"coins\", <number>);",
                        "examples": [
                            {
                                "code": "{GAME}.ItemsHolder.increase(\"coins\", 7);",
                                "comment": "Increases the number of coins by seven."
                            }]
                    }],
                "Mods": [
                    {
                        "title": "{GAME}.ModAttacher.getMods",
                        "description": "Gets all the available mods.",
                        "usage": "{GAME}.ItemsHolder.getMods();"
                    }, {
                        "title": "{GAME}.ModAttacher.enableMod",
                        "description": "Enables a mod.",
                        "usage": "{GAME}.enableMod(\"<key>\");",
                        "examples": [
                            {
                                "code": "{GAME}.enableMod(\"Gradient Skies\");",
                                "comment": "Enables the \"Gradient Skies\" mod."
                            }]
                    }, {
                        "title": "{GAME}.ModAttacher.disableMod",
                        "description": "Disables a mod.",
                        "usage": "{GAME}.disableMod(\"<key>\");",
                        "examples": [
                            {
                                "code": "{GAME}.disableMod(\"Gradient Skies\");",
                                "comment": "Disables the \"Gradient Skies\" mod."
                            }]
                    }]
            }
        },
        "sizeDefault": "Wide",
        "sizes": {
            "NES": {
                "width": 512,
                "height": 464,
                "full": false
            },
            "Wide": {
                "width": Infinity,
                "height": 464,
                "full": false
            },
            "Large": {
                "width": Infinity,
                "height": Infinity,
                "full": false
            },
            "Full!": {
                "width": Infinity,
                "height": Infinity,
                "full": true
            }
        },
        "schemas": [
            {
                "title": "Options",
                "generator": "OptionsTable",
                "options": [
                    {
                        "title": "Volume",
                        "type": "Number",
                        "minimum": 0,
                        "maximum": 100,
                        "source": function (FSM) {
                            return Math.round(FSM.AudioPlayer.getVolume() * 100);
                        },
                        "update": function (FSM, value) {
                            FSM.AudioPlayer.setVolume(value / 100);
                        }
                    },
                    {
                        "title": "Mute",
                        "type": "Boolean",
                        "source": function (FSM) {
                            return FSM.AudioPlayer.getMuted();
                        },
                        "enable": function (FSM) {
                            FSM.AudioPlayer.setMutedOn();
                        },
                        "disable": function (FSM) {
                            FSM.AudioPlayer.setMutedOff();
                        }
                    },
                    {
                        "title": "Speed",
                        "type": "Select",
                        "options": function (FSM) {
                            return [".25x", ".5x", "1x", "2x", "5x"];
                        },
                        "source": function (FSM) {
                            return "1x";
                        },
                        "update": function (FSM, value) {
                            FSM.GamesRunner.setSpeed(Number(value.replace("x", "")));
                        },
                        "storeLocally": true
                    },
                    {
                        "title": "View Mode",
                        "type": "ScreenSize"
                    },
                    {
                        "title": "Framerate",
                        "type": "Select",
                        "options": function (FSM) {
                            return ["60fps", "30fps"];
                        },
                        "source": function (FSM) {
                            return (1 / FSM.PixelDrawer.getFramerateSkip() * 60) + "fps";
                        },
                        "update": function (FSM, value) {
                            FSM.PixelDrawer.setFramerateSkip(1 / Number(value.replace("fps", "")) * 60);
                        },
                        "storeLocally": true
                    },
                    {
                        "title": "Touch Controls",
                        "type": "Boolean",
                        "storeLocally": true,
                        "source": function (FSM) { return false; },
                        "enable": function (FSM) {
                            setTimeout(function () { return FSM.TouchPasser.enable(); });
                        },
                        "disable": function (FSM) {
                            setTimeout(function () { return FSM.TouchPasser.disable(); });
                        }
                    },
                    {
                        "title": "Tilt Controls",
                        "type": "Boolean",
                        "storeLocally": true,
                        "source": function (FSM) { return false; },
                        "enable": function (FSM) {
                            window.ondevicemotion = FSM.InputWriter.makePipe("ondevicemotion", "type");
                        },
                        "disable": function (FSM) {
                            window.ondevicemotion = undefined;
                        }
                    }
                ],
                "actions": [
                    {
                        "title": "Screenshot",
                        "action": function (FSM) {
                            FSM.takeScreenshot("FullScreenMario " + new Date().getTime());
                        }
                    }
                ]
            }, {
                "title": "Controls",
                "generator": "OptionsTable",
                "options": (function (controls) {
                    return controls.map(function (title) {
                        return {
                            "title": title[0].toUpperCase() + title.substr(1),
                            "type": "Keys",
                            "storeLocally": true,
                            "source": function (FSM) {
                                return FSM.InputWriter
                                    .getAliasAsKeyStrings(title)
                                    .map(function (string) { return string.toLowerCase(); });
                            },
                            "callback": function (FSM, valueOld, valueNew) {
                                FSM.InputWriter.switchAliasValues(title, [FSM.InputWriter.convertKeyStringToAlias(valueOld)], [FSM.InputWriter.convertKeyStringToAlias(valueNew)]);
                            }
                        };
                    });
                })(["left", "right", "up", "down", "sprint", "pause"])
            }, {
                "title": "Mods!",
                "generator": "OptionsButtons",
                "keyActive": "enabled",
                "assumeInactive": true,
                "options": function (FSM) {
                    var mods = FSM.ModAttacher.getMods(), output = [], mod, i;
                    for (i in mods) {
                        if (!mods.hasOwnProperty(i)) {
                            continue;
                        }
                        mod = mods[i];
                        output.push({
                            "title": mod.name,
                            "source": function () { return mod.enabled; },
                            "storeLocally": true,
                            "type": "text"
                        });
                    }
                    return output;
                },
                "callback": function (FSM, schema, button) {
                    var name = button.textContent, key = button.getAttribute("localStorageKey"), mod = FSM.ModAttacher.getMod(name);
                    FSM.ModAttacher.toggleMod(name);
                    FSM.ItemsHolder.setItem(key, mod.enabled);
                    FSM.ItemsHolder.saveItem(key);
                }
            }, {
                "title": "Editor",
                "generator": "LevelEditor",
                "maps": {
                    "rangeX": [1, 4],
                    "rangeY": [1, 8],
                    "callback": function (FSM, schema, button) {
                        FSM.LevelEditor.enable();
                        FSM.LevelEditor.setCurrentJSON(JSON.stringify(FSM.MapsCreator.getMapRaw(button.textContent)));
                        FSM.LevelEditor.startBuilding();
                    }
                }
            }, {
                "title": "Maps",
                "generator": "MapsGrid",
                "rangeX": [1, 4],
                "rangeY": [1, 8],
                "extras": [
                    (function () {
                        function getNewSeed() {
                            return new Date().getTime()
                                .toString()
                                .split("")
                                .sort(function () { return 0.5 - Math.random(); })
                                .reverse()
                                .join("");
                        }
                        return {
                            "title": "Map Generator!",
                            "callback": function (FSM, schema, button, event) {
                                var parent = event.target.parentElement, randomizer = parent.querySelector(".randomInput");
                                randomizer.value = randomizer.value.replace(/[^\d]/g, "");
                                if (!randomizer.value) {
                                    randomizer.value = getNewSeed();
                                }
                                FSM.LevelEditor.disable();
                                FSM.NumberMaker.resetFromSeed(Number(randomizer.value));
                                FSM.setMap("Random");
                                if (!randomizer.getAttribute("custom")) {
                                    randomizer.value = getNewSeed();
                                }
                            },
                            "extraElements": [
                                {
                                    "tag": "input",
                                    "options": {
                                        "className": "randomInput maps-grid-input",
                                        "type": "text",
                                        "value": getNewSeed(),
                                        "onchange": function (event) {
                                            event.target.setAttribute("custom", "true");
                                        }
                                    }
                                }
                            ]
                        };
                    })()
                ],
                "callback": function (FSM, schema, button) {
                    FSM.LevelEditor.disable();
                    FSM.setMap(button.getAttribute("value") || button.textContent);
                }
            }
        ]
    };
})(FullScreenMario || (FullScreenMario = {}));
