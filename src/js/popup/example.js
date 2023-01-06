const Loader = async () => import('@emurgo/cardano-serialization-lib-browser')

const main = async () => {
  const CardanoWasm = await Loader()
  console.log(CardanoWasm)

  console.log(CardanoWasm.NetworkInfo.mainnet)

  const magicProtocol = CardanoWasm.NetworkInfo.mainnet().protocol_magic()
  console.log(magicProtocol)
}

export default function () {
  // alert("hello! (find me on src/js/popup/example.js)");

  main()  
};
