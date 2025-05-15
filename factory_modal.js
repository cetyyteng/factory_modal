const { createApp } = Vue;

createApp({
  template: `
    <!-- Modal 視窗 -->
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
<div aria-hidden="true" aria-labelledby="articleModalLabel2" class="modal fade" id="articleModal2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel2">群眾智慧的新力量——「農地工廠回報系統」、「大家來找廠」</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>「農地工廠回報系統」，就是在這樣的背景下誕生。地球公民與開源社群 g0v 零時政府合作開發。這是一個讓民眾能夠快速、方便地舉報農地違章工廠的平台。透過該系統，民眾可以直接拍攝照片並標註工廠的地點，地球公民基金會則根據收集到的資料進行調查和核實，並將證據提交給政府。這一過程極大簡化了舉報流程，降低了參與的技術門檻，讓更多人能隨時隨地參與到揭露違章工廠的行動中。</p>
                    <p>然而，在實際運行中，這套系統也遇到了一些挑戰。許多住在工廠附近的農民由於擔心舉報後遭到報復，或是缺乏足夠的法律和技術支持，對參與檢舉存在顧慮。基於此，地球公民基金會和 g0v 零時政府意識到，單純的檢舉工具並不足以解決所有問題，他們需要更多創新來激勵不同群體的參與。</p>
                    <p>因此，基於群眾智慧的「大家來找廠」遊戲應運而生。這款遊戲將航空照片比對作為核心玩法，玩家可以透過比較 2017 年之前與 2020 年後的航空圖，找出農地上出現的違章工廠。遊戲操作簡單，玩家只需選擇兩張照片中土地使用是否發生變化，這樣的操作過程不僅有趣，還能讓參與者了解違章工廠問題的嚴重性。玩家的每一次判斷實際上都是在幫助地球公民基金會蒐集證據，辨識潛在的違章工廠。</p>
                    <p>「大家來找廠」遊戲自推出後獲得了巨大成功，短短一年內，透過遊戲玩家的努力，已經辨識出超過 1000 座違章工廠。這相當於地球公民基金會耗費兩年半的人工調查工作量。為了保證結果的準確性，地球公民基金會還設計了多重驗證機制，確保同一區域的違建信息需要經過多次確認才能被列為問題工廠。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div aria-hidden="true" aria-labelledby="articleModalLabel3" class="modal fade" id="articleModal3" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel3">從舉報到改革——數位工具驅動環境正義</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>數位工具的開發並非僅僅關注技術本身，更重要的是解決實際需求。在跨領域的數位開發過程中，非營利組織應注重了解群眾在哪裡，並確保工具符合參與者的需求。舉例來說，農地工廠回報系統的使用者多為農民，許多農民對數位工具並不熟悉，因此地球公民基金會在設計時特意簡化了操作流程，放大字體以方便使用者上手。同時，考量到檢舉者可能面臨的報復風險，系統設計成匿名報告形式，進一步保障了參與者的安全感。</p>
                    <p>與此同時，數位工具的開發需要明確目標，並與公共倡議緊密結合。地球公民基金會與 g0v 零時政府的合作，並非僅為創造一個功能強大的檢舉系統，而是旨在動員公眾參與，促進政策改變，最終減少農地違章工廠對環境的破壞。這種合作方式使得非營利組織能夠在資源有限的情況下，利用開源技術實現公益目標，從而產生實質性的社會影響。</p>
                    <p>展望未來，地球公民基金會計劃進一步運用這些數據，向政府施壓，要求拆除被辨識出的違章工廠，並監督各縣市政府的執法效率。如果政府未能在規定時間內采取行動，基金會將發動媒體和公眾施加更多壓力，確保違章工廠問題能夠得到有效解決。</p>
                    <p>總而言之，農地違章工廠問題是台灣環境與社會發展中的一大挑戰，而數位技術的引入使得公民參與變得更加簡便與廣泛。地球公民基金會與數位社群的合作為解決這一問題提供了新思路，也為其他非營利組織應對類似挑戰提供了寶貴的經驗。無論是「違章工廠回報系統」還是「大家來找廠」遊戲，都展示了數位工具如何在公共倡議中發揮關鍵作用，並通過群眾的力量推動政策與社會變革。</p><!-- 更多內容 -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div aria-hidden="true" aria-labelledby="articleModalLabel4" class="modal fade" id="articleModal4" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel4">不打不相識？</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>2019 年 5 月，工輔法修惡，激烈抗爭一觸即發。</p>
                    <p><i>環保團體不滿政府修法內容圖利農地違章工廠，上午集結多位學者、農民到立法院大門口前喊「工輔法毀農滅國」，並將大把的丟稻草，氣氛一度緊張，環團怒說，要是該法通過，將到立院燒稻草。</i></p>
                    <p>新聞報導中這是大家所熟悉的環保團體，藉由抗爭行動，來凸顯議題進入大眾眼簾，並用民眾聲量拉高對立局勢，與政府一較高下。然而時間快轉來到 2023 年 3 月，一場由立委召開召集環保團體與公部門討論違章工廠數量和資訊公開的會議上，忽然有位公務員冷不防冒出一句：</p>
                    <p>「我愛死你們環團了」</p>
                    <p>由於會議氣氛謹慎，突然這句話讓現場所有人都想說聽錯了吧，因此沒人敢回應。直到會議結束後，忽然另個部會的公務員也覆議說出「我也很愛環團」。才陸續解釋因為過去他們執行政策時，總是有許多立委民代來干涉，導致執法無法順利落實。但現在，只要回覆「環團在盯」，他們就可以拒絕許多不守法的民意代表。</p>
                    <p>從毫無信任的最初互動，到理解彼此的限制與努力，公部門與環保團體從怒目走向協作。來自理解倡議的格局必須監督與協作並進，而如何精準地溝通並且畫出路徑，就是環境運動者的專業。</p>
                    <p>像是農地違章工廠議題涉及經濟部、內政部和農委會，是需要跨機關才能解決的問題。因此地球公民透過立委辦公室與跨局處召開平台大會。後續多次進行，在這些協調會過程的確解決了許多問題，因而成為長期有默契的管道，當民間有疑義時就會召開。</p>
                    <p>能夠有如此成功的結果，除了有願意調整的公務人員，也需要環境團體有第一手數據資料可以監督和協助政策執行（有憑有據），以及立法委員能夠促成共識和協調的能力。和最關鍵的，環境團體認知到自己的行動不再只是實踐在抗爭上，而是相信溝通。</p>
                    <p>因為溝通，而有信任。因為信任，公部門願意嘗試，嘗試之後也改變了他們的固守想法。像是許多󠀠過去政府不願公開的資料，在我們倡議下公部門才發現，原來公開後除了讓公民團體可以監督，也能減少廠商來關說的壓力。</p>
                    <p>當然，會議桌上的溝通持續，會議外的監督力道也不少。許多我們接觸的行政官員都終於理解，在台灣走向進步的路上，每個人有各自角色。被罵當然會有情緒，因為自己做的事情沒有被理解。然而當彼此理解後，剩下的就是找到共同目標一起前進。途中的罵與被罵，是疏通僵化結構的契機，也是扮演這些角色的必經過程，可以在意、無需掛心，因為真正眾人的心意，都在讓台灣更好。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>
<div aria-hidden="true" aria-labelledby="articleModalLabel5" class="modal fade" id="articleModal5" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel5">找到關鍵，改變結構問題</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>地球公民自 2020 年「農地違章工廠回報系統」上線，蒐集到來自各地居民 2,257 回報案件，經過我們資料比對、篩選出有效檢舉案件，共檢舉了 771 多件農地違章工廠。我們運用公文檢舉、打電話向公務員追蹤查處進度與現勘調查經驗，透過上段描述立委召集的跨部會平台會議，和各機關透過對話理解公部門的執行限制與機會。奠基這些資料與倡議經驗，讓我們能更進一步端視政府的運作過程。</p>
                    <p>這些檢舉，攪動了產發署與國土署對全台農地違章工廠的查處效能，近三年共查處 6,427 間疑似違章工廠，查處率達 88%，並且在產發署網站上逐月公佈查處資訊。我們看見相比過去四十年，政府展現了前所未有的執法進步。然而，談到拆除，771 家檢舉案裡，僅有 16 件有拆，其中僅有 7 家是政府強制拆除，剩餘的 9 家是自行拆除。</p>
                    <p>在過去，我們專注於和中央政府的倡議，協助制度的改善，不過農地違章廠房的處理權責是地方政府，面對地方政府，每個縣市各有特質，無法形成長期有效的溝通平台，因此我們轉由其他手段倡議。</p>
                    <p>透過農地違章回報系統檢舉新增建農地違建廠房的案例，我們分析各地方政府的回函與查處狀態。透過訪談各機關公務員，我們瞭解他們的工作流程和與其他機關的分工方法。另外，我們也請立委辦公室協助索資地方政府相關局處的人力與經費限制，進一步分析地方政府處理農地違建的量能。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel6" class="modal fade" id="articleModal6" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel6">各縣市農地工廠查處報告</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>我們試圖釐清地方政府面臨連續裁罰和裁處的卡關困境有什麼？該如何解決。綜合以上資料，地球公民出版了一份查處報告。報告中探討台灣各地方政府局處間的授權與的分工狀態，以及地方政府的人力與經費限制。我們想促成的是如何讓地方政府積極墊高農地工廠的違法成本，藉此嚇止新增。另外，又該如何讓地方政府各局處間與中央政府主管機關，進行合作執法。</p>
                    <p>礙於文章篇幅，查處報告內容在此不詳述，可於文末點擊連結閱讀。然而在運用上述各種資料進行研究與分析後，我們發現關鍵路徑在於六大面向，包括「土管的裁罰速度慢的」「違規查處案件的裁罰後限期改善複查工作漏接」「拆除違建數量有限」「地方政府查處人力不足」「查處分工缺乏督導角色」「檢舉人協助維護國土秩序，卻處於資訊弱勢」。</p>
                    <p>找到相對精準的問題所在，倡議行動才能聚焦鬆動結構。查處報告的產出奠基於地球公民針對農地工廠議題深耕的經驗，但這份報告真正的目的卻是將倡議的能力與方法釋出，讓更多關注農地與違規使用土地的公民團體，掌握地方政府在此議題上運作的狀態，進而選擇自己適合監督與溝通的位置。</p>
                    <p>從抗爭到陪伴，我們見證了公民社會與政府間的轉變。當我們將目光從單一事件轉向系統性問題，並透過數據分析、跨部門合作，就能更有效地影響政策。環境運動不只是場戰役，更是一場馬拉松，掌握方法就能更精準地擊中問題核心。這篇文章與這份查處報告，是我們分享給大家的工具，希望能夠激發更多人在環境守護的路上，從對立走向對話，看見問題的本質，找到更有效的解決方案。</p>
                    <p>&nbsp;</p>
                    <p><a href="https://www.cet-taiwan.org/node/4560" target="_blank">報告連結</a></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel7" class="modal fade" id="articleModal7" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel7">支持者想看見什麼？</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>關注「農地違章工廠」人，通常對於土地有著素樸的環保想像：稻田應該青翠、農地應該農用。因此對於他們來說，農地鐵皮為何產生、是不是違建、是不是工廠、又該由誰負責、有哪些解決方法......不一定在思考中。尤其是會向我們回報檢舉農地違建的人，其實只在乎一件事──工廠（他檢舉的鐵皮）要消失！</p>
                    <p>如果看見可疑鐵皮，就一定是工廠，檢舉了卻沒有拆掉！那就是違章治理「沒有成果」。就算查處過程，其實有著無數需要判斷的條件。經過無數公文來回，政府各科工作交接，再加上一些現實困境。這些細瑣的行政過程，NGO 及公務員都投入大量精力。然而只要結果是沒有拆除，就像是什麼都沒有做，「沒有成果」。</p>
                    <p>作為小編，我必須代替所有關心議題的人向研究員提問：「為什麼工廠還在」、「為什麼拆不掉」、「是誰的錯」、「拆不掉就是失敗嗎」、「那接下來怎麼辦」。而研究員必須給出一個能夠說服我的說法，讓我再去向所有關心議題的人說明，此刻看似沒有進展但實則有在前進。</p>
                    <p>地球公民基金會作為一個仰賴大眾捐款運作的倡議型環保團體，我們所有行動基礎就是公民的支持。不論在金錢上或是立場上，我們都需要對支持者負責任。需要讓所有支持者知道，他們可以透過支持我們，讓美好世界的想像實現。</p>
                    <p>就像在商店付出金錢，買到相對應的商品。或是付出努力了，就會得到回報。因此小編的工作必須向所有追蹤社群的支持者報告，你們投入無論是捐款或其他無形的支持，經過我們的工作變成什麼。如果沒有辦法拿出相對應的「成果」，就無法說服民眾繼續支持，有時甚至無法說服民眾我們真的很努力。</p>
                    <p>除此之外，倡議工作是一個促成美好世界實現的工作，其中也就必然包含許多失落。我們的專業讓我們知道如何擁抱這些失落，但支持者們想為世界變美好而努力的心，卻容易被失落感擊垮。我們的專業也包括陪伴民眾，不要放棄相信世界有機會變好。</p>
                    <p>綜合以上兩種需求，倡議工作必須要「看起來有成果」。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel8" class="modal fade" id="articleModal8" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel8">倡議不是只有 0 跟 100 分
                </h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>在違章工廠的議題上我們要達成「工廠拆除」這個「倡議成果」，實際上需要</p>
                    <p>面對許多細瑣且複雜的現實。</p>
                    <p>所謂「政府」並不是一個整體，而是有很多小單位構成的團隊。各自彼此都有專門負責的業務，擁有與業務相關的法律，以及這些法律而賦予的權力。以「違建」為例，就有可能有不同層次的違規，分別是「沒有建築執照或使用執照」、「違反土地使用法規」、「違反目的事業法規」。</p>
                    <p>與農地違章工廠有關的政府單位很多，「農地違章工廠」可以拆解成「農」「地」「違章」「工廠」幾個部件，這幾個部分對應了政府機關中的不同負責單位——管理「農」的農政單位、管理「地」的地政單位、負責「違章」的建管單位、管理「工廠」經發單位，除此之外也牽涉中央與地方治理之間的分工。</p>
                    <p>所以造成「沒有成果」的原因也很多，包括經費、人力、意願、權責是否分明。只要有一個地方有漏洞，農地違章工廠就無法被確實查處。</p>
                    <p>這個時候就很值得回頭思考，「違章工廠全部拆除」「農地100%農用」這樣的終極理想，是否有可能可以被拆解成較小較務實的工作項目，甚至有沒有可能被挑戰。思辨過後我們得到的答案，農地違章工廠治理的目標可以拆解成「遏止污染風險」以及「減少農地流失」。</p>
                    <p>對應實際工作，我們更積極地監督「勒令停工」「斷水斷電」等相對容易實現的懲罰，阻止工廠「污染農地」；也使用「農地違章回報系統」等科技工具搭配持續檢舉，希望透過抓出農地違建抑制「農地流失」。</p>
                    <p>直觀而言，只要工廠一天沒有拆除，農地違章工廠的倡議就沒有成果。但這是因為我們對成果的想像被限縮在狹窄的因果連結中。然而，現實世界面對的問題通常都很立體，不是鏈狀連結，沒有辦法被拆解成簡單的因果關係。</p>
                    <p>農地違章工廠的倡議，很像往有漏洞的水瓶裝水，水裝不滿不是因為你們有往瓶子灌水，很有可能是水在某個地方漏掉了。即便水瓶始終裝不滿，但找出每一個正在漏水的洞，理解水為什麼裝不滿，並且將這些洞一個一個的堵起來，這些都是成果。</p>
                    <p>如果我們的目標是「遏止污染風險」以及「減少農地流失」，那麼我們必須先理解，哪些要素是達成這個目標所必須；並且循線找出阻礙我們達成目標的每一個困境；最後發揮想象力，試探破除阻礙的每一個可能。</p>
                    <p>搞清楚問題出在哪，接受一流路走不通可以換一條，打開對成果的想像，每一個步都是看似渺小，但扎實往理想世界前進的成果。</p>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>


<div aria-hidden="true" aria-labelledby="articleModalLabel9" class="modal fade" id="articleModal9" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel9">講這麼多，改變了什麼？
                </h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>回到小編的身份，面對「那這樣是不是沒有用？」的提問時，除了苦笑之外，其實還可以給關心議題的人更多對於「有用」的想像。</p>
                    <p>身為環境倡議組織的工作者，我們經常問自己對這個社會有什麼具體貢獻？成功修了一部法令、成功阻擋了某個不當開發的個案、成功募到一筆捐款支付我和同事的薪水？</p>
                    <p>對，這些都是「具體貢獻」，但我總是想要追問下去，修改後的法令運作得如何？公務員有將法令的意旨運用在實務上嗎？被法令規範的產業有因為修法而運做的更符合公平正義嗎？開發案的預定地有因為阻止了不當開發後變成更好的環境嗎？開發案周圍的居民生活，有因為開發案被阻止了而改善生活嗎？如果上述的提問我都無法精準地回答出來，那我的工作算是對這個社會有帶來貢獻嗎？</p>
                    <p>不只是面對提問被動的給出想像，在倡議過程中，也常常需要主動提供「成果報告」。例如每年年度工作成果的呈現、讓關心議題的民眾定期了解議題目前的現況，當然也包含我們需要民眾再次站出來加入連署、支持捐款的時候，更需要說服民眾過去所做一切有意義，所以我們堅持繼續做下去。</p>
                    <p>但「沒有拆除」的事實擺在眼前，怎麼談成果？以下是在社群上曾經做過的事情。農地違章工廠議題是一個既直觀又複雜的議題。直觀的部分是：農地有違法的使用，而違法的使用必須被處理；複雜的部分是：違章工廠有歷史脈絡，在處置上必須誠實面對「歷史共業」，不能一刀斬。因此政府設計了許多就地合法化的路徑與條件，而農地違章工廠違法涉及許多不同的法律，不同的法律對應到政府不一樣的主管機關。</p>
                    <p>2020 年，新《工廠管理輔導法》上路之後，倡議的重點從阻擋《工輔法》修惡，轉向為在新《工輔法》框架下，處理「新增工廠」以及「既有中高污染工廠」。這兩個目標可以對應到「減少農地持續流失」以及「遏止農地污染風險」，因此在最開始的時候花費許多篇幅與時間，在理清截至目前為止「農地違章工廠」議題的所有細節。包含農地違章工廠牽涉的法律、政府單位等，也包含舊制與新制對於就地合法的規定差異與銜接。</p>
                    <p>與此同時，我們大力宣傳與 g0v 開源社群共同開發的「農地違章回報系統」。透過「月報」的形式，定期說明最新檢舉與各縣市查處進度，並以為報為載體，穿插不同最新消息。包含各縣市最新的違章工廠治理政策、揭露政府面對檢舉的公文來回等。一旦有拆除案例，便儘可能大書特書，營造「檢舉真的有效」的印象。</p>
                    <p>然而現實始終無法事事如願，拆除並未如預期地持續發生。即報即拆難以落實，我們在倡議上開始同時揭露人力、經費不足等現實因素，要求政府補充經費與人力。另一方面也退而求其次，要求至少確實執行「裁罰」「勒令停業」「斷水斷電」。</p>
                    <p>這個階段時常出現「雖然...至少...」的句型，告訴支持者倡議並不是 100 分或 0 分的二選一。如果 100 分難以達成，我們能不能從及格開始要求？只要有進步都是倡議的成果。接下來每一次倡議的路徑轉換，都需要告訴關心議題的人，有進步都是成果，只是目前進入進步的撞牆期，我們會找出問題，持續的更換方式，讓目標成真。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel10" class="modal fade" id="articleModal10" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel10">大家好，我是懸崖編</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>「大家好我懸崖編...」，有長期關注地球公民社群（Facebook、Instagram）的朋友，可能都看過這樣的文章開頭。沒錯，我就是懸崖編，在地球公民基金會中，負責違章工廠專案社群行銷的小編。</p>
                    <p>小編作為負責與社群追蹤者報告的角色，必須擔任處理議題的「研究員」，以及關心議題的「追蹤者」，兩者之間的橋樑。對於研究員而言，小編就是群眾的代言人；而對於關心議題的追蹤者來說，小編就是負責幫助說明議題研究員工作成果的翻譯蒟蒻。</p>
                    <p>我總是以一個橋的身份，同時照顧關注議題的人對於「議題成果」的需求，以及研究員對於被質疑「議題成果」的委屈。一起思考倡議的「成果」之於倡議本身，可以怎麼樣的被認知以及詮釋。</p>
                    <p>其實，協助支持者們「梳理議題利害關係」「理解有持續進步」，種種讓公民社會對議題建立系統化思考的傳播，也都是議題成果。</p>
                    <p>由於沒有即報即拆這樣直觀的成果，所以我們更努力說明農地違章工廠議題的「其他成果」。像是各地方政府編列增加了農地違章查處的人力與經費，證明拆除的阻力正在一個個減少。或是雖然仍然有知法犯法的新建工廠，但透過數量比對我們發現增加量逐年降低，這代表倡議有造成一定程度的嚇阻功能。另外，查處進度等資訊公開對比過去的霧裏看花，證明資訊公開是民間能夠加入監督的開始。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel11" class="modal fade" id="articleModal11" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel11">請相信世界會變好</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>這些成果與違章工廠倡議之間的關係，反映了違法成本持續被墊高。只要能墊高廠商違法的成本，賺不到錢，就能減少廠商違法投機的僥倖心態。我們必須讓所有關心這個議題的人明白，這些都是「議題成果」。</p>
                    <p>除了具體可見的改變之外，很多時候「倡議成果」是倡議過程對時代留下的痕跡，就像318運動帶出了一波公民覺醒，這並不在運動本身的訴求與目標當中，當然也就難以在確認目標是否達成的時候被檢核。</p>
                    <p>我們常常把自己困在感覺「世界沒有變好」之中，但是當我們能力越來越強、視野越來越寬、同行者也越來越多時。改變的方式就不再是打倒邪惡魔王，而是在每個角落種下種子，相信有一天可以在花海裡跳舞。就像增肌減脂，努力運動的第一天不會馬上變壯，少吃一餐不會立刻瘦下來，如果只是盯著體重計的數字面板，就會困在「怎麼沒有變好」之中放棄努力。</p>
                    <p>一旦放棄，我們期待更好的世界就永遠沒辦法發生。所以每一個當下都「必須相信」，自己的行動正在為世界改變帶來意義。</p>
                    <p>爾後，當面對不論來自外界或自身「沒有成果」質疑的時候，可以試著跳脫當下的情境，以 5 年 10 年甚至更大的尺度，寬容看著整個時代。我們會明白這些「相信」，並不是平白無故的樂觀，而是歷史反覆證明的事實。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel12" class="modal fade" id="articleModal12" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel12">面對結構</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>違章工廠是長在農地上的違法建築統稱，實際上有很多樣態，造成的問題也很多元。最容易遭人詬病的，是有在營運的工廠。它們多半會有噪音、污水排放、氣味等外顯的環境問題。倘若只是一個鐵皮建物尚未成為工廠，通常作為倉儲使用，則會有景觀、遮陰影響到鄰地作物生長的問題。</p>
                    <p>這些在農地上突兀的鐵皮建物，在西部平原多如牛毛。在 2019 年《工廠管理輔導法》（簡稱工輔法）修惡的情境下，新增建如雨後春筍不斷冒出無法遏止。即便中央和地方政府採用多元手段抑制，也無法降低新增建的增加速度。這讓身處重災區縣市的居民，認為違章工廠議題倡議並未發生實質效果，等同於無效。</p>
                    <p>地球公民從 2016 年開始關注違章工廠議題，促使農業部公告農業及農地資源盤查結果及第一波拆除名單，最終在 2017 年成功拆除 3-4 間。2018 年我們到日本參訪處理違章工廠的經驗並產出一份調查報告，2019 年參與《工輔法》的修法，確認要求特登工廠 20 年落日。2020年，我們促成立委定期召開跨部門的平台會議，針對違章工廠處理政策面進行四次對焦討論，讓經濟部中辦、農業部、國土署橫向協作，公開新增建資訊、中高污染的查處結果、低污染的那管進度等，也促成行政院食安辦成立跨部門合作的農地污染資訊平台。</p>
                    <p>一年一年不同的行動，會在不同關鍵點開花結果。制度上改革我們也著力不少，包括監督《工輔法》子法內容，將非屬低污染認定標準從 36 項調整為 51+2 項。促成農業部源頭斷水斷電、阻擋違章工廠紓困、300 坪以上違章廠方查處法規修正，只要大型違章都有法可罰、透過查處人力經費與預算盤點，促成查處 SOP 流程建置及增聘查處人力，各縣市政府查處違章工廠人力增加一倍（2022 年數據，未更新到 2023 年）、避免污染工廠申請納管合法化、要求改善消防及污水處理設備…等。</p>
                    <p>改變有在發生，只是違章工廠依然存在，甚至持續增加。</p>
                    <p>從數據上看，就會覺得議題倡議沒有成果、糟糕的事情沒有因為倡議變得比較好。但仔細觀察，公務機關對違章工廠的處理態度從燙手山芋到專案處理，甚至成為各縣市政府的重點執行工作。不同部會之間本來是互不聯繫各做各的，透過平台會議開始交流資訊、共商可行的做法，中央到地方也開始有直接溝通處理此題的管道和工作流程建立，立委質詢朗朗上口，雖然切入談論的角度不見得相同，但違章工廠的議題確實已經成為更多人認知到的亂象，這些都是數據所呈現不了的改變。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel13" class="modal fade" id="articleModal13" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel13">面對社會</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>另外還有兩個創舉，是違章議題獨有的。一個是 2019 年地球公民和 g0v 零時政府開源社群共同發起「農地違章工廠回報」系統（簡稱回報系統），另一個是 2022 年持續與開源貢獻者打造出「空拍圖比對計畫－大家來找廠」（簡稱大家來找廠），這兩個系統讓違章工廠成為更多民眾參與管道的環境議題。</p>
                    <p>回報系統服務著有檢舉需求的民眾，這些民眾通常與違章工廠有共同生活圈，並且受制於台灣鄉里以和為貴的氛圍，無法承擔吹哨者角色。但是有了回報系統的匿名功能，民眾舉報意願提升，成為維持土地秩序在各個村莊角落的公權力延伸。截至 2023 年 7 月底，回報系統進站人數達54,830，回報案件數達 2,965 (+125)，且此系統也在志工夥伴的努力下，進入中小學教材中。</p>
                    <p>大家來找廠則是採用聚眾一起玩遊戲的方式，核實農業部的農地資源盤查成果。這讓嚴肅的議題多了趣味和遊戲感，也讓公部門投資在衛星影像上的資源得以被有效利用。不僅是議題行銷的創舉，也讓新增建違章工廠的議題打開知名度。此遊戲於 2022 年 5 月上線，超過 7,000 人次上網參與，監察院還因此將新增建違章工廠列為重點觀察項目，要求經濟部列管追蹤，經濟部也因此密切觀察這些個案。</p>
                    <p>在面對公眾時，我們試著先讓大家「聽過」議題，接著就是「了解」議題。違章議題牽涉到的法規和部會非常多，倡議者往往會陷入「如何把事情講得清楚、好懂、又不會偏離事實、又可以抓住眼球」的困境。</p>
                    <p>例如在違章議題裡同樣是在農地蓋建築物，有「生產事實」的建築物叫做「工廠」，主管機關是中央的經濟部和地方政府中的經發單位，若「無生產事實」的建築物則叫做「倉儲」，主管機關就變成中央的內政部和地方的建管單位。以及因為是「農地」上的違規使用，因此也跟中央的農業部、地政司和地方的農業單位、地政單位有關連。寫到這邊，是不是已經可以感受到一個議題背後的複雜性了呢？</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel14" class="modal fade" id="articleModal14" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel14">面對倡議</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>違章工廠議題橫跨了不同中央和地方的單位，整個要拆除、查處、輔導合法化等等的制度，也就非常的複雜，地球公民花費非常多力氣複雜梳理清楚，再從中找出可以監督、倡議的著力點。也因此，這個倡議主題到了後期，會進入非常瑣碎、難懂、不易傳播的環節。</p>
                    <p>舉例來說，當一個違章工廠發生了火災，造成進火場救災的消防員喪生，這時候以倡議面來說，就是一個適合談論違章工廠應該立即拆除的政治時機，很殘酷也很現實。但光是要釐清這個工廠建築物是哪個時期蓋起來的、什麼時候開始有水有電及生產事實、執法漏洞是出現在哪個環節、哪個單位瀆職、工廠內部的消防設備與防災措施是否有缺乏稽查或者沒有落實的問題，這些問題背後都牽涉到超級多的法令、法規，相關的部門和可以有責任的公務員也逐繁不及備載。</p>
                    <p>一但開始追根究底時，我們就發現，當好不容易要求或逼迫中央單位把制度建置好後，地方政府的執行才是最大的困境。專業人力不足、地方利益盤根交錯，導致第一線的地方公務員必須面對沒有執法的責任風險，也要面對地方勢力的壓迫，民眾陳情、民代施壓、首長選票壓力等等，其實真的不是一時能改善的。</p>
                    <p>因此，拆除掉多少間違章工廠、農地上還剩多少違章工廠、新增建是不是有即報即拆...等數據，已經不是環境倡議團體追求的「倡議成果」，反而是很難一眼就看清的「制度面的建構」才是重點。因為身為一個小小的環境 NGO，確實沒有辦法把這複雜難解的歷史共業一肩扛上身。我們透過細緻研究，要求政府建構出清楚可以執行的制度，才是最適合的位置。最後剩下的就是等待第一線執法人員增加、民眾意識的提升、跨部會的協作機制成為常態運作等。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div aria-hidden="true" aria-labelledby="articleModalLabel15" class="modal fade" id="articleModal15" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered  modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="articleModalLabel15">面對自己</h4><button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>
            </div>
            <div class="modal-body">
                <div class="article-full-content">
                    <p>倡議者的心理素質，一直都是倡議工作的關鍵。</p>
                    <p>從倡議目標的設定開始，就必須不間斷的省思哪裡我們可以著力。有時一些非常細微的改變會非常耗力，例如：違章工廠到底有多少？要回答這個問題，就必須去爬梳經濟部的工廠登記、農業部的農地流失數據、內政部的衛星變異點資料。然後我們會發現這些政府資料常常沒有公開，就算有公開，每個單位啟動資料累積的年度也不相同，非常難以比對。</p>
                    <p>因此如何將複雜難解的資訊去蕪存菁，找出一個可以說清楚講明白的路徑，這件事本身就非常有意義。因為民眾參與的前提是有充足資訊、政府部門願意開始調整的前提，也是有被指出明確無法反駁的問題亟需改善。在這冗長、枯燥的資訊梳理過程，倡議者要能耐得住無聊，接受沒有掌聲，一頭鑽進艱難的轉譯工作。這些歷程其實非常需要有夥伴、團隊一起協作，因為一個人不可能包辦所有事項，所以我們會與擅長處理數據、製作圖資、公共溝通、媒體經營等夥伴一起協作。因此，倡議者的心理特質上必須能團隊合作，知曉自己一個人是無法創造影響力的。</p>
                    <p>再者，當倡議目標很宏大時，倡議者通常會很沒成就感。因為往往需要非常長的時間，才有可能達成偉大的目標。我必須指出，遠大的目標可以是願景，但要能梳理出「可達成的階段目標」才是重點。因為宏大的願景是透過一點一滴小成果累積出來，絕對不是一觸可及。另外，要做制度面的改革，在台灣社會情境下，往往無法就事論事談論議題本身，會有許多政治因素牽涉其中。因此倡議者也需要有能力分辨出哪些事情是自己的責任，哪些事情其實不可控。當那些不可控的事情發生，導致倡議失敗時，並不需要對自己咎責。休息一下，保持信念，重新梳理運動目標，才是倡議者必須努力習得的能力。</p>
                    <p>在跟民眾對話時，如果倡議者願意說出多一點工作上遇到的困難、瓶頸，願意聽你講話的人就可以理解，其實倡議者跟所有人一樣，都是能力有限的人。喚起民眾的同理心、願意支持理念，並理解倡議是一種持續在困境中找方法前進的態度。這樣的社會改變或許比每個倡議具備輝煌戰果，更重要。這也是我認為倡議者真正的強大，不一定是促成巨大改變，而是可以帶領民眾看見問題的核心、擁抱通往美好願景的路徑。要達到這一點，倡議者必須時時刻刻提醒自己：過於強調犧牲的人，往往演變成我執很強的個人主義，在當代有時反而不利於議題的推廣、理念的擴散。</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">回到主頁</button>
                </div>
            </div>
        </div>
    </div>
</div>
    
  `
}).mount('#factory_modal');