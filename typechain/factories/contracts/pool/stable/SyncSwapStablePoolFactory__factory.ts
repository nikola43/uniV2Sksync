/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SyncSwapStablePoolFactory,
  SyncSwapStablePoolFactoryInterface,
} from "../../../../contracts/pool/stable/SyncSwapStablePoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_master",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidTokens",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployData",
    outputs: [
      {
        internalType: "bytes",
        name: "deployData",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getSwapFee",
    outputs: [
      {
        internalType: "uint24",
        name: "swapFee",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "master",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0004000000000002000700000000000200000000030100190000006003300270000001300430019700030000004103550002000000010355000001300030019d000100000000001f0000000101200190000000530000c13d0000008006000039000000400060043f0000000001000031000000040110008c0000018e0000413d0000000201000367000000000101043b000000e001100270000001340210009c000001310000613d000001350210009c0000009a0000613d000001360210009c000001520000613d000001370210009c0000017d0000613d000001380110009c0000018e0000c13d0000000001000416000000000110004c0000018e0000c13d0000000002000031000000040120008a0000013103000041000000200410008c000000000400001900000000040340190000013101100197000000000510004c000000000300a019000001310110009c00000000010400190000000001036019000000000110004c0000018e0000c13d00000004010000390000000201100367000000000101043b0000013b0310009c0000018e0000213d0000000401100039000700000006001d04bb04480000040f0000013103000041000000400420008c000000000400001900000000040340190000013102200197000000000520004c000000000300a019000001310220009c00000000020400190000000002036019000000000220004c0000018e0000c13d0000000203000367000000000213034f000000000202043b000001320420009c0000018e0000213d0000002001100039000000000113034f000000000101043b000001320310009c0000018e0000213d000000000312004b000001c00000c13d0000014901000041000000800010043f0000008001000039000000040200003904bb043f0000040f0000000001000416000000000110004c0000018e0000c13d0000000001000031000000bf02100039000000200300008a000000000232016f0000009f0320008c000000630000213d000001480100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904bb043f0000040f000000400020043f0000001f0210018f00000002030003670000000504100272000000710000613d00000000050000190000000506500210000000000763034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b000000690000413d000000000520004c000000800000613d0000000504400210000000000343034f0000000302200210000000a004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f00000000002404350000013102000041000000200310008c000000000300001900000000030240190000013101100197000000000410004c000000000200a019000001310110009c00000000010300190000000001026019000000000110004c0000018e0000c13d000000a00100043d000001320210009c0000018e0000213d000000800010043f00000140000004430000016000100443000000200100003900000100001004430000000101000039000001200010044300000100010000390000008002000039000001330300004104bb04350000040f0000000001000416000000000110004c0000018e0000c13d0000000002000031000000040120008a0000013103000041000000a00410008c000000000400001900000000040340190000013101100197000000000510004c000000000300a019000001310110009c00000000010400190000000001036019000000000110004c0000018e0000c13d00000002010003670000000403100370000000000403043b000001320340009c0000018e0000213d0000002403100370000000000503043b000001320350009c0000018e0000213d0000004403100370000000000303043b0000013206300197000001320330009c0000018e0000213d0000006403100370000000000303043b0000013207300197000001320330009c0000018e0000213d0000008401100370000000000101043b0000013b0310009c0000018e0000213d0000000401100039000400000004001d000500000005001d000600000006001d000700000007001d04bb04480000040f0000013c03000041000000400500043d00000000003504350000000403500039000000040400002900000000004304350000002403500039000000050400002900000000004304350000004403500039000000060400002900000000004304350000006403500039000000070400002900000000004304350000008403500039000000a00400003900000000004304350000000008020019000000a40250003900000000008204350000001f0380018f000700000005001d000000c40250003900000002011003670000000504800272000000ec0000613d000000000500001900000005065002100000000007620019000000000661034f000000000606043b00000000006704350000000105500039000000000645004b000000e40000413d000000000530004c000000fb0000613d0000000504400210000000000141034f00000000044200190000000303300210000000000504043300000000053501cf000000000535022f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f0000000000140435000000000182001900000000000104350000000001000414000600000001001d0000013901000041000000000010043900000000010004120000000400100443000000240000044300008005010000390000004402000039000500000008001d04bb03f70000040f0000013202100197000000040120008c000001170000613d00000005010000290000001f01100039000000200300008a000000000131016f000000c404100039000000200600003900000006010000290000000703000029000000000503001904bb03a90000040f000000000110004c000001dd0000613d0000000102000031000000200120008c000000200100003900000000010240190000001f01100039000000600310018f00000007010000290000000001130019000000000331004b000000000300001900000001030040390000013b0410009c0000005c0000213d00000001033001900000005c0000c13d000000400010043f000000200220008c0000018e0000413d000000070200002900000000020204330000013d0320009c0000018e0000213d00000000002104350000002002000039000000000300001904bb04350000040f0000000001000416000000000110004c0000018e0000c13d000000040100008a00000000011000310000013102000041000000000310004c000000000300001900000000030240190000013101100197000000000410004c000000000200a019000001310110009c00000000010300190000000001026019000000000110004c0000018e0000c13d000000400100043d000700000001001d000001390100004100000000001004390000000001000412000000040010044300000024000004430000800501000039000000440200003904bb03f70000040f0000013202100197000000070100002900000000002104350000002002000039000000000300001904bb04350000040f0000000001000416000000000110004c0000018e0000c13d000000040100008a00000000011000310000013102000041000000400310008c000000000300001900000000030240190000013101100197000000000410004c000000000200a019000001310110009c00000000010300190000000001026019000000000110004c0000018e0000c13d04bb04640000040f000700000001001d04bb046d0000040f000000070200002900000132022001970000000000200435000000200000043f000600000001001d0000004002000039000700000002001d000000000100001904bb03e00000040f000000060200002900000132022001970000000000200435000000200010043f0000000001000019000000070200002904bb03e00000040f000000000101041a0000013202100197000000400100043d00000000002104350000002002000039000000000300001904bb04350000040f0000000001000416000000000110004c0000018e0000c13d000000040100008a00000000011000310000013102000041000000000310004c000000000300001900000000030240190000013101100197000000000410004c000000000200a019000001310110009c00000000010300190000000001026019000000000110004c000001910000613d0000000001000019000000000200001904bb043f0000040f0000000101000039000500000001001d000000000101041a000600000001001d000000400200043d000700000002001d04bb048b0000040f0000000603000029000000070700002900000000001704350000000102300190000001b30000c13d000001000200008a000000000223016f00000020037000390000000000230435000000000110004c000000200200003900000000020060190000002002200039000000000107001904bb049d0000040f0000002001000039000000400200043d000600000002001d00000000001204350000002002200039000000070100002904bb04760000040f000000060300002900000000023100490000000001030019000000000300001904bb04350000040f000000050200002900000000002004350000013a0300004100000020047000390000000002000019000000000512004b000001a40000813d0000000005240019000000000603041a000000000065043500000020022000390000000103300039000001b80000013d000000000321004b000000000302001900000000030120190000000002014019000000400500043d000000000120004c000001cc0000c13d000001490100004100000000001504350000000402000039000000000105001904bb043f0000040f000400000003001d0000013e0100004100000000001504350000000001000414000000040320008c000001fd0000613d000000040400003900000020060000390000000003050019000500000002001d000600000005001d000000060500002904bb03a90000040f00000006050000290000000502000029000000000110004c000001fd0000c13d0000000302000367000000400100043d00000001040000310000001f0340018f0000000504400272000001ec0000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000001e40000413d000000000530004c000001fb0000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f0000000000240435000000010200003104bb043f0000040f0000000101000031000000200310008c000000200300003900000000030140190000001f03300039000000600330018f00000000060500190000000005530019000000000335004b000000000400001900000001040040390000013b0350009c0000005c0000213d00000001034001900000005c0000c13d000500000002001d000600000005001d000000400050043f000000200110008c0000018e0000413d0000000001060433000000ff0210008c0000018e0000213d000000130210008c0000021d0000413d000001480100004100000000001004350000001101000039000000040010043f0000002402000039000000000100001904bb043f0000040f000000120110008904bb03650000040f0000013e0200004100000006030000290000000000230435000200000001001d00000000010004140000000402000029000000040220008c0000022f0000613d0000000404000039000000200600003900000004020000290000000603000029000000000503001904bb03a90000040f000000000110004c000001dd0000613d0000000101000031000000200210008c000000200200003900000000020140190000001f02200039000000600220018f00000006030000290000000002320019000300000002001d0000013b0220009c0000005c0000213d0000000302000029000000400020043f000000200110008c0000018e0000413d00000006010000290000000001010433000000ff0210008c0000018e0000213d000000120210008c000002160000213d000000120110008904bb03650000040f00000003040000290000006002400039000000020300002900000000003204350000004002400039000000040300002900000000003204350000008002400039000000000012043500000020024000390000000501000029000600000002001d0000000000120435000000070100002900000000001404350000013f0140009c0000005c0000213d0000000302000029000000a001200039000000400010043f0000000001020433000700000001001d0000013b0110009c0000005c0000213d0000000101000039000200000001001d000000000101041a04bb048b0000040f000000200210008c000002750000413d00000007040000290000001f0240003900000005022002700000013a022000410000013a03000041000000200440008c0000000002034019000000010300003900000000003004350000001f0110003900000005011002700000013a01100041000000000312004b000002750000813d000000000002041b0000000102200039000002700000013d00000007010000290000001f0110008c0000028a0000a13d00000002010000290000000000100435000000200100008a0000000702000029000000000212016f0000013a01000041000000200300003900000000040000190000000306000029000000000524004b0000000005630019000002980000813d0000000005050433000000000051041b000000200440003900000020033000390000000101100039000002810000013d0000000701000029000000000110004c0000000001000019000002900000613d0000000601000029000000000101043300000007040000290000000302400210000000010300008a000000000223022f000000000232013f000000000121016f0000000102400210000002a70000013d0000000703000029000000000232004b000002a40000813d00000007020000290000000302200210000000f80220018f000000010300008a000000000223022f000000000232013f0000000003050433000000000223016f000000000021041b000000070100002900000001011002100000000202000029000000000121019f0000000202000029000000000012041b000000400300043d00000040013000390000000402000029000000000021043500000040010000390000000000130435000000200130003900000005020000290000000000210435000700000003001d000001400230009c0000005c0000213d00000007030000290000006002300039000600000002001d000000400020043f000000000203043304bb03e00000040f00000000040100190000000701000029000001410110009c0000005c0000213d0000000701000029000000e4011000390000000602000029000000000121004b0000005c0000413d000000070100002900000084011000390000014202000041000000000021043500000084030000390000000001000019000000060200002904bb04090000040f000600000001001d000000000110004c000002f00000c13d0000000302000367000000400100043d00000001040000310000001f0340018f0000000504400272000002df0000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000002d70000413d000000000530004c000002ee0000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f0000000000240435000000010200003104bb043f0000040f000001390100004100000000001004390000000001000412000000040010044300000024000004430000800501000039000000440200003904bb03f70000040f000001430200004100000000002004390000013201100197000300000001001d00000004001004430000800201000039000000240200003904bb03f70000040f00000006020000290000013202200197000600000002001d000000000110004c0000018e0000613d000000400300043d000000440130003900000060020000390000000000210435000000240130003900000002020000390000000000210435000001440100004100000000001304350000000401300039000000060200002900000000002104350000000001000414000100000001001d000200000003001d0000006402300039000000070100002904bb04760000040f0000000302000029000000040220008c000003230000613d00000002030000290000000004310049000000010100002900000003020000290000000005030019000000000600001904bb03720000040f000000000110004c000002d00000613d00000002010000290000013b0110009c00000005030000290000005c0000213d0000000201000029000000400010043f0000000000300435000000200000043f0000004002000039000700000002001d000000000100001904bb03e00000040f00000004020000290000000000200435000000200010043f0000000001000019000000070200002904bb03e00000040f000000000201041a00000145022001970000000603000029000000000232019f000000000021041b00000004010000290000000000100435000000200000043f0000000001000019000000070200002904bb03e00000040f00000005020000290000000000200435000000200010043f0000000001000019000000070200002904bb03e00000040f000000000201041a00000145022001970000000603000029000000000232019f000000000021041b000000400100043d000000000031043500000130020000410000000003000414000001300430009c0000000003028019000001300410009c00000000010280190000004001100210000000c002300210000000000121019f00000146011001c70000800d02000039000000030300003900000147040000410000000505000029000000040600002904bb04b10000040f00000001012001900000018e0000613d000000400100043d000000060200002900000000002104350000002002000039000000000300001904bb04350000040f000000000201001900000001010000390000000a03000039000000000420004c000003710000613d00000001042001900000000004030019000000010400603900000000411400a9000000010220027000000000433300a9000003680000013d000000000001042d0002000000000002000200000006001d000100000005001d0000013005000041000001300630009c00000000030580190000004003300210000001300640009c00000000040580190000006004400210000000000334019f000001300410009c0000000001058019000000c001100210000000000113019f04bb04b10000040f00000001090000290000000003010019000000600330027000000130033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000003950000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b0000038d0000413d000000010220018f000000000640004c000003a50000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d0002000000000002000200000006001d000100000005001d0000013005000041000001300630009c00000000030580190000004003300210000001300640009c00000000040580190000006004400210000000000334019f000001300410009c0000000001058019000000c001100210000000000113019f04bb04b60000040f00000001090000290000000003010019000000600330027000000130033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000003cc0000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000003c40000413d000000010220018f000000000640004c000003dc0000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d0000013003000041000001300410009c00000000010380190000004001100210000001300420009c00000000020380190000006002200210000000000112019f0000000002000414000001300420009c0000000002038019000000c002200210000000000112019f0000014a011001c7000080100200003904bb04b60000040f0000000102200190000003f40000613d000000000101043b000000000001042d0000000001000019000000000200001904bb043f0000040f000000000301001900000130010000410000000004000414000001300540009c0000000001044019000000c001100210000000600220021000000000011200190000014b01100041000000000203001904bb04b60000040f0000000102200190000004060000613d000000000101043b000000000001042d0000000001000019000000000200001904bb043f0000040f0000000006010019000000840130008a0000006405200039000000000700041400000000001504350000004401200039000000600500003900000000005104350000014c010000410000000000120435000000040120003900000000004104350000013001000041000001300420009c00000000020180190000004002200210000001300430009c00000000030180190000006003300210000000000223019f000001300370009c0000000001074019000000c001100210000000000121019f0000014a011001c7000000000260004c0000042a0000613d000080090200003900008006040000390000000105000039000000000306001904bb04b10000040f0000042c0000013d000080060200003904bb04b10000040f0000000102200190000004300000613d000000000101043b000004340000013d00030000000103550000006001100270000101300010019d0000000001000019000000000001042d0000013004000041000001300510009c000000000104801900000040011002100000000001310019000001300320009c000000000204801900000060022002100000000001210019000004bc0001042e0000013003000041000001300420009c0000000002038019000001300410009c000000000103801900000040011002100000006002200210000000000112019f000004bd000104300000001f031000390000013104000041000000000523004b0000000005000019000000000504401900000131062001970000013103300197000000000763004b000000000400a019000000000363013f000001310330009c00000000030500190000000003046019000000000330004c000004610000613d0000000203100367000000000303043b0000013b0430009c000004610000213d00000020011000390000000004310019000000000224004b000004610000213d0000000002030019000000000001042d0000000001000019000000000200001904bb043f0000040f00000004010000390000000201100367000000000101043b0000014d0210009c0000046a0000813d000000000001042d0000000001000019000000000200001904bb043f0000040f00000024010000390000000201100367000000000101043b0000014d0210009c000004730000813d000000000001042d0000000001000019000000000200001904bb043f0000040f0000000003010433000000000032043500000020022000390000000004000019000000000534004b000004820000813d000000000542001900000020044000390000000006140019000000000606043300000000006504350000047a0000013d000000000134004b000004860000a13d000000000132001900000000000104350000001f01300039000000200300008a000000000131016f0000000001120019000000000001042d000000010210019000000001011002700000007f0310018f00000000010360190000001f0310008c00000000030000190000000103002039000000010330018f000000000232004b000004960000c13d000000000001042d000001480100004100000000001004350000002201000039000000040010043f0000002402000039000000000100001904bb043f0000040f0000001f02200039000000200300008a000000000232016f0000000001120019000000000221004b000000000200001900000001020040390000013b0310009c000004aa0000213d0000000102200190000004aa0000c13d000000400010043f000000000001042d000001480100004100000000001004350000004101000039000000040010043f0000002402000039000000000100001904bb043f0000040f000004b4002104210000000102000039000000000001042d0000000002000019000004b30000013d000004b9002104230000000102000039000000000001042d0000000002000019000004b80000013d000004bb00000432000004bc0001042e000004bd000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ee97f7f3000000000000000000000000000000000000000000000000000000004625a94d00000000000000000000000000000000000000000000000000000000531aa03e00000000000000000000000000000000000000000000000000000000d039f6220000000000000000000000000000000000000000000000000000000013b8683f310ab089e4439a4c15d089f94afb7896ff553aecb10793d0ab882de59d99a32eb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6000000000000000000000000000000000000000000000000ffffffffffffffff4625a94d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffff313ce56700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff5f000000000000000000000000000000000000000000000000ffffffffffffff9f000000000000000000000000000000000000000000000000ffffffffffffff1b0100076b9c717b3b283fd8c27e4b3905dc60ecffef61c3be0136a3cabef67cb11806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83784198d900000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffff000000000000000000000000000000000000000002000000000000000000000000000000000000200000000000000000000000009c5d829b9b23efc461f9aeef91979ec04bb903feb3bee4f26d22114abfc7335b4e487b7100000000000000000000000000000000000000000000000000000000672215de00000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000002000000000000000000000000000000000000000000000000000000003cda33511d41a8a5431b1770c5bc0ddd62e1cd30555d16659b89c0d60f4f9f5700000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

type SyncSwapStablePoolFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SyncSwapStablePoolFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SyncSwapStablePoolFactory__factory extends ContractFactory {
  constructor(...args: SyncSwapStablePoolFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _master: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SyncSwapStablePoolFactory> {
    return super.deploy(
      _master,
      overrides || {}
    ) as Promise<SyncSwapStablePoolFactory>;
  }
  override getDeployTransaction(
    _master: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_master, overrides || {});
  }
  override attach(address: string): SyncSwapStablePoolFactory {
    return super.attach(address) as SyncSwapStablePoolFactory;
  }
  override connect(signer: Signer): SyncSwapStablePoolFactory__factory {
    return super.connect(signer) as SyncSwapStablePoolFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SyncSwapStablePoolFactoryInterface {
    return new utils.Interface(_abi) as SyncSwapStablePoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SyncSwapStablePoolFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SyncSwapStablePoolFactory;
  }
}