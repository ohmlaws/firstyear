(function () {
  "use strict";

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("highlight");

    if (!query) return;

    const article =
      document.querySelector("article") ||
      document.querySelector(".post-content") ||
      document.querySelector(".content");

    if (!article) return;

    const cleanQuery = query.trim();
    if (cleanQuery.length < 2) return; 

    const exactPhrase = escapeRegExp(cleanQuery).replace(/\s+/g, "\\s+");
    const regex = new RegExp("(" + exactPhrase + ")", "gi");

    const SKIP = new Set([
      "SCRIPT", "STYLE", "NOSCRIPT", "KBD", "SAMP", "TEXTAREA", "INPUT", "BUTTON", "SELECT", "OPTION", "SVG", "MARK"
    ]);

    const walker = document.createTreeWalker(
      article,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (SKIP.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.closest("#toc, #toc-popup, #toc-bar, .toc-list, #sidebar, #panel-wrapper, .search, .mermaid, .anchor, .sr-only, .visually-hidden, .d-none, [hidden], header, .post-meta, .post-tags, .license-wrapper")) {
            return NodeFilter.FILTER_REJECT;
          }
          
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textNodes = [];
    while (walker.nextNode()) {
      textNodes.push(walker.currentNode);
    }

    let matchCount = 0;

    textNodes.forEach(node => {
      const text = node.nodeValue;
      regex.lastIndex = 0;

      if (!regex.test(text)) return;

      regex.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;

      text.replace(regex, (match, _, offset) => {
        if (offset > lastIndex) {
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
        }

        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.textContent = match;
        
        fragment.appendChild(mark);
        lastIndex = offset + match.length;
        matchCount++;
        return match;
      });

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
      }

      node.parentNode.replaceChild(fragment, node);
    });

    if (matchCount > 0) {
      const marks = document.querySelectorAll(".search-highlight");
      let currentIndex = -1; 

            const floatUI = document.createElement("div");
      floatUI.id = "search-highlight-nav";
      
      floatUI.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 1rem;
        background: var(--main-bg);
        color: var(--text-color);
        border: 1px solid var(--border-color, #cccccc);
        padding: 10px 15px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15);
        z-index: 90; 
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: inherit;
        font-size: 0.9rem;
        max-width: 90vw;
        flex-wrap: wrap;
        justify-content: center;
      `;

      floatUI.innerHTML = `
        <span style="white-space: nowrap;"><span id="highlight-current-index">0</span> / ${matchCount}</span>
        <button id="btn-prev-match" style="background: #0550ae; color: #fff; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Prev</button>
        <button id="btn-next-match" style="background: #0550ae; color: #fff; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer;">Next</button>
        <button id="btn-clear-match" style="background: transparent; color: inherit; border: 1px solid var(--border-color, #ccc); padding: 4px 11px; border-radius: 5px; cursor: pointer;">Clear</button>
      `;
      
      document.body.appendChild(floatUI);
      const searchTrigger = document.getElementById("search-trigger");
      const searchInput = document.getElementById("search-input");
      const searchCancel = document.getElementById("search-cancel");
      const hideNav = () => { floatUI.style.display = "none"; };
      const showNav = () => { floatUI.style.display = "flex"; };

      if (searchTrigger) searchTrigger.addEventListener("click", hideNav);
      if (searchInput) searchInput.addEventListener("focus", hideNav);
      if (searchCancel) searchCancel.addEventListener("click", showNav);

      const indexLabel = document.getElementById("highlight-current-index");
      const btnPrev = document.getElementById("btn-prev-match");
      const btnNext = document.getElementById("btn-next-match");
      const btnClear = document.getElementById("btn-clear-match");

      setTimeout(() => {
        btnNext.click();
      }, 300);

      btnPrev.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + marks.length) % marks.length;
        indexLabel.textContent = currentIndex + 1;

        marks[currentIndex].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });

      btnNext.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % marks.length;
        indexLabel.textContent = currentIndex + 1;

        marks[currentIndex].scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      });

      btnClear.addEventListener("click", () => {
        const url = new URL(window.location);
        url.searchParams.delete("highlight");
        window.history.replaceState({}, "", url);

        marks.forEach(mark => {
          const parent = mark.parentNode;
          if (parent) {
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize(); 
          }
        });

        floatUI.remove();
      });
    }

  });
})();
