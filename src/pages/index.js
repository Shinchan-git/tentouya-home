import * as React from "react"
import { Link } from "gatsby"
import "../css/global.css"
import Header from "../components/header"
import PageTopSentence from "../components/pageTopSentence"
import SectionLarge from "../components/sectionLarge"
import ShopLink from "../components/shopLink"
import Card from "../components/card"
import Footer from "../components/footer"
import { kamenokoPapercraft, tentouPostCardA, yahoshiTShirt, fukuwarai } from "../components/worksData"
import { KamenokoImg, PostcardAImg, YahoshiTShirtImg, FukuwaraiImg } from "../components/thumbnailImages"

const IndexPage = () => {
  return (
    <div className="bg">
      <html lang="ja" />
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />

      <Header />

      <PageTopSentence>
        <p className="medium main-text">
          てんとうやは、テントウムシを中心に昆虫グッズを作っています。
        </p>
      </PageTopSentence>

      <SectionLarge title="SNS" id="sns">
        <p class="main-text">
          Twitterでグッズやイベント出展の情報を更新しています。
        </p>
        <ShopLink title="Twitter" link="https://twitter.com/tentouya64?lang=ja">
          <span className="link highlight">@tentouya64&nbsp;&#8599;</span>
        </ShopLink>
      </SectionLarge>

      <SectionLarge title="グッズ" id="works">
        <Link to={"/works"} className="link highlight">すべてみる&nbsp;&gt;</Link>

        <Card title={kamenokoPapercraft.title} description={kamenokoPapercraft.description} link={kamenokoPapercraft.link}>
          <KamenokoImg page="top" />
        </Card>
        <Card title={tentouPostCardA.title} description={tentouPostCardA.description} link={tentouPostCardA.link}>
          <PostcardAImg page="top" />
        </Card>
        <Card title={yahoshiTShirt.title} description={yahoshiTShirt.description} link={yahoshiTShirt.link}>
          <YahoshiTShirtImg page="top" />
        </Card>

        <Link to={"/works"} className="link highlight">もっとみる&nbsp;&gt;</Link>
      </SectionLarge>

      <SectionLarge title="テントウ福笑い" id="fukuwarai">
        <p class="main-text">
          Web上で遊べるテントウムシの福笑いを作ってみました。
        </p>
        <Card description={fukuwarai.description} link={fukuwarai.link} routerLink="true">
          <FukuwaraiImg />
        </Card>
      </SectionLarge>

      <Footer />
    </div>
  )
}

export default IndexPage
