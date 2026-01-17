/**
 * Cookie Consent Banner
 * แบนเนอร์ขอความยินยอมในการใช้คุกกี้
 */
(function () {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Check if consent already given
  if (getCookie("cookie_consent")) {
    return; // Don't show banner if already responded
  }

  // Create banner element
  var banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.innerHTML = 
    '<div class="cookie-banner__content">' +
      '<div class="cookie-banner__icon">🍪</div>' +
      '<div class="cookie-banner__text">' +
        '<h3 class="cookie-banner__title">เว็บไซต์นี้ใช้คุกกี้</h3>' +
        '<p class="cookie-banner__desc">เราใช้คุกกี้เพื่อจดจำการตั้งค่าธีม (โหมดสว่าง/มืด) ของคุณ เพื่อประสบการณ์การใช้งานที่ดีขึ้น</p>' +
      '</div>' +
      '<div class="cookie-banner__actions">' +
        '<button class="cookie-banner__btn cookie-banner__btn--accept" id="cookie-accept">ยอมรับ</button>' +
        '<button class="cookie-banner__btn cookie-banner__btn--decline" id="cookie-decline">ปฏิเสธ</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(banner);

  // Show banner with animation
  setTimeout(function () {
    banner.classList.add("show");
  }, 500);

  // Handle accept
  document.getElementById("cookie-accept").addEventListener("click", function () {
    setCookie("cookie_consent", "accepted", 365);
    banner.classList.remove("show");
    setTimeout(function () {
      banner.remove();
    }, 300);

    // Apply saved theme if exists
    if (typeof window.applyThemeFromCookie === "function") {
      window.applyThemeFromCookie();
    }
  });

  // Handle decline
  document.getElementById("cookie-decline").addEventListener("click", function () {
    setCookie("cookie_consent", "declined", 365);
    banner.classList.remove("show");
    setTimeout(function () {
      banner.remove();
    }, 300);
  });
})();
