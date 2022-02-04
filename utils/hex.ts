import { AbiCoder } from "@ethersproject/abi";
import { BigNumberish } from "@ethersproject/bignumber";
import { arrayify } from "@ethersproject/bytes";
import { keccak256 } from "@ethersproject/keccak256";

export const createTxHash = (
  daoAddress: string,
  target: string,
  data: string,
  value: BigNumberish,
  nonce: BigNumberish,
  timestamp: BigNumberish,
  chainId: BigNumberish
) =>
  arrayify(
    keccak256(
      new AbiCoder().encode(
        [
          "address",
          "address",
          "bytes",
          "uint256",
          "uint256",
          "uint256",
          "uint256",
        ],
        [daoAddress, target, data, value, nonce, timestamp, chainId]
      )
    )
  );
