/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";


interface CurrencyData {
    date: string;
    usd: {
        "$myro"?: number;
        "$wen"?: number;
        "0x0"?: number;
        "1000sats"?: number;
        "eur"?: number;
        "btc"?: number;
        "eth"?: number;
        "bnb"?: number;
        "ada"?: number;
        "dot"?: number;
        "doge"?: number;
        "avax"?: number;
        "shib"?: number;
        "ltc"?: number;
        "busd"?: number;
        "uni"?: number;
        "link"?: number;
        "cro"?: number;
        "wbtc"?: number;
        "matic"?: number;
        "atom"?: number;
        "cake"?: number;
        "eos"?: number;
        "ftm"?: number;
        "algo"?: number;
        "aave"?: number;
        "fil"?: number;
        "eth2"?: number;
        "terra"?: number;
        "etc"?: number;
        "amp"?: number;
        "chz"?: number;
        "okb"?: number;
        "ht"?: number;
        "dai"?: number;
        "cusdc"?: number;
        "comp"?: number;
        "near"?: number;
        "helium"?: number;
        "ftt"?: number;
        "ar"?: number;
        "dag"?: number;
        "sxp"?: number;
        "hbar"?: number;
        "dash"?: number;
        "thetafuel"?: number;
        "uma"?: number;
        "grt"?: number;
        "mdx"?: number;
        "enj"?: number;
        "luna"?: number;
        "one"?: number;
        "ftx"?: number;
        "erg"?: number;
        "iotx"?: number;
        "iotex"?: number;
        "axs"?: number;
        "kcs"?: number;
        "ark"?: number;
        "ecomi"?: number;
        "bnt"?: number;
        "arrr"?: number;
        "sora"?: number;
        "ksm"?: number;
        "bsv"?: number;
        "cel"?: number;
        "btg"?: number;
        "ankr"?: number;
        "band"?: number;
        "bat"?: number;
        "bcn"?: number;
        "brd"?: number;
        "bsc"?: number;
        "btt"?: number;
        "cnd"?: number;
        "cvc"?: number;
        "dcr"?: number;
        "dgb"?: number;
        "drgn"?: number;
        "dsla"?: number;
        "dusk"?: number;
        "egld"?: number;
        "fun"?: number;
        "gas"?: number;
        "gno"?: number;
        "gnt"?: number;
        "gtc"?: number;
        "gto"?: number;
        "gusd"?: number;
        "gxs"?: number;
        "hnt"?: number;
        "hot"?: number;
        "hsr"?: number;
        "icx"?: number;
        "inr"?: number;
        "iost"?: number;
        "iota"?: number;
        "jpy"?: number;
        "kmd"?: number;
        "knc"?: number;
        "krw"?: number;
        "ksp"?: number;
        "lbc"?: number;
        "leo"?: number;
        "loom"?: number;
        "lrc"?: number;
        "lsk"?: number;
        "mana"?: number;
        "mco"?: number;
        "mda"?: number;
        "miota"?: number;
        "mkr"?: number;
        "mln"?: number;
        "mona"?: number;
        "msr"?: number;
        "mtl"?: number;
        "music"?: number;
        "nano"?: number;
        "nas"?: number;
        "nav"?: number;
        "ncash"?: number;
        "ndn"?: number;
        "neo"?: number;
        "nkn"?: number;
        "npxs"?: number;
        "nuls"?: number;
        "nxt"?: number;
        "ocean"?: number;
        "ogn"?: number;
        "omg"?: number;
        "ont"?: number;
        "oxt"?: number;
        "pax"?: number;
        "pay"?: number;
        "phb"?: number;
        "pivx"?: number;
        "poe"?: number;
        "poly"?: number;
        "powr"?: number;
        "ppt"?: number;
        "pundi"?: number;
        "qtum"?: number;
        "rcn"?: number;
        "rdn"?: number;
        "rep"?: number;
        "req"?: number;
        "ren"?: number;
        "rev"?: number;
        "rlc"?: number;
        "rsr"?: number;
        "rune"?: number;
        "rvn"?: number;
        "sai"?: number;
        "salt"?: number;
        "sc"?: number;
        "seele"?: number;
        "senso"?: number;
        "snt"?: number;
        "snx"?: number;
        "sol"?: number;
        "srm"?: number;
        "steem"?: number;
        "storj"?: number;
        "storm"?: number;
        "strax"?: number;
        "strk"?: number;
        "strm"?: number;
        "stx"?: number;
        "sub"?: number;
        "sushi"?: number;
        "swth"?: number;
        "sys"?: number;
        "tct"?: number;
        "tel"?: number;
        "theta"?: number;
        "thor"?: number;
        "tomo"?: number;
        "trx"?: number;
        "tt"?: number;
        "tusd"?: number;
        "ubt"?: number;
        "ubx"?: number;
        "usdc"?: number;
        "usdt"?: number;
        "utk"?: number;
        "vet"?: number;
        "vtho"?: number;
        "waves"?: number;
        "waxp"?: number;
        "wbnb"?: number;
        "wtc"?: number;
        "xch"?: number;
        "xem"?: number;
        "xlm"?: number;
        "xmr"?: number;
        "xrp"?: number;
        "xtz"?: number;
        "xvg"?: number;
        "xwc"?: number;
        "yfi"?: number;
        "yfii"?: number;
        "zec"?: number;
        "zen"?: number;
        "zil"?: number;
        "zrx"?: number;
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasCurrency(obj: CurrencyData['usd'], key: string): key is keyof CurrencyData['usd'] {
    return Object.prototype.hasOwnProperty.call(obj, key);
}



function useCurrencyInfo(currency:string){

    const [data,setData] =useState<number | undefined>();

    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((res)=>{res.json()})
    .then((res:CurrencyData | void) =>{
        if (res && hasCurrency(res.usd, currency)) {
            setData((res as CurrencyData).usd[currency]); // Set the data if response is not void
        } else {
            console.error("Received undefined response from API.");
        }
    })
    .catch((error) => console.error("Error fetching currency data:", error));

    
},[currency])
return data;}

export default useCurrencyInfo;