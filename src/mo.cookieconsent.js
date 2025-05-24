/*!
 * Mikeotizels Cookie Consent JS v1.0.0
 * Copyright 2022 Michael Otieno. All Rights Reserved.
 * Licensed under The MIT License (http://opensource.org/licenses/MIT)
 */

(function ($) {
    "use strict";

    $(document).ready(function() {
        var banner = $('#cookieConsentBanner'),
            button = $('#cookieConsentButton'),
            status = localStorage.getItem('cookie_consent_status');

        if (status == null) {
            banner.fadeIn('slow');
        } else {
            banner.remove();
        }

        button.click(function() {
            localStorage.setItem('cookie_consent_status', 1);
            banner.fadeOut('slow');
            setTimeout(function() {
                banner.remove();
            }, 1500);
        });
   });

})(jQuery);