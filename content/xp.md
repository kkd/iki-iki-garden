---
title: eXtreme Programming (XP)
tags: [concept, ソフトウェア開発, アジャイル, Kent Beck, 全体性]
sources: [src-tkskkd-world-scrapbox, src-note-kkd, src-medium-kkd, src-giantech-blog]
updated: 2026-04-16
---
# eXtreme Programming（XP）

Kent Beckが提唱したソフトウェア開発の方法論。1999年『eXtreme Programming Explained（XPE・白本）』で世に出た。[[agile]] のオリジンの一つ。Takeshiが最も深く影響を受けた体系であり、Kent Beckを「感性豊かなエンジニア」として尊敬してきた。XPとの出会いは2000年前後（2024年時点で24年前）、ruby-mlでのxUnitとの出会いに端を発する。

## Kent Beck ── 感性豊かなエンジニア

XPを単なる工学的手法として読むとその本質を取り逃がす。Kent Beckは [[christopher-alexander]]（クリストファー・アレグザンダー）の『パタン・ランゲージ』『時を超えた建設の道』を重要な参照軸にし、さらに [[permaculture]]（パーマカルチャー）を取り入れて一時期「**Perma Programming**」を標榜していたことさえある。「効率化」や「生産性」の語彙ではなく、**調和・生命・全体性**の語彙で開発を語ろうとした希有なエンジニア。

> かつてケントとウォードがパタンランゲージで利用者が自身でソフトウェアを設計できるのでは期待した…（2021/9/9 tkskkd）

## 思想的源流

```
クリストファー・アレグザンダー（パタン・ランゲージ/時を超えた建設の道）
        ↓
パーマカルチャー（Kent Beck = Perma Programming）
        ↓
eXtreme Programming（白本 XPE）
        ↓
アジャイル / GoF / TDD / リファクタリング
```

単なるソフトウェア工学の潮流ではなく、**建築の全体性論と生態系デザインから流れ込んできた** 方法論である点がXPの本質。→ [[zoka]] / [[wholeness]]

## Takeshiの再解釈

Scrapbox・note記事に繰り返し現れる、XPを別の言葉で捉え直す試み：

### XP = Balanced Programming

> XPはBalanced Programmingなんだと思う。プログラミングを基軸に調和を生み出す取り組み。社会との調和、顧客との調和、同僚との調和、人生との調和。結果として個人もビジネスも豊かになる。当時XPという名はインパクト重要でよかったのかもしれないが中身はBPと感じる。（2021/12/8）

### XP = Harmony（調和）

> XPを調和(Harmony)という概念で捉え直したらどうだろうか？ 効率化でもなく合理化でもなく価値提供でもなく、不調和な状況を調和し続ける試み。自分から始まり、プロダクト、チーム、顧客と広がっていく。（2022/1/22）

### XP白本・スクラムへの批評とセンタリングプロセス仮説（2021/8/19）

> XP白本初版の過ちは「**すべてやれ**」とだけ言ったこと、スクラムの過ちは「**フレームワークでやれ**」と言ったこと（確率論的）、「**今の状況で現場を一番強めるものから始める**」がいつでも現場の最適解であり、センタリングプロセス、という仮説。（[2021/8/19](https://www.tkskkd.com/2021/081912233)）

これはXP・スクラムへの愛着と批評が同居した核心的な発言：
- 白本の「すべてやれ」 → フレームワーク形骸化の温床
- スクラムの「フレームワークでやれ」 → [[framework-paradox]] の具現化
- **センタリングプロセス** ＝ 「今ここにある文脈から始める」。アレグザンダーの構造保存変容・[[ga-shu-ha-ri]] の「我」と同型の発想

→ [[framework-paradox]] [[structure-preserving-transformation]]

### XP = 持続可能性（Sustainability）

> 2006年のちょうどの頃にXPと持続可能性のリンクに気づいたらしい。その後パーマカルチャーを知って両者の本質的な繋がりに驚愕したのでした。

→ [[permaculture]] との繋がりはKent Beckだけの個人的関心ではなく、XPの核にある持続可能性の思想として理解できる。この2006年の気づきが後に [[circular-society]]（循環型社会）への20年コミットの出発点となる。

### XPのインテグリティ = ザ・メンタルモデル

> XPのインテグリティの話とザ・メンタルモデルのアプローチを比較してみた。どちらも「自分の内側をみていく」という意味で一緒。

→ [[mental-model]] / [note記事「分離から統合に至る２つの内省アプローチ〜XPとザ・メンタルモデル」](https://note.com/kkd/n/nf10c85aa29ac)

### TDD = 生命の働き

> 自分がTDDで感じたのはTDDは生命の働きと同じということだった。テストとは生きているとはどういうことかを示し、グリーンを保つとは生きている証しであり、リファクタリングとは生きたまま内部構造を精緻に進化させていくこと。レッドはサナギの中で身体を作り直す完全変態のようだ。（2021/10/9）

TDDを「バグを見つける仕組み」ではなく、[[christopher-alexander]] の **構造保存変容（Structure-Preserving Transformation）** としてのコードの展開として理解する。→ [[zoka]]

## 「忘れられたXPer」── 日本アジャイル昔ばなし

XP祭り2021で発表した [『忘れられたXPer』](https://www.slideshare.net/kkd/xper-xp2021)。1999年からのXP導入・XPJUG立ち上げ・オブジェクト倶楽部/ESM・『eXtreme Programmingテスト技法』出版・2000年代のアジャイル普及と苦難・愛媛移住(2010)を個人史として語った。

> 闇にさす光をXPでみて、再び闇に覆われて地下活動をしていたら2007年くらいから潮目が変わって光が指してきたという感じ。

> アジャイルという言葉が使えなかった時代があったなんて今の人わからないよね、きっと。紙爆弾との戦いとか。

### XPとの出会いから気づいたこと

> 常にその時認知する「全体をどうよくするか」しか考えてなかった気がする。全体が小さい（＝自分）と周辺だけ。全体が広がってくる（業界とか国とか）とそのレベルで何が自分にできることなのかをひらめいてやってた。

→ 個人XP → チームXP → コミュニティXP → 業界XP という **全体性の拡張** としてキャリアを振り返る視点。

## XP祭り2022 基調講演 ── 「XPの旅〜そして全体性へ〜」

- スライド: [XPの旅〜そして全体性へ〜](https://www.docswell.com/s/tkskkd/5MN4XZ-journey-of-xp-xpjug2022)
- note: [XP祭り2022で基調講演をした報告と、いくつかのとても重要な補足について](https://note.com/kkd/n/n2896894c0192)

XPからアジャイル → パタン・ランゲージ → [[christopher-alexander]] → [[wholeness]]（全体性）へ辿り着く個人的な探求の軌跡。「怒りを創造エネルギーに転化できると、いろいろなものが創造できる」という [[david-hawkins]] 意識レベルへの応用も含む。

XP祭りが終わったら **全体性をテーマに本を書きたい** という構想はここから始まった（→ 『[[agile-health-kaizen]]』『The Small Beautiful Village』『パタン・セオリー』翻訳に結実）。

## XP祭り2023 ── 「人間中心から人間理解のパラダイムへ」

プロポーザル主題。[[nvc]]・[[mental-model]] を経由した、人間中心設計の先にある「人間の内側を理解する」パラダイムへの転換の提案。

## 意味の希薄化と伝える役割

> TDDもアジャイルもパタン・ランゲージもどれもそうだけど、最初はセンセーショナルな登場をした手法や思想が、時間が経つにつれてどれも意味の希薄化、劣化が進行していく。…「そうじゃない」って否定するのではなく、こぼれ落ちてしまった大事なことを拾って伝えていくのが、おそらく方法論・思想のエヴァンジェリストとして重要なのだろう。（2024/11/16）

オリジンから知る者としての責任。これが「忘れられたXPer」「XPの旅」連作の動機。

## 関連書籍

- **『eXtreme Programming Explained（白本 XPE）』** Kent Beck — オリジン。白本読書会を終えた人向けの参考文献を平鍋さん（正統派）とTakeshi（パーマカルチャー・パタン・NVC系）で網羅的に語りたい、という構想がある
- 『eXtreme Programmingテスト技法』— XPJUG初期の共著
- 『リファクタリング（第2版）』

## 関連ページ

- [[agile]] — アジャイル：XPを含む広義の系譜。Takeshiは「通り過ぎた」と総括
- [[nvc]] NVCを発見したのは、XP白本の参考文献から
- [[christopher-alexander]] — アレグザンダー：XPの思想的源流。パタン・ランゲージ→GoF→XP→アジャイル
- [[permaculture]] — Kent Beckが「Perma Programming」を標榜した源泉。パーマカルチャーに興味を持ってから、XP白本を見たら参考文献に載っていた驚き
- [[values-principles-practices]] — 価値・原則・実践：XP の3層構造とパーマカルチャー・TDDの同型。Takeshiの「価値駆動人生」概念を含む
- [[cross-field-principles]] — 分野を超えて共通する原理：XP×パーマカルチャー×パタン・ランゲージの3つの円が「見えないつながり」への関心の起点
- [[circular-society]] — 循環型社会：2006年「XP=持続可能性」の気づきが起点
- [[zoka]] — 造化：TDD=生命の働き、リファクタリング=構造保存変容の理論的裏付け
- [[wholeness]] — 全体性：XP祭り2022基調講演の到達点
- [[mental-model]] — ザ・メンタルモデル：XPのインテグリティと「自分の内側をみる」点で同型
- [[felt-state-pattern]] — FSP：XP祭り2023「人間中心から人間理解へ」の現在地
- [[shu-ha-ri]] — 守破離：XP実践における学習段階論
- [[david-hawkins]] — 意識レベル：XP祭り2022での「怒り→創造エネルギー」応用
- [[src-tkskkd-world-scrapbox]] — 出典元（XP関連ページ多数）
- [[src-note-kkd]] — note記事群
- [[src-medium-kkd]] — Medium記事群（TDD対談シリーズ全6回、XP祭り2017、TDDBC）
- [[src-giantech-blog]] — giantech.jp 旧ブログ（XP祭り2014白本話・XPE新訳刊行記念・価値提案駆動TDD・神山.rb）
- [[src-slideshare-kkd]] — SlideShareプレゼン資料110本（XPと環境2007・XP白本参考文献2014・パタン・ランゲージ再考・NOO・忘れられたXPer）

## note.com 関連記事

- [XP祭り2022で基調講演をした報告と、いくつかのとても重要な補足について](https://note.com/kkd/n/n2896894c0192)
- [分離から統合に至る２つの内省アプローチ〜XPとザ・メンタルモデル](https://note.com/kkd/n/nf10c85aa29ac)
- [パーマカルチャーが軽視しているクリストファー・アレグザンダーの挑戦](https://note.com/kkd/n/n02722f82b94f)
- [アレグザンダー勉強会にむけて「私とパターン、そしてアレグザンダー」(1st Decade)](https://note.com/kkd/n/n21d9f15e8737)
- [智慧を身体に刻み込む「我守破離」というモデル](https://note.com/kkd/n/n354d28dbdf00)
- [スクフェス大阪2023 四国トラックの感想とまとめ](https://note.com/kkd/n/n18c5b69ef5de)

## Medium 関連記事

### 『健全なビジネスの継続的成長のためには健全なコードが必要だ』対談シリーズ（2018, 和田卓人氏他）

- [（１）変化に適応するために開発者がしてきたこと](https://medium.com/@kkd/8794826bc515)（2018-02-04）
- [（２）粘土のように設計して外側のフィードバックループを回す](https://medium.com/@kkd/e51c720ce126)（2018-02-11）
- [（３）ヘロヘロスクラム、内部の質、変化のための設計](https://medium.com/@kkd/7df81f2c66cf)（2018-02-19）
- [（４）ぼくらはコードに住んでいる：エンジニアの「生き生き」とコードの関係性](https://medium.com/@kkd/58361230ffc2)（2018-02-25）
- [（５）マニアが潰したテスト駆動開発](https://medium.com/@kkd/cb5a6e94b021)（2018-03-19）
- [（６）希薄化したTDD、プロダクトの成長のために必要なものは？](https://medium.com/@kkd/65c43b5a8fe2)（2018-03-29）
- [対談リンク集（全６回）](https://medium.com/@kkd/6b13c8b344ac)（2018-04-03）

### XP祭り・TDDBC
- [ソフトウェア開発の基本的な問題〜18年前からXPが提示するリスクの紹介](https://medium.com/@kkd/2d137c892c)（2017-10-22）
- [13年ぶりのマイメタファーブームを共有してきた 〜 XP祭り2017](https://medium.com/@kkd/cdae81263f1)（2017-09-22）
- [８年越しの約束を果たした話〜TDDBC in 香川の開催の思い出](https://medium.com/@kkd/c4cc9f8a7ea2)（2018-07-23）
- [『テスト駆動開発をやめて、なお残すべき習慣とは』連載完結！記事一覧](https://medium.com/@kkd/461f2fed19ee)（2018-08-01）

## giantech.jp 関連記事（2013〜2015）

- [価値提案駆動 -- TDDとの類似点](http://giantech.jp/2013/04/04/value-proposition-driven/)（2013-04-04）── UVP駆動開発とTDDの同型性
- [XP祭り2014で白本の参考文献について話してきます](http://giantech.jp/2014/08/22/i-am-going-to-talk-on-xpfestival-2014/)（2014-08-22）
- [あなたがXP祭り2014でこのセッションを選ぶべき３つの理由](http://giantech.jp/2014/08/22/three-reasons-why-you-should-choose-the-session-at-xpfestival-2014/)（2014-08-22）
- [XP祭り2014でXP厨ぶりをアピールしてきました](http://giantech.jp/2014/09/08/i-talked-about-xpe-in-xpfestival2014/)（2014-09-08）
- [第一回 神山.rbでXP祭り2014のXP白本話をする意味とは？](http://giantech.jp/2014/11/08/kamiyama-rb-vol1/)（2014-11-08）
- [エクストリームプログラミング新訳刊行記念：第一世代からの推薦状](http://giantech.jp/2015/06/25/xpe-2nd-renewal/)（2015-06-25）── XPE新訳刊行に寄せた第一世代XPerとしての声明

## 関連スライド（SlideShare）

### 最古の記録: XP = エコロジー活動（2007）
- **[XPと環境の微妙な関係 夜LT版](https://www.slideshare.net/slideshow/xplt/6621118)**（XP祭り2007）── 「XPはソフトウェア開発におけるエコロジー活動である」を公に明言。sustainability/xp/agileタグ

### XP白本と参考文献シリーズ（2014）
- [人生で大事なことは XP白本と参考文献に教わった](https://www.slideshare.net/slideshow/xp-38768205/38768205)（XP祭り2014）── パーマカルチャー・パタン・ランゲージ・NVCが参考文献だったという3円の発見の核
- [XP白本と参考文献に教わった in ESM](https://www.slideshare.net/slideshow/about-annotatedbibliographyinx-pinesm/38979827)（2014ファイナル版）
- [XP白本と参考文献に教わった IN 神山](https://www.slideshare.net/slideshow/about-annotatedbibliographyinx-pver3/41435521)（神山.rb 2014-11-07）

### パタン・ランゲージ → NOO の探求
- [Agile Development Design By Pattern Language](https://www.slideshare.net/slideshow/agile-development-design-by-pattern-language/22005644)（Agile Japan 2013）
- [Open Future Door By Pattern Language](https://www.slideshare.net/slideshow/open-future-door-by-pattern-language-20141011/40186961)（Agile Tour Osaka 2014）
- [Metaphor We Design By 失われたメタファーの秘密](https://www.slideshare.net/slideshow/metaphor-we-design-by/79841276)（XP祭り2017）
- [ソフトウェア開発とパタン・ランゲージ再考](https://www.slideshare.net/slideshow/ss-131755865/131755865)（SEA Forum 2017）
- [アジャイル・スクラム時代のパタン・ランゲージとアレグザンダー理論](https://www.slideshare.net/slideshow/ss-236317486/236317486)（Scrum Festa Osaka 2020）── NOOに正面から取り組む
- [創造的なメタファー思考のススメ](https://www.slideshare.net/slideshow/ss-244477497/244477497)（2021-03）

### 昔ばなし・XPの旅
- [日本アジャイル昔話『忘れられたXPer』XP祭り2021](https://www.slideshare.net/slideshow/xper-xp2021/250230705)
- [XPの旅〜そして全体性へ〜 XPJUG2022](https://www.docswell.com/s/tkskkd/5MN4XZ-journey-of-xp-xpjug2022)
- [[japan-agile-history]] — 日本アジャイル昔ばなし：XPJUG草創期からの歴史
