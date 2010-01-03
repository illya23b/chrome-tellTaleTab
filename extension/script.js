var site_configs = [
    { // Google Reader
        "matches": [
            "http://www.google.com/reader/"
            ],
        "poll": {
            "frequency": 60000,
            "method": "atom",
            "atom_url": "http://www.google.com/reader/atom/user/-/state/com.google/reading-list?xt=user/-/state/com.google/read&n=99999"
            },
        "icon": [
            ['', '', '', '#b9dd93', '#b9dd93', '#b9dd93', '#b9dd93', '#b9dd93', '#b4d98d', '#add484', '#a5ce7c', '#a0ca75', '#a0c973', '', '', ''],
            ['', '', '#acd383', '#e0fbd9', '#e3fde0', '#e6ffe5', '#e4fde0', '#dffbd9', '#daf7d1', '#d5f4c7', '#cff0bd', '#caebb3', '#c3e7a8', '#acd383', '', ''],
            ['', '', '#a0c973', '#defad7', '#e2fcde', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', '#cd6b6b', ''],
            ['', '', '#9fc974', '#dbf7d2', '#cd6b6b', '#f9eded', '#fcf6f6', '#fcf6f6', '#f8ecec', '#f7e7e7', '#f5e3e3', '#f3dddd', '#efd1d1', '#eecece', '#e6b6b6', '#cd6b6b'],
            ['', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#b9a1a1', '#ebc3c3', '#e6b6b6', '#eac0c0', '#cd6b6b'],
            ['#2a5699', '#a4bdec', '#c1d3f5', '#c1d3f5', '#9bb8f2', '#90b0ef', '#86a8ed', '#7da0e4', '#6a93db', '#5b88e6', '#4c7eca', '#2a5699', '#ebc3c3', '#e8bcbc', '#e4b2b2', '#cd6b6b'],
            ['#2a5699', '#b6cbf2', '#ffffff', '#ffffff', '#ffffff', '#c9d7f2', '#7099ee', '#5885e4', '#5381d9', '#4c7eca', '#4f7dd8', '#2a5699', '#beb2b2', '#e4b2b2', '#e8bcbc', '#cd6b6b'],
            ['#2a5699', '#abc3f5', '#e4eaf5', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#90b0ef', '#5381d9', '#4676da', '#467aca', '#2a5699', '#c5c5c5', '#edc9c9', '#e2aaaa', '#cd6b6b'],
            ['#2a5699', '#90b0ef', '#638ee9', '#638ee9', '#9bb8f2', '#edf0f6', '#ffffff', '#ffffff', '#90ade4', '#467aca', '#4676da', '#2a5699', '#c5c5c5', '#fbf3f3', '#dfa3a3', '#cd6b6b'],
            ['#2a5699', '#a4bdec', '#ffffff', '#ffffff', '#c1d3f5', '#7499e5', '#c1d3f5', '#ffffff', '#ffffff', '#608bd7', '#3c74ca', '#2a5699', '#c5c5c5', '#ffffff', '#dc9898', '#cd6b6b'],
            ['#2a5699', '#9bb8f2', '#ffffff', '#ffffff', '#ffffff', '#e4eaf5', '#638ee9', '#edf0f6', '#ffffff', '#b6cbf2', '#336cc9', '#2a5699', '#c5c5c5', '#ffffff', '#e7b9b9', '#cd6b6b'],
            ['#2a5699', '#6a93db', '#5381d9', '#7da0e4', '#f4f7fc', '#ffffff', '#b6cbf2', '#90ade4', '#ffffff', '#ffffff', '#2d69c3', '#2a5699', '#c3c2c2', '#ffffff', '#e6b6b6', '#cd6b6b'],
            ['#2a5699', '#84a5e7', '#ffffff', '#90ade4', '#7499e5', '#ffffff', '#f4f7fc', '#3c74ca', '#ffffff', '#ffffff', '#5683c6', '#2a5699', '#b28f8f', '#e6b6b6', '#d27c7c', '#cd6b6b'],
            ['#2a5699', '#6a93db', '#ffffff', '#f4f7fc', '#3c74ca', '#ffffff', '#ffffff', '#3c74ca', '#d9e3f7', '#ffffff', '#4c7eca', '#2a5699', '#a25d5d', '#cd6b6b', '#cd6b6b', ''],
            ['#2a5699', '#3c74ca', '#608bd7', '#6a93db', '#3c74ca', '#6892d0', '#608bd7', '#2b65c2', '#467aca', '#4c7eca', '#235daf', '#2a5699', '', '', '', ''],
            ['', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '#2a5699', '', '', '', '', '']
        ]
    },

    { // Gmail
        "matches": [
            "https://mail.google.com/mail/"
            ],
        "poll": {
            "frequency": 30000,
            "method": "atom",
            "atom_url": "https://mail.google.com/mail/feed/atom"
            },
        "icon": [
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['#da3838', '#da3838', '#da3838', '#f28181', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f28181', '#da3838', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#da3838', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#da3838', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffffff', '#ffffff', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffffff', '#f28181', '#e95a5a', '#da3838', '#ffb6b6', '#ffb6b6', '#da3838', '#e95a5a', '#f28181', '#ffffff', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffffff', '#ffb6b6', '#f28181', '#e95a5a', '#da3838', '#da3838', '#e95a5a', '#f28181', '#ffb6b6', '#ffffff', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffffff', '#ffe2e2', '#f9a7a7', '#ffb6b6', '#f28181', '#e95a5a', '#e95a5a', '#f28181', '#ffb6b6', '#f9a7a7', '#ffe2e2', '#ffffff', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffe2e2', '#f9a7a7', '#ffe2e2', '#ffffff', '#ffffff', '#f28181', '#f28181', '#ffffff', '#ffffff', '#ffe2e2', '#f9a7a7', '#ffe2e2', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f9a7a7', '#ffe2e2', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffe2e2', '#f9a7a7', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#ffe2e2', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffe2e2', '#da3838', '#da3838'],
            ['#da3838', '#da3838', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#f9a7a7', '#da3838', '#da3838'],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
        ]
    },

    { // Google Wave
        "matches": [
            "https://wave.google.com/wave"
        ],
        "poll": {
            "frequency": 30000,
            "method": "custom",
            "doit": function() {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "https://wave.google.com/wave/?nouacheck&ua=telltaletab", true);
                xhr.send();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        var content = xhr.responseText.match(/var json = (\{"r":"\^d1".*});/);
                        var waves = JSON.parse(content[1]).p[1];
                        var unreadCount = 0;
                        if (waves) {
                            for (var i = 0; i < waves.length; i++) {
                                if (waves[i][7] == true) {
                                    unreadCount++;
                                }
                            }
                        }

                        favicon.update(unreadCount.toString());
                    }
                }
            }
        },
        "icon": [["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(0, 96, 192, 1)","rgba(0, 102, 204, 0.748031496063)","rgba(0, 102, 204, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 170, 0, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 0.748031496063)","rgba(0, 144, 53, 1)"],["rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 0.748031496063)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)"],["rgba(0, 102, 204, 0.503937007874)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.503937007874)","rgba(255, 170, 0, 0.503937007874)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.503937007874)"],["rgba(0, 102, 204, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0)"],["rgba(0, 102, 204, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 0.503937007874)","rgba(255, 64, 64, 0.503937007874)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 0.503937007874)","rgba(0, 153, 57, 0.503937007874)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 0.748031496063)","rgba(0, 102, 204, 1)","rgba(0, 102, 204, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 0.748031496063)","rgba(255, 170, 0, 1)","rgba(255, 170, 0, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.748031496063)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(0, 102, 204, 0)","rgba(0, 102, 204, 0.748031496063)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 1)","rgba(255, 64, 64, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 170, 0, 0)","rgba(255, 170, 0, 0.748031496063)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 1)","rgba(0, 153, 57, 0.748031496063)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0)"]]
    },

    { // Netvibes
        "matches": [
            "http://www.netvibes.com/"
        ],
        "poll": {
            "frequency": 30000,
            "method": "custom",
            "doit": function() {
                var unreadCount = 0;
                var match = document.title.match("Netvibes \\(([0-9]+)\\)")
                if (match && match.length == 2) {
                    unreadCount = parseInt(match[1]);
                }

                favicon.update(unreadCount.toString());
            }
        },
        "icon": [
            ['', '#93fb41', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#85fb27', '#93fb41', ''],
            ['#84f237', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#72f01b', '#84f237'],
            ['#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510', '#61e510'],
            ['#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#57df12', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11', '#56df11'],
            ['#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#ffffff', '#ffffff', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16', '#4ddb16'],
            ['#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#ffffff', '#ffffff', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a', '#44d61a'],
            ['#2bc80d', '#34cd17', '#39d01d', '#39d01d', '#3ad01e', '#3bd01f', '#3cd120', '#ffffff', '#ffffff', '#39d01e', '#39d01d', '#3bd01f', '#3ad01e', '#39d01d', '#34cd17', '#2bc80d'],
            ['#1abd02', '#1abd02', '#1abd02', '#1abd02', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#1abd02', '#1abd02', '#1abd02', '#1abd02'],
            ['#18b905', '#18b905', '#18b905', '#18b905', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#18b905', '#18b905', '#18b905', '#18b905'],
            ['#17b407', '#17b407', '#17b407', '#1ab50a', '#1ab50a', '#18b408', '#17b407', '#ffffff', '#ffffff', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407', '#17b407'],
            ['#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#ffffff', '#ffffff', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08', '#15af08'],
            ['#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#ffffff', '#ffffff', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09', '#12aa09'],
            ['#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509', '#10a509'],
            ['#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009', '#0ca009'],
            ['#27a826', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#089b07', '#27a826'],
            ['', '#23a324', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#049605', '#23a324', '']
        ]
    }
]

function matchSite() {
    for (var i = 0; i < site_configs.length; i++) {
        var matches = site_configs[i]["matches"];
        for (var j = 0; j < matches.length; j++) {
            if (document.location.href.search(matches[j]) >= 0) {
                return site_configs[i];
            }
        }
    }

    return null;
}

var site = matchSite();

var favicon = {
    previousText: "",
    docHead: document.getElementsByTagName("head")[0],

    getBaseCanvas: function() {
        if(!this.baseCanvas) {
            this.baseCanvas = document.createElement('canvas');
            this.baseCanvas.height = this.baseCanvas.width = 16;

            var ctx = this.baseCanvas.getContext('2d');

            for (var y = 0; y < this.baseCanvas.width; y++) {
                for (var x = 0; x < this.baseCanvas.height; x++) {
                    if (site.icon[y][x]) {
                        ctx.fillStyle = site.icon[y][x];
                        ctx.fillRect(x, y, 1, 1);
                    }
                }
            }
        }

        return this.baseCanvas;
    },

    drawText: function(text) {
        if(!this.textedCanvas) {
            this.textedCanvas = [];
        }

        if(!this.textedCanvas[text]) {
            var iconCanvas = this.getBaseCanvas();
            var textedCanvas = document.createElement('canvas');
            textedCanvas.height = textedCanvas.width = iconCanvas.width;
            var ctx = textedCanvas.getContext('2d');
            ctx.drawImage(iconCanvas, 0, 0);

            if (text && text != "0") {
                var dim = ctx.measureText(text);
                if (dim.width > 16) {
                    text = "+";
                    dim = ctx.measureText(text);
                }

                ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
                ctx.fillRect(15-dim.width, 0, dim.width+1, 10);

                ctx.textBaseline = "top";
                ctx.font = "4t Arial";
                ctx.strokeStyle = 'black';
                ctx.strokeText(text, 16-dim.width, -2);

                ctx.strokeStyle = "rgba(0, 0, 0, 0.85)";
                ctx.lineWidth = 0.5;
                ctx.strokeRect(14-dim.width, -1, dim.width+3, 12);
            }

            this.textedCanvas[text] = textedCanvas;
        }

        return this.textedCanvas[text];
    },

    getIcon: function(text) {
        return this.drawText(text).toDataURL('image/png');
    },

    removeExisting: function() {
        var links = this.docHead.getElementsByTagName("link");
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            if (link.rel == 'SHORTCUT ICON') {
                this.docHead.removeChild(link);
            }
        }
    },

    update: function(text) {
        if (text == this.previousText)
            return;

        this.previousText = text;
        iconURL = this.getIcon(text);

        var link = document.createElement("link");
        link.type = "image/x-icon";
        link.rel = 'SHORTCUT ICON';
        link.href = iconURL;
        this.removeExisting();
        this.docHead.appendChild(link);

        var hack_frame = document.createElement("iframe");
        hack_frame.width = 0;
        hack_frame.height = 0;
        hack_frame.frameborder = 0;
        hack_frame.src = iconURL;
        hack_frame.id = 'hack_frame';
        document.body.appendChild(hack_frame);
        document.body.removeChild(hack_frame);
    }
}

function updateFavicon() {
    if (site.poll.method == "atom") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", site.poll.atom_url, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                var unread = xhr.responseXML.getElementsByTagName('entry');
                favicon.update(unread.length.toString());
            }
        }
    }

    else if (site.poll.method == "custom") {
        site.poll.doit();
    }
}

if (site != null) {
    updateFavicon();

    setInterval(updateFavicon, site.poll.frequency);
}
