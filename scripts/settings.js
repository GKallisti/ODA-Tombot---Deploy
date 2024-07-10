'use strict';

/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
function initSdk(name) {
    // Retry initialization later if WebSDK is not available yet
    if (!document || !WebSDK) {
        setTimeout(function () {
            initSdk(name);
        }, 2000);
        return;
    }

    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    var Bots;

    setTimeout(function () {
        var chatWidgetSettings = {
            URI: 'idcs-oda-b000510f867e45ccadeebba72a718922-da2.data.digitalassistant.oci.oraclecloud.com', // ODA URI, pass the hostname. Do not include the protocol (https://).
            channelId: '3e631e7a-c8af-42e9-b16d-9900bc978ef1', // Channel ID, available in channel settings in ODA UI
            // Add settings here
            showConnectionStatus: true,
            openChatOnLoad: true,
            position: { bottom: '2px', right: '2px' },
            initUserHiddenMessage: 'Hello',
        };

        Bots = new WebSDK(chatWidgetSettings);
        Bots.connect();
        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
}





