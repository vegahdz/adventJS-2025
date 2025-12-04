type Gift = {
    toy:string,
    quantity:number
}


function manufactureGifts(giftsToProduce: Gift[]): string[] {

    if(giftsToProduce.length === 0) return []

    const toysList:string[] = []

    giftsToProduce.forEach(({toy, quantity}) => {

        if (quantity > 0) {
            for (let i = 0; i < quantity; i++) {
                toysList.push(toy)
            }
        }

    });

    return toysList
}
