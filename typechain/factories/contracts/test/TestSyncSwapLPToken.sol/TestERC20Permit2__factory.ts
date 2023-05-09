/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestERC20Permit2,
  TestERC20Permit2Interface,
} from "../../../../contracts/test/TestSyncSwapLPToken.sol/TestERC20Permit2";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Expired",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "permit2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x00040000000000020008000000000002000000000301001900000060033002700000018f04300197000300000041035500020000000103550000018f0030019d000100000000001f0000000101200190000000540000c13d0000008001000039000000400010043f0000000001000031000000040110008c0000008d0000413d0000000201000367000000000101043b000000e001100270000001940210009c000000ce0000613d000001950210009c000000f90000613d000001960210009c0000012c0000613d000001970210009c0000014a0000613d000001980210009c000001610000613d000001990210009c000001d80000613d0000019a0210009c0000029b0000613d0000019b0210009c000002bc0000613d0000019c0210009c000002d40000613d0000019d0210009c000002f30000613d0000019e0210009c000003120000613d0000019f0210009c000003450000613d000001a00210009c000003940000613d000001a10110009c0000008d0000c13d0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000200310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d00000004010000390000000201100367000000000101043b000001ad02100197000000000221004b0000008d0000c13d0000000102000039000001ae0310009c0000004e0000613d000001af0310009c0000004e0000613d000001b00110009c00000000020000190000000102006039000000010120018f000000800010043f000000800100003900000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d0000000001000031000000bf02100039000000200300008a000000000232016f0000009f0320008c000000640000213d000001aa0100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019063704ef0000040f000000400020043f0000001f0210018f00000002030003670000000504100272000000720000613d00000000050000190000000506500210000000000763034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b0000006a0000413d000000000520004c000000810000613d0000000504400210000000000343034f0000000302200210000000a004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f00000000002404350000019002000041000000200310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c000000900000613d00000000010000190000000002000019063704ef0000040f000000a00300043d0000001201000039000000800010043f000000010100008a000000000213013f000000000100041a000000000221004b0000009f0000a13d000001aa0100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019063704ef0000040f0000000001310019000000000010041b0000000001000411000800000001001d00000000001004350000000101000039000600000001001d000000200010043f00000040020000390000000001000019000700000003001d063704bc0000040f000000000201041a00000007030000290000000002320019000000000021041b000000400100043d00000000003104350000018f0200004100000000030004140000018f0430009c00000000030280190000018f0410009c00000000010280190000004001100210000000c002300210000000000112019f00000191011001c70000800d0200003900000003030000390000019204000041000000000500001900000008060000290637062d0000040f00000001012001900000008d0000613d000000800100043d000001400000044300000160001004430000002001000039000001000010044300000006010000290000012000100443000001000100003900000080020000390000019303000041063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000400310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d063705330000040f000800000001001d0637053c0000040f0000000802000029000001a20220019700000000002004350000000202000039000000200020043f000700000001001d0000004002000039000800000002001d0000000001000019063704bc0000040f0000000702000029000001a2022001970000000000200435000000200010043f00000000010000190000000802000029063704bc0000040f000000000201041a000000400100043d000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000000310004c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d0000000401000039000600000001001d000000000101041a000700000001001d000000400200043d000800000002001d063704f80000040f0000000703000029000000080700002900000000001704350000000102300190000003c80000c13d000001000200008a000000000223016f00000020037000390000000000230435000000000110004c00000020020000390000000002006019000000200220003900000000010700190637050a0000040f0000002001000039000000400200043d000700000002001d0000000000120435000000200220003900000008010000290637051e0000040f0000000703000029000000000231004900000000010300190000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000400310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d063705330000040f00000024020000390000000202200367000000000302043b00000000020100190000000001000411063705a80000040f0000000102000039000000400100043d000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000000310004c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d000000400100043d000000000200041a000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000600310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d00000002010003670000000402100370000000000302043b000001a20230009c0000008d0000213d0000002402100370000000000402043b000001a20240009c0000008d0000213d000500000004001d0000004401100370000000000101043b000800000001001d00000000003004350000000201000039000400000001001d000000200010043f0000004002000039000600000002001d0000000001000019000700000003001d063704bc0000040f0000000002000411000300000002001d0000000000200435000000200010043f00000000010000190000000602000029063704bc0000040f000000000301041a000000010100008a000000000113004b000001a90000613d0000000801000029000000000113004b000000980000413d000000070100002900000000001004350000000401000029000000200010043f0000004002000039000400000002001d0000000001000019000600000003001d063704bc0000040f00000003020000290000000000200435000000200010043f00000000010000190000000402000029063704bc0000040f000000080200002900000006030000290000000002230049000000000021041b000000070100002900000000001004350000000101000039000600000001001d000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a0000000803000029000000000332004b000000980000413d00000008030000290000000002320049000000000021041b000000050100002900000000001004350000000601000029000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a00000008030000290000000002320019000000000021041b000000400100043d00000000003104350000018f0200004100000000030004140000018f0430009c00000000030280190000018f0410009c00000000010280190000004001100210000000c002300210000000000112019f00000191011001c70000800d0200003900000003030000390000019204000041000000070500002900000005060000290637062d0000040f00000001012001900000008d0000613d0000038e0000013d0000000001000416000000000110004c0000008d0000c13d0000000001000031000000040210008a0000019003000041000000a00420008c000000000400001900000000040340190000019002200197000000000520004c000000000300a019000001900220009c00000000020400190000000002036019000000000220004c0000008d0000c13d00000002020003670000000403200370000000000903043b000001a20390009c0000008d0000213d0000002403200370000000000a03043b000001a203a0009c0000008d0000213d0000006403200370000000000c03043b0000004403200370000000000b03043b0000008403200370000000000303043b000001a60430009c0000008d0000213d00000023043000390000019005000041000000000614004b0000000006000019000000000605801900000190071001970000019004400197000000000874004b0000000005008019000000000474013f000001900440009c00000000040600190000000004056019000000000440004c0000008d0000c13d0000000404300039000000000242034f000000000402043b000001a60240009c0000008d0000213d00000024033000390000000002340019000000000112004b0000008d0000213d000300000003001d000800000004001d00040000000b001d00050000000a001d000600000009001d000001a30100004100000000001004390000800b01000039000000040200003900070000000c001d063704d30000040f0000000704000029000000000141004b000003c30000213d000000060100002900000005020000290000000403000029063705d60000040f00000008020000290000003f02200039000000200300008a000100000003001d000000000232016f000200000001001d000000400300043d0000000001230019000700000003001d000000000231004b00000000020000190000000102004039000001a60310009c0000005d0000213d00000001022001900000005d0000c13d000000400010043f00000008040000290000001f0240018f000000070100002900000000004104350000002001100039000000030300002900000002033003670000000504400272000002470000613d000000000500001900000005065002100000000007610019000000000663034f000000000606043b00000000006704350000000105500039000000000645004b0000023f0000413d000000000520004c000002560000613d0000000504400210000000000343034f00000000044100190000000302200210000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f000000000024043500000008020000290000000002210019000000000002043500000007020000290000000002020433000000410220008c000002620000c13d000000070200002900000040022000390000000002020433000001a70320009c000004300000a13d000000400300043d000800000003001d0000004401300039000000400200003900000000002104350000002002300039000001a801000041000300000002001d0000000000120435000000240130003900000002020000290000000000210435000000640230003900000007010000290637051e0000040f00000008030000290000000001310049000000200210008a00000000002304350000001f011000390000000102000029000000000221016f00000000040300190000000001320019000000000221004b00000000020000190000000102004039000001a60310009c0000005d0000213d00000001022001900000005d0000c13d000000400010043f000000010100003900000000020004140000000603000029000000040330008c0000028e0000613d000000000404043300000000010200190000000602000029000000030300002900000000050000190000000006000019063704850000040f00000060020000390000000103000032000004560000c13d000000000110004c0000042b0000613d0000000001020433000000200110008c0000042b0000c13d00000020012000390000000001010433000001a80110009c0000044e0000613d0000042b0000013d0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000000310004c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d000000400100043d000800000001001d000001a501000041000000000010043900000000010004120000000400100443000000240000044300008005010000390000004402000039063704d30000040f000000ff0210018f0000000801000029000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000000310004c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d063705450000040f000000400300043d0000000000130435000000200200003900000000010300190000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000200310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d063705330000040f000001a20110019700000000001004350000000101000039000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a000000400100043d000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000200310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d063705330000040f000001a20110019700000000001004350000000301000039000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a000000400100043d000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000000310004c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d0000000501000039000600000001001d000000000101041a000700000001001d000000400200043d000800000002001d063704f80000040f0000000703000029000000080700002900000000001704350000000102300190000003d50000c13d000001000200008a000000000223016f00000020037000390000000000230435000000000110004c00000020020000390000000002006019000000200220003900000000010700190637050a0000040f0000002001000039000000400200043d000700000002001d0000000000120435000000200220003900000008010000290637051e0000040f0000000703000029000000000231004900000000010300190000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000400310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d00000002010003670000000402100370000000000302043b000001a20230009c0000008d0000213d000700000003001d0000002401100370000000000101043b000800000001001d0000000001000411000600000001001d00000000001004350000000101000039000500000001001d000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a00000008030000290000000004030019000000000332004b000000980000413d0000000002420049000000000021041b000000070100002900000000001004350000000501000029000000200010043f00000040020000390000000001000019063704bc0000040f000000000201041a00000008030000290000000002320019000000000021041b000000400100043d00000000003104350000018f0200004100000000030004140000018f0430009c00000000030280190000018f0410009c00000000010280190000004001100210000000c002300210000000000112019f00000191011001c70000800d0200003900000003030000390000019204000041000000060500002900000007060000290637062d0000040f00000001012001900000008d0000613d000000400100043d0000000102000039000000000021043500000020020000390000000003000019063704e50000040f0000000001000416000000000110004c0000008d0000c13d000000040100008a00000000011000310000019002000041000000e00310008c000000000300001900000000030240190000019001100197000000000410004c000000000200a019000001900110009c00000000010300190000000001026019000000000110004c0000008d0000c13d00000002010003670000000402100370000000000302043b000001a20230009c0000008d0000213d0000002402100370000000000402043b000001a20240009c0000008d0000213d0000006402100370000000000602043b0000004402100370000000000202043b0000008401100370000000000501043b000000ff0150008c0000008d0000213d000400000005001d000500000002001d000600000004001d000700000003001d000001a30100004100000000001004390000800b010000390000000402000039000800000006001d063704d30000040f0000000804000029000000000141004b000003e20000a13d000000400100043d000001ab0200004100000000002104350000000402000039063704ef0000040f00000006020000290000000000200435000001ac0300004100000020047000390000000002000019000000000512004b0000011d0000813d0000000005240019000000000603041a000000000065043500000020022000390000000103300039000003cd0000013d00000006020000290000000000200435000001a40300004100000020047000390000000002000019000000000512004b000003360000813d0000000005240019000000000603041a000000000065043500000020022000390000000103300039000003da0000013d000000070100002900000006020000290000000503000029063705d60000040f0000000202000367000000a403200370000000000403043b000000c402200370000000000202043b000000400300043d00000060053000390000000000250435000000400230003900000000004204350000002002300039000000040400002900000000004204350000000000130435000000000000043500000000010004140000000102000039000000800400003900000020060000390000000005000019063704850000040f000000000110004c0000041d0000c13d0000000302000367000000400100043d00000001040000310000001f0340018f00000005044002720000040c0000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000004040000413d000000000530004c0000041b0000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f00000000002404350000000102000031063704ef0000040f0000000001000433000001a2031001970000000701000029000000000210004c0000042b0000613d000000000213004b0000042b0000c13d00000006020000290000000503000029063705a80000040f000000400100043d00000000020000190000000003000019063704e50000040f000000400100043d000001a90200004100000000002104350000000402000039063704ef0000040f0000000703000029000000600330003900000000040304330000000001010433000000400300043d0000006005300039000000000025043500000040023000390000000000120435000000f8014002700000002002300039000000000012043500000002010000290000000000130435000000000000043500000000010004140000000102000039000000800400003900000020060000390000000005000019063704850000040f000000000110004c000003fd0000613d0000000001000433000001a2011001970000000602000029000000000221004b000002620000c13d000000000110004c000002620000613d000000060100002900000005020000290000000403000029063705a80000040f000000400100043d00000000020000190000000003000019063704e50000040f000001a60230009c0000005d0000213d0000003f023000390000000104000029000000000442016f000000400200043d0000000004420019000000000524004b00000000050000190000000105004039000001a60640009c0000005d0000213d00000001055001900000005d0000c13d000000400040043f00000000003204350000002003200039000000030400036700000001060000310000001f0560018f0000000506600272000004750000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b0000046d0000413d000000000750004c000002910000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f0000000000430435000002910000013d0002000000000002000200000006001d000100000005001d0000018f050000410000018f0630009c000000000305801900000040033002100000018f0640009c00000000040580190000006004400210000000000334019f0000018f0410009c0000000001058019000000c001100210000000000113019f063706320000040f0000000109000029000000000301001900000060033002700000018f033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000004a80000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000004a00000413d000000010220018f000000000640004c000004b80000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d0000018f030000410000018f0410009c000000000103801900000040011002100000018f0420009c00000000020380190000006002200210000000000112019f00000000020004140000018f0420009c0000000002038019000000c002200210000000000112019f000001b1011001c70000801002000039063706320000040f0000000102200190000004d00000613d000000000101043b000000000001042d00000000010000190000000002000019063704ef0000040f00000000030100190000018f0100004100000000040004140000018f0540009c0000000001044019000000c00110021000000060022002100000000001120019000001b2011000410000000002030019063706320000040f0000000102200190000004e20000613d000000000101043b000000000001042d00000000010000190000000002000019063704ef0000040f0000018f040000410000018f0510009c0000000001048019000000400110021000000000013100190000018f0320009c000000000204801900000060022002100000000001210019000006380001042e0000018f030000410000018f0420009c00000000020380190000018f0410009c000000000103801900000040011002100000006002200210000000000112019f0000063900010430000000010210019000000001011002700000007f0310018f00000000010360190000001f0310008c00000000030000190000000103002039000000010330018f000000000232004b000005030000c13d000000000001042d000001aa0100004100000000001004350000002201000039000000040010043f00000024020000390000000001000019063704ef0000040f0000001f02200039000000200300008a000000000232016f0000000001120019000000000221004b00000000020000190000000102004039000001a60310009c000005170000213d0000000102200190000005170000c13d000000400010043f000000000001042d000001aa0100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019063704ef0000040f0000000003010433000000000032043500000020022000390000000004000019000000000534004b0000052a0000813d00000000054200190000002004400039000000000614001900000000060604330000000000650435000005220000013d000000000134004b0000052e0000a13d000000000132001900000000000104350000001f01300039000000200300008a000000000131016f0000000001120019000000000001042d00000004010000390000000201100367000000000101043b000001b30210009c000005390000813d000000000001042d00000000010000190000000002000019063704ef0000040f00000024010000390000000201100367000000000101043b000001b30210009c000005420000813d000000000001042d00000000010000190000000002000019063704ef0000040f0003000000000002000001b40100004100000000001004390000800b010000390000000402000039000300000002001d063704d30000040f0000000602000039000000000202041a000000000121004b000005530000c13d0000000701000039000000000101041a000005940000013d0000000301000029000000000101041a000100000001001d000000400200043d000200000002001d063704f80000040f000000010400002900000002070000290000000002010019000000000027043500000020017000390000000103400190000005950000c13d000001000300008a000000000334016f0000000000310435000000000220004c000000200300003900000000030060190000003f02300039000000200300008a000000000332016f0000000002730019000000000332004b00000000030000190000000103004039000001a60420009c000005a10000213d0000000103300190000005a10000c13d000000400020043f0000000002070433063704bc0000040f000000400300043d000300000003001d000000400230003900000000001204350000006001300039000001b50200004100000000002104350000002002300039000001b601000041000200000002001d0000000000120435000001b40100004100000000001004390000800b010000390000000402000039063704d30000040f0000000304000029000000a00240003900000000030004100000000000320435000000800240003900000000001204350000000002040019000000a0010000390000000000120435000001b70120009c000005a10000213d000000c001200039000000400010043f00000000020204330000000201000029063704bc0000040f000000000001042d00000003030000290000000000300435000001ac040000410000000003000019000000000523004b000005660000813d0000000005310019000000000604041a000000000065043500000020033000390000000104400039000005990000013d000001aa0100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019063704ef0000040f0004000000000002000200000003001d000300000002001d000001a201100197000400000001001d00000000001004350000000201000039000000200010043f0000004002000039000100000002001d0000000001000019063704bc0000040f0000000302000029000001a202200197000300000002001d0000000000200435000000200010043f00000000010000190000000102000029063704bc0000040f0000000202000029000000000021041b000000400100043d00000000002104350000018f0200004100000000030004140000018f0430009c00000000030280190000018f0410009c00000000010280190000004001100210000000c002300210000000000112019f00000191011001c70000800d020000390000000303000039000001b804000041000000040500002900000003060000290637062d0000040f0000000101200190000005d30000613d000000000001042d00000000010000190000000002000019063704ef0000040f0005000000000002000200000004001d000300000003001d000400000002001d000500000001001d063705450000040f0000000502000029000001a202200197000500000002001d00000000002004350000000302000039000000200020043f000100000001001d00000040020000390000000001000019063704bc0000040f000000000201041a000000010300008a000000000332004b000006260000613d0000000103200039000000000031041b000000400300043d000000c00130003900000002040000290000000000410435000000a00130003900000000002104350000008001300039000000030200002900000000002104350000000401000029000001a20110019700000060023000390000000000120435000000400130003900000005020000290000000000210435000000c00100003900000000001304350000002001300039000001b9020000410000000000210435000001ba0230009c0000061f0000813d000000e002300039000400000002001d000000400020043f0000000002030433000500000003001d063704bc0000040f00000005020000290000010003200039000001bb0200004100000000002304350000000502000029000001020220003900000001040000290000000000420435000000050400002900000122024000390000000000120435000000040200002900000042010000390000000000120435000001bc0140009c0000061f0000213d0000016001400039000000400010043f00000000020204330000000001030019063704bc0000040f000000000001042d000001aa0100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019063704ef0000040f000001aa0100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019063704ef0000040f00000630002104210000000102000039000000000001042d00000000020000190000062f0000013d00000635002104230000000102000039000000000001042d0000000002000019000006340000013d0000063700000432000006380001042e00000639000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff80000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000020000000000000000000000000ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dd62ed3e0000000000000000000000000000000000000000000000000000000006fdde0300000000000000000000000000000000000000000000000000000000095ea7b30000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd000000000000000000000000000000000000000000000000000000002c0198cc00000000000000000000000000000000000000000000000000000000313ce567000000000000000000000000000000000000000000000000000000003644e5150000000000000000000000000000000000000000000000000000000070a08231000000000000000000000000000000000000000000000000000000007ecebe000000000000000000000000000000000000000000000000000000000095d89b4100000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000d505accf0000000000000000000000000000000000000000000000000000000001ffc9a7000000000000000000000000ffffffffffffffffffffffffffffffffffffffff796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d95539132036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0310ab089e4439a4c15d089f94afb7896ff553aecb10793d0ab882de59d99a32e000000000000000000000000000000000000000000000000ffffffffffffffff7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a01626ba7e000000000000000000000000000000000000000000000000000000008baa579f000000000000000000000000000000000000000000000000000000004e487b7100000000000000000000000000000000000000000000000000000000203d82d8000000000000000000000000000000000000000000000000000000008a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19bffffffff0000000000000000000000000000000000000000000000000000000001ffc9a700000000000000000000000000000000000000000000000000000000d505accf000000000000000000000000000000000000000000000000000000002c0198cc000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000020000020000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000009a8a0592ac89c5ad3bc6df8224c17b485976f597df104ee20d0df415241f670bc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f000000000000000000000000000000000000000000000000ffffffffffffff3f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9000000000000000000000000000000000000000000000000ffffffffffffff201901000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fffffffffffffe9f";

type TestERC20Permit2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20Permit2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20Permit2__factory extends ContractFactory {
  constructor(...args: TestERC20Permit2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20Permit2> {
    return super.deploy(
      _totalSupply,
      overrides || {}
    ) as Promise<TestERC20Permit2>;
  }
  override getDeployTransaction(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totalSupply, overrides || {});
  }
  override attach(address: string): TestERC20Permit2 {
    return super.attach(address) as TestERC20Permit2;
  }
  override connect(signer: Signer): TestERC20Permit2__factory {
    return super.connect(signer) as TestERC20Permit2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Permit2Interface {
    return new utils.Interface(_abi) as TestERC20Permit2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20Permit2 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20Permit2;
  }
}