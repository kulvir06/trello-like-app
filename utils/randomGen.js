const boardIDs = [];
module.exports = () => {
    while(true){
        const newRandomNumber = Math.random().toString().substring(0,7);
        const value = boardIDs.find((boardID) => boardID===newRandomNumber );
        
        if(typeof value != 'undefined'  ) console.log('retry ID Generation');
        else { boardIDs.push(newRandomNumber); return newRandomNumber; } 
    }
}