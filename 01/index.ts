

function filterGifts(gifts:string[]):string[] {
    const giftsOk = gifts.filter(gift => !gift.includes('#'))
    return giftsOk
}
