/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // mySidebar: [{type: 'autogenerated', dirName: '.'}],

  mySidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Kick Start your journey in Metaverse!',
        keywords: ['started'],
      },
      items: [
        'getting-started/overview', 
        'getting-started/introduction'],
    },
    {
      type: 'category',
      label: 'Klaytn Contracts',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'klaytn-contracts/overview',
        {
          type: 'category',
          label: 'Fungible Token',
          collapsed: true,
          items: [
            'klaytn-contracts/kip-7/sdks-and-tutorials',
            'klaytn-contracts/kip-7/introduction'],
        },
        {
          type: 'category',
          label: 'Non Fungible Token(NFT)',
          collapsed: true,
          items: [
            'klaytn-contracts/kip-17/introduction',
            'klaytn-contracts/kip-17/sdks-and-tutorials'],
        },
        {
          type: 'category',
          label: 'Multi Token',
          collapsed: true,
          items: [
            'klaytn-contracts/kip-37/introduction',
            'klaytn-contracts/kip-37/sdks-and-tutorials'],
        },
        {
          type: 'category',
          label: 'DAO Contracts',
          collapsed: true,
          items: ['klaytn-contracts/dao-contracts/introduction']
        },
        'klaytn-contracts/tools-and-sdks']
    },
    {
      type: 'category',
      label: 'Dynamic NFTs',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'dynamic-nfts/dnft-introduction',
        'dynamic-nfts/dnft-usecase',
        'dynamic-nfts/tutorial'],
    },
    {
      type: 'category',
      label: 'Gaming SDKs',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'game-based-sdk/overview',
        {
          type: 'category',
          label: 'ChainSafe SDK',
          collapsed: true,
          items: [
            'game-based-sdk/chainsafe/overview',
            'game-based-sdk/chainsafe/installation',
            'game-based-sdk/chainsafe/before-you-start',
            'game-based-sdk/chainsafe/create-a-new-unity-project',
            'game-based-sdk/chainsafe/custom-call',
            'game-based-sdk/chainsafe/custom-interaction-with-login',
            'game-based-sdk/chainsafe/how-to-use-kip7',
            'game-based-sdk/chainsafe/how-to-use-kip17',
            'game-based-sdk/chainsafe/how-to-use-kip37'],
        }],
    },
    {
      type: 'category',
      label: 'Decentralized Storage',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'decentralized-storage/overview',
        'decentralized-storage/usecase',
        {
          type: 'category',
          label: 'IPFS',
          collapsed: true,
          items: [
            'decentralized-storage/ipfs',
            'decentralized-storage/tutorial',]
        }
        ],
    }
  ],
};

module.exports = sidebars;
