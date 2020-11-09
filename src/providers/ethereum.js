import Bus from '../infrastructure/bus';
const Web3 = require("web3");

const ethEnabled = () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
        console.log('connected');
        return true;
    }
    console.error('not connected');
    return false;
}

let ethereum = window.ethereum;

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

// Normally, we would recommend the 'eth_chainId' RPC method, but it currently
// returns incorrectly formatted chain ID values.
let currentChainId = ethereum.chainId;

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;

ethereum
    .request({ method: 'eth_accounts' })
    .then(handleAccountsChanged)
    .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
    });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.
ethereum.on('accountsChanged', handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
async function handleAccountsChanged(accounts) {
    await ethEnabled();

    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
        Bus.dispatch({
            name: 'NoAccountSelected'
        })
    } else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];

        Bus.dispatch({
            name: 'SelectedAccount',
            account: accounts[0]
        })
    }
}

export default {
    ethereum : ethereum
}