import React from 'react';

function SendNotifications() {
    // ... code existant ...

    const sendTransaction = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const fromAddress = accounts[0];
            const toAddress = '0x00270677B33bdDA535959C61DCB4f33d0ef5Fcf4';
            const amountInEther = '0.001';

            const transactionParameters = {
                to: toAddress,
                from: fromAddress,
                value: (parseFloat(amountInEther) * 10**18).toString(16), // Convert to wei
            };

            try {
                await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                });
                alert('Transaction envoyée avec succès !');
            } catch (error) {
                console.error('Erreur lors de l\'envoi de la transaction:', error);
            }
        } else {
            alert('Veuillez installer MetaMask !');
        }
    };

    return (
        <div>
            {/* ... code existant ... */}
            <button className="text-white bg-black rounded-3xl py-1 px-3 h-max" onClick={sendTransaction}>Buy</button>
            {/* ... code existant ... */}
        </div>
    );
}

export default SendNotifications;
