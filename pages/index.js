import Link from "next/link";
import MasterPage from "../components/Master/Master";
import fetch from "isomorphic-unfetch";
import { bitcoinUrlBase, bitcoinApiKey, newsUrlBase, newsApiKey } from "../config/config";
import BitcoinPrice from "../components/BitcoinPrice/BitcoinPrice";
import Articles from "../components/Articles/Articles";

const Index = props => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del bitcoin</h2>
            <BitcoinPrice price={props.priceBitcoinInArs}/>
      </div>
      <div className="col-md-8">
        <h2>Noticias sobre bitcoin</h2>
        <Articles articles={props.news}/>
      </div>
    </div>
  </MasterPage>
);

Index.getInitialProps = async () => {
  const url = `${bitcoinUrlBase}v1/cryptocurrency/listings/latest?start=1&limit=1&convert=ARS`;
  const newsUrl = `${newsUrlBase}v2/everything?q=bitcoin&from=${Date.now}&sortBy=publishedAt&apiKey=${newsApiKey}&language=es`;
  const response = await fetch(url, {
    headers: {
      "X-CMC_PRO_API_KEY": bitcoinApiKey
    }
  });

  const newsResponse = await fetch(newsUrl);

  const data = await response.json();
  const newsData = await newsResponse.json();

  return {priceBitcoinInArs: data.data[0].quote.ARS, news: newsData.articles};
};

export default Index;
