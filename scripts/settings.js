'use strict';

/**
 * Initializes the SDK and sets a global field with passed name for it that can
 * be referred later.
 *
 * @param {string} name Name by which the chat widget should be referred
 */
function initSdk(name) {
    if (!document || typeof WebSDK === 'undefined') {
        console.error('Document or WebSDK not available.');
        return;
    }

    if (!name) {
        name = 'Bots'; // Set default reference name to 'Bots'
    }

    // Wait for DOM content to be fully loaded
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            var chatWidgetSettings = {
                URI: 'idcs-oda-b000510f867e45ccadeebba72a718922-da2.data.digitalassistant.oci.oraclecloud.com',
                channelId: '4dced33d-d2c4-4cf7-bfc9-ce0bc91b14f4',
                showConnectionStatus: true,
                openChatOnLoad: false,
                position: { bottom: '1.5em', right: '1.5em' },
                initUserHiddenMessage: 'Hello',
            };

            try {
                var Bots = new WebSDK(chatWidgetSettings);
                Bots.connect();
                // Create global object to refer Bots
                window[name] = Bots;
            } catch (error) {
                console.error('Error initializing SDK:', error);
            }
        }, 0);
    });
}

