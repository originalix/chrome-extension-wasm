import '../img/icon-128.png'
import '../img/icon-34.png'

console.log('Background')

const Loader = async () => import('@emurgo/cardano-serialization-lib-browser')

const main = async () => {
  const CardanoWasm = await Loader()
  console.log(CardanoWasm)

  const magicProtocol = CardanoWasm.NetworkInfo.mainnet().protocol_magic()
  console.log(magicProtocol)
}

main()  
