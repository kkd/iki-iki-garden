import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/shareButtons.scss"

export default (() => {
  function ShareButtons({ fileData }: QuartzComponentProps) {
    // index ページ・タグ・フォルダページではシェアボタンを非表示
    const slug = fileData.slug ?? ""
    if (slug === "index" || slug.startsWith("tags/") || slug.startsWith("folder/")) {
      return null
    }

    return (
      <div class="share-buttons">
        <span class="share-label">シェア</span>
        <a
          class="share-btn share-x"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X(Twitter)でシェア"
          title="X(Twitter)でシェア"
        >
          {/* X (Twitter) logo */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          class="share-btn share-hatena"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="はてなブックマークに追加"
          title="はてなブックマークに追加"
        >
          {/* はてなブックマーク "B!" */}
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <text x="2" y="24" font-size="22" font-weight="bold" font-family="sans-serif">B!</text>
          </svg>
        </a>
        <a
          class="share-btn share-bluesky"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blueskyでシェア"
          title="Blueskyでシェア"
        >
          {/* Bluesky butterfly */}
          <svg viewBox="0 0 600 530" fill="currentColor" aria-hidden="true">
            <path d="M135.72 44.03C202.216 93.951 273.74 195.17 300 249.49c26.262-54.316 97.782-155.54 164.28-205.46C512.26 8.009 590-19.862 590 68.825c0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.38-3.69-10.832-3.708-7.896-.017-2.936-1.193.516-3.707 7.896-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.449-163.25-81.433C20.155 217.613 10 86.535 10 68.825c0-88.687 77.742-60.816 125.72-24.795z" />
          </svg>
        </a>
        <button
          class="share-btn share-copy"
          aria-label="リンクをコピー"
          title="リンクをコピー"
        >
          {/* Clipboard icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span class="copy-tooltip">コピー完了！</span>
        </button>
      </div>
    )
  }

  ShareButtons.css = style

  ShareButtons.afterDOMLoaded = `
    function initShareButtons() {
      const pageUrl = window.location.href
      const pageTitle = document.querySelector("h1")?.textContent?.trim()
        || document.title || ""
      const enc = encodeURIComponent

      const xBtn = document.querySelector(".share-x")
      if (xBtn) {
        xBtn.href = "https://x.com/intent/tweet?url=" + enc(pageUrl) + "&text=" + enc(pageTitle)
      }

      const hatenaBtn = document.querySelector(".share-hatena")
      if (hatenaBtn) {
        hatenaBtn.href = "https://b.hatena.ne.jp/add?mode=confirm&url=" + enc(pageUrl) + "&title=" + enc(pageTitle)
      }

      const blueskyBtn = document.querySelector(".share-bluesky")
      if (blueskyBtn) {
        blueskyBtn.href = "https://bsky.app/intent/compose?text=" + enc(pageTitle + " " + pageUrl)
      }

      document.querySelectorAll(".share-copy").forEach((btn) => {
        btn.addEventListener("click", () => {
          navigator.clipboard.writeText(pageUrl).then(() => {
            btn.classList.add("copied")
            setTimeout(() => btn.classList.remove("copied"), 2000)
          }).catch(() => {
            // fallback for older browsers
            const ta = document.createElement("textarea")
            ta.value = pageUrl
            document.body.appendChild(ta)
            ta.select()
            document.execCommand("copy")
            document.body.removeChild(ta)
            btn.classList.add("copied")
            setTimeout(() => btn.classList.remove("copied"), 2000)
          })
        })
      })
    }

    document.addEventListener("nav", initShareButtons)
    initShareButtons()
  `

  return ShareButtons
}) satisfies QuartzComponentConstructor
