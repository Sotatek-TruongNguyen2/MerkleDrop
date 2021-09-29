/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016d8380380620016d88339810160408190526200003491620001b9565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000273565b828054620000769062000220565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c6200025d565b6040516020601f8401601f19168201810183811183821017156200016457620001646200025d565b60405283825285840181018710156200017b578485fd5b8492505b838310156200019e57858301810151828401820152918201916200017f565b83831115620001af57848185840101525b5095945050505050565b60008060408385031215620001cc578182fd5b82516001600160401b0380821115620001e3578384fd5b620001f1868387016200010e565b9350602085015191508082111562000207578283fd5b5062000216858286016200010e565b9150509250929050565b6002810460018216806200023557607f821691505b602082108114156200025757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61145580620002836000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101b8578063b88d4fde146101cb578063c87b56dd146101de578063e985e9c5146101f1576100df565b80636352211e1461017d57806370a082311461019057806395d89b41146101b0576100df565b8063095ea7b3116100bd578063095ea7b31461014257806323b872dd1461015757806342842e0e1461016a576100df565b806301ffc9a7146100e457806306fdde031461010d578063081812fc14610122575b600080fd5b6100f76100f2366004610db5565b610204565b6040516101049190610eb0565b60405180910390f35b61011561027e565b6040516101049190610ebb565b610135610130366004610ded565b610310565b6040516101049190610e60565b610155610150366004610d8c565b61035c565b005b610155610165366004610c4b565b6103f4565b610155610178366004610c4b565b61042c565b61013561018b366004610ded565b610447565b6101a361019e366004610bff565b61047c565b60405161010491906112e2565b6101156104c0565b6101556101c6366004610d52565b6104cf565b6101556101d9366004610c86565b61059d565b6101156101ec366004610ded565b6105dc565b6100f76101ff366004610c19565b61065f565b60006001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000148061026757506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061027657506102768261068d565b90505b919050565b60606000805461028d9061135a565b80601f01602080910402602001604051908101604052809291908181526020018280546102b99061135a565b80156103065780601f106102db57610100808354040283529160200191610306565b820191906000526020600020905b8154815290600101906020018083116102e957829003601f168201915b5050505050905090565b600061031b826106bf565b6103405760405162461bcd60e51b815260040161033790611122565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061036782610447565b9050806001600160a01b0316836001600160a01b0316141561039b5760405162461bcd60e51b815260040161033790611228565b806001600160a01b03166103ad6106dc565b6001600160a01b031614806103c957506103c9816101ff6106dc565b6103e55760405162461bcd60e51b81526004016103379061100b565b6103ef83836106e0565b505050565b6104056103ff6106dc565b8261075b565b6104215760405162461bcd60e51b815260040161033790611285565b6103ef8383836107e0565b6103ef8383836040518060200160405280600081525061059d565b6000818152600260205260408120546001600160a01b0316806102765760405162461bcd60e51b8152600401610337906110c5565b60006001600160a01b0382166104a45760405162461bcd60e51b815260040161033790611068565b506001600160a01b031660009081526003602052604090205490565b60606001805461028d9061135a565b6104d76106dc565b6001600160a01b0316826001600160a01b031614156105085760405162461bcd60e51b815260040161033790610f88565b80600560006105156106dc565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556105596106dc565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516105919190610eb0565b60405180910390a35050565b6105ae6105a86106dc565b8361075b565b6105ca5760405162461bcd60e51b815260040161033790611285565b6105d68484848461091a565b50505050565b60606105e7826106bf565b6106035760405162461bcd60e51b8152600401610337906111cb565b600061060d61094d565b9050600081511161062d5760405180602001604052806000815250610658565b806106378461095f565b604051602001610648929190610e31565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061072282610447565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610766826106bf565b6107825760405162461bcd60e51b815260040161033790610fbf565b600061078d83610447565b9050806001600160a01b0316846001600160a01b031614806107c85750836001600160a01b03166107bd84610310565b6001600160a01b0316145b806107d857506107d8818561065f565b949350505050565b826001600160a01b03166107f382610447565b6001600160a01b0316146108195760405162461bcd60e51b81526004016103379061116e565b6001600160a01b03821661083f5760405162461bcd60e51b815260040161033790610f2b565b61084a8383836103ef565b6108556000826106e0565b6001600160a01b038316600090815260036020526040812080546001929061087e908490611317565b90915550506001600160a01b03821660009081526003602052604081208054600192906108ac9084906112eb565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6109258484846107e0565b61093184848484610aae565b6105d65760405162461bcd60e51b815260040161033790610ece565b60408051602081019091526000815290565b6060816109a0575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610279565b8160005b81156109ca57806109b481611395565b91506109c39050600a83611303565b91506109a4565b60008167ffffffffffffffff8111156109f357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610a1d576020820181803683370190505b5090505b84156107d857610a32600183611317565b9150610a3f600a866113b0565b610a4a9060306112eb565b60f81b818381518110610a6d57634e487b7160e01b600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610aa7600a86611303565b9450610a21565b6000610ac2846001600160a01b0316610be2565b15610bd757836001600160a01b031663150b7a02610ade6106dc565b8786866040518563ffffffff1660e01b8152600401610b009493929190610e74565b602060405180830381600087803b158015610b1a57600080fd5b505af1925050508015610b4a575060408051601f3d908101601f19168201909252610b4791810190610dd1565b60015b610ba4573d808015610b78576040519150601f19603f3d011682016040523d82523d6000602084013e610b7d565b606091505b508051610b9c5760405162461bcd60e51b815260040161033790610ece565b805181602001fd5b6001600160e01b0319167f150b7a02000000000000000000000000000000000000000000000000000000001490506107d8565b506001949350505050565b3b151590565b80356001600160a01b038116811461027957600080fd5b600060208284031215610c10578081fd5b61065882610be8565b60008060408385031215610c2b578081fd5b610c3483610be8565b9150610c4260208401610be8565b90509250929050565b600080600060608486031215610c5f578081fd5b610c6884610be8565b9250610c7660208501610be8565b9150604084013590509250925092565b60008060008060808587031215610c9b578081fd5b610ca485610be8565b93506020610cb3818701610be8565b935060408601359250606086013567ffffffffffffffff80821115610cd6578384fd5b818801915088601f830112610ce9578384fd5b813581811115610cfb57610cfb6113f0565b604051601f8201601f1916810185018381118282101715610d1e57610d1e6113f0565b60405281815283820185018b1015610d34578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610d64578182fd5b610d6d83610be8565b915060208301358015158114610d81578182fd5b809150509250929050565b60008060408385031215610d9e578182fd5b610da783610be8565b946020939093013593505050565b600060208284031215610dc6578081fd5b813561065881611406565b600060208284031215610de2578081fd5b815161065881611406565b600060208284031215610dfe578081fd5b5035919050565b60008151808452610e1d81602086016020860161132e565b601f01601f19169290920160200192915050565b60008351610e4381846020880161132e565b835190830190610e5781836020880161132e565b01949350505050565b6001600160a01b0391909116815260200190565b60006001600160a01b03808716835280861660208401525083604083015260806060830152610ea66080830184610e05565b9695505050505050565b901515815260200190565b6000602082526106586020830184610e05565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527f63656976657220696d706c656d656e7465720000000000000000000000000000606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460408201527f7265737300000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560408201527f726f206164647265737300000000000000000000000000000000000000000000606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560408201527f7200000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60408201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606082015260800190565b90815260200190565b600082198211156112fe576112fe6113c4565b500190565b600082611312576113126113da565b500490565b600082821015611329576113296113c4565b500390565b60005b83811015611349578181015183820152602001611331565b838111156105d65750506000910152565b60028104600182168061136e57607f821691505b6020821081141561138f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156113a9576113a96113c4565b5060010190565b6000826113bf576113bf6113da565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461141c57600080fd5b5056fea2646970667358221220cf830a31ecb9b7e7efd8f8adf38a772747b830248620dbc9e57f450b91e64e4864736f6c63430008000033";
