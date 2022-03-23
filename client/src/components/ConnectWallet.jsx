import React from "react";

const ConnectWallet = (props) => {
  return (
    <button
      type="button"
      onClick={props.handleConnect}
      className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
    >
      <p className="text-white text-base font-semibold">Connect Wallet</p>
    </button>
  );
};

export default ConnectWallet;
