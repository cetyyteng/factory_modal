const { createApp } = Vue;

createApp({
  template: `
    <div aria-hidden="true" aria-labelledby="articleModalLabel1" class="modal fade" id="articleModal1" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="articleModalLabel1">怎麼舉報都拆不了，怎麼辦？</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
                </div>
                <div class="modal-body">
                    <div class="article-full-content">
                        <p>台灣農地違章工廠問題是一個長期未解的環境與社會隱憂，對農業、生態和居民生活構成了重大威脅。這個問題的起源可以追溯至 1940 年代，當時政府為了促進農產品加工業發展，允許部分工廠在農地上設置。然而，隨著產業結構轉型，這些工廠的功能逐漸從農業加工擴展到各種其他領域，特別是中高污染產業。由於農地管理政策不夠完善，加上政府在執法和管控上的不足，這些違章工廠如雨後春筍般出現，逐漸侵蝕農地並加劇了環境污染問題。</p>
                        <p>違章工廠對台灣環境的影響深遠，特別是在污染方面。這些工廠常涉及高污染行業，例如皮革加工和塑料製造，它們經常為了降低成本而非法排放廢水，污染農田和水源。由於許多農地無法實現灌排分離，污染物很容易隨灌溉水進入農作物中，威脅食物安全。據專家估計，台灣目前有超過 4.5 萬家違章工廠，這一數量甚至超過了全台連鎖便利商店的總和。這些工廠的非法活動不僅對環境造成持續性的破壞，也導致大量農地的流失，每年約有 1500 公頃農地因違規使用而無法維持原有功能。</p>
                        <p>有時，農民會寄信、打電話向地球公民舉報附近農田的違章工廠。希望環保團體能夠立刻讓工廠停工、斷水斷電，類似這樣的陳情與舉報相當頻繁，因此地球公民想到使用數位工具來更有效的承接回報，並且能夠批次的向政府倡議施加壓力。</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
  `
}).mount('#factory_modal');