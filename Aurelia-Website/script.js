/* =====================================================
   LANGUAGE SWITCH
===================================================== */

let currentLanguage = "zh";

const languageSwitch =
    document.getElementById("languageSwitch");


function updateLanguage() {

    const chineseElements =
        document.querySelectorAll("[data-zh]");

    const englishElements =
        document.querySelectorAll("[data-en]");


    if (currentLanguage === "zh") {

        chineseElements.forEach(element => {
            element.style.display = "";
        });

        englishElements.forEach(element => {
            element.style.display = "none";
        });

    } else {

        chineseElements.forEach(element => {
            element.style.display = "none";
        });

        englishElements.forEach(element => {
            element.style.display = "";
        });

    }
}


languageSwitch.addEventListener(
    "click",
    () => {

        currentLanguage =
            currentLanguage === "zh"
                ? "en"
                : "zh";

        updateLanguage();

    }
);


/* =====================================================
   PHOTO CARD FLIP
===================================================== */

const photoCards =
    document.querySelectorAll(".photo-card");


photoCards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            this.classList.toggle("flipped");

        }
    );


    /*
       键盘操作：
       Tab 选中照片后按 Enter / Space
       也可以翻面
    */

    card.setAttribute(
        "tabindex",
        "0"
    );


    card.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                this.classList.toggle(
                    "flipped"
                );

            }

        }
    );

});


/* =====================================================
   GUESTBOOK
===================================================== */

const guestbookButton =
    document.getElementById(
        "guestbookButton"
    );


if (guestbookButton) {

    guestbookButton.addEventListener(
        "click",
        function () {

            if (currentLanguage === "zh") {

                alert(
                    "留言板功能马上就来啦 ♡"
                );

            } else {

                alert(
                    "The guestbook is coming soon ♡"
                );

            }

        }
    );

}


/* =====================================================
   INITIAL LANGUAGE
===================================================== */

updateLanguage();
/* =========================
   Email Copy
   ========================= */

const emailCopyBtn = document.getElementById("emailCopyBtn");
const copyToast = document.getElementById("copyToast");

if (emailCopyBtn && copyToast) {

  emailCopyBtn.addEventListener("click", async () => {

    const email = "wendyselena66@gmail.com";

    try {
      await navigator.clipboard.writeText(email);

      copyToast.classList.add("show");

      setTimeout(() => {
        copyToast.classList.remove("show");
      }, 1800);

    } catch (error) {

      // 如果浏览器不允许直接复制，则使用备用方式
      const textarea = document.createElement("textarea");

      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.select();

      try {
        document.execCommand("copy");

        copyToast.classList.add("show");

        setTimeout(() => {
          copyToast.classList.remove("show");
        }, 1800);

      } catch (err) {
        alert("请手动复制 Email：\n" + email);
      }

      document.body.removeChild(textarea);
    }
  });

}
/* =========================
   Lonely Music Player
   ========================= */

const musicButton = document.getElementById("musicButton");
const lonelyAudio = document.getElementById("lonelyAudio");
const musicIcon = document.getElementById("musicIcon");

if (musicButton && lonelyAudio) {

  musicButton.addEventListener("click", () => {

    if (lonelyAudio.paused) {

      lonelyAudio.play();

      musicIcon.textContent = "Ⅱ";

    } else {

      lonelyAudio.pause();

      musicIcon.textContent = "▶";

    }

  });

  lonelyAudio.addEventListener("ended", () => {
    musicIcon.textContent = "▶";
  });

}
