import React, { useEffect } from "react";
import "../styles/spinner.css";

const Spinner = ({ loading = false }) => {
    //spinner==============================
    // useEffect(() => {
    //     let wordElements = document.getElementsByClassName("word");
    //     // 拿到所有 CLASS 裡面有 word 的 DOM 元件(陣列)

    //     let wordIndex = 0;
    //     let words = [];
    //     // wordElements[wordIndex].style.opacity = 1;

    //     for (let i = 0; i < wordElements.length; i++) {
    //         // wordElements.length = 3,   i = 0, i = 1, i = 2

    //         let content = wordElements[i].innerHTML;
    //         // i = 0, content = beautiful. / i = 1, content = powerful.

    //         let letters = [];
    //         wordElements[i].innerHTML = "";
    //         // i = 0 <span class="word wisteria"></span> / i = 1 <span class="word midnight"></span>
    //         for (let x = 0; x < content.length; x++) {
    //             // content = beautiful. content.length = 10 /

    //             let letterSpan = document.createElement("span");
    //             // <span> </span>
    //             letterSpan.className = "letter";
    //             // <span class="letter"> </span>
    //             letterSpan.innerHTML = content[x];
    //             // <span class="letter">b</span>
    //             letters.push(letterSpan);
    //             // [<span class="letter">b</span>, ....]
    //             wordElements[i].appendChild(letterSpan);
    //             // <span class="word wisteria">
    //             //    <span class="letter">b</span>
    //             //    <span class="letter">e</span>
    //             //    <span class="letter">a</span>
    //             // </span>
    //         }

    //         words.push(letters);
    //     }

    //     function changeWord() {
    //         let currentWord = words[wordIndex]; // [<span>b</span>....] 0 --> 1 --> 2
    //         let nextWord =
    //             wordIndex === wordElements.length - 1
    //                 ? words[0]
    //                 : words[wordIndex + 1];

    //         for (let i = 0; i < currentWord.length; i++) {
    //             setTimeout(function () {
    //                 currentWord[i].className = "letter out";
    //             }, i * 100);
    //         }

    //         for (let i = 0; i < nextWord.length; i++) {
    //             nextWord[i].className = "letter behind";
    //             nextWord[i].parentElement.style.opacity = 1;
    //             setTimeout(function () {
    //                 nextWord[i].className = "letter in";
    //             }, 450 + i * 100);
    //         }
    //         wordIndex =
    //             wordIndex === wordElements.length - 1 ? 0 : wordIndex + 1;
    //     }

    //     changeWord();
    //     setInterval(changeWord, 4000);
    // }, []);
    //==============================spinner

    return (
        <>
            {loading && (
                <div className="spinner-text" id="spinner-item">
                    <p id="spinner-text">Shuyoung is </p>
                    <span className="word wisteria">beautiful.</span>
                    <span className="word midnight">powerful.</span>
                    <span className="word belize">divine.</span>
                    <span className="word pomegranate">fancy.</span>
                    <span className="word green">elegant.</span>
                    <span className="word belize">rich.</span>
                    <span className="word wisteria">smart.</span>
                    <span className="word midnight">free.</span>
                    <span className="word pomegranate">love.</span>
                    <span className="word green">strength.</span>
                    <span className="word belize">courage.</span>
                    <span className="word wisteria">style.</span>
                    <span className="word pomegranate">cool</span>
                    <span className="word green">hip.</span>
                    <span className="word midnight">wealth.</span>
                </div>
            )}
        </>
    );
};

export default Spinner;
